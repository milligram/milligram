const test = require('ava')
const npm = require('../../package.json')
const bower = require('../../bower.json')
const composer = require('../../composer.json')

const packages = [
	npm,
	bower,
	composer
]

test(`Name should be equal "${npm.name}"`, t => {
	packages.map((referenceValue, referenceIndex) => {
		packages.map((compareValue, compareIndex) => {
			if (compareValue.name.match('/')) compareValue.name = compareValue.name.split('/')[1]
			if (referenceIndex !== compareIndex) t.is(referenceValue.name, compareValue.name)
		})
	})
})

test(`Version should be equal to "v${npm.version}"`, t => {
	packages.map((referenceValue, referenceIndex) => {
		packages.map((compareValue, compareIndex) => {
			if (referenceIndex !== compareIndex) t.is(referenceValue.version, compareValue.version)
		})
	})
})

test(`Description should be equal to "${npm.description}"`, t => {
	packages.map((referenceValue, referenceIndex) => {
		packages.map((compareValue, compareIndex) => {
			if (referenceIndex !== compareIndex) t.is(referenceValue.description, compareValue.description)
		})
	})
})

test(`Homepage should be equal to "${npm.homepage}"`, t => {
	packages.map((referenceValue, referenceIndex) => {
		packages.map((compareValue, compareIndex) => {
			if (referenceIndex !== compareIndex) t.is(referenceValue.homepage, compareValue.homepage)
		})
	})
})

test(`Repository should be equal to "${npm.repository}"`, t => {
	packages.map((referenceValue, referenceIndex) => {
		packages.map((compareValue, compareIndex) => {
			if (referenceIndex !== compareIndex) t.is(referenceValue.repository, compareValue.repository)
		})
	})
})

test(`License should be equal to "${npm.license}"`, t => {
	packages.map((referenceValue, referenceIndex) => {
		packages.map((compareValue, compareIndex) => {
			if (referenceIndex !== compareIndex) t.is(referenceValue.license, compareValue.license)
		})
	})
})

test(`Author Name should be equal to "${npm.author}"`, t => {
	packages.map((referenceValue, referenceIndex) => {
		packages.map((compareValue, compareIndex) => {
			if (referenceIndex !== compareIndex) t.is(referenceValue.author, compareValue.author)
		})
	})
})

test(`Main File should be equal to "${npm.main}"`, t => {
	packages.map((referenceValue, referenceIndex) => {
		packages.map((compareValue, compareIndex) => {
			if (referenceIndex !== compareIndex) t.is(referenceValue.main, compareValue.main)
		})
	})
})

test('Ignore should be equal', t => {
	packages.map((referenceValue, referenceIndex) => {
		packages.map((compareValue, compareIndex) => {
			if (referenceIndex !== compareIndex) t.is(JSON.stringify(referenceValue.ignore), JSON.stringify(compareValue.ignore))
		})
	})
})

test('Keywords should be equal', t => {
	packages.map((referenceValue, referenceIndex) => {
		packages.map((compareValue, compareIndex) => {
			if (referenceIndex !== compareIndex) t.is(JSON.stringify(referenceValue.keywords), JSON.stringify(compareValue.keywords))
		})
	})
})

