// img src change
function smallImg(smallimg){
    var main_img = document.getElementById("main_img");
    main_img.src = smallimg.src;
}


// img border active class
var small_img = document.querySelectorAll(".small_img");
small_img.forEach(img =>{
    img.addEventListener('click', function(){
        small_img.forEach(images => images.classList.remove("small_img_active"));
        this.classList.add("small_img_active")
    })
})