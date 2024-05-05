var IMGs = Array.from(document.getElementsByTagName('img'))
var BIG = document.getElementById('img-big')
var bigDiv = document.getElementById('big-img')

function zapri(){
    bigDiv.style.display = 'none'
}

IMGs.forEach(img => {
    img.addEventListener('click', ()=>{
        bigDiv.style.display = 'flex'
        var loc = img.src.slice(img.src.indexOf('/img'))
        BIG.src = ".." + loc.toString()
    })
});
