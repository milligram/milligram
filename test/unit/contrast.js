const test = require('ava')
const fs = require('fs')
const path = require('path')

const WCAG_AA_NORMAL_TEXT = 4.5

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

function getProperty(body, property) {
  const regex = new RegExp(`(?:^|;)\\s*${property}\\s*:\\s*([^;]+);`)
  const match = body.match(regex)
  return match ? match[1].trim() : null
}

function hexToRgb(hex) {
  const normalized =
    hex.length === 4
      ? '#' + [...hex.slice(1)].map(c => c + c).join('')
      : hex
  const n = parseInt(normalized.replace('#', ''), 16)
  return [(n >> 16) & 255, (n >> 8) & 255, n & 255]
}

function relativeLuminance([r, g, b]) {
  const [rs, gs, bs] = [r, g, b].map(c => {
    const channel = c / 255
    return channel <= 0.03928
      ? channel / 12.92
      : Math.pow((channel + 0.055) / 1.055, 2.4)
  })
  return 0.2126 * rs + 0.7152 * gs + 0.0722 * bs
}

function contrastRatio(hexA, hexB) {
  const lA = relativeLuminance(hexToRgb(hexA))
  const lB = relativeLuminance(hexToRgb(hexB))
  const [lighter, darker] = lA > lB ? [lA, lB] : [lB, lA]
  return (lighter + 0.05) / (darker + 0.05)
}

function assertContrast(t, label, foreground, background) {
  const ratio = contrastRatio(foreground, background)
  t.true(
    ratio >= WCAG_AA_NORMAL_TEXT,
    `${label}: ${foreground} on ${background} is ${ratio.toFixed(2)}:1, below WCAG AA's ${WCAG_AA_NORMAL_TEXT}:1`,
  )
}

test('body text should meet WCAG AA contrast against white', t => {
  const body = findRule(css, 'body')
  t.truthy(body)
  assertContrast(t, 'body text', getProperty(body, 'color'), '#ffffff')
})

test('link color should meet WCAG AA contrast against white', t => {
  const a = findRule(css, 'a')
  t.truthy(a)
  assertContrast(t, 'link', getProperty(a, 'color'), '#ffffff')
})

test('link hover/focus color should meet WCAG AA contrast against white', t => {
  const aHover = findRule(css, 'a:focus')
  t.truthy(aHover)
  assertContrast(t, 'link hover/focus', getProperty(aHover, 'color'), '#ffffff')
})

test('button text should meet WCAG AA contrast against its background', t => {
  const button = findRule(css, '.button')
  t.truthy(button)
  assertContrast(
    t,
    'button text',
    getProperty(button, 'color'),
    getProperty(button, 'background-color'),
  )
})

test('button hover/focus text should meet WCAG AA contrast against its background', t => {
  const buttonHover = findRule(css, '.button:focus')
  t.truthy(buttonHover)
  assertContrast(
    t,
    'button hover/focus text',
    getProperty(buttonHover, 'color'),
    getProperty(buttonHover, 'background-color'),
  )
})
