const forceDatabaseRefresh = false;

import dotenv from 'dotenv';
dotenv.config();

import express from 'express';
import routes from './routes/index.js';
import { sequelize } from './models/index.js';
import { seedAll } from './seeds/index.js';

const app = express();
const PORT = process.env.PORT || 3001;

sequelize.sync({ force: forceDatabaseRefresh }).then(async () => {
  try {
    // Seed the database
    await seedAll();

    // Start the server after seeding
    app.listen(PORT, () => {
      console.log(`Server is running on http://localhost:${PORT}`);
    });
  } catch (error) {
    console.error('Failed to start the server:', error);
    process.exit(1);
  }
});


// Serves static files in the entire client's dist folder
app.use(express.static('../client/dist'));

app.use(express.json());
app.use(routes);


