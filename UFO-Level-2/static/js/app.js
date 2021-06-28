// from data.js
var tableData = data;

// Declare tbody as variable
let ufoTable = d3.select("tbody");

// Select the filter button
var button = d3.select("#filter-btn");
var form = d3.select("#form");

function createTable(data) {
  // Clear existing table
  ufoTable.html("");

  // Create function with d3 to update each cell's text with all values found from the filtered data
  // [datetime, city, state, country, shape, duration, comments]
  data.forEach((dataRow) => {
    let row = ufoTable.append("tr");

    // Append a cell into the row with each value in the ufo table object
    Object.entries(dataRow).forEach(([key,value]) => {
      let cell = row.append("td");
      cell.text(value);
    });
  });
};

// Store filtered values
var filters = {};

// For this to work, the input ID in the HTML code must be the same
// as the keys seen in the data.js file.
function updateFilters() {
  
  // Save the element, value, and id of the filter that was changed
  var changedElement = d3.select(this).select("input");
  var elementValue = changedElement.property("value");
  var filterId = changedElement.attr("id");

  // If a filter value was entered then add that filterId and value
  // to the filters list. Otherwise, clear that filter from the filters object
  if (elementValue) {
    filters[filterId] = elementValue;
  }
  else {
    delete filters[filterId];
  };

  // Create table with filtered data from the date input
  filterTable();
};

function filterTable() {
  
  // Select filteredData to the tableData
  let filteredData = tableData;

  // Loop through all fo the filters and keep any data that matches the filter values
  Object.entries(filters).forEach(([key,value]) => {
    filteredData = filteredData.filter(row => row[key] === value);
  });

  // Build a new table using the filtered data
  createTable(filteredData);
};

// Attach event to listen for changes to each filter
d3.selectAll(".filter").on("change", updateFilters);

// Create table on default webpage from data source
createTable(tableData);