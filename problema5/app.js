$(document).ready(function() {
	$('#calculateButton').click(function() {
		var firstNumber = parseFloat($('#firstNumber').val());
		var secondNumber = parseFloat($('#secondNumber').val());
		var operator = $('#operator').val();
		var result;
		
		switch(operator) {
			case '+':
				result = firstNumber + secondNumber;
				break;
			case '-':
				result = firstNumber - secondNumber;
				break;
			case '*':
				result = firstNumber * secondNumber;
				break;
			case '/':
				result = firstNumber / secondNumber;
				break;
			case '%':
				result = firstNumber % secondNumber;
				break;
		}
		
		$('#result').html(result);
	});
});
