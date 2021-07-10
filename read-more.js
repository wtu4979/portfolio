
function readMore(){
    var readMore = document.getElementById("read-more-btn");
    var moreText = document.getElementById("more-text");
    var dots = document.getElementById("dots");

    if(dots.style.display === "none"){
        dots.style.display = "inline";
        moreText.style.display = "none";
        readMore.innerHTML = "Read More";

    } else{
        dots.style.display = "none";
        moreText.style.display = "inline";
        readMore.innerHTML = "Read Less";
    }


}



