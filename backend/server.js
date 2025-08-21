const express = require('express');
const app = express();
const dotenv = require('dotenv');
dotenv.config();
const db = require('./models');
const cors = require('cors');


const pageRoutes = require('./routes/page.routes');
const productRoutes = require('./routes/product.routes');
const newsletterRoutes = require('./routes/newsletter.routes');
const contactRoutes = require('./routes/contact.routes');

app.use(express.json());
app.use(cors());

app.use('/api', pageRoutes);
app.use('/api/products', productRoutes);
app.use('/api/newsletter', newsletterRoutes);
app.use('/api/contact', contactRoutes);

const PORT = process.env.PORT || 3000;
db.sequelize.sync({  alter: true  }).then(() => {
  console.log("Database connected");
  app.listen(PORT, () => {
    console.log(`Server running at ${PORT}`);
  });
});

