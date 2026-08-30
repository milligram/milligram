const test = require('ava')
const fs = require('fs')
const path = require('path')

const css = fs.readFileSync(
  path.join(__dirname, '../../dist/milligram.css'),
  'utf8',
)

function findRule(source, selector) {
  const ruleRegex = /([^{}]+)\{([^{}]*)\}/g
  let match

  while ((match = ruleRegex.exec(source))) {
    const selectors = match[1].split(',').map(s => s.trim())
    if (selectors.includes(selector)) return match[2]
  }

  return null
}

function hasDeclaration(body, property, value) {
  const declaration = `${property}:${value}`.replace(/\s+/g, '')
  return body.replace(/\s+/g, '').includes(`${declaration};`)
}

test('`.container` should have `max-width: 112.0rem`', t => {
  const rule = findRule(css, '.container')
  t.truthy(rule)
  t.true(hasDeclaration(rule, 'max-width', '112.0rem'))
})

test('`a` should use the primary color', t => {
  const rule = findRule(css, 'a')
  t.truthy(rule)
  t.true(hasDeclaration(rule, 'color', '#9b4dca'))
})

test('`.button` should use the primary color as its background', t => {
  const rule = findRule(css, '.button')
  t.truthy(rule)
  t.true(hasDeclaration(rule, 'background-color', '#9b4dca'))
})
