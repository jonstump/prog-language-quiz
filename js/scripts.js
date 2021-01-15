const add = function add(wallet, wasp, mother) {
  return wallet + wasp +mother;
}

$(document).ready(function() {
  $("#quiz").submit(function(event) {
    $("#python").hide();
    $("#go").hide();
    $("#javascript").hide();
    $("#cobol").hide();
    event.preventDefault();
    const gender = parseInt($("#gender").val());
    const age = parseInt($("input#age").val());
    const wallet = parseInt($("input:radio[name=wallet]:checked").val());
    const wasp = parseInt($("input:radio[name=wasp]:checked").val());
    const mother = parseInt($("input:radio[name=mother]:checked").val());
    const total = add(wallet, wasp, mother);

    if (gender === 1 && ((total <= 3))){
      $('#python').show();
    } else if (gender === 1 && ((total <= 6))){
      $('#go').show();
    } else if (gender === (2,3) && ((total <= 3))){
      $('#python').show();
    } else if (gender === (2,3) && ((total <= 8))){
      $('#go').show();
    } else 
      $('#javascript').show();
  });
});