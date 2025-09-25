function myModal(clickedImg){
const className = clickedImg.classList[0];
const images = Array.from(document.querySelectorAll("." + className));
const myModal = document.querySelector(".my-modal");
const closeBtn= document.querySelector(".close-btn");
const leftBtn= document.querySelector(".left-btn");
const rightBtn= document.querySelector(".right-btn");
const modalImg = document.querySelector(".modal-img");

let isShown = false;
let currentIndex=images.indexOf(clickedImg);


 
function showModal(){
    myModal.classList.add("show-modal");
    modalImg.setAttribute("src",images[currentIndex].getAttribute("src"));
    isShown=true;

}
function removeModal(){
     myModal.classList.remove("show-modal");
     isShown=false;
}
function nextImage(){
    currentIndex++;

    if(currentIndex >= images.length){
    console.log(currentIndex);

        currentIndex=0;
    }
     modalImg.setAttribute("src",images[currentIndex].getAttribute("src"));
}   

function prevImage(){
    currentIndex--;
    if(currentIndex<0){
        currentIndex=images.length-1;
    }
     modalImg.setAttribute("src",images[currentIndex].getAttribute("src"));
} 
        showModal();
 
    rightBtn.addEventListener("click", nextImage);
    leftBtn.addEventListener("click", prevImage);
    closeBtn.addEventListener("click", removeModal);
    document.onkeydown=({code})=>{
        console.log(code);
        if(code == 'ArrowRight'){
            nextImage();
        }
        else if(code == 'ArrowLeft'){
            prevImage();
        }
        else if (code == 'Escape'){
            removeModal();
        }
    }

   document.onclick=({target})=>{
        if (isShown==true && target.classList.contains("my-modal")){
            removeModal();
        }
    }
    

}

const allImages =Array.from( document.querySelectorAll("img"));

allImages.map(img => {
  img.addEventListener("click", () =>{         
      myModal(img);                   
  });
});

