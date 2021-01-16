const add = function add(wallet, wasp, butterfly, tortoise, mother) {
  return wallet + wasp + butterfly + tortoise + mother;
}

$(document).ready(function() {
  $("#quiz").submit(function(event) {
    $("#python").hide();
    $("#go").hide();
    $("#javascript").hide();
    $("#cobol").hide();
    $("#results").hide();
    event.preventDefault();
    const personInput = $("input#person").val();
    const gender = parseInt($("#gender").val());
    const age = parseInt($("input#age").val());
    const wallet = parseInt($("input:radio[name=wallet]:checked").val());
    const wasp = parseInt($("input:radio[name=wasp]:checked").val());
    const butterfly = parseInt($("input:radio[name=butterfly]:checked").val());
    const tortoise = parseInt($("input:radio[name=tortoise]:checked").val());
    const mother = parseInt($("input:radio[name=mother]:checked").val());
    const total = add(wallet, wasp, butterfly, tortoise, mother);

      if (age) {
        if (age > 55) {
          $('#cobol').fadeIn()
          $('#results').fadeIn();
        } else if (gender === 1 && ((total <= 5))){
          $('#python').fadeIn()
          $('#results').fadeIn();
        } else if (gender === 1 && ((total <= 10))){
          $('#go').fadeIn()
          $('#results').fadeIn();
        } else if (gender === 2 && ((total <= 6))){
          $('#python').fadeIn()
          $('#results').fadeIn();
        } else if (gender === 2 && ((total <= 12))){
          $('#go').fadeIn()
          $('#results').fadeIn();
        } else if (gender === 3 && ((total <= 5))){
          $('#python').fadeIn()
          $('#results').fadeIn();
        } else if (gender === 3 && ((total <= 13))){
          $('#go').fadeIn()
          $('#results').fadeIn();
        } else 
          $('#javascript').fadeIn()
          $('#results').fadeIn();
      } else {
        alert('Please enter your age.');
      }

    $(".person").text(personInput);
  });
});