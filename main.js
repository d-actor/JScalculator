// ** cancatanate multiple digit numbers
// ** dividing by zero not allowed, basic logic to prevent null input and display error message
// *** === BONUS === *** \\\
// ** Allow calculations to be added on to. e.g. 5 + 5 = 10 + 4 = 14
// ** Show a history of calculations
// ** Create a memory add and memory clear functionality.
// ** Implement as many advanced calculator features as you have time for (eg. sin, cosin, power etc...)
// ************use .eval, save yourself

var eq = ""

$('button').click( function(){
  if(this.id === "eval"){
    eq.split(/(\+|-|\/|\*)/)
    // console.log(eq)
    $('.output_area').html(eval(eq))
  } else if(this.id === "clear") {
    eq = ""
    $('.output_area').html("JS Calculator")
  } else {
    eq += this.id
    $('.output_area').html(eq)}
    // console.log(eq)
});
