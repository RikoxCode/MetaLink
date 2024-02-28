const XMLHttpRequest = require("xmlhttprequest").XMLHttpRequest;

// import the test-data.json file
const testData = require('./test-data.json').real_data;

// function to get the API URL
const apiURL = "http://10.2.2.16:3000/api/";

// function to request the API
function createData() {
    console.log('Creating data...')
    // loop through the test data
    for (let i = 0; i < testData.length; i++) {
        // create a new XMLHttpRequest object
        let xhr = new XMLHttpRequest();

        // open a new connection, using the POST request on the URL endpoint
        xhr.open('POST', apiURL + 'notemeta', true);

        // set the request header
        xhr.setRequestHeader('Content-Type', 'application/json');

        // send the request
        xhr.send(JSON.stringify(testData[i]));
    }
}

// call the function
createData();

