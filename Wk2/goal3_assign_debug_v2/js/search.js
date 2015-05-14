/*jslint white: true, browser: true, devel: true*/
/*
     Name: Timothy Castillo
     Date: May 6, 2015
     Class & Section:  PWA1-1
     Comments: "Goal 3: Assignment: Debug V2"
 */

// ******************************************                                                       // *********************
// Line definitions show directly above lines                                                       // Errors show along here
// ******************************************                                                        // *********************

// Create privatized scope using a self-executing function
(function () {                                                                                        // Spacing could be better for readability

  // Invoke strict mode
  "use strict";

  // Variable initialization (DO NOT FIX ANY OF THE BELOW VAR's)**
  // Declaring resultsDIV to be equal to the id named "results"
  var resultsDIV = document.getElementById("results"),

    // Declaring searchInput to be equal to the input field named "search"
    searchInput = document.forms[0].search,

    // Setting currentSearch equal to empty value
    currentSearch = '',

    validate,

    search,
    queryArray,
    results,
    noMatch;

  // Validates search query
  validate = function (query) {                                                                   // "Validate" spelled "validate" - requires corrected spelling - will need to find matching references for correct spelling

    // Trim whitespace from start and end of search query
    // While the term has at least one space at the end =>
    while (query.charAt(0) === " ") {
      query = query.substring(1, query.length);
    }

    // => replace the space with no characters
    while (query.charAt(query.length - 1) === "") {
      query = query.substring(0, query.length - 1);
    }

    // Check search length, must have 3 characters
    // If the search query length is less than 3 characters =>
    if (query.length < 3) {

      // => ALERT the user to write a longer string =>
      alert("Your search query is too small, try again.");                                            // Missing Right Quote to complete alert

      // (DO NOT FIX THE LINE DIRECTLY BELOW)
      // => When the search input value has the cursor focus =>
      searchInput.focus();

      // => return the searchInput value
      return;

    }

    // Invoke function search using the query value as the parameter
    search(query);

  };

  console.log(validate());

  // Finds search matches
  // Declare variable search to be equal to function
  search = function(query){                                                                      // Missing curly brackets

  	var dbTitleEnd,
  		dbitem,
  		db,
  		qitem,
  		compare,
  		ii,
  		jj,
  		j,
  		i;

    // split the user's search query string into an array
    queryArray = query.join(" ");

    // array to store matched results from database.js
    results = [];

    // loop through each index of db array
    for(i = 0, j = db.length; i < j; i =+ 1){

      // each db[i] is a single video item, each title ends with a pipe "|"
      // save a lowercase variable of the video title
      dbTitleEnd = db[i].indexOf('|');
      dbitem = db[i].tolowercase().substring(0, dbTitleEnd);

      // loop through the user's search query words
      // save a lowercase variable of the search keyword
      for( ii = 0, jj = queryArray.length; ii < jj; ii =+ 1){
        qitem = queryArray[ii].tolowercase();

        // is the keyword anywhere in the video title?
        // If a match is found, push full db[i] into results array
        compare = dbitem.indexOf(qitem);
        if(compare !== -1){
          results.push(db[i]);
        }
      }                                                                                             // Missing curly brackets
    }                                                                                               // Missing curly brackets

    // Run the sort function through the results array
    results.sort();

    // Check that matches were found, and run output functions
    // If there are no matches =>
    if (results.length = 0) {

      // => Invoke noMatch function
      noMatch();
    } else {

      // => Invoke showMatches function
      showMatches(results);

    };
  };

  // Put "No Results" message into page (DO NOT FIX THE HTML VAR NOR THE innerHTML)
  var noMatch = function(){

    // Defining variable html as a concatenated string
    var html = ''+
      '<p>No Results found.</p>'+
      '<p style="font-size:10px;">Try searching for "JavaScript".  Just an idea.</p>'
    ;

    // Set the inner HTML of variable resultsDIV to the the string defined in variable html
    resultsDIV.innerHTML = html;

  };

  // Put matches into page as paragraphs with anchors
  var showMatches = function(results){

    // THE NEXT 4 LINES ARE CORRECT.
    // Defining variable html as a short paragraph tag; declaring title and url variables
    var html = '<p>Results</p>',
      title,
      url
    ;                                                                                                // Missing curly brackets

    // loop through all the results search() function
    for(var i=0, j=results.length; i<j; i++){

      // title of video ends with pipe
      // pull the title's string using index numbers
      titleEnd = results[i].indexOf('|');
      title = results[i].subString(0, titleEnd);

      // pull the video url after the title
      url = results[i].substring(results[i].indexOf('|')+1, results[i].length);

      // make the video link - THE NEXT LINE IS CORRECT.
      html += '<p><a href=' + url + '>' + title + '</a></p>';

    };

    // Set the inner HTML of the resultsDIV to the value of variable html
    resultsDIV.innerHTML = html; //THIS LINE IS CORRECT.

  };

  // The onsubmit event will be reviewed in upcoming Course Material.
  // THE LINE DIRECTLY BELOW IS CORRECT
  document.forms[0].onsubmit = function(){

    // Declare variable query to be equal to searchInput.value
    var query = searchInput.value;
    validate(query);

    // return false is needed for most events - this will be reviewed in upcoming course material
    // THE LINE DIRECTLY BELOW IS CORRECT
    return false;
  ;                                                                                                  // Missing curly brackets

})();
