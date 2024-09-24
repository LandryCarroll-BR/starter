export class UnauthorizedError extends Error {
  constructor(message?: string) {
    super(message || 'User is not authorized to perform this action')
    this.name = 'UnauthorizedError'
  }
}
