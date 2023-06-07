
var cookieDiv = document.querySelector(".cookie_policy");

function accept() {
    cookieDiv.remove();
}


function change(element){
    element.src = "./assets/succulents-2.jpg" 

}

function revertPic(element) {
    element.src = "./assets/succulents-1.jpg"
    }