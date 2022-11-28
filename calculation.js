const calculateBtn = document.getElementById('calculateRefNum');
const textAreaEl = document.getElementById('RFnum');
// const textAreaVal = document.getElementById('RFnum').value;

let refNumHolder = [];



calculateBtn.addEventListener('click', (e)=> {
    // Preventing form submission and 
    e.preventDefault()
    const promiseNum = new Promise((resolve, reject) => {
        if(textAreaEl.value) {
            resolve('there is a value')
        } else {
            reject('there is no value')
        }
    });

    promiseNum.then(() => {
        const number = textAreaEl.value;
        const digits = String(number)
        .split('')
        .map(Number)

        for(let i = 0; i < digits.length; i++) {
            if(i === 0, 2, 5, 8, 11, 14, 17, 20 ){
                console.log('ex1')
            } else if(i === 1, 3, 6, 9, 12, 15, 18, 21) {
                console.log('ex2')
            } else if(i === 2, 4, 7, 10, 13, 16, 19, 22) {
                console.log('ex3')
            }
        };
    })

    let sum = 0;



});