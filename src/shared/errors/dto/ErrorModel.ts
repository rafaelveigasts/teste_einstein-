import EHttpStatusCode from './EHttpStatusCode'

type TErrorCustos = {
  message?: string
  status?: EHttpStatusCode
  error?: Error
  aditionalInfo?: any
}

export class ErrorModel extends Error {
  public message: string
  public aditionalInfo?: any
  public status: EHttpStatusCode
  protected functionName: string
  protected fileName: string

  constructor({ message, error, aditionalInfo, status = 500 }: TErrorCustos) {
    super()

    this.message = message || ''
    this.status = status
    this.aditionalInfo = aditionalInfo

    if (error) {
      this.stack = error.stack
      this.message = error.message
    }

    this.functionName = this.extractFunctionName()
    this.fileName = this.extractFileName()
  }

  private extractFunctionName() {
    const stack = this.stack.split('\n')
    const callerLine = stack[1]
    const functionNameRegex = /at\s+(.*)\s+\(/
    const functionName = functionNameRegex.exec(callerLine)
    return functionName?.[1] || 'unknown'
  }

  private extractFileName() {
    const stack = this.stack.split('\n')
    const callerLine = stack[1]
    const fileNameRegex = /\((.*):\d+:\d+\)/
    const fileName = fileNameRegex.exec(callerLine)
    return fileName?.[1] || 'unknown'
  }

  public getFunctionName(): string {
    return this.functionName
  }

  public getStatus(): EHttpStatusCode {
    return this.status
  }

  public getFileName(): string {
    return this.fileName
  }
}
