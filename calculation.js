const calculateBtn = document.getElementById('calculateRefNum');
const textAreaEl = document.getElementById('RFnum');
const resultsField = document.querySelector('.RFresult');
const resultsText = document.querySelector('.resultsText');
const resultContainer = document.querySelector('.result-container');

let refNumHolder = [];

// Utility functions //
function roundToNearest10(number) {
    return Math.round(number / 10) * 10;
    }

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
        .reverse()

        console.log(digits);
        let multiplicationValue = 0.0;

        promiseNum.then(() => {
            for(let i = 0; i < digits.length; i++) {
                if (i === 0 || i === 3 || i === 6 || i === 9 || i === 12 || i === 15 || i === 18 || i === 21){
                    multiplicationValue += digits[i] * 7
                    console.log(multiplicationValue)
                } else if(i === 1 || i === 4 || i === 7 || i === 10 || i === 13 || i === 16 || i === 19 || i === 22) {
                    multiplicationValue += digits[i] * 3
                    console.log(multiplicationValue)
                } else if(i === 2 || i === 5 || i === 8 || i === 11 || i === 14 || i === 17 || i === 20 || i === 23) {
                    multiplicationValue += digits[i] * 1
                    console.log(multiplicationValue)
                }
            };
        }) 
        promiseNum.then(()=> {
                let roundedTotalValue = roundToNearest10(multiplicationValue);
                console.log(roundedTotalValue);

                let checkDigit = () => {
                    if(roundedTotalValue - multiplicationValue === 10) {
                        return 0
                    } else {
                        return roundedTotalValue - multiplicationValue;
                    }
                }
                console.log(checkDigit())
                const finalValue = `${textAreaEl.value}${Math.abs(checkDigit())}`

                renderFinalValue(finalValue);
        })
        
    })


    let sum = 0;

});

// Render the final value
const renderFinalValue = (value) => {

    resultContainer.className ="displayFlex"
    resultsText.innerHTML = `Your new reference number: <br/>`
    resultsField.innerHTML = value
}



// Return the final value as an argument to a global function????????