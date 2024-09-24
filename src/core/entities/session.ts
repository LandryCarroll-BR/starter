export class Session {
  constructor(
    public id: string | undefined,
    public sessionToken: string | undefined,
    public userId: string | undefined,
    public expires: Date | undefined
  ) {
    this.id = id
    this.sessionToken = sessionToken
    this.userId = userId
    this.expires = expires
  }
}
