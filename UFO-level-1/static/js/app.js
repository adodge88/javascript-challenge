// from data.js
var existingSightings = data;

// Create a basic HTML web page or use the index.html file provided 
// (we recommend building your own custom page!).


// Use D3 to select the table body
var tbody = d3.select("tbody");

// Using the UFO dataset provided in the form of an array of JavaScript objects,
// write code that appends a table to your web page and then adds new rows of 
// data for each UFO sighting.

// Make sure you have a column for 
//      date/time, city, state, country, shape, and comment at the very least.

// New UFO Sighting entry
var newUFOsightings = [{
                datetime: "2/9/2020",
                city: "boston",
                state: "ma",
                country: "us",
                shape: "saucer",
                durationMinutes: "they're still here",
                comments: "take me to your leader"
}];


// combine that new sightings with the existing data
var allSightings = existingSightings.concat(newUFOsightings);
console.log(existingSightings.length);
console.log(newUFOsightings.length);
console.log(allSightings.length);

// Loop through all sightings and display all in table when site launches
allSightings.forEach((UFOsighting) => {
  var row = tbody.append("tr");
  Object.entries(UFOsighting).forEach(([key, value]) => {
    var cell = row.append("td");
    cell.text(value);
  });
});

// Use a date form in your HTML document and write JavaScript code that will listen
// for events and search through the date/time column to find rows that match user input.
var button = d3.select("#filter-btn");

button.on("click", function(){
  // clear Table
  tbody.html("");
  
  //Select the element & value
  var inputElement = d3.select("#datetime");
  var inputValue = inputElement.property("value");
  console.log(inputValue);
  
  // Filter data & update table
  var filteredUFOs = allSightings.filter(sighting => sighting.datetime === inputValue);
  console.log(filteredUFOs);

          filteredUFOs.forEach((UFOsighting) => {
            var row = tbody.append("tr");
            Object.entries(UFOsighting).forEach(([key, value]) => {
              var cell = row.append("td");
              cell.text(value);
            });
          });
});
