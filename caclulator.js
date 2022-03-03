const numberElements = document.getElementsByClassName('calc_number');
const signElements = document.getElementsByClassName('calc_sign');
const result = document.getElementById('result');
let firstInput = true;

// for(let i=0; i < numberElements.length; i++ ) {
//     numberElements[i].addEventListener('click', testListener)
// }

// Array.from(numbers).forEach((number) => {
//     number.addEventListener('click', function() {
//                 console.log("tryck!")
//             })
// });

for(const numberElement of numberElements ) {
    numberElement.addEventListener('click', function() {
                        buttonListener(numberElement);
                    })
}

for(const signElement of signElements ) {
    signElement.addEventListener('click', function() {
                        buttonListener(signElement);
                    })
}

// function testListener() {
//     console.log(this.innerText)

// }


function clearResult() {
    result.innerText = '';
}

function display(value) {
    result.innerText += value
}

function buttonListener(button) {
    if(firstInput) {
        clearResult();
        firstInput = false;
    } 
    display(button.innerText)
}