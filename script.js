const form = document.querySelector("form");
const commentList = document.getElementById("comment-list");
const errorMessage = document.getElementById("error-message");


form.addEventListener("submit", function(event) {
    event.preventDefault(); 

    const firstName = form.elements["first-name"].value;
    const lastName = form.elements["last-name"].value;
    const message = form.elements["message"].value;
    
    if (!firstName || !lastName || !message) {
      errorMessage.style.display = "block"; 
    return;
    }

const newComment = document.createElement("div");
newComment.classList.add("flex", "space-x-4", "text-sm", "text-gray-500");

const commentContent = document.createElement("div");
commentContent.classList.add("flex-1", "py-10", "border-t", "border-gray-200");

const commentHeader = document.createElement("h3");
commentHeader.classList.add("font-medium", "text-gray-900");
commentHeader.textContent = firstName + " " + lastName;

const commentText = document.createElement("div");
commentText.classList.add("prose", "prose-sm", "mt-4", "max-w-none", "text-gray-500");

const commentParagraph = document.createElement("p");
commentParagraph.textContent = message;

commentText.appendChild(commentParagraph);
commentContent.appendChild(commentHeader);
commentContent.appendChild(commentText);

newComment.appendChild(commentContent);

commentList.appendChild(newComment);

form.reset();

errorMessage.style.display = "none";
});



















  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
 
  
  
  

  
  
  
  
  
  
  
  
  
  

  
  
  
  

 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 