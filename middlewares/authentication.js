const authentication = (req, res, next) => {
  const token = req.headers["authorization"]; // Assume a token is sent in the headers

  if (!token) {
    return res
      .status(403)
      .json({ message: "Access denied, no token provided." });
  }

  // Assuming you decode the token and validate it (e.g., using JWT)
  try {
    const user = decodeToken(token); // Replace with your token decoding logic
    req.user = user; // Add user info to the request object
    next(); // Move to the next middleware or route handler
  } catch (err) {
    return res.status(400).json({ message: "Invalid token." });
  }
};

export default authentication;
