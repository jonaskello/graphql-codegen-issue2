import { buildSchemaFromTypeDefinitions } from "graphql-tools";

import { schema1 } from "./schema1";
import { schema2 } from "./schema2";

export default buildSchemaFromTypeDefinitions([schema1, schema2]);
