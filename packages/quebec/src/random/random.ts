function random(min: number = 1, max: number = 100): number {
  return Math.floor(Math.random() * (max - min + 1)) + min
}

export default random
