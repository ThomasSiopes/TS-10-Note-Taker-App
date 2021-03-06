const express = require('express');

const app = express();

const PORT = process.env.port || 8080;

app.use(express.urlencoded({extended:true}));
app.use(express.json());

require('./routes/apiRoutes')(app);
require('./routes/htmlRoutes')(app);

app.listen(PORT, () => {
    console.log(`App is listening on PORT: ${PORT}`);
});