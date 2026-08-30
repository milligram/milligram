const test = require('ava')
const fs = require('fs')
const path = require('path')

const css = fs
  .readFileSync(path.join(__dirname, '../../dist/milligram.css'), 'utf8')
  .replace(/\s+/g, ' ')

test('`.container` should have `max-width: 112.0rem`', t => {
  t.true(css.includes('.container { margin: 0 auto; max-width: 112.0rem;'))
})

test('`a` should use the primary color', t => {
  t.true(css.includes('a { color: #9b4dca; text-decoration: none; }'))
})

test('`.button` should use the primary color as its background', t => {
  t.true(
    css.includes(
      ".button, button, input[type='button'], input[type='reset'], input[type='submit'] { background-color: #9b4dca;",
    ),
  )
})
