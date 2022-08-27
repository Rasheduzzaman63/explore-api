
function dataUser2(){
    fetch('https://jsonplaceholder.typicode.com/users')
    .then(res => res.json())
    .then(data => dataDisplay2(data))
}

function dataDisplay2(data){
    const ul = document.getElementById('unorder-list');
    for(let user of data){
        // console.log(user.name)
        const li = document.createElement('li')
        li.innerText = user.name;
        ul.appendChild(li)
    }
    
}