$(document).ready(function() {
  $("form").submit(function(event) {
  event.preventDefault();

  companyType = 0;
  appType = 0;

  var companyType = parseInt($("input:radio[name=orgType]:checked").val());
  alert(companyType);
  var appType = parseInt($("input:radio[name=appType]:checked").val());
  alert(appType);


  if


  });
});
