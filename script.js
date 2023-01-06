//your code here
const getUser = document.getElementById('getUser');
getUser.addEventListener('click', displayDetails);

async function displayDetails () {
    const response =  await fetch("https://randomuser.me/api/");

    var data = await response.json();
    console.log(data)
    // if (response) {
    //     hideloader();
    // }
    show(data);
}

const show = (data) => {
    let tab = 
            `<tr>
                <th>Name</th>
                <th>Picture</th>
            </tr>`;

    for (let r of data.results) {
        tab += `<tr>
            <td>${r.name}</td>
            <td>${r.picture}</td>
        </tr>`;
    }
    
    document.getElementById('userDetails').innerHTML = tab;
}