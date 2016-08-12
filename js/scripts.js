$(document).ready(function() {
  $("form").submit(function(event) {
  event.preventDefault();




  var companyType = parseInt($("input:radio[name=companyType]:checked").val());
  alert(companyType);



  });
});
