module.exports = function(casper, scenario, vp) {
	casper.echo('onBeforeEach.js', 'INFO');
	casper.wait(50);
};
