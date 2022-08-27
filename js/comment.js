fetch('https://jsonplaceholder.typicode.com/comments')
.then(res => res.json())
.then(data => displayComment(data))

function displayComment(comments){
    const commentContainer = document.getElementById('comment-container')
    for(let comment of comments){
        console.log(comment)
        const createDiv = document.createElement('div');
        createDiv.innerHTML =`
        <h3>Id: ${comment.postId}</h3>
        <h4>Name: ${comment.name}</h4>
        <h4>Email: ${comment.email}</h4>
        <h6>Description: ${comment.body}</h6>
        
        `
        commentContainer.appendChild(createDiv)
    }
}