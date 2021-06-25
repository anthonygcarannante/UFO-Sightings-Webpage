// from data.js
var tableData = data;

// Select the filter button
var button = d3.select("#filter-btn");

// Select the form
var form = d3.select("#form");

// Create event handlers for clicking the button
button.on("click", filterDate);
form.on("submit", filterDate);

function filterDate() {

    // Prevent the page from refreshing
    d3.event.preventDefault();

    // Select the input element to get the raw HTML node
    var inputElement = d3.select("#datetime");

    // Select the value from the datetime element
    var inputDate = inputElement.property("value");
    console.log(`UFO Sightings on: ${inputDate}`);

    // Get the data from the date inputted by the user
    var filteredData = tableData.filter(date => date.datetime == inputDate);
    
    // Create function with d3 to update each cell's text with all values found from the filtered data
    // [datetime, city, state, country, shape, duration, comments]
    filteredData.forEach(function(insertData) {
        console.log(insertData);
        var ufoTable = d3.select("#ufo-table");
        var row = ufoTable.append("tr");

        // Append a cell into the row with each value in the ufo table object
        Object.entries(insertData).forEach(function([key,value]) {
            var cell = row.append("td");
            cell.text(value);
        });
    });

};
