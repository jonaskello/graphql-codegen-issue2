import { codegen } from "@graphql-codegen/core";
import * as fs from "fs";
import * as path from "path";
import { plugin as typescriptPlugin } from "@graphql-codegen/typescript";
import { printSchema, parse } from "graphql";
import schema from "./schema-join";

const outputFile = "generated_prog.ts";
const config = {
  // used by a plugin internally, although the 'typescript' plugin currently
  // returns the string output, rather than writing to a file
  filename: outputFile,
  schema: parse(printSchema(schema)),
  plugins: [
    { typescript: {} } // Here you can pass configuration to the plugin
  ],
  pluginMap: {
    typescript: {
      plugin: typescriptPlugin
    }
  },
  documents: [],
  config: {}
};

async function generate() {
  const output = await codegen(config);
  fs.writeFile(path.join(__dirname, outputFile), output, () => {
    console.log("Outputs generated!");
  });
}

generate();
