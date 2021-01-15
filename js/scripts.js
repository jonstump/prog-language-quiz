$(document).ready(function() {
  $("#quiz").submit(function(event) {
    $("#language1").hide();
    $("#language2").hide();
    $("#language3").hide();
    event.preventDefault();
    const gender = $("#gender").val();
    const age = parseInt($("input#age").val());
    const wallet = $("input:radio[name=wallet]:checked").val();
    const wasp = $("input:radio[name=wasp]:checked").val();
    const mother = $("input:radio[name=mother]:checked").val();

    if (gender === ('gender option') && wallet === ('something') && age < 50 && wasp === ('something') && mother === ('something')){
      $('#Python').show();
    } else if (gender === ('gender option') && wallet === ('something') && age < 50 && wasp === ('something') && mother === ('something')){
      $('#Go').show();
    } else (gender === 'gender option' && wallet === 'something' && age < 50 && wasp === 'something' && mother === 'something'); {
      $('#Javascript').show();
    }
  });
});