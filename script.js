//your code here
const getUser = document.getElementById('getUser');
getUser.addEventListener('click', displayDetails);

const getAge = document.getElementById('age');
getAge.addEventListener('click', displayAge);

async function displayDetails () {
    const response =  await fetch("https://randomuser.me/api/");

    var data = await response.json();
    console.log(data)
    // if (response) {
    //     hideloader();
    // }
    showDetails(data);
}

async function displayAge () {
    const response = await fetch("https://randomuser.me/api/");

    var data = await response.json();
    console.log(data)

    showAge(data);
}

const showDetails = (data) => {
    let tab = 
            `<tr>
                <th>Name</th>
                <th>Picture</th>
            </tr>`;

    for (let r of data.results) {
        tab += `<tr>
            <td>${r.name.first}</td>
            <td>${r.picture.medium}</td>
        </tr>`;
    }
    
    document.getElementById('userDetails').innerHTML = tab;
}

const showAge = (data) = {
    
}
