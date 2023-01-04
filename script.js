//your code here
const getUser = document.getElementById('getUser');
getUser.addEventListener('click', displayDetails);

function displayDetails() {
    fetch('https://randomuser.me/api/')
    .then(res => {
        return res.json();
    })
    .then(data => {
        data = JSON.parse(data);
        data.forEach(element => {
            const markup = `<li>${element.name}</li>`;

            document.querySelector('ul').insertAdjacentHTML('beforeend', markup);
        });
    })
}