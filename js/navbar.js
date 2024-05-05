// var prevScrollpos = window.pageYOffset;
// window.onscroll = function() {
//   var currentScrollPos = window.pageYOffset;
//   if (prevScrollpos > currentScrollPos) {
//     document.getElementById("navBar").style.top = "0px";
//   } else {
//     document.getElementById("navBar").style.top = "-10vh";
//   }
//   prevScrollpos = currentScrollPos;
// }



// function mobile(){
//   var neki = document.getElementById('main-menu')
//   if(neki.style.top =="9.8vh"){
//     neki.style.top = "-50vh"
//   }
//   else{
//   neki.style.top = "9.8vh"
//   }
// }


document.getElementById('mobile-menu').addEventListener('click', ()=>{
    let menuButton = document.getElementById('mobile-menu')
    console.log(1);
    menuButton.classList.toggle('mobile-menu-active')

    if(menuButton.className.match('mobile-menu-active')){
        document.getElementById("main-menu").style.display = 'flex';
    }else{
        document.getElementById("main-menu").style.display = 'none';
    }
});


