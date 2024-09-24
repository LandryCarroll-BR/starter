export class AuthenticationError extends Error {
  constructor(message?: string) {
    super(message || 'Authentication error')
    this.name = 'AuthenticationError'
  }
}
