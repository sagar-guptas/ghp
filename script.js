function myFunction(){
 
    var input = document.getElementById("inputspan");
   
        // Get the input value
        var query = input.value;
        // Redirect the browser to the search result page using the input value
        window.location.href = "https://www.google.com/search?q=" + query;
      
    }
   