// module imports
const express = require('express');
const hbs = require('hbs');
const cors = require('cors')

// create express application
const app = express();

app.use(cors())

// set handlebars as the view engine
app.set('view engine', 'hbs');
app.set('views', 'views')

// simulate database function to retrieve HTML content
function getHTMLContentFromDB() {
    // simulated database query, replace with finalised functionality
    return Promise.resolve('<h1>{{ pageTitle }}</h1><p>{{ paragraph }}</p>');
}

// define a route handle for the root url
app.get('/', async (req, res) => {
    try {
        // retrieve HTMl content from the DB
        const htmlContent = await getHTMLContentFromDB();

        // define data object with real values for tokens
        const data = {
            pageTitle: 'My Page',
            paragraph: 'This is some dynamic content.',
        };

        // compile the HTML content as a Handlebars template
        const template = hbs.compile(htmlContent);

        // render the compiled template with the data
        const renderedHTML = template(data);

        // send the rendered HTML as the response
        res.send(renderedHTML);
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