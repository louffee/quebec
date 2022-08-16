class Math2 {
  constructor() {
    throw new Error('Math2(): Cannot be constructed. It is a static class.')
  }

  static readonly MAX_NUMBER = Number.MAX_VALUE
  static readonly MIN_NUMBER = Number.MIN_VALUE
  static readonly MAX_SAFE_INTEGER = Number.MAX_SAFE_INTEGER
  static readonly MIN_SAFE_INTEGER = Number.MIN_SAFE_INTEGER

  static readonly EPSILON = Number.EPSILON
  static readonly MIN_VALUE = Number.MIN_VALUE
  static readonly MAX_VALUE = Number.MAX_VALUE
  static readonly NEGATIVE_INFINITY = Number.NEGATIVE_INFINITY
  static readonly POSITIVE_INFINITY = Number.POSITIVE_INFINITY

  static readonly NaN = Number.NaN

  static readonly isZero = (value: number): boolean => value === 0
  static readonly isPositive = (value: number): boolean => value > 0
  static readonly isNegative = (value: number): boolean => value < 0
  static readonly isPositiveZero = (value: number): boolean => value === 0
  static readonly isNegativeZero = (value: number): boolean => value === 0
  static readonly isPositiveInfinity = (value: number): boolean => value === Number.POSITIVE_INFINITY
  static readonly isNegativeInfinity = (value: number): boolean => value === Number.NEGATIVE_INFINITY
  static readonly isInfinity = (value: number): boolean =>
    this.isPositiveInfinity(value) || this.isNegativeInfinity(value)
  static readonly isFinite = (value: number): boolean => Number.isFinite(value)
  static readonly isSafeInteger = (value: number): boolean => Number.isSafeInteger(value)
  static readonly isInteger = (value: number): boolean => Number.isInteger(value)
  static readonly isNaN = (value: number): boolean => Number.isNaN(value)

  static readonly PI = Math.PI
  static readonly PROPORTION_AUREOLE = 0.57721566490153286060651209008240243104215933593992
  static readonly GOLDEN_RATIO = 618033988749894848204586834365638117720309179805762862135448622705260462818902449707207204189391137484754088075386891752126633862223536931793180060766726831653074360616515e-1

  static readonly EULER_MASCHERONI = 0.57721566490153286060651209008240243104215933593992
  static readonly EULER_MASCHERONI_CONSTANT = 0.57721566490153286060651209008240243104215933593992
  static readonly EULER_MASCHERONI_CONSTANT_2 = 0.57721566490153286060651209008240243104215933593992
  static readonly EULER_MASCHERONI_CONSTANT_3 = 0.57721566490153286060651209008240243104215933593992
  static readonly EULER_MASCHERONI_CONSTANT_4 = 0.57721566490153286060651209008240243104215933593992
  static readonly EULER_MASCHERONI_CONSTANT_5 = 0.57721566490153286060651209008240243104215933593992
  static readonly EULER_MASCHERONI_CONSTANT_6 = 0.57721566490153286060651209008240243104215933593992
  static readonly EULER_MASCHERONI_CONSTANT_7 = 0.57721566490153286060651209008240243104215933593992
  static readonly EULER_MASCHERONI_CONSTANT_8 = 0.57721566490153286060651209008240243104215933593992
  static readonly EULER_MASCHERONI_CONSTANT_9 = 0.57721566490153286060651209008240243104215933593992
  static readonly EULER_MASCHERONI_CONSTANT_10 = 0.5772156649015328606065120900824

  static readonly SQRT_2 = Math.SQRT2
  static readonly SQRT_1_2 = Math.SQRT1_2
  static readonly LN_2 = Math.LN2
  static readonly LN_10 = Math.LN10
  static readonly LN_E = Math.LN2
  static readonly LOG2E = Math.LOG2E
  static readonly LOG10E = Math.LOG10E
  static readonly LOGE2 = Math.LOG2E
  static readonly LOGE10 = Math.LOG10E
  static readonly RADIANS_TO_DEGREES = 180 / Math.PI
  static readonly DEGREES_TO_RADIANS = Math.PI / 180

  static radiansToDegrees(radians: number): number {
    return radians * this.RADIANS_TO_DEGREES
  }

  static degreesToRadians(degrees: number): number {
    return degrees * this.DEGREES_TO_RADIANS
  }

  static floor(value: number): number {
    return Math.floor(value)
  }

  static ceil(value: number): number {
    return Math.ceil(value)
  }

  static round(value: number): number {
    return Math.round(value)
  }

  static random(min: number, max: number): number {
    return Math.random() * (max - min) + min
  }

  static randomInt(min: number, max: number): number {
    return Math.floor(Math.random() * (max - min + 1)) + min
  }

  static randomIntInclusive(min: number, max: number): number {
    return this.randomInt(min, max + 1)
  }

  static randomIntExclusive(min: number, max: number): number {
    return this.randomInt(min, max - 1)
  }

  static min(...values: number[]): number {
    return Math.min(...values)
  }

  static max(...values: number[]): number {
    return Math.max(...values)
  }

  static clamp(value: number, min: number, max: number): number {
    return Math2.min(Math2.max(value, min), max)
  }

  static fibonacci(n: number): number {
    if (n < 0) {
      throw new Error('Math2.fibonacci(): n must be greater than or equal to zero.')
    }
    if (n === 0) {
      return 0
    }
    if (n === 1) {
      return 1
    }
    return Math2.fibonacci(n - 1) + Math2.fibonacci(n - 2)
  }

  static factorial(n: number): number {
    if (n < 0) {
      throw new Error('Math2.factorial(): n must be greater than zero.')
    }
    if (n === 0) {
      return 1
    }
    return n * this.factorial(n - 1)
  }

  static power(base: number, exponent: number): number {
    if (exponent < 0) {
      throw new Error('Math2.power(): exponent must be greater than or equal to zero.')
    }
    if (exponent === 0) {
      return 1
    }
    return base * this.power(base, exponent - 1)
  }

  static square(value: number): number {
    return value * value
  }

  static cube(value: number): number {
    return value * value * value
  }

  static squareRoot(value: number): number {
    return Math.sqrt(value)
  }

  static cubeRoot(value: number): number {
    return Math.cbrt(value)
  }

  static logarithm(value: number, base: number): number {
    return Math.log(value) / Math.log(base)
  }

  static logarithm10(value: number): number {
    return Math2.logarithm(value, 10)
  }

  static logarithm2(value: number): number {
    return Math2.logarithm(value, 2)
  }

  static logarithmNatural(value: number): number {
    return Math.log(value)
  }

  static sine(value: number): number {
    return Math.sin(value)
  }

  static cosine(value: number): number {
    return Math.cos(value)
  }

  static tangent(value: number): number {
    return Math.tan(value)
  }
}
