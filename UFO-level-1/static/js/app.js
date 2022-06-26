// from data.js
var tableData = data;

// Get a reference to the table body
var tbody = d3.select("tbody");

// Step 2:  Use d3 to append one table row `tr` for each weather report object
// Don't worry about adding cells or text yet, just try appending the `tr` elements.
data.forEach(function(UFO_sighting) {
  var row = tbody.append("tr");

  Object.entries(UFO_sighting).forEach(function([key, value]) {
    // Append a cell to the row for each value
    // in the weather report object
    var cell = row.append("td");
    cell.text(value);
  });
});

// Select the button
var button = d3.select("#filter-btn")

// Select the form
var form = d3.select(".form-group")

// Create event handlers
button.on("click", runClick);
form.on("submit", runClick);

// Complete the event handler function for the form
function runClick() {

    // Prevent the page from refreshing
    d3.event.preventDefault();
    
    // Select the input element and get the raw HTML node
    var inputElement = d3.select("#datetime");
  
    // Get the value property of the input element
    var inputValue = inputElement.property("value");
  
    console.log(inputValue);
  
    var filteredData = tableData.filter(tableData => tableData.datetime === inputValue);

    console.log(filteredData)
    
    // remove data from the table
    tbody.html("");

    //append filtered data to the list
    filteredData.forEach(function(UFO_sighting) {
        var row = tbody.append("tr");
      
        Object.entries(UFO_sighting).forEach(function([key, value]) {
          // Append a cell to the row for each value
          // in the weather report object
          var cell = row.append("td");
          cell.text(value);
        });
      });

}