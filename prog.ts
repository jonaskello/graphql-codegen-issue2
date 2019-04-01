import { plugin as typescriptPlugin } from "@graphql-codegen/typescript";
import schema from "./schema-join";

doIt();

async function doIt() {
  const result = await typescriptPlugin(schema, [], {}, { outputFile: "" });
  console.log(result);
}
