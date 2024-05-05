
window.onresize =function(){
    setUp()
}
function vrednosti(){
    if(window.innerWidth < 1024 && window.innerWidth > 421){
        var zamik = '60vw'
        return zamik
    }
    if(window.innerWidth < 420 && window.innerWidth > 0){
        var zamik = '80vw'
        return zamik
    }
    else{
        var zamik = '30vw'
        return zamik
    }
}

function setUp(){
    var zamik = vrednosti()
    var x = document.getElementById('dogodki')
    var gumb = document.getElementById('dogodki-gumb')
    if(gumb.style.left < '0px')
    x.style.left = '-' + zamik; 
    // gumb.style.left = zamik; 
}



function dog(){
    var zamik = vrednosti()
    var x = document.getElementById('dogodki')
    var gumb = document.getElementById('dogodki-gumb')
    var icon = document.getElementById('icon')
    if (x.style.left < '0px') {
        console.log(1);
        icon.classList.add('fa-chevron-left')
        icon.classList.remove('fa-chevron-right')
        x.style.left = '0px';
        gumb.style.left = zamik;
    } 
    else {
        x.style.left = '-' + zamik;
        gumb.style.left = '0px';
        icon.classList.remove('fa-chevron-left')
        icon.classList.add('fa-chevron-right')
    }

}