$(document).ready(function(){

    console.log('Ready')

    // Fetch the current date and update it in the DOM
    // Assuming you have an element with id 'date' to display the date
    let currentDate = new Date();
    $('#date').text(currentDate.toDateString());

    // Write an event, when Submit button is clicked
    $('#submitButton').click(function(){

        // Get the text value from the textarea using the 'val()' method
        let textValue = $('#text').val();

        // Convert it to a JS object.
        // Provide a 'key' here and write the same in app.py file as well to extract data
        let inputText = {'key': textValue};
        console.log(inputText);

        // Ajax request
        $.ajax({

            // Type of web request, e.g., 'POST' or 'GET'
            type: 'POST',

            // URL where you send the data
            url: '/your/api/endpoint', // Replace with the actual endpoint

            // Data to be sent in JSON format
            data: JSON.stringify(inputText),

            // Type of response expected is json
            dataType: 'json',

            // Content type
            contentType: 'application/json',

            // If everything is successful, run this function
            success: function(result){

                // Extract prediction and emoticon url from the result

                // Update the DOM elements

                // Show them

            },

            // If any error, run this function
            error: function(result){
                console.log(result);
            }
        });

        // Clearing the textbox after every button push
        $('#text').val("");
    });
});
