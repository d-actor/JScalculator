// *** === BONUS === *** \\\
// ** Show a history of calculations
// ** Create a memory add and memory clear functionality.
// ** Implement as many advanced calculator features as you have time for (eg. sin, cosin, power etc...)

var eq = ""

$('button').click( function(){
  if(this.id === "eval"){
    if (eq !== ""){
      eq.split(/(\+|-|\/|\*)/)
      if (eq[0] === "0" && eq[1] === "/" || eq[2] === "0" && eq[1] === "/"){
        alert("I don't have time to explain the ins and outs right now, but that's gonna be a no-go")
        eq = ""
        $('.output_area').html("Infinity?")
      } else {
        $('.output_area').html(eval(eq))
        eq = eval(eq)
      };
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
