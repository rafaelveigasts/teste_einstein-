export const objectTransferer = <TypeObj>(
  objectToTransfer: any,
  ftObject: any
): TypeObj => {
  const objectTransfered = transferer(objectToTransfer, ftObject)
  return objectTransfered
}

// This function create an object according mapped object named FTObject
function transferer(objectToTransfer: any, ftObject: any, type?: string): any {
  const objectTransfered: any = type == 'array' ? [] : {}

  const ftKeys = Object.keys(ftObject)

  ftKeys.forEach(key => {
    const ftPropertyValue: any = ftObject[key]

    // Case the mapped property refers to another mapped object
    // The function will be called again using the FTObject mapped
    // To the property
    if (typeof ftPropertyValue == 'object') {
      const ftType = ftPropertyValue.type
      const ftPropRefName = ftPropertyValue.ref as string
      const ftObjToTransfer = ftPropertyValue.object

      if (ftType == 'boolean') {
        if (Array.isArray(objectToTransfer)) {
          objectToTransfer.forEach((item: any, idx: number) => {
            const value = item[key]
            const isBoolean = typeof value === 'boolean'
            const booleanValue = isBoolean ? value : value == 'true'
            objectTransfered[idx][ftPropRefName] = booleanValue
          })
        } else {
          const item = objectToTransfer[key]
          const isBoolean = typeof item === 'boolean'
          objectTransfered[ftPropRefName] = isBoolean ? item : item == 'true'
        }
      } else {
        objectTransfered[ftPropRefName] = transferer(
          objectToTransfer[key],
          ftObjToTransfer,
          ftType
        )
      }
    } else {
      if (objectToTransfer !== undefined) {
        if (type == 'array') {
          objectToTransfer.forEach((item: any, idx: number) => {
            if (!objectTransfered[idx]) {
              objectTransfered[idx] = {}
            }

            const valueToAdd = item[key]
            objectTransfered[idx][ftPropertyValue] = valueToAdd
          })
        } else {
          objectTransfered[ftPropertyValue] = objectToTransfer[key]
        }
      }
    }
  })

  return objectTransfered
}

export async function objectTransfererFromArray<TypeObj>(
  objectsToTransfer: any[],
  ftObject: any
): Promise<TypeObj[]> {
  const objectsTransfered: TypeObj[] = []

  for (const objectToTransfer of objectsToTransfer) {
    const objectTransfered: TypeObj = transferer(objectToTransfer, ftObject)
    objectsTransfered.push(objectTransfered)
  }

  return objectsTransfered
}
