import { BaseVisitor } from "@graphql-codegen/visitor-plugin-common";
import { UnionTypeDefinitionNode, visit, printSchema, parse } from "graphql";
import schema from "./schema-join";

export class MyVisitor {
  //   protected _argumentsTransformer: OperationVariablesToObject;

  //   constructor(
  //     protected _schema: GraphQLSchema,
  //     rawConfig: TRawConfig,
  //     additionalConfig: TPluginConfig,
  //     defaultScalars: ScalarsMap = DEFAULT_SCALARS
  //   ) {
  //     super(
  //       rawConfig,
  //       {
  //         enumValues: rawConfig.enumValues || {},
  //         ...additionalConfig
  //       },
  //       buildScalars(_schema, defaultScalars)
  //     );

  //     this._argumentsTransformer = new OperationVariablesToObject(
  //       this.scalars,
  //       this.convertName
  //     );
  //   }

  UnionTypeDefinition(
    node: UnionTypeDefinitionNode,
    key: string | number,
    parent: any
  ): string {
    // const originalNode = parent[key] as UnionTypeDefinitionNode;
    // const possibleTypes = originalNode.types
    //   .map(t =>
    //     this.scalars[t.name.value]
    //       ? this._getScalar(t.name.value)
    //       : this.convertName(t)
    //   )
    //   .join(" | ");

    console.log(node);

    return "hej";
    //     return new DeclarationBlock(this._declarationBlockConfig)
    //       .export()
    //       .asKind("type")
    //       .withName(this.convertName(node))
    //       .withComment((node.description as any) as string)
    //       .withContent(possibleTypes).string;
    //   }
  }
}
const printedSchema = printSchema(schema);
const astNode = parse(printedSchema);
const visitor = new MyVisitor();
const visitorResult = visit(astNode, { leave: visitor });
// console.log(visitorResult.definitions);
