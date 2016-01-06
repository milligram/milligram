Package.describe({
	name: 'noahvlncrt:milligram',
	summary: 'A new minimal css framework that provides an easy starting point.',
	version: '1.0.4',
	git: 'https://github.com/milligram/milligram'
});

Package.onUse(function (api) {
	api.addFiles ([
	'dist/milligram.css'
	], 'client');
}); 