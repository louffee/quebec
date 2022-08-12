import browsers from '../browsers'

import isGoogleChrome from '../isGoogleChrome/isGoogleChrome'
import isInternetExplorer from '../isInternetExplorer/isInternetExplorer'
import isiOSSafari from '../isiOSSafari/isiOSSafari'
import isMacOSSafari from '../isMacOSSafari/isMacOSSafari'
import isMicrosoftEdge from '../isMicrosoftEdge/isMicrosoftEdge'
import isMozillaFirefox from '../isMozillaFirefox/isMozillaFirefox'
import isOpera from '../isOpera/isOpera'

import type BrowserType from '../BrowserType'

const validationFunctions: {
  [K in BrowserType]: () => void
} = {
  'Google Chrome': isGoogleChrome,
  'Internet Explorer': isInternetExplorer,
  'Microsoft Edge': isMicrosoftEdge,
  Chromium: isGoogleChrome,
  Firefox: isMozillaFirefox,
  Opera: isOpera,
  Safari: () => isiOSSafari() || isMacOSSafari(),
}

function isRunningOnAnyOf(...browserPlatforms: BrowserType[]): boolean {
  if (browserPlatforms.length === 0) {
    return false
  }

  const flatBrowsersArray: BrowserType[] = []

  Object.values(browsers).forEach((browserPlatformsArray) => {
    flatBrowsersArray.push(...browserPlatformsArray)
  })

  return flatBrowsersArray.some((browserPlatform: BrowserType) => {
    const validate = validationFunctions[browserPlatform]

    return browserPlatforms.includes(browserPlatform) && validate()
  })
}

export default isRunningOnAnyOf
