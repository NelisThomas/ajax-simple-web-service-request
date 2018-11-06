 let quote;
 //Create the XHR Object
 let xhr = new XMLHttpRequest;
 //Call the open function, GET-type of request, url, true-asynchronous
 xhr.open('GET', 'https://thatsthespir.it/api', true)
 //call the onload 
 xhr.onload = function() 
     {
         //check if the status is 200(means everything is okay)
         if (this.status === 200) 
             {
                 //return server response as an object with JSON.parse
                 quote = JSON.parse(this.responseText);
                //  console.log(JSON.parse(this.responseText));
     } else {
         alert("I'm showing an error to the user");
     }
     console.log(quote);
     loadText();
    }
 //call send
 xhr.send();

 function loadText(){
     let blockquote = document.getElementById("quote");
     blockquote.innerHTML = '"' + quote.quote + '". Written by: ' + quote.author;
 }