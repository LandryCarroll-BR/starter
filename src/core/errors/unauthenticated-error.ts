export class UnauthenticatedError extends Error {
  constructor(message?: string) {
    super(message || 'User is not authenticated')
    this.name = 'UnauthenticatedError'
  }
}
