const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const User = require("@models/User");
const {
  registerValidationSchema,
  loginValidationSchema,
} = require("@validator/authValidation");

// Register function
exports.register = async (req, res) => {
  const { error } = registerValidationSchema.validate(req.body);

  if (error) {
    return res.status(400).json({ error: error.details[0].message });
  }
  const { name, email, password, phone } = req.body;
  try {
    const hashedPassword = await bcrypt.hash(
      password,
      parseInt(process.env.BCRYPT_ROUNDS, 10)
    );

    const newUser = new User({ name, email, phone, password: hashedPassword });
    await newUser.save();
    res
      .status(201)
      .json({ message: "User registered successfully", user: newUser });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// Login function
exports.login = async (req, res) => {
  const { error } = loginValidationSchema.validate(req.body);

  if (error) {
    return res.status(400).json({ error: error.details[0].message });
  }

  const { email, password } = req.body;

  console.log(email);
  try {
    const user = await User.findOne({ where: { email: email } });
    if (!user) {
      return res.status(400).json({ error: "Invalid credentials" });
    }

    console.log(user);
    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) {
      return res.status(400).json({ error: "Invalid credentialssss" });
    }
    const token = jwt.sign({ id: user.id }, process.env.JWT_SECRET, {
      expiresIn: process.env.TOKEN_EXPIRES_IN,
    });

    // Exclude the password field
    const userWithoutPassword = { ...user.get(), password: undefined };

    res.json({
      token: token,
      user: userWithoutPassword,
    });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// Forgot password function
exports.forgotPassword = async (req, res) => {
  const { email } = req.body;
  try {
    const user = await User.findOne({ email });
    if (!user) {
      return res.status(400).json({ error: "User not found" });
    }

    res.json({ message: "Password reset link sent" });
  } catch (error) {
    res.status(500).json({ error: "Server error" });
  }
};
