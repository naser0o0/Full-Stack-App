import ErrorResponse from "../utilities/ErrorResponse.js";

const validateJoi = (schema) => (req, res, next) => {
  const { error } = schema.validate(req.body);
  return error ? next(new ErrorResponse(error, 400)) : next();
};

export default validateJoi;
