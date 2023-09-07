import { APIGatewayProxyEvent, Context, APIGatewayProxyResult } from "aws-lambda"

export async function fetch(event: APIGatewayProxyEvent, context: Context): Promise<APIGatewayProxyResult> {

  const apiRequestId = event.requestContext.requestId // Id da Requisição do Cliente
  const lambdaRequestId = context.awsRequestId // Id da Invocação da função Lambda

  console.log(`API Getaway RequestId ${apiRequestId}, Lambda RequestId ${lambdaRequestId}`)

  const method = event.httpMethod
  if(event.resource === "/products") {
    if(method === "GET") {
      console.log('GET')

      return {
        statusCode: 200,
        body: JSON.stringify({
          message: "GET Products - OK"
        })
      }
    }
  }

  return {
    statusCode: 400,
    body: JSON.stringify({
      message: "Bad Request"
    })
  }
}