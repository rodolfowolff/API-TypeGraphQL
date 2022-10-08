import { InputType, Field } from "type-graphql";
import { Length } from "class-validator";

@InputType()
export class CreateCategoryInput {
  @Field((type) => String)
  @Length(2, 70)
  name!: string;

  @Field()
  active!: boolean;
}
