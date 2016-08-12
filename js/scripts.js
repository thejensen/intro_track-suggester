// waits til the html document is loaded before javascript loads/runs
$(document).ready(function() {
// waits til the form is submitted before running the following javascript/jquery
  $("form#inputs").submit(function(event) {
// prevents the annoying default behavior (e.g. refreshing the page) from occurring with the submission of the form, the curly braces above enclose the rest of the logic to the bottom of the larger function.
  event.preventDefault();

// establishing variables assigned the score of 0 that will incrementally increase score with every selection that is assigned the value associated with the variable, which will ultimately store the final scores of the survey, as they're changed and updated below.

// Begin business logic
  var rubyRails = 0;
  var phpDrupal = 0;
  var javaAndroid = 0;
  var cssDesign = 0;
  var cNet = 0;

// writing variables that are assigned the value of the radio button that the user checked off

// REMOVE THE ALERTS WHEN YOU"RE DONE!
  var companyType = parseInt($("input:radio[name=orgType]:checked").val());
  var appType = parseInt($("input:radio[name=appType]:checked").val());


  if (companyType === 1) {
    rubyRails += 1;
  }
  if (companyType === 2) {
    phpDrupal += 1;
  }
  if (companyType === 3 ) {
    javaAndroid += 1;
  }
  if (companyType === 4) {
    cssDesign += 1;
  }
  if (companyType === 5) {
    cNet += 1;
  }

  if (appType === 1) {
    rubyRails += 1;
  }
  if (appType === 2) {
    phpDrupal += 1;
  }
  if (appType === 3 ) {
    javaAndroid += 1;
  }
  if (appType === 4) {
    cssDesign += 1;
  }
  if (appType === 5) {
    cNet += 1;
  }

// End Business Logic
// Begin User Interface logic

  if (rubyRails >= 2) {
    $("#rubyRails").show();
  }



  });
});
