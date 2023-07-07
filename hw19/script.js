"use strict";
document.querySelector("#postButton").addEventListener("click", getURL);

const commentButton = document.querySelector("#comments_button");
const inputPostId = document.querySelector("#postId");

function getURL() {
    const containers = document.getElementsByClassName("container");
    
    console.log(containers.length);
    
    if (containers.length > 0) {    
        const containersArray = Array.from(containers);
        
        console.log(containersArray);
        
        containersArray.forEach(element => {
            element.remove();
        });
    } 

    const id = inputPostId.value;
    console.log(id);
    if (Number.isInteger(+id) && +id > 0) {
        const postURL = `https://jsonplaceholder.typicode.com/posts/${id}`;
        const commentsURL = postURL + "/comments";
        commentButton.setAttribute("data-url", commentsURL);
        getPost(postURL);
        inputPostId.value = "";
    }   else {
        alert("You must enter a positive whole number");
    }
}

function getPost(requestURL) {

    fetch (requestURL)
        .then(response => {
            if (response.ok) {
                return response.json();
            } else {
                throw new Error("The error status:" + response.status);
            }
        })       
        .then(currentPost => {
            showPost(currentPost);
        })
        .catch(error => alert(error));
        
}

function showPost(post) {
    const postContainer1 = document.querySelector("#post_container");
    const postContainer = document.createElement("div");
    postContainer.classList.add("container")
        
    const h = document.createElement("h1");
    h.insertAdjacentText("afterbegin", post.title);
    postContainer.insertAdjacentElement('afterbegin', h);
        
    const div = document.createElement("div");
    div.insertAdjacentText("afterbegin", post.body);
    postContainer.insertAdjacentElement('beforeend', div);
    postContainer1.insertAdjacentElement('afterbegin',postContainer);

    commentButton.style.display = "block";
}

commentButton.addEventListener('click', getComments);

function getComments() {
        fetch (this.getAttribute("data-url"))
            .then(response => {
                if (response.ok) {
                    return response.json();
                } else {
                    throw new Error("Статус помилки:" + response.status)
                }
            })
            .then(currentComments => {
                showComments(currentComments);
            })
}

function showComments(comments) {
    commentButton.style.display = "none";
    const commentsContainer = document.querySelector("#comments_container");
    comments.forEach(element => {
        const commentItem = document.createElement("div");
        const commentBody = document.createElement("div");
        const commentName = document.createElement("div");
        commentName.className = "name";
        const commentEmail = document.createElement("div");
        commentEmail.className = "email";

        commentBody.insertAdjacentText("afterbegin", element.body);
        commentName.insertAdjacentText("afterbegin", element.name);
        commentEmail.insertAdjacentText("afterbegin", element.email);

        commentItem.insertAdjacentElement("beforeend", commentName);
        commentItem.insertAdjacentElement("beforeend", commentEmail);
        commentItem.insertAdjacentElement("beforeend",commentBody);
        commentItem.className = "container";

        commentsContainer.insertAdjacentElement("beforeend", commentItem);
    });
}
