async function convertFileToBase64(file: File): Promise<string> {
  return new Promise<string>((resolve, reject) => {
    const reader = new FileReader()

    reader.onload = function $onload__convertFileToBase64(event) {
      resolve(event.target.result as string)
    }
    reader.onerror = function $onerror__convertFileToBase64(event) {
      reject(event)
    }

    reader.readAsDataURL(file)
  })
}

export default convertFileToBase64
