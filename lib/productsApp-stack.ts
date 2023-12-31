import * as lambda from "aws-cdk-lib/aws-lambda"
import * as lambdaNodeJS from "aws-cdk-lib/aws-lambda-nodejs"
import * as cdk from "aws-cdk-lib"

import { Construct } from "constructs"

export class ProductsAppStack extends cdk.Stack {
  readonly productsFetchHandler: lambdaNodeJS.NodejsFunction
  constructor(scope: Construct, id: string, props?: cdk.StackProps) {
    super(scope, id, props)

    this.productsFetchHandler = new lambdaNodeJS.NodejsFunction(this,
      "ProductsFetchFunction", {
        runtime: lambda.Runtime.NODEJS_16_X,
        functionName: "Function",
        entry: "lib/lambda/products/productsFetchFunction.ts",
        handler: "fetch",
        memorySize: 128,
        timeout: cdk.Duration.seconds(10),
        bundling: {
          minify: true,
          sourceMap: true
        }
      }
    )
  }
}