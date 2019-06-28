/*
 * Andris Lapiņš al18011
 */

var hideMot = false;

var table = document.getElementsByTagName("table")[0];
table.setAttribute("id", "table");

var showbtn = document.getElementById("show-list");
showbtn.setAttribute("onclick", "show()");

var hidebtn = document.getElementById("hide");
hidebtn.setAttribute("onclick", "hide()");

//Category select
var lookup = {};
var categories = [];

for (var i in data.laureates) {
  for (var j in data.laureates[i].prizes) {
    var category = data.laureates[i].prizes[j].category;
    if (category && !(category in lookup)) {
        lookup[category] = 1;
        categories.push(category);
    }
  }
}
categories.sort();

$('#category-select').append('<option>'+ "All" +'</option>');
for (x in categories)
{
  var catOpt = categories[x];
  catOptFin = catOpt.charAt(0).toUpperCase() + catOpt.slice(1);
  $('#category-select').append('<option>'+ catOptFin +'</option>');
}

// Country select
var lookupCoun = {};
var categoriesCoun = [];

for (var i in data.laureates) {
  for (var j in data.laureates[i].prizes) {
    for (x in data.laureates[i].prizes[j].affiliations) {
      var country = data.laureates[i].prizes[j].affiliations[x].country;
      if (country && !(country in lookup)) {
        lookup[country] = 1;
        categoriesCoun.push(country);
      }
    }
  }
}
categoriesCoun.sort();

$('#country-select').append('<option>'+ "" +'</option>');
for (x in categoriesCoun)
{
  var counOpt = categoriesCoun[x];
  var counOptFin = counOpt.charAt(0).toUpperCase() + counOpt.slice(1);
  $('#country-select').append('<option>'+ counOptFin +'</option>');
}



function show() {
  var selected_option = $('#category-select').val().toLowerCase();
  var selected_gender = $('#gender-select').val();
  $('#table').empty();
  $('#table').append("<tr><th>Category</th><th>Year</th><th>Laureate</th><th>Country</th><th>Affiliations</th><th>Motivation</th></tr>");
  var lookupYearFrom = document.getElementById("year-from").value;
  var lookupYearUntil = document.getElementById("year-until").value;
  var selected_country = $('#country-select').val();

  if ((lookupYearFrom < 1900 && lookupYearFrom > 0) || lookupYearFrom > lookupYearUntil || lookupYearUntil > (new Date()).getFullYear())
  {
    alert("Invalid values! Please try again!");
    return;
  }



  var printCat;
  var printYear;
  var printLaur;
  var printLaurLast;
  var printCoun;
  var printAff;
  var printMot;
  for (var i in data.laureates) {
    var cnt = 1;
    for (var j in data.laureates[i].prizes) {
      var category = data.laureates[i].prizes[j].category;

      if (category == selected_option) { //the big If statement
        printCat = data.laureates[i].prizes[j].category;
        printCat = printCat.charAt(0).toUpperCase() + printCat.slice(1);
        printYear = data.laureates[i].prizes[j].year;
        if (lookupYearFrom != "") {
          if(printYear < lookupYearFrom || printYear > lookupYearUntil)
            {
              continue;
            }
        }
        printLaur = data.laureates[i].firstname;
        printLaurLast = data.laureates[i].surname;
        printCoun;
        printAff;
        for (x in data.laureates[i].prizes[j].affiliations) {
          printAff = data.laureates[i].prizes[j].affiliations[x].name;
          //Country check
          printCoun = data.laureates[i].prizes[j].affiliations[x].country;
        }
        if (selected_country != 0) {
          if (selected_country != printCoun) {
            continue;   
          }
        } else {
          if (typeof printAff  === 'undefined') {
            printAff = " ";
          }
          if (typeof printCoun  === 'undefined') {
            printCoun = " ";
          }
        }
        if (hideMot == true)
        {
          printMot = " ";
        } else {
          printMot =  data.laureates[i].prizes[j].motivation;
        }

        if (selected_gender != "both")
        {
          if (selected_gender == "f" && data.laureates[i].gender == "female")
          {
            $('#table').append("<tr id="+cnt+"><td>"+ printCat + "</td><td>"+ printYear +"</td><td>"+ printLaur + " " + printLaurLast + "</td><td>"+ printCoun +"</td><td>"+ printAff +"</td><td> "+ printMot +"</td></tr>");
            cnt++;
          }
          if (selected_gender == "m" && data.laureates[i].gender == "male") {
            $('#table').append("<tr id="+cnt+"><td>"+ printCat + "</td><td>"+ printYear +"</td><td>"+ printLaur + " " + printLaurLast + "</td><td>"+ printCoun +"</td><td>"+ printAff +"</td><td> "+ printMot +"</td></tr>");
            cnt++;
            }
        } else {
          $('#table').append("<tr id="+cnt+"><td>"+ printCat + "</td><td>"+ printYear +"</td><td>"+ printLaur + " " + printLaurLast + "</td><td>"+ printCoun +"</td><td>"+ printAff +"</td><td> "+ printMot +"</td></tr>");
          cnt++;
        }  
        //the Big else statement
      } else if (selected_option == "all") {
        printCat = data.laureates[i].prizes[j].category;
        if (typeof printCat  === 'undefined') {
          printCat = " ";
        }
        printCat = printCat.charAt(0).toUpperCase() + printCat.slice(1);
        printYear = data.laureates[i].prizes[j].year;
        if (lookupYearFrom != "") {
          if(printYear < lookupYearFrom || printYear > lookupYearUntil)
            {
              continue;
            }
        }
        printLaur = data.laureates[i].firstname;
        printLaurLast = data.laureates[i].surname;
        for (x in data.laureates[i].prizes[j].affiliations) {
          printAff = data.laureates[i].prizes[j].affiliations[x].name;
          //Country check
          printCoun = data.laureates[i].prizes[j].affiliations[x].country;
        }
        if (selected_country != 0) {
          if (selected_country != printCoun) {
            continue;   
          }
        } else {
          if (typeof printAff  === 'undefined') {
            printAff = " ";
          }
          if (typeof printCoun  === 'undefined') {
            printCoun = " ";
          }
        }

        if (hideMot == true)
        {
          printMot = " ";
        } else {
          printMot =  data.laureates[i].prizes[j].motivation;
        }

        if (selected_gender != "both")
        {
          if (selected_gender == "f" && data.laureates[i].gender == "female")
          {
            $('#table').append("<tr id="+cnt+"><td>"+ printCat + "</td><td>"+ printYear +"</td><td>"+ printLaur + " " + printLaurLast + "</td><td>"+ printCoun +"</td><td>"+ printAff +"</td><td> "+ printMot +"</td></tr>");
            cnt++;
          }
          if (selected_gender == "m" && data.laureates[i].gender == "male") {
            $('#table').append("<tr id="+cnt+"><td>"+ printCat + "</td><td>"+ printYear +"</td><td>"+ printLaur + " " + printLaurLast + "</td><td>"+ printCoun +"</td><td>"+ printAff +"</td><td> "+ printMot +"</td></tr>");
            cnt++;
            }
        } else {
          $('#table').append("<tr id="+cnt+"><td>"+ printCat + "</td><td>"+ printYear +"</td><td>"+ printLaur + " " + printLaurLast + "</td><td>"+ printCoun +"</td><td>"+ printAff +"</td><td> "+ printMot +"</td></tr>");
          cnt++;
        }    
      }
    }
  }
}

function hide()
{
  if (hideMot == false)
  {
    show();
    $("#hide").text("Hide motivation");
    hideMot = true;
  } else {
    show();
    $("#hide").text("Show motivation");
    hideMot = false;
  }
  
}