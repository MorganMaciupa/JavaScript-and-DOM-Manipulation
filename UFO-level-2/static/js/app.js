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
    
    // Select the input elemensa and get the raw HTML node
    var inputDate = d3.select("#datetime");
    var inputCity = d3.select("#city");
    var inputState = d3.select("#state");
    var inputCountry = d3.select("#country");
    var inputShape = d3.select("#shape");
  
    // Get the value property of the input elements
    var dateValue = inputDate.property("value");
    var cityValue = inputCity.property("value").toLowerCase();
    var stateValue = inputState.property("value").toLowerCase();
    var countryValue = inputCountry.property("value").toLowerCase();
    var shapeValue = inputShape.property("value").toLowerCase();
  
    console.log(inputDate);
    console.log(inputCity);
    console.log(inputState);
    console.log(inputCountry);
    console.log(inputShape);
  
    var filteredData = tableData.filter(tableData => 
      tableData.datetime === dateValue && tableData.city === cityValue &&
      tableData.state === stateValue && tableData.country === countryValue 
      && tableData.shape === shapeValue);

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