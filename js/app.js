function dataUser(){
    fetch('https://jsonplaceholder.typicode.com/users')
    .then(ref => ref.json())
    .then(data => displayData(data))
}

function displayData(data){
    const ul = document.getElementById('ul-list');
    for(let user of data){
        const li = document.createElement('li')
        li.innerText = user.email
        ul.appendChild(li)
    }
}