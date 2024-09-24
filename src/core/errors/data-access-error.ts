export class DataAccessError extends Error {
  constructor(message?: string) {
    super(message || 'Error accessing data')
    this.name = 'DataAccessError'
  }
}
