const logRequests = (req, res, next) => {
  console.log(`Recibida petición: ${req.method} ${req.path}`);
  next();
};

export default logRequests;
