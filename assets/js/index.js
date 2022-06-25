function SnapCrackleDOM() {

    const form = document.querySelector('#form');
    const openWhatIs = document.querySelector('.whatIsBtn');
    const closeWhatIs = document.querySelector('.close');


    function explanation() {
        const explanation = document.querySelector('.whatIs');
        const click = document.querySelector('#click');

        openWhatIs.addEventListener('click', () => {
            explanation.style.display = 'block';
            click.style.display = 'none'
        });

        closeWhatIs.addEventListener('click', () => {
            explanation.style.display = 'none';
            click.style.display = 'block'
        })
    }

    explanation();

    form.addEventListener('submit', e => {
        e.preventDefault();
        const numero = e.target.querySelector('#input');
        const pResult = document.querySelector('.result');
        const resultContainer = document.querySelector('.container-result')

        if (!numero.value) emptyError();
        else if (numero.value == 0 || numero.value < 0) error();
        else result();

        function prime(num) {
            for (let i = 2; i < num; i++) {
                if (num % i === 0) {
                    return false;
                }
            }

            return true;
        }

        function snapCracklePrime(maxValue) {

            let snapArray = [];
            for (let i = 1; i <= maxValue; i++) {
                if (i % 2 !== 0 && i % 5 === 0) {
                    if (prime(i)) {
                        snapArray.push('SnapCracklePrime');
                    } else {
                        snapArray.push('SnapCrackle');
                    }
                } else if (i % 5 === 0) {
                    if (prime(i)) {
                        snapArray.push('CracklePrime');
                    } else {
                        snapArray.push('Crackle');
                    }
                } else if (i % 2 !== 0) {
                    if (i === 1) {
                        snapArray.push('Snap');
                    } else {
                        if (prime(i)) {
                            snapArray.push('SnapPrime');
                        } else {
                            snapArray.push('Snap');
                        }
                    }
                } else {
                    if (prime(i)) {
                        snapArray.push('Prime');
                    } else {
                        snapArray.push(i);
                    }
                }
            }
            return snapArray;
        }

        function result() {
            resultContainer.classList.remove('error');
            pResult.innerText = snapCracklePrime(numero.value).join(', ');
        }

        function emptyError() {
            pResult.innerText = "Digite um número";
            resultContainer.classList.add('error');
        }

        function error() {
            pResult.innerText = "Digite um número maior que zero";
            resultContainer.classList.add('error');
        }

    });

}

SnapCrackleDOM();