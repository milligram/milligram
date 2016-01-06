Package.describe({
	name: 'noahvlncrt:milligram',
	summary: 'A new minimal css framework that provides an easy starting point.',
	version: '1.0.2',
	git: 'https://github.com/NoahVlncrt/milligram'
});

Package.onUse(function (api) {
	api.addFiles ([
	'dist/milligram.css'
	], 'client');
}); 