import { plugin as typescriptPlugin } from "@graphql-codegen/typescript";
import schema from "./schema-join";

doIt();

async function doIt() {
  const result = await typescriptPlugin(schema, [], {}, { outputFile: "" });
  console.log(result);
}

/*
import { codegen } from "@graphql-codegen/core";
import { buildSchema } from "graphql";
import * as fs from "fs";
import * as path from "path";
import { plugin as typescriptPlugin } from "@graphql-codegen/typescript";
import { printSchema, parse, GraphQLSchema } from "graphql";

const schema: GraphQLSchema = buildSchema(`type A {}`);
const outputFile = "relative/pathTo/filename.ts";
const config = {
  // used by a plugin internally, although the 'typescript' plugin currently
  // returns the string output, rather than writing to a file
  filename: outputFile,
  schema: parse(printSchema(schema)),
  plugins: {
    typescript: {} // Here you can pass configuration to the plugin
  },
  pluginMap: {
    typescript: {
      plugin: typescriptPlugin
    }
  }
};

async function doIt() {
  const output = await codegen(config as any);
  fs.writeFile(path.join(__dirname, outputFile), output, () => {
    console.log("Outputs generated!");
  });
}
*/
