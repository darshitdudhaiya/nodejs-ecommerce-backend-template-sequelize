import db from "../models/index.js"; // Import models from index.js
import { ApiError } from "../utils/apiError.js";

const generateAccessTokenAndRefreshToken = async (userId) => {
  try {
    const user = await db.User.findByPk(userId); // Use findByPk for primary key
    const accessToken = user.generateAccessToken();
    const refreshToken = user.generateRefreshToken();

    user.refreshToken = refreshToken;
    await user.save({ validate: false }); // Use save method for Sequelize instances

    return { accessToken, refreshToken };
  } catch (error) {
    throw new ApiError(
      500,
      "Something went wrong while generating refresh and access token"
    );
  }
};

const register = async (username, email, password) => {
  const user = await db.User.create({ // Use create method for Sequelize
    username,
    email,
    password,
  });

  return user;
};

const login = async (email, password) => {
  const user = await db.User.findOne({ where: { email } }); // Use findOne with where clause

  if (!user) {
    throw new ApiError(404, "User does not exist");
  }

  const isPasswordValid = await user.isPasswordCorrect(password);

  if (!isPasswordValid) {
    throw new ApiError(401, "Invalid user credentials");
  }

  return user;
};

export { generateAccessTokenAndRefreshToken, register, login };
