const { registerUserService, loginService } = require('../services/user');

const registerUser = async (req, res) => {
  const result = await registerUserService(req);
  switch (result.message) {
    case 'Missing username or password':
      res
        .status(400)
        .json({ success: false, message: 'Missing username or password' });
      break;
    case 'User already exists':
      res.status(400).json({ success: false, message: 'User already exists' });
      break;
    case 'User created successfully':
      res.json(result);
      break;
    default:
      res.status(500).json(result);
      break;
  }
};

const login = async (req, res) => {
  const result = await loginService(req);
  switch (result.message) {
    case 'Missing username or password':
      res.status(400).json({ success: false, message: result.message });
      break;
    case 'Incorrect username or password':
      res.status(400).json({ success: false, message: result.message });
      break;
    case 'Logged in successfully':
      res.status(200).json(result);
      break;
    default:
      res
        .status(500)
        .json({ success: false, message: 'Internal Server Error' });
      break;
  }
};

module.exports = { registerUser, login };
