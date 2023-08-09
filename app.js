let buttons=document.querySelectorAll('button');
let input=document.querySelector('input');
// let id;
let isEqualToClicked=false;
input.addEventListener('keydown',(event)=> {
    if (event.key!="ArrowUp" && event.key!="ArrowDown" && event.key!="ArrowLeft" && event.key!="ArrowRight") {
        event.preventDefault();
    }
})
for (let button of buttons) {
    button.addEventListener('click',function() {
        input.focus();
        // clearTimeout(id);
        // id=setTimeout(function() {
        //     input.value='';
        // },10000);
        if (isEqualToClicked && button.getAttribute('id')!="operators") {
            input.value='';
        }
        isEqualToClicked=false;
        let btnText=button.innerText;
        if (btnText=='^') {
            btnText='**';
        }
        if (btnText=='x') {
            btnText='*';
        }
        if (button.classList.contains('divide')) {
            btnText='/';
        }
        if (btnText=='C') {
            input.value='';
        }
        else if (btnText=='=') {
            if (input.value=='') {
                return;
            }
            isEqualToClicked=true;
            try {
                input.value=eval(input.value);
            }
            catch(e) {
                // console.log(e);
                input.value='Invalid';
            }
        }
        else if (button.getAttribute('id')=='delete') {
            input.value=input.value.substring(0,input.value.length-1);
        }
        else {
            // if (input.value.length<15) {
                input.value=input.value+btnText;
            // }
        }


        if (input.value.length>12) {
            input.style.fontSize = '40px';
        }
        else {
            input.style.fontSize = '50px';
        }
    })
}