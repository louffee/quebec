import hasProp from '../hasProp/hasProp'

function hasProps<TExpectedHostObject extends object>(
  hostObject: TExpectedHostObject,
  ...props: Array<keyof TExpectedHostObject>
): hostObject is TExpectedHostObject {
  return props.every((prop) => hasProp<TExpectedHostObject>(hostObject, prop))
}

export default hasProps
