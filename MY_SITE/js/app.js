document.addEventListener('mousemove', e=>{
    Object.assign(document.querySelector(".maincontent"), {
       style: ` 
    
    
       --move-x: ${(e.clientX - window.innerWidth / 2)*-0.005}deg;
       --move-y: ${(e.clientY - window.innerHeight / 2)*-0.01}deg;
       
       
       
       `
    })
    
    })

document.querySelector('.linktodown').addEventListener('click', ()=>{
    document.querySelector('.maincontent').classList.add("hiddenPages")
    setTimeout(function(){
        document.querySelector('.maincontent').classList.add("hiddenAllpages")
        },700)  
})

document.querySelector('.linktodown').addEventListener('click', ()=>{
    document.querySelector('.sector2top').classList.add("hiddenPages")
    setTimeout(function(){
        document.querySelector('.sector2top').classList.add("hiddenAllpages")
        },700)  
})


document.getElementById('statrBtn').addEventListener('click', ()=>{
    document.querySelector('.maincontent').classList.remove("hiddenAllpages")
    setTimeout(function(){
        document.querySelector('.maincontent').classList.remove("hiddenPages")
        },300)  
})

document.getElementById('statrBtn').addEventListener('click', ()=>{
    document.querySelector('.sector2top').classList.remove("hiddenAllpages")
    setTimeout(function(){
        document.querySelector('.sector2top').classList.remove("hiddenPages")
        },300)  
})

document.getElementById('statrBtn2').addEventListener('click', ()=>{
    document.querySelector('.sector2top').classList.remove("hiddenAllpages")
    setTimeout(function(){
        document.querySelector('.sector2top').classList.remove("hiddenPages")
        },300)  
})

document.getElementById('statrBtn2').addEventListener('click', ()=>{
    document.querySelector('.maincontent').classList.remove("hiddenAllpages")
    setTimeout(function(){
        document.querySelector('.maincontent').classList.remove("hiddenPages")
        },300)  
})






