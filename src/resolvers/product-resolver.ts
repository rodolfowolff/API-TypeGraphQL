import {
  Resolver,
  Query,
  Mutation,
  Arg,
  FieldResolver,
  Root,
} from "type-graphql";
import { Product } from "../dtos/models/product-model";
import { randomUUID } from "crypto";
import { Category } from "../dtos/models/category-model";
import { CreateProductInput } from "../dtos/inputs/create-product-input";

@Resolver(() => Product)
export class ProductResolver {
  @Query(() => [Product])
  async products() {
    // buscar no banco
    return [
      {
        id: randomUUID(),
        name: "basic",
        type: "async",
        quantity: 1,
        value: 1,
        active: true,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
    ];
  }

  @Mutation(() => Product)
  async createProduct(@Arg("data") data: CreateProductInput) {
    // salvar no banco
    const product = {
      id: randomUUID(),
      name: data.name,
      type: data.type,
      category: data.category,
      quantity: data.quantity,
      value: data.value,
      active: data.active,
      createdAt: new Date(),
      updatedAt: new Date(),
    };

    return product;
  }

  @FieldResolver(() => Category)
  async category(@Root() product: Product) {
    console.log("product", product);

    return {
      name: "basic",
    };
  }
}
