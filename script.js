//your code here
const getUser = document.getElementById('getUser');
getUser.addEventListener('click', displayDetails);

function displayDetails() {
    fetch('https://randomuser.me/api/')
        .then(res => res.json())
        .then(data => console.log(data))
}