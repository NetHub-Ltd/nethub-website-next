import sequelize from "../config/database";
import User from "./user";

const initModels = async () => {
  await sequelize.sync({ force: false }); // Force true to drop tables and recreate them
  console.log("Database synced!");
};

export { sequelize, initModels };
