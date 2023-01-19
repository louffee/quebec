import isObject from '../isObject/isObject'

// rome-ignore lint/suspicious/noExplicitAny: <explanation>
const deepmerge = <TTarget>(target: TTarget, ...sources: any[]): TTarget => {
  if (sources.length === 0) {
    return target
  }

  const nextSource = sources.shift()

  if (isObject(target) && isObject(nextSource)) {
    for (const key in nextSource) {
      if (isObject(nextSource[key])) {
        if (!target[key as keyof TTarget]) {
          Object.assign(target, { [key]: {} })
        }

        const targetValue = target[key as keyof TTarget]
        const nextSourceValue = nextSource[key]

        deepmerge(targetValue, nextSourceValue)
      } else {
        const assignedSourceObject = {
          [key]: nextSource[key],
        }

        Object.assign(target, assignedSourceObject)
      }
    }
  }

  return deepmerge(target, ...sources)
}

export default deepmerge
