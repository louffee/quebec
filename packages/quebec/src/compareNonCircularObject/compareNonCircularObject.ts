const compareNonCircularObject = <TSource extends object, TTarget extends object>(
  source: TSource,
  target: TTarget,
): boolean => {
  try {
    const stringifiedSourceObject = JSON.stringify(source)
    const stringifiedTargetObject = JSON.stringify(target)

    return stringifiedSourceObject === stringifiedTargetObject
  } catch {
    return false
  }
}

export default compareNonCircularObject
