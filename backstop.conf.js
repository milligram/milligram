'use strict'
const config = {
	viewports: [{
		name: 'phone',
		width: 320,
		height: 480
	}, {
		name: 'laptop',
		width: 1280,
		height: 800
	}],
	scenarios: [{
		label: 'Typography',
		url: 'http://localhost:3000',
		hideSelectors: [],
		removeSelectors: [],
		selectors: ['#typography .example'],
		readyEvent: null,
		delay: 500,
		misMatchThreshold: 0.1,
		onReadyScript: null,
		onBeforeScript: null
	}, {
		label: 'Blockquotes',
		url: 'http://localhost:3000',
		hideSelectors: [],
		removeSelectors: [],
		selectors: ['#blockquotes .example'],
		readyEvent: null,
		delay: 500,
		misMatchThreshold: 0.1,
		onReadyScript: null,
		onBeforeScript: null
	}, {
		label: 'Buttons',
		url: 'http://localhost:3000',
		hideSelectors: [],
		removeSelectors: [],
		selectors: ['#buttons .example'],
		readyEvent: null,
		delay: 500,
		misMatchThreshold: 0.1,
		onReadyScript: null,
		onBeforeScript: null
	}, {
		label: 'Lists',
		url: 'http://localhost:3000',
		hideSelectors: [],
		removeSelectors: [],
		selectors: ['#lists .example'],
		readyEvent: null,
		delay: 500,
		misMatchThreshold: 0.1,
		onReadyScript: null,
		onBeforeScript: null
	}, {
		label: 'Forms',
		url: 'http://localhost:3000',
		hideSelectors: [],
		removeSelectors: [],
		selectors: ['#forms .example'],
		readyEvent: null,
		delay: 500,
		misMatchThreshold: 0.1,
		onReadyScript: null,
		onBeforeScript: null
	}, {
		label: 'Tables',
		url: 'http://localhost:3000',
		hideSelectors: [],
		removeSelectors: [],
		selectors: ['#tables .example'],
		readyEvent: null,
		delay: 500,
		misMatchThreshold: 0.1,
		onReadyScript: null,
		onBeforeScript: null
	}, {
		label: 'Grids',
		url: 'http://localhost:3000',
		hideSelectors: [],
		removeSelectors: [],
		selectors: ['#grids .example'],
		readyEvent: null,
		delay: 500,
		misMatchThreshold: 0.1,
		onReadyScript: null,
		onBeforeScript: null
	}, {
		label: 'Codes',
		url: 'http://localhost:3000',
		hideSelectors: [],
		removeSelectors: [],
		selectors: ['#codes .example'],
		readyEvent: null,
		delay: 500,
		misMatchThreshold: 0.1,
		onReadyScript: null,
		onBeforeScript: null
	}, {
		label: 'Utilities',
		url: 'http://localhost:3000',
		hideSelectors: [],
		removeSelectors: [],
		selectors: ['#utilities .example'],
		readyEvent: null,
		delay: 500,
		misMatchThreshold: 0.1,
		onReadyScript: null,
		onBeforeScript: null
	}],
	paths: {
		bitmaps_reference: 'test/regression',
		bitmaps_test: 'node_modules/backstopjs/.tmp/bitmaps_test',
		casper_scripts: 'node_modules/backstopjs/.tmp/casper_scripts',
		html_report: 'node_modules/backstopjs/.tmp/html_report',
		ci_report: 'node_modules/backstopjs/.tmp/ci_report'
	},
	engine: 'phantomjs',
	report: [
		'browser',
		'CLI',
		'CI'
	],
	casperFlags: [],
	debug: false,
	port: 3002
}

module.exports = config
