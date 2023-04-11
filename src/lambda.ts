declare const awslambda: any;

// @ts-ignore
export const handler = awslambda.streamifyResponse(async (event: any, responseStream: any, context: any) => {
  const httpResponseMetadata = {
    statusCode: 200,
    headers: {
      'Content-Type': 'text/html',
      'X-Custom-Header': 'Example-Custom-Header',
    },
  };

  responseStream = awslambda.HttpResponseStream.from(responseStream, httpResponseMetadata);

  for (let i = 0; i < 100; i++) {
    responseStream.write('<div> counter: ' + i + '</div>');
    await new Promise(r => setTimeout(r, 1000));
  }
  responseStream.end();
});