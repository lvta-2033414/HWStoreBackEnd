const jwt = require('jsonwebtoken');

const verifyToken = async (req, res, next) => {
  const authHeader = req.header('Authorization');
  const token = authHeader && authHeader.split(' ')[1];

  if (!token) {
    return res.status(401).json({ success: false, message: 'Access denied' });
  }
  try {
    const decodedToken = jwt.verify(token, process.env.ACCESS_TOKEN_SECRET_KEY);
    // Xem lại api  trên trang jwt
    req.userId = decodedToken.userId;
    next();
  } catch (error) {
    console.log(error);
    return res.status(403).json({ success: false, message: 'Invalid token' });
  }
};

module.exports = { verifyToken };
