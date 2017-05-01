var targetTotalValues = [500, 600, 700, 800, 900, 1000, 1100, 1200, 1300, 1400, 1500];
var theTotal = 0;
var wins = 0;
var targetValue = 0;

function targetV() {
	targetValue = targetTotalValues[Math.floor(Math.random()*targetTotalValues.length)];
};

targetV();

$('.target-value').text("Target Value: " + targetValue);

$('button').click(function(){
   theTotal = Number(theTotal) + Number($(this).val());
    $('.total').text("Total: "+theTotal);        
});

$('.total').text("Total: "+theTotal);

if (targetValue === theTotal) {
	wins++;
}