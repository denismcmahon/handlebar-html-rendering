// module imports
const express = require('express');
const cors = require('cors')
const { engine } = require('express-handlebars');

// create express application
const app = express();

app.use(cors())

// set handlebars as the view engine
app.engine('handlebars', engine({
    defaultLayout: false,
  }));
app.set('view engine', 'handlebars');
app.set('views', './views');

// simulate database function to retrieve HTML content
function getHTMLContentFromDB() {
    // simulated database query, replace with finalised functionality
    return Promise.resolve('<h1>Hello from the database!</h1>');
}

// define a route handle for the root url
app.get('/', async (req, res) => {
    try {
        // retrieve HTMl content from the DB
        const htmlContent = await getHTMLContentFromDB();

        // render a Handlebars template with the HTML content
        res.render('index', { htmlContent });
    } catch (error) {
        // handle errors
        console.error('Error fetching HTML content from the database: ', error);
        res.status(500).send('Internal Server Error');
    }
});

// start the server
const port = process.env.PORT || 3000;
app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});