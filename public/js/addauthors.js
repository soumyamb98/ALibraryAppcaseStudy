let myaddform = document.getElementById("myaddform");
// myaddform.addEventListener("submit", (e) => { 
//     e.preventDefault();
    // return validate();
function validate() {
    let authorauthor = document.getElementById("authorauthor");
    let authorborn = document.getElementById("authorborn");
    let authordetails = document.getElementById("authordetails");
    let authorimages = document.getElementById("authorimages");

        if(authorauthor.value===""||authorborn.value ===""||authordetails.value===""||authorimages.value ===""){
            alert("fill author, authorborn, details and choose any image");
            return false;
        } else {
            return true;
        }
    }
