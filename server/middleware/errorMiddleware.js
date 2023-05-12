// Middleware function to handle 404 Not Found errors
const notFound = (req, res, next) => {
  const error = new Error(`Not Found - ${req.originalUrl}`);
  res.status(404);
  next(error);
};
  
// Middleware function to handle errors
const errorHandler = (err, req, res, next) => {
  // Set the status code to either the current response status code or 500
  const statusCode = res.statusCode === 200 ? 500 : res.statusCode;
  // Set the response status code
  res.status(statusCode);
  // Set the response body with the error message and stack trace (if available)
  res.json({
    statusCode: statusCode,
    message: err.message,
    stack: err.stack,
  });
};

// Export the middleware functions
module.exports = { notFound, errorHandler };