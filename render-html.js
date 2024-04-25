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
    return Promise.resolve(`
    <!DOCTYPE html>
    <html>

    <head>
        <meta charset='utf-8'>
        <meta http-equiv='X-UA-Compatible' content='IE=edge'>
        <title>Modern Template</title>
        <meta name='viewport' content='width=device-width, initial-scale=1'>


        <style type="text/css">
            * {
                padding: 0;
                margin: 0;
            }

            @font-face {
                font-family: "proxima_nova_rgregular";
                src: url("https://qatracking06.catalyst.qa7.lrn.com/course-certificates/modern/fonts/proxima_nova_reg-webfont.woff2") format("woff2"), url("https://qatracking06.catalyst.qa7.lrn.com/course-certificates/modern/fonts/proxima_nova_reg-webfont.woff") format("woff");
                font-weight: normal;
                font-style: normal;
            }

            @font-face {
                font-family: "proxima_nova_rgbold";
                src: url("https://qatracking06.catalyst.qa7.lrn.com/course-certificates/modern/fonts/proxima_nova_bold-webfont.woff2") format("woff2"), url("https://qatracking06.catalyst.qa7.lrn.com/course-certificates/modern/fonts/proxima_nova_bold-webfont.woff") format("woff");
                font-weight: normal;
                font-style: normal;
            }

            :root {
                --font-family-regular: "proxima_nova_rgregular";
                --font-family-semibold: "proxima_nova_rgbold";
                --text-black: #000;
                --text-white: #fff;
                --ck-editor-bor-color: #C3CBCB;
                --ck-editor-bor-color1: #BFBFBF;
            }

            html {
                font-size: 16px !important;
            }

            @media only screen and (max-width: 767px) {
                html {
                    font-size: 15px !important;
                }
            }

            @media only screen and (max-width: 575px) {
                html {
                    font-size: 14px !important;
                }
            }

            body {
                font-family: var(--font-family-regular);
            }

            .l-cc-cert {
                border: 1px solid var(--ck-editor-bor-color);
                padding: 10px;
                max-width: 1010px;
                margin: 0 auto;
            }

            .l-cc-cert-inner {
                background-repeat: no-repeat;
                background-size: 100% 100%;
                color: var(--text-black);
                line-height: normal;
                border: 1px solid var(--ck-editor-bor-color1);
            }

            @media only screen and (min-width: 1024px) {
                .l-cc-cert-inner {
                    min-height: 718px;
                }
            }

            @media only screen and (max-width: 1023px) {
                .l-cc-cert-inner {
                    min-height: auto;
                }
            }

            .l-cc-cert-inner-cont {
                text-align: center;
                padding: 30px 30px 17px;
            }

            .l-cc-cert-logo {
                padding: 30px 0 40px 0;
            }

            .l-cc-cert-logo img {
                max-width: 294px;
            }

            @media only screen and (max-width: 575px) {
                .l-cc-cert-logo img {
                    max-width: 250px;
                }
            }

            .l-cc-cert-title {
                font-size: 3.75rem;
                padding-bottom: 20px;
            }

            @media only screen and (max-width: 1023px) {
                .l-cc-cert-title {
                    font-size: 2.25rem;
                }
            }

            .l-cc-cert-title .break {
                display: block;
                font-size: 2.5rem;
                font-weight: 100;
                letter-spacing: -0.00078125px;
            }

            @media only screen and (max-width: 1023px) {
                .l-cc-cert-title .break {
                    font-size: 1.75rem;
                }
            }

            .l-cc-cert-msg {
                font-size: 1.25rem;
                font-style: italic;
                padding-bottom: 35px;
            }

            @media only screen and (max-width: 1023px) {
                .l-cc-cert-msg {
                    font-size: 1rem;
                }
            }

            .l-cc-cert-user {
                font-size: 2.5rem;
                font-weight: 100;
                letter-spacing: -0.00078125px;
                font-weight: 600;
                padding-bottom: 35px;
            }

            .l-cc-cert-user .star {
                display: none;
            }

            @media only screen and (max-width: 1023px) {
                .l-cc-cert-user {
                    font-size: 1.75rem;
                }
            }

            .l-cc-cert-user .name {
                padding: 12px 0;
                display: block;
                text-transform: uppercase;
            }

            .l-cc-cert-success-msg {
                font-size: 1.25rem;
                padding-bottom: 19px;
                font-style: italic;
            }

            .l-cc-cert-course {
                font-size: 2rem;
                padding-bottom: 14px;
            }

            @media only screen and (max-width: 1023px) {
                .l-cc-cert-course {
                    font-size: 1.25rem;
                }
            }

            .l-cc-cert-course-type {
                font-size: 1.25rem;
                font-style: italic;
                padding-bottom: 12px;
            }

            @media only screen and (max-width: 1023px) {
                .l-cc-cert-course-type {
                    font-size: .875rem;
                }
            }

            .l-cc-cert-date {
                font-size: 1.25rem;
            }

            @media only screen and (max-width: 1023px) {
                .l-cc-cert-date {
                    font-size: .875rem;
                }
            }

            @media only screen and (max-width: 485px) {
                .l-cc-cert-date {
                    padding-bottom: 90px;
                }
            }

            /* Custom  */
            .l-cc-cert.custom-bg-color .l-cc-cert-inner {
                background-image: none;
            }

            .l-cc-cert.custom-bg.modern .l-cc-cert-user .star {
                display: none;
            }


            /* Geometric */
            .geometric.l-cc-cert .l-cc-cert-title {
                padding-bottom: 25px;
            }


            .geometric.l-cc-cert .l-cc-cert-msg {
                padding-bottom: 0;
            }

            .geometric .l-cc-cert-user {
                padding-bottom: 30px;
            }

            .geometric .l-cc-cert-user .divider {
                display: flex;
                justify-content: center;
                padding-top: 5px;
            }

            .geometric .l-cc-cert-success-msg {
                padding-bottom: 10px;
            }

            .geometric .l-cc-cert-course-type {
                padding-bottom: 16px;
            }

            @media only screen and (max-width: 1023px) {
                .geometric .l-cc-cert-date {
                    padding-bottom: 80px;
                }
            }

            @media only screen and (max-width: 485px) {
                .geometric .l-cc-cert-date {
                    padding-bottom: 60px;
                }
            }

            
        </style>

    </head>

    <body>
        <div class="l-cc-cert geometric">
            <div class="l-cc-cert-inner" style="background-image:url(https://qatracking06.catalyst.qa7.lrn.com/course-certificates/geometric/images/template-geometric-bg.png);">
                <div class="l-cc-cert-inner-cont">
                    <p class="l-cc-cert-logo"><img src="https://qatracking06.catalyst.qa7.lrn.com/course-certificates/modern/images/lrn-lockup-blue.png" alt="Logo" class="l-logo-blue"></p>
                    <p class="l-cc-cert-title">Certificate <span class="break">of Completion</span></p>
                    <p class="l-cc-cert-msg">This is to certify that</p>
                    <p class="l-cc-cert-user">
                        <span class="name">%FIRSTNAME% %MIDDLENAME% %LASTNAME%</span>
                        <span class="divider"><img src="https://qatracking06.catalyst.qa7.lrn.com/course-certificates/geometric/images/divider.png" alt="divider"></span>
                    </p>
                    <p class="l-cc-cert-success-msg">has successfully completed</p>
                    <p class="l-cc-cert-course">%MODULENAME%</p>
                    <p class="l-cc-cert-course-type">courses from the LRN Legal Compliance and Ethics Center on</p>
                    <p class="l-cc-cert-date">%DATE%</p>
                    <p class="l-cc-cert-course-type">with a score of %SCORE%</p>
                </div>
            </div>
        </div>
    </body>

    </html>
    `);
}

function convertTemplateToHandlebars(htmlContent) {
    const tokenRegex = /%([A-Z]+)%/g;
    return htmlContent.replace(tokenRegex, '{{$1}}');
}

// define a route handle for the root url
app.get('/', async (req, res) => {
    try {
        // retrieve HTMl content from the DB
        const htmlContent = await getHTMLContentFromDB();

        const covertedHandleBarsTemplate = convertTemplateToHandlebars(htmlContent);

        console.log('DM ==> covertedHandleBarsTemplate: ', covertedHandleBarsTemplate);

        // define data object with real values for tokens
        const data = {
            FIRSTNAME: 'Denis',
            MIDDLENAME: 'Gerard',
            LASTNAME: 'McMahon',
            MODULENAME: 'Course 1',
            DATE: 'December 4, 2023',
            SCORE: '100%'
        };

        // compile the HTML content as a Handlebars template
        const template = hbs.compile(covertedHandleBarsTemplate);

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