// ** dividing by zero not allowed, basic logic to prevent null input and display error message
// *** === BONUS === *** \\\
// ** Show a history of calculations
// ** Create a memory add and memory clear functionality.
// ** Implement as many advanced calculator features as you have time for (eg. sin, cosin, power etc...)

var eq = ""

$('button').click( function(){
  if(this.id === "eval"){
    if (eq !== ""){
      eq.split(/(\+|-|\/|\*)/)
      $('.output_area').html(eval(eq))
      eq = eval(eq)
    } else {
      alert("...nothing */+- nothing is still nothing...")
    }
  } else if(this.id === "clear") {
    eq = ""
    $('.output_area').html("JS Calculator")
  } else {
    eq += this.id
    $('.output_area').html(eq)}
});
