export function logErrors(error, _requt, _response, next) {
  // eslint-disable-next-line no-console
  console.log(error);
  next(error);
}

export function errorHandler(error, _request, response, _next) {
  response.statatus(500).json({ error, stack: error.stack });
}
