// from data.js
var tableData = data;

// Declare tbody as variable
let ufoTable = d3.select("tbody");

// Select the filter button
var button = d3.select("#filter-btn");

// Create event handlers for clicking the button
button.on("click", handleClick);

function createTable(data) {
  // Clear existing table
  ufoTable.html("");

  // Create function with d3 to update each cell's text with all values found from the filtered data
  // [datetime, city, state, country, shape, duration, comments]
  filterData.forEach(function(dataRow) {
  console.log(dataRow);
  let row = ufoTable.append("tr");

  // Append a cell into the row with each value in the ufo table object
  Object.entries(dataRow).forEach(([key,value]) => {
    let cell = row.append("td");
    cell.text(value);
    });
  });
};

function handleClick() {
  // Prevents page from refreshing
  d3.event.preventDefault();

  // Select the value from the datetime element
  let inputDate = d3.select("#datetime").property("value");
  console.log(`UFO Sightings on: ${inputDate}`);

  // Get the data from the date inputted by the user
  if(inputDate) {
    filterData = tableData.filter(date => date.datetime == inputDate);
  };

  // Create table with filtered data from the date input
  createTable(filterData);
};

// Create table on default webpage from data source.
createTable(tableData);