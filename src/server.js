import { connectDB, sequelize } from "./config/db.js";
import { app } from "./app.js";
import { config } from "./config/config.js";
import db from "./models/index.js"; // Import models from index.js

connectDB()
  .then(async () => {
    // Sync all models with the database
    await sequelize.sync(); // Use sequelize.sync() to create tables

    app.listen(config.port, () => {
      console.log(`⚙️ Server is running at port : ${config.port}`);
    });
  })
  .catch((err) => {
    console.error("Database connection or sync failed !!! ", err);
    process.exit(1);
  });
