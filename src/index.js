const fullname = document.getElementById("fullname");
console.log("CONTENT NOT YET LOADED!", fullname); //what will fullname evaluate to?

function printData(json) {
  document.getElementById("fullname").innerHTML = json.results[0].name.title
    + " " + json.results[0].name.first + " " + json.results[0].name.last;
  document.getElementById("state").innerHTML = json.results[0].location.state;
  document.getElementById("street").innerHTML = json.results[0].location.street.name + " "
  + json.results[0].location.street.number;
  document.getElementById("postcode").innerHTML = json.results[0].location.postcode;
  document.getElementById("phone").innerHTML = json.results[0].phone;
  document.getElementById("cell").innerHTML = json.results[0].cell;
  document.getElementById("date_of_birth").innerHTML = json.results[0].dob.date;
  document.getElementById("email").innerHTML = json.results[0].email;
  let imgurl = json.results[0].picture.thumbnail;
  document.getElementById("profile_picture").src = imgurl;



}

document.addEventListener("DOMContentLoaded", () => {
  document.querySelector('button').addEventListener('click', getData);
  let results;
  function getData(){
  let data = fetch('https://randomuser.me/api/')
    .then( res => res.json())
    .then (json => printData(json));
}
  console.log("CONTENT LOADED!");

});
