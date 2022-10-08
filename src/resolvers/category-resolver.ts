import { Resolver, Query, Mutation, Arg } from "type-graphql";
import { CreateCategoryInput } from "../dtos/inputs/create-category-input";
import { Category } from "../dtos/models/category-model";
import { randomUUID } from "crypto";

@Resolver()
export class CategoryResolver {
  @Query(() => [Category])
  async categories() {
    // buscar no banco
    return [];
  }

  @Mutation(() => Category)
  async createCategory(@Arg("data") data: CreateCategoryInput) {
    // salvar no banco
    const category = {
      id: randomUUID(),
      name: data.name,
      active: data.active,
      createdAt: new Date(),
      updatedAt: new Date(),
    };

    return category;
  }
}
