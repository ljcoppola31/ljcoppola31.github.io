function askQuestions () {





	var firstName = prompt ('What is your first name?');
	var lastName = prompt ('What is your last name?');

	var fullName = firstName + ' ' + lastName;


	$('h2').text('Hello ' + fullName)

	if (firstName.toLowerCase() == 'general' && lastName.toLowerCase() !== 'assembly') {
		console.log ('Hello ' + firstName + ' ' + lastName);
		} else if (firstName != 'General') {
			console.log ('you are not the General');
		} 
		
	var faveColor = prompt ('What is your favourite colour?').toLowerCase();

	if (faveColor == 'red' ||
		faveColor == 'blue' ||
		faveColor == 'green' ||
		faveColor == 'yellow') {

		$ ('h2').css('color', faveColor);
		}
}



	
// If the user's first name is 'General' and the last name 
// is NOT 'Assembly', then greet the general! (Hint: use console log)





// When the page loads
$(function() {

	$('img').on('click', askQuestions);

	// Hide the sections
	$('h3').next().hide(); 

	// When the user clicks an h3 heading
	$('h3').on('click', function() {

		// Show or hide the next element
		$(this).next().slideToggle(500);
	

	});

});
