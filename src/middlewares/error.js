import sequelize from 'sequelize';

export function logErrors(error, _request, _response, next) {
  // eslint-disable-next-line no-console
  console.log(error);
  next(error);
}

// eslint-disable-next-line no-unused-vars
export function errorHandler(error, _request, response, _next) {
  response.status(500).json({ error, stack: error.stack });
}

export function boomErrorHandler(error, _request, response, next) {
  if (error.isBoom) {
    response.json(error.output.payload);
  }

  next(error);
}

export function ormErrorHandler(error, _request, response, next) {
  if (error instanceof sequelize.ValidationError) {
    response.status(409).json({
      message: error.name,
      errors: error.errors,
    });
  }
  next(error);
}
