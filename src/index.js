const fullname = document.getElementById("fullname");
console.log("CONTENT NOT YET LOADED!", fullname); //what will fullname evaluate to?




document.addEventListener("DOMContentLoaded", () => {
  console.log("CONTENT LOADED!");
  const button = document.getElementsByClassName('btn btn-primary')[0]
  button.addEventListener('click', fetchNewUser)
  
});



const fetchNewUser = () => {
  fetch("https://randomuser.me/api")
  .then(function(response) {
    return response.json();
  })
  .then(function(data) {
      renderData(data);
  })
}

const renderData = data => {

  const name = [data.results[0].name.first, data.results[0].name.last].join(' ')
  document.getElementById('fullname').innerText = name 

  const email = data.results[0].email
  document.getElementById('email').innerText = email 

  const street = [data.results[0].location.street.number, data.results[0].location.street.name].join(' ')
  document.getElementById('street').innerText = street 

  const city = data.results[0].location.city
  document.getElementById('city').innerText = city 

  const state = data.results[0].location.state
  document.getElementById('state').innerText = state 

  const postcode = data.results[0].location.postcode
  document.getElementById('postcode').innerText = postcode 

  const phone = data.results[0].phone
  document.getElementById('phone').innerText = phone 

  const cell = data.results[0].cell
  document.getElementById('cell').innerText = cell 

  const dob = data.results[0].dob.date
  document.getElementById('date_of_birth').innerText = dob










}