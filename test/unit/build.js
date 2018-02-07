const test = require('ava')
const fs = require('fs')
const path = require('path')

let dist = path.join(__dirname, '../../dist')

test.before('`dist` path should be created', t => {
	t.true(fs.lstatSync(dist).isDirectory())
})

test('`milligram.css` should be created', t => {
	fs.readdirSync(dist).map(file => {
		if (file === 'milligram.css') t.is(file, 'milligram.css')
	})
})

test('`milligram.min.css` should be created', t => {
	fs.readdirSync(dist).map(file => {
		if (file === 'milligram.min.css') t.is(file, 'milligram.min.css')
	})
})

test('`milligram.css.map` should be created', t => {
	fs.readdirSync(dist).map(file => {
		if (file === 'milligram.css.map') t.is(file, 'milligram.css.map')
	})
})

test('`milligram.min.css.map` should be created', t => {
	fs.readdirSync(dist).map(file => {
		if (file === 'milligram.min.css.map') t.is(file, 'milligram.min.css.map')
	})
})
