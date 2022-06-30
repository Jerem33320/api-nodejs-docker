const express = require('express');
const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

const port = process.env.PORT || 3000;

const enterprise = require('./services/enterpriseByName');
app.get('/enterprise', enterprise.enterpriseParser);

app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
})