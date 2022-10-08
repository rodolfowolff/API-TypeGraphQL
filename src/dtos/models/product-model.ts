import { ObjectType, Field, ID, Int } from "type-graphql";
import { Length, Min, Max } from "class-validator";

@ObjectType()
export class Product {
  @Field((type) => ID)
  id?: string;

  @Field()
  name!: string;

  @Field()
  type!: string;

  @Field()
  quantity!: number;

  @Field()
  value!: string;

  @Field()
  active!: boolean;

  @Field()
  createdAt?: Date;

  @Field()
  updatedAt?: Date;

  @Field({ nullable: true })
  deletedAt?: Date;
}
