import BrowserType from './BrowserType'
import AbstractBrowserKeyAlias from './AbstractBrowserKeyAlias'

const browsers: { [BrowserKey in AbstractBrowserKeyAlias]: BrowserType[] } = {
  chrome: ['Google Chrome'],
  edge: ['Microsoft Edge'],
  firefox: ['Firefox'],
  ie: ['Internet Explorer'],
  opera: ['Opera'],
  safari: ['Safari'],
  chromium: ['Chromium'],
}

export default browsers
