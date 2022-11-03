let stars = document.getElementById("stars");
let moon = document.getElementById("moon");
let mountains3 = document.getElementById("mountains3");
let mountains4 = document.getElementById("mountains4");
let river = document.getElementById("river");
let boat = document.getElementById("boat");
let abdo = document.querySelector(".abdo") ; 

window.onscroll = function(){
    let value = scrollY ; 
    // console.log(value);
    stars.style.left = value + "px" ;
    moon.style.top = value*4 + "px" ;
    mountains3.style.top = value*2 + "px" ;
    mountains4.style.top = value*1.5 + "px" ;
    river.style.top = value + "px" ;
    boat.style.top = value + "px" ;
    boat.style.left = value*3 + "px" ;
    abdo.style.fontSize = value + "px" ;

    // this to make sure that Abdo is fixed at one point and will stop growing
    if(scrollY >= 80){
        abdo.style.fontSize = 80 + "px" ;
        abdo.style.postion = "fixed" ;
    }

    // to make the dawn effect 
    if(scrollY >= 127){
        document.querySelector('.main').style.background = "linear-gradient(#376281,#10001f)"
    }else{
        document.querySelector('.main').style.background = "linear-gradient(#200016,#10001f)"
    }

}