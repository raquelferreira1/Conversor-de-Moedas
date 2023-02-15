const button = document.getElementById('botão-conversão') //peguei o click do botão 'converter'
const select = document.getElementById('conversor-select')

const convertValues = async () => {
    const inputReais = document.getElementById('input-valor').value;
    const valorReal = document.getElementById('valor-real');
    const valorEmDolar = document.getElementById('valor-em-dolar');

    const data = await fetch("https://economia.awesomeapi.com.br/last/USD-BRL,EUR-BRL,BTC-BRL").then(response=>response.json())

    const dolar = data.USDBRL.high
    const euro = data.EURBRL.high
    const bitcoin = data.BTCBRL.high

    valorReal.innerHTML = new Intl.NumberFormat("pt-BR", {
        style: "currency",
        currency: "BRL",
    }).format(inputReais)

    if (select.value === 'US$ Dolár Americano') {

        valorEmDolar.innerHTML = new Intl.NumberFormat("en-US", {
            style: "currency",
            currency: "USD",
        }).format(inputReais / dolar)
    }

    if (select.value === '€ Euro') {

        valorEmDolar.innerHTML = new Intl.NumberFormat("de-DE", {
            style: "currency",
            currency: "EUR",
        }).format(inputReais / euro)
    }

    if (select.value === '₿ Bitcoin') {

        valorEmDolar.innerHTML = new Intl.NumberFormat("en-US", {
            style: "currency",
            currency: "BTC",
        }).format(inputReais / bitcoin)
    }
}

changeMudancaValor = () => {
    const currencyName = document.getElementById('currency-name')
    const currencyImg = document.getElementById('currency-img')

    if (select.value === 'US$ Dolár Americano') {
        currencyName.innerHTML = 'Dolár Americano'
        currencyImg.src = './img/estados-unidos.png'
    }

    if (select.value === '€ Euro') {
        currencyName.innerHTML = 'Euro'
        currencyImg.src = './img/euro.png'
    }

    if (select.value === '₿ Bitcoin') {
        currencyName.innerHTML = 'Bitcoin'
        currencyImg.src = './img/bitcoin.png'
    }

    convertValues()
}

button.addEventListener('click', convertValues)
select.addEventListener('change', changeMudancaValor)


