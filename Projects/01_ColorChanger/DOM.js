const buttons= document.querySelectorAll('.button');


buttons.forEach(element => {
    element.addEventListener('click',(e)=>{
        if(e.target.id ==='grey'){
            document.body.style.backgroundColor=e.target.id;
        }
        if(e.target.id ==='white'){
            document.body.style.backgroundColor=e.target.id;
        }
        if(e.target.id ==='blue'){
            document.body.style.backgroundColor=e.target.id;
        }
        if(e.target.id ==='yellow'){
            document.body.style.backgroundColor=e.target.id;
        }
    });
    

});


const navButtons= document.querySelectorAll('.nav-btn');
console.log(navButtons);
navButtons.forEach((x)=>{
    x.addEventListener('click',(e)=>{
        console.log(e.target.id=== 'home');
        if(e.target.id=== 'home'){
              
        }
        if(e.target.id=== 'yt'){

        }
    })
})