import { buildSchemaFromTypeDefinitions } from "graphql-tools";

import { schema1 } from "./schema1";
import { schema2 } from "./schema2";
import { parse, printSchema } from "graphql";

const builtSchema = buildSchemaFromTypeDefinitions([schema1, schema2]);

// This fixes it!!
// const schema = parse(printSchema(builtSchema));

export default schema;
