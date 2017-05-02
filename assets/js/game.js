var targetTotalValues = [1500, 1600, 1700, 1800, 1900, 2000, 2100, 2200, 2300, 2400, 2500];
var crystalValues = [100, 200, 300, 400, 500, 600, 700, 800];
var theTotal = 0;
var wins = 0;
var targetValue = 0;
var yeahAudio = new Audio('assets/audio/yeah.wav');
var loserAudio = new Audio('assets/audio/loser.wav');

function targetV() {
	targetValue = targetTotalValues[Math.floor(Math.random()*targetTotalValues.length)];
};

targetV();

function getRandom(arr) {
	randomNum = arr[Math.floor(Math.random()*arr.length)];	
	return randomNum;
}

for (var i = 1; i < 5; i++) {
	$('.btn-' + i).val(getRandom(crystalValues));
}

$('.target-value').text("Target Value: " + targetValue);
$('.wins').text("Wins: " + wins);

$('button').click(function(){
   theTotal = Number(theTotal) + Number($(this).val());
    $('.total').text("Total: "+theTotal);      

    if (targetValue === theTotal) {
    	wins++;
    	$('.wins').text("Wins: " + wins);
    	yeahAudio.play();
    	targetV();
    	$('.target-value').text("Target Value: " + targetValue);
    	theTotal = 0;
    	$('.total').text("Total: "+theTotal);
    } else if (targetValue < theTotal) {
    	$('.declaration').html("<p>You Lose!</p>" + "<p>Loser!</p>");
    	$('.total, .target-value, .wins').addClass('hide-me');
    	loserAudio.play();
    	setTimeout(location.reload.bind(location), 7000);
    }
});

$('.total').text("Total: "+theTotal);