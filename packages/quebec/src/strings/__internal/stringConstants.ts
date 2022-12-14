export const digit = '\\d'

export const whitespace = '\\s\\uFEFF\\xA0'

export const highSurrogate = '\\uD800-\\uDBFF'

export const lowSurrogate = '\\uDC00-\\uDFFF'

export const diacriticalMark = '\\u0300-\\u036F\\u1AB0-\\u1AFF\\u1DC0-\\u1DFF\\u20D0-\\u20FF\\uFE20-\\uFE2F'

export const base =
  '\\0-\\u02FF\\u0370-\\u1AAF\\u1B00-\\u1DBF\\u1E00-\\u20CF\\u2100-\\uD7FF\\uE000-\\uFE1F\\uFE30-\\uFFFF'

export const REGEXP_COMBINING_MARKS = new RegExp(
  `([${base}]|[${highSurrogate}][${lowSurrogate}]|[${highSurrogate}](?![${lowSurrogate}])|(?:[^${highSurrogate}]|^)[${lowSurrogate}])([${diacriticalMark}]+)`,
  'g',
)

export const REGEXP_SURROGATE_PAIRS = new RegExp(`([${highSurrogate}])([${lowSurrogate}])`, 'g')

export const REGEXP_UNICODE_CHARACTER = new RegExp(
  `((?:[${base}]|[${highSurrogate}][${lowSurrogate}]|[${highSurrogate}](?![${lowSurrogate}])|(?:[^${highSurrogate}]|^)[${lowSurrogate}])(?:[${diacriticalMark}]+))|\
([${highSurrogate}][${lowSurrogate}])|\
([\\n\\r\\u2028\\u2029])|\
(.)`,
  'g',
)

export const REGEXP_WHITESPACE = new RegExp(`[${whitespace}]`)

export const REGEXP_TRIM_LEFT = new RegExp(`^[${whitespace}]+`)

export const REGEXP_TRIM_RIGHT = new RegExp(`[${whitespace}]+$`)

export const REGEXP_DIGIT = new RegExp(`^${digit}+$`)

export const REGEXP_SPECIAL_CHARACTERS = /[-[\]{}()*+!<=:?./\\^$|#,]/g

export const REGEXP_NON_LATIN = /[^A-Za-z0-9]/g
export const REGEXP_HTML_SPECIAL_CHARACTERS = /[<>&"'`]/g

export const REGEXP_CONVERSION_SPECIFICATION =
  /(%{1,2})(?:(\d+)\$)?(\+)?([ 0]|'.{1})?(-)?(\d+)?(?:\.(\d+))?([bcdiouxXeEfgGs])?/g

export const REGEXP_TRAILING_ZEROS = /\.?0+$/g

export const REGEXP_FLAGS = /[gimuy]*$/

export const REGEXP_TAG_LIST = /<([A-Za-z0-9]+)>/g

const generalPunctuationBlock = '\\u2000-\\u206F'

const nonCharacter = '\\x00-\\x2F\\x3A-\\x40\\x5B-\\x60\\x7b-\\xBF\\xD7\\xF7'

const dingbatBlock = '\\u2700-\\u27BF'

const lowerCaseLetter =
  'a-z\\xB5\\xDF-\\xF6\\xF8-\\xFF\\u0101\\u0103\\u0105\\u0107\\u0109\\u010B\\u010D\\u010F\\u0111\\u0113\\u0115\\u0117\\u0119\\u011B\\u011D\\u011F\\u0121\\u0123\\u0125\\u0127\\u0129\\u012B\\u012D\\u012F\\u0131\\u0133\\u0135\\u0137\\u0138\\u013A\\u013C\\u013E\\u0140\\u0142\\u0144\\u0146\\u0148\\u0149\\u014B\\u014D\\u014F\\u0151\\u0153\\u0155\\u0157\\u0159\\u015B\\u015D\\u015F\\u0161\\u0163\\u0165\\u0167\\u0169\\u016B\\u016D\\u016F\\u0171\\u0173\\u0175\\u0177\\u017A\\u017C\\u017E-\\u0180\\u0183\\u0185\\u0188\\u018C\\u018D\\u0192\\u0195\\u0199-\\u019B\\u019E\\u01A1\\u01A3\\u01A5\\u01A8\\u01AA\\u01AB\\u01AD\\u01B0\\u01B4\\u01B6\\u01B9\\u01BA\\u01BD-\\u01BF\\u01C6\\u01C9\\u01CC\\u01CE\\u01D0\\u01D2\\u01D4\\u01D6\\u01D8\\u01DA\\u01DC\\u01DD\\u01DF\\u01E1\\u01E3\\u01E5\\u01E7\\u01E9\\u01EB\\u01ED\\u01EF\\u01F0\\u01F3\\u01F5\\u01F9\\u01FB\\u01FD\\u01FF\\u0201\\u0203\\u0205\\u0207\\u0209\\u020B\\u020D\\u020F\\u0211\\u0213\\u0215\\u0217\\u0219\\u021B\\u021D\\u021F\\u0221\\u0223\\u0225\\u0227\\u0229\\u022B\\u022D\\u022F\\u0231\\u0233-\\u0239\\u023C\\u023F\\u0240\\u0242\\u0247\\u0249\\u024B\\u024D\\u024F'

const upperCaseLetter =
  '\\x41-\\x5a\\xc0-\\xd6\\xd8-\\xde\\u0100\\u0102\\u0104\\u0106\\u0108\\u010a\\u010c\\u010e\\u0110\\u0112\\u0114\\u0116\\u0118\\u011a\\u011c\\u011e\\u0120\\u0122\\u0124\\u0126\\u0128\\u012a\\u012c\\u012e\\u0130\\u0132\\u0134\\u0136\\u0139\\u013b\\u013d\\u013f\\u0141\\u0143\\u0145\\u0147\\u014a\\u014c\\u014e\\u0150\\u0152\\u0154\\u0156\\u0158\\u015a\\u015c\\u015e\\u0160\\u0162\\u0164\\u0166\\u0168\\u016a\\u016c\\u016e\\u0170\\u0172\\u0174\\u0176\\u0178\\u0179\\u017b\\u017d\\u0181\\u0182\\u0184\\u0186\\u0187\\u0189-\\u018b\\u018e-\\u0191\\u0193\\u0194\\u0196-\\u0198\\u019c\\u019d\\u019f\\u01a0\\u01a2\\u01a4\\u01a6\\u01a7\\u01a9\\u01ac\\u01ae\\u01af\\u01b1-\\u01b3\\u01b5\\u01b7\\u01b8\\u01bc\\u01c4\\u01c5\\u01c7\\u01c8\\u01ca\\u01cb\\u01cd\\u01cf\\u01d1\\u01d3\\u01d5\\u01d7\\u01d9\\u01db\\u01de\\u01e0\\u01e2\\u01e4\\u01e6\\u01e8\\u01ea\\u01ec\\u01ee\\u01f1\\u01f2\\u01f4\\u01f6-\\u01f8\\u01fa\\u01fc\\u01fe\\u0200\\u0202\\u0204\\u0206\\u0208\\u020a\\u020c\\u020e\\u0210\\u0212\\u0214\\u0216\\u0218\\u021a\\u021c\\u021e\\u0220\\u0222\\u0224\\u0226\\u0228\\u022a\\u022c\\u022e\\u0230\\u0232\\u023a\\u023b\\u023d\\u023e\\u0241\\u0243-\\u0246\\u0248\\u024a\\u024c\\u024e'

/**
 * Regular expression to match Unicode words
 *
 * @type {RegExp}
 * @ignore
 */
export const REGEXP_WORD = new RegExp(
  `(?:[${upperCaseLetter}][${diacriticalMark}]*)?(?:[${lowerCaseLetter}][${diacriticalMark}]*)+|\
(?:[${upperCaseLetter}][${diacriticalMark}]*)+(?![${lowerCaseLetter}])|\
[${digit}]+|\
[${dingbatBlock}]|\
[^${nonCharacter}${generalPunctuationBlock}${whitespace}]+`,
  'g',
)

export const REGEXP_LATIN_WORD =
  /[A-Z\xC0-\xD6\xD8-\xDE]?[a-z\xDF-\xF6\xF8-\xFF]+|[A-Z\xC0-\xD6\xD8-\xDE]+(?![a-z\xDF-\xF6\xF8-\xFF])|\d+/g
export const REGEXP_ALPHA = new RegExp(`^(?:[${lowerCaseLetter}${upperCaseLetter}][${diacriticalMark}]*)+$`)

export const REGEXP_ALPHA_DIGIT = new RegExp(
  `^((?:[${lowerCaseLetter}${upperCaseLetter}][${diacriticalMark}]*)|[${digit}])+$`,
)

export const REGEXP_EXTENDED_ASCII = /^[\x01-\xFF]*$/
