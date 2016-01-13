;(function() {

	'use strict';

	var i,
		$description 		= document.querySelector('.description'),
		$download 		= document.querySelector('.download'),
		$popoverLinks 	= document.querySelectorAll('[data-popover]'),
		$popovers			= document.querySelectorAll('.popover'),
		$codeSnippets 	= document.querySelectorAll('.code-content'),
		$shareButtons 	= document.querySelectorAll('.share-dialog'),
		request 			= new XMLHttpRequest(),
		entityMapObject 	= { "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': '&quot;', "'": '&#39;', "/": '&#x2F;' };

	function init() {
		for (i = 0; i < $popoverLinks.length; i++) $popoverLinks[i].addEventListener('click', openPopover);
		document.addEventListener('click', closePopover);
		buildSnippets();
		getVersion();
		googleAnalytics();
		shareDialog();
	}

	function closePopover(e) {
		for (i = 0; i < $popovers.length; i++) $popovers[i].classList.remove('popover-open');
	}

	function openPopover(e) {
		e.preventDefault();
		if (document.querySelector(this.getAttribute('href')).classList.contains('popover-open')) {
			document.querySelector(this.getAttribute('href')).classList.remove('popover-open');
		}
		else {
			closePopover();
			document.querySelector(this.getAttribute('href')).classList.add('popover-open');
		}
		e.stopImmediatePropagation();
	}

	function escapeHtml(string) {
		return String(string).replace(/[&<>"'\/]/g, function(s) {
			return entityMapObject[s];
		});
	}

	function buildSnippets() {
		for (i = 0; i < $codeSnippets.length; i++) $codeSnippets[i].innerHTML = escapeHtml($codeSnippets[i].innerHTML);
	}

	function getVersion() {
		if ($description || $download) {
			request.open('GET', '//raw.githubusercontent.com/struck-io/struck-css/master/package.json', true);
			request.onload = function() {
				if (this.status >= 200 && this.status < 400) {
					var version = JSON.parse( this.response ).version;
					if ($description) $description.innerHTML = $description.innerHTML+' <br><i><small>Currently v'+version+'</small></i>';
					$download.setAttribute('href', 'https://github.com/struck-io/struck-css/archive/v'+version+'.zip');
				}
				else {
					console.log( '// There was a connection error of some sort' );
				}
			};
			request.send();
		}
	}

	function googleAnalytics() {
		if ( window.location.hostname !== 'localhost' ) {
			(function(i,s,o,g,r,a,m){i['GoogleAnalyticsObject']=r;i[r]=i[r]||function(){
				(i[r].q=i[r].q||[]).push(arguments)},i[r].l=1*new Date();a=s.createElement(o),
				m=s.getElementsByTagName(o)[0];a.async=1;a.src=g;m.parentNode.insertBefore(a,m)
			})(window,document,'script','//www.google-analytics.com/analytics.js','ga');
			ga('create', 'UA-72205245-3', 'auto');
			ga('send', 'pageview');
		}
	}

	function shareDialog() {
		if ($shareButtons && window.innerWidth > 1200) {
			for (i = 0; i < $shareButtons.length; i++) {
				$shareButtons[i].addEventListener('click', function(e) {
					e.preventDefault();
					window.open(this.href, 'Share Dialog', 'menubar=no,toolbar=no,resizable=yes,scrollbars=yes,width=650,height=450,top='+(screen.height/2-450/2)+',left='+(screen.width/2-650/2));
				});
			}
		}
	}

	init();

}());