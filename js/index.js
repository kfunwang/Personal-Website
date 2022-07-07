var currentIndex = 0;
var img_number = document.getElementsByClassName("carousel-img").length;  //6
var _timer = setInterval(run, 2000); //2秒



//run
function run(){
    currentIndex++;
    if(currentIndex == img_number){
        slideTo(0);
    }
    else{
        slideTo(currentIndex);
    }
}

/*
function run(){
    currentIndex++;
    currentIndex == img_number ? 0 : currentIndex;
    slideTo(currentIndex);
}
*/




//切換圖片和小圓點
function slideTo(index){
    console.log(index);
    var index = parseInt(index);
    var img = document.getElementsByClassName("carousel-img");
    for(var i=0; i<img.length; i++){
        if(i == index){
            img[i].display = "inline";
        }
        else{
            img[i].display = "none";
        }
    }
    /*
    var btn = document.getElementsByClassName("carousel-btn");
    for(var j=0; j<btn.length; j++){
        if(j == index){
            btn[i].classList.add("hover");  //新增輪播按鈕hover
        }
        else{
            btn[i].classList.remove("hover");   //去除輪播按鈕hover
        }
    }
    */
    
}


