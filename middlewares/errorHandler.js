const errorHandler = (err, req, res, next) => {
  console.error("❌ Error:", err.message); // log error details

  // Check if we're in the development environment
  if (process.env.NODE_ENV === "dev") {
    // In development, we show the error stack trace
    return res.status(500).json({
      message: err.message || "Internal Server Error",
      stack: err.stack, // Provide stack trace for debugging
    });
  }

  // In production, we just send the error message
  return res.status(500).json({
    message: err.message || "Internal Server Error",
  });
};

export default errorHandler;
