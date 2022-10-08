import { InputType, Field, Int } from "type-graphql";
import { Length, Min, Max } from "class-validator";

@InputType()
export class CreateProductInput {
  @Field((type) => String)
  @Length(2, 70)
  name!: string;

  @Field((type) => String)
  @Length(1, 30)
  type!: string;

  @Field((type) => String)
  @Length(1, 30)
  category!: string;

  @Field((type) => Int)
  @Min(1)
  @Max(9999)
  quantity!: number;

  @Field((type) => String)
  @Length(1, 10)
  value!: string;

  @Field()
  active!: boolean;
}
