import boom from '@hapi/boom';

export default function validateSchemas(schema, property) {
  // eslint-disable-next-line no-unused-vars
  return (request, response, next) => {
    const data = request[property];
    const { error } = schema.validate(data);

    if (error) {
      next(boom.badRequest(error));
    }

    next();
  };
}
