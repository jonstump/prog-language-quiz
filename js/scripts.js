$(document).ready(function() {
  $("#quiz").submit(function(event) {
    $("#language1").hide();
    $("#language2").hide();
    $("#language3").hide();
    event.preventDefault();
    const gender = $("#gender").val();
    const age = parseInt($("input#age").val());
    const wallet = parseInt($("input:radio[name=wallet]:checked").val());
    const wasp = $parseInt(("input:radio[name=wasp]:checked").val());
    const mother = $parseInt($("input:radio[name=mother]:checked").val());

    if (gender === ('male','female','other') && age < 100 && wallet + wasp + mother <= '3'){
      $('#python').show();
    } else if (gender === ('male','female','other') && age < 100 && wallet + wasp + mother <= '6'){
      $('#go').show();
    } else 
      $('#javascript').show();
  });
});