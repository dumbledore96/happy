var i = 0 ,speed=100 ,div = 1;
var text1 = "Here'll Make You Fun";
var text2 = "想來點好玩的嗎"
function typeWriter(){
    if(i < text1.length && div == 1){
        document.getElementById("page-title").innerHTML += text1.charAt(i);
        i++;
        setTimeout(typeWriter, speed);
    }
    else{
        i = 0;
        div++;
        setTimeout(typeWriter2, speed);
    }
}
function typeWriter2(){
    if(i < text2.length && div == 2){
        document.getElementById("page-index").innerHTML += text2.charAt(i);
        i++;
        setTimeout(typeWriter2, speed);
    }
}