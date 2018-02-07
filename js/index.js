function displayQ() {                       //function to display quote when page opens and body loads
  $.getJSON(api, function(data){
  let text = data.quoteText;
  let author = data.quoteAuthor;
 document.getElementById("text").innerHTML = text; 
  document.getElementById("author").innerText = "-"+author; 
});
};

let api = "https://cors-anywhere.herokuapp.com/https://api.forismatic.com/api/1.0/?method=getQuote&format=json&lang=en";  //fetching api from quotes server bypassing CORS 

let tweet = document.getElementById("tweet");
tweet.onclick = function(){
  window.open('https://twitter.com/intent/tweet?text=' + document.getElementById("text").innerHTML + document.getElementById("author").innerHTML); 
};
  
let generate = document.getElementById("newQ");
generate.onclick = function(){
  $.getJSON(api, function(data){
  let text = data.quoteText;                //getting quote
  let author = data.quoteAuthor;            //getting author
 document.getElementById("text").innerHTML = text; 
  document.getElementById("author").innerText = "-"+author; 
});
};
