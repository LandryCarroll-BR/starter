export class Post {
  constructor(
    public id: string,
    public name: string,
    public description: string,
    public updatedAt: Date | null,
    public createdAt: Date
  ) {}
}
