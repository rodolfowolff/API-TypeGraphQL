import { ObjectType, Field, ID } from "type-graphql";

@ObjectType()
export class Category {
  @Field((type) => ID)
  id?: string;

  @Field()
  name!: string;

  @Field()
  active!: boolean;

  @Field()
  createdAt?: Date;

  @Field()
  updatedAt?: Date;

  @Field({ nullable: true })
  deletedAt?: Date;
}
