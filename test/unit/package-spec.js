const assert = require('power-assert');
const npm = require('../../package.json');
const bower = require('../../bower.json');
const component = require('../../component.json');
const composer = require('../../composer.json');

const packages = [
	npm,
	bower,
	component,
	composer
];

describe('Package', () => {

	describe('Name', () => {

		it(`should be equal to ${npm.name}`, () => {
			packages.map((referenceValue, referenceIndex) => {
				packages.map((compareValue, compareIndex) => {
					if (referenceIndex !== compareIndex) assert(referenceValue.name, compareValue.name);
				});
			});
		});

	});

	describe('Version', () => {

		it(`should be equal to v${npm.version}`, () => {
			packages.map((referenceValue, referenceIndex) => {
				packages.map((compareValue, compareIndex) => {
					if (referenceIndex !== compareIndex) assert(referenceValue.version, compareValue.version);
				});
			});
		});

	});

	describe('Description', () => {

		it(`should be equal to ${npm.description}`, () => {
			packages.map((referenceValue, referenceIndex) => {
				packages.map((compareValue, compareIndex) => {
					if (referenceIndex !== compareIndex) assert(referenceValue.description, compareValue.description);
				});
			});
		});

	});

	describe('Homepage', () => {

		it(`should be equal to ${npm.homepage}`, () => {
			packages.map((referenceValue, referenceIndex) => {
				packages.map((compareValue, compareIndex) => {
					if (referenceIndex !== compareIndex) assert(referenceValue.homepage, compareValue.homepage);
				});
			});
		});

	});

	describe('Repository', () => {

		it(`should be equal to ${npm.repository}`, () => {
			packages.map((referenceValue, referenceIndex) => {
				packages.map((compareValue, compareIndex) => {
					if (referenceIndex !== compareIndex) assert(referenceValue.repository, compareValue.repository);
				});
			});
		});

	});

	describe('License', () => {

		it(`should be equal to ${npm.license}`, () => {
			packages.map((referenceValue, referenceIndex) => {
				packages.map((compareValue, compareIndex) => {
					if (referenceIndex !== compareIndex) assert(referenceValue.license, compareValue.license);
				});
			});
		});

	});

	describe('Author Name', () => {

		it(`should be equal to ${npm.author}`, () => {
			packages.map((referenceValue, referenceIndex) => {
				packages.map((compareValue, compareIndex) => {
					if (referenceIndex !== compareIndex) assert(referenceValue.author, compareValue.author);
				});
			});
		});

	});

	describe('Main File', () => {

		it(`should be equal to ${npm.main}`, () => {
			packages.map((referenceValue, referenceIndex) => {
				packages.map((compareValue, compareIndex) => {
					if (referenceIndex !== compareIndex) assert(referenceValue.main, compareValue.main);
				});
			});
		});

	});

	describe('Ignore', () => {

		it('should be equal', () => {
			packages.map((referenceValue, referenceIndex) => {
				packages.map((compareValue, compareIndex) => {
					if (referenceIndex !== compareIndex) assert(referenceValue.ignore, compareValue.ignore);
				});
			});
		});

	});

	describe('Keywords', () => {

		it('should be equal', () => {
			packages.map((referenceValue, referenceIndex) => {
				packages.map((compareValue, compareIndex) => {
					if (referenceIndex !== compareIndex) assert(referenceValue.keywords, compareValue.keywords);
				});
			});
		});

	});

});
