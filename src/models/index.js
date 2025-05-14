import { sequelize } from "../config/db.js";
import { User } from "./user.model.js";
import { Product } from "./product.model.js";

// Define associations here if needed
// User.hasMany(Product);
// Product.belongsTo(User);

const db = {};

db.sequelize = sequelize;
db.Sequelize = Sequelize;

db.User = User(sequelize, Sequelize);
db.Product = Product(sequelize, Sequelize);

// Define associations here if needed
// db.User.hasMany(db.Product);
// db.Product.belongsTo(db.User);

export default db;
