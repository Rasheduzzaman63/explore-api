fetch('https://jsonplaceholder.typicode.com/posts')
.then(res => res.json())
.then(data => displayPosts(data))


function displayPosts(posts){
    const postContainer = document.getElementById('post-container');
    
    for(let post of posts){
        console.log(post)
        const div = document.createElement('div')
        div.classList.add('post-style')
        div.innerHTML = `
        <h3>User- ${post.userId}</h3>
        <h5>Post: ${post.title}</h5>
        <p>Post description: ${post.body}</p>
        `
        postContainer.appendChild(div)
    }
}