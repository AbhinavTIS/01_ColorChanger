const buttons= document.querySelectorAll('.button');
console.log(buttons);
const body= document.body; 

buttons.forEach(function(button){
    console.log(button);
    button.addEventListener('click', function(e){
        console.log(e);
        console.log(e.target.id);
        body.style.backgroundColor = e.target.id 

        // switch (e.target.id) {
        //     case 'grey':
        //         body.style.backgroundColor = e.target.id 
        //         break;
        
        //     default:
        //         break;
        // }
    })
})