export function logErrors(error, _requt, _response, next) {
  // eslint-disable-next-line no-console
  console.log(error);
  next(error);
}

export function errorHandler(error, _request, response, _next) {
  response.status(500).json({ error, stack: error.stack });
}

export function boomErrorHandler(error, _request, response, next) {
  if (error.isBoom) {
    response.json(error.output.payload);
  }

  next(error);
}
