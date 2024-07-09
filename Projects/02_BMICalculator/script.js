// document.querySelector('.calculate').addEventListener('click',(e)=>{
//     const height=document.querySelector('#height');
//     console.log(height);
//     const weight=document.querySelector('#weight');
//     console.log(weight);
//     const result = height*weight;


//     document.querySelector('#result').append(result);

// })


const form = document.querySelector('form');
form.addEventListener('submit',(e)=>{
    e.preventDefault();
    const height=parseInt(document.querySelector('#height').value);
    const weight=parseInt(document.querySelector('#weight').value);
    const result=document.querySelector('#result');
    if(height === 0 || height === '' || isNaN(height)){
        result.innerHTML= `Please give a valid height ${height}`;
    }
    else if(weight === 0 || weight === '' || isNaN(weight)){
        result.innerHTML= `Please give a valid weight ${weight}`;
    }
    else
    {
        // const bmi = (weight/((height*height)/1000));
        const bmi = (height* weight);
        result.innerHTML= ` <span>${bmi}</span>`;
    }

})
