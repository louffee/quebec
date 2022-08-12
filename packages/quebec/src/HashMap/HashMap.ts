class HashMap<TKey extends string, TValue> {
  private _schema: { [key in TKey]?: TValue } = {}
  private _length = 0

  public static fromObject<TKey extends string, TValue>(object: { [key in TKey]: TValue }): HashMap<TKey, TValue> {
    const result = new HashMap<TKey, TValue>()
    return result
  }

  public [Symbol.iterator](): Iterator<[TKey, TValue]> {
    return this.entries()[Symbol.iterator]()
  }

  public forEach(
    iterationCallbackFunction: (value: TValue, key: TKey, map: HashMap<TKey, TValue>) => void,
    thisArg?: any,
  ): void {
    for (const [key, value] of this.entries()) {
      iterationCallbackFunction.call(thisArg, value, key, this)
    }
  }

  public map<TResult>(
    iterationCallbackFunction: (value: TValue, key: TKey, map: HashMap<TKey, TValue>) => TResult,
    thisArg?: any,
  ): HashMap<TKey, TResult> {
    const result = new HashMap<TKey, TResult>()

    for (const [key, value] of this.entries()) {
      result.set(key, iterationCallbackFunction.call(thisArg, value, key, this))
    }

    return result
  }

  public filter(
    iterationCallbackFunction: (value: TValue, key: TKey, map: HashMap<TKey, TValue>) => boolean,
    thisArg?: any,
  ): HashMap<TKey, TValue> {
    const result = new HashMap<TKey, TValue>()

    for (const [key, value] of this.entries()) {
      if (iterationCallbackFunction.call(thisArg, value, key, this)) {
        result.set(key, value)
      }
    }

    return result
  }

  public find(
    iterationCallbackFunction: (value: TValue, key: TKey, map: HashMap<TKey, TValue>) => boolean,
    thisArg?: any,
  ): TValue | undefined {
    for (const [key, value] of this.entries()) {
      if (iterationCallbackFunction.call(thisArg, value, key, this)) {
        return value
      }
    }

    return undefined
  }

  public findKey(
    iterationCallbackFunction: (value: TValue, key: TKey, map: HashMap<TKey, TValue>) => boolean,
    thisArg?: any,
  ): TKey | undefined {
    for (const [key, value] of this.entries()) {
      if (iterationCallbackFunction.call(thisArg, value, key, this)) {
        return key
      }
    }

    return undefined
  }

  public findValue(
    iterationCallbackFunction: (value: TValue, key: TKey, map: HashMap<TKey, TValue>) => boolean,
    thisArg?: any,
  ): TValue | undefined {
    for (const [key, value] of this.entries()) {
      if (iterationCallbackFunction.call(thisArg, value, key, this)) {
        return value
      }
    }

    return undefined
  }

  public findKeyValue(
    iterationCallbackFunction: (value: TValue, key: TKey, map: HashMap<TKey, TValue>) => boolean,
    thisArg?: any,
  ): [TKey, TValue] | undefined {
    for (const [key, value] of this.entries()) {
      if (iterationCallbackFunction.call(thisArg, value, key, this)) {
        return [key, value]
      }
    }

    return undefined
  }

  public findKeyValuePair(
    iterationCallbackFunction: (value: TValue, key: TKey, map: HashMap<TKey, TValue>) => boolean,
    thisArg?: any,
  ): [TKey, TValue] | undefined {
    for (const [key, value] of this.entries()) {
      if (iterationCallbackFunction.call(thisArg, value, key, this)) {
        return [key, value]
      }
    }

    return undefined
  }

  public findKeyValuePairs(
    iterationCallbackFunction: (value: TValue, key: TKey, map: HashMap<TKey, TValue>) => boolean,
    thisArg?: any,
  ): [TKey, TValue][] {
    const result: [TKey, TValue][] = []

    for (const [key, value] of this.entries()) {
      if (iterationCallbackFunction.call(thisArg, value, key, this)) {
        result.push([key, value])
      }
    }

    return result
  }

  public findKeyValuePairsWhere(
    iterationCallbackFunction: (value: TValue, key: TKey, map: HashMap<TKey, TValue>) => boolean,
    thisArg?: any,
  ): [TKey, TValue][] {
    const result: [TKey, TValue][] = []

    for (const [key, value] of this.entries()) {
      if (iterationCallbackFunction.call(thisArg, value, key, this)) {
        result.push([key, value])
      }
    }

    return result
  }

  public findKeyValuePairsWhereKey(
    iterationCallbackFunction: (key: TKey, map: HashMap<TKey, TValue>) => boolean,
    thisArg?: any,
  ): [TKey, TValue][] {
    const result: [TKey, TValue][] = []

    for (const [key, value] of this.entries()) {
      if (iterationCallbackFunction.call(thisArg, key, this)) {
        result.push([key, value])
      }
    }

    return result
  }

  public findKeyValuePairsWhereValue(
    iterationCallbackFunction: (value: TValue, map: HashMap<TKey, TValue>) => boolean,
    thisArg?: any,
  ): [TKey, TValue][] {
    const result: [TKey, TValue][] = []

    for (const [key, value] of this.entries()) {
      if (iterationCallbackFunction.call(thisArg, value, this)) {
        result.push([key, value])
      }
    }

    return result
  }

  constructor() {}

  public get length(): number {
    return this._length
  }

  public equals(other: HashMap<TKey, TValue>): boolean {
    return this.hashCode() === other.hashCode()
  }

  public get(key: TKey): TValue | undefined {
    const value = this._schema[key]

    return value as TValue | undefined
  }

  public getAll() {
    return this._schema as { [key in TKey]: TValue }
  }

  public set(key: TKey, value: TValue): void {
    if (this.contains(key)) {
      return
    }

    this._schema[key] = value
    this._length += 1
  }

  public setAll(map: HashMap<TKey, TValue>): void {
    for (const [key, value] of map.entries()) {
      this.set(key, value)
    }
  }

  public setAllFromObject(object: { [key in TKey]: TValue }): void {
    for (const key in object) {
      this.set(key, object[key])
    }
  }

  public delete(key: TKey): boolean {
    if (!this.contains(key)) {
      return false
    }

    this._schema[key] = undefined
    this._length -= 1
  }

  public contains(key: TKey): boolean {
    return ![null, undefined].includes(this._schema[key])
  }

  public remove(key: TKey): TValue {
    const value = this._schema[key]

    this._schema[key] = undefined
    this._length -= 1

    return value
  }

  public clear(): void {
    this._schema = {}
  }

  public toString(): string {
    return JSON.stringify({
      HashMap: this._schema,
    })
  }

  public keys(): TKey[] {
    return Object.keys(this._schema) as TKey[]
  }

  public values(): TValue[] {
    return Object.values(this._schema)
  }

  public entries(): [TKey, TValue][] {
    return Object.entries(this._schema) as [TKey, TValue][]
  }

  public hashCode(): string {
    return this.toString()
  }
}

export default HashMap
