module.exports = {
	viewports: [
		{ name: 'phone_v', width: 320, height: 480 },
		{ name: 'phone_h', width: 480, height: 320 },
		{ name: 'tablet_v', width: 768, height: 1024 },
		{ name: 'tablet_h', width: 1024, height: 768 },
		{ name: 'laptop', width: 1280, height: 800 },
		{ name: 'desktop', width: 1920, height: 1080 }
	],
	scenarios: [{
		label: 'Milligram | A minimalist CSS framework.',
		url: 'http://localhost:3000',
		hideSelectors: [],
		removeSelectors: ['.__bs_notify__'],
		selectors: ['body'],
		readyEvent: null,
		delay: 500,
		misMatchThreshold: 0.1,
		onBeforeScript: 'onBefore.js',
		onReadyScript: 'onReady.js'
	}],
	paths: {
		bitmaps_reference: '../../test/visual/reference',
		bitmaps_test: '.tmp',
		casper_scripts: '../../test/visual/fixtures',
		compare_data: '.tmp/compare.json'
	},
	engine: 'slimerjs',
	report: ['browser'],
	casperFlags: [],
	debug: false,
	port: 3002
}
