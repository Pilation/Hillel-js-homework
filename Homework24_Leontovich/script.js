let userData = {
    'USD': 1000,
    'EUR': 900,
    'UAH': 15000,
    'BIF': 20000,
    'AOA': 100
},
    bankData = {
        'USD': {
            max: 3000,
            min: 100,
            img: '💵'
        },
        'EUR': {
            max: 1000,
            min: 50,
            img: '💶'
        },
        'UAH': {
            max: 0,
            min: 0,
            img: '💴'
        },
        'GBP': {
            max: 10000,
            min: 100,
            img: '💷'
        }
    }

const GetMoney = (userInfo, bankInfo) => {
    let UserCurrenciesData = {};
    UserCurrenciesData.userData = JSON.parse(JSON.stringify(userInfo));
    UserCurrenciesData.bankData = JSON.parse(JSON.stringify(bankInfo));
    let CheckBalance = confirm(`Желаете посмотреть баланс на карте?`);
    let BankOperationsPromise = new Promise(
        (resolve, reject) => {
            CheckBalance ? resolve(UserCurrenciesData) : reject(UserCurrenciesData)
        }
    )
    BankOperationsPromise
        .then(
            resolve = (UserCurrenciesData) => {
                let inputCurrency;
                do {
                    inputCurrency = prompt(`Введите название валюты в формате ${Object.keys(UserCurrenciesData.userData).join(`, `)}`, `USD`);
                } while (!Object.keys(UserCurrenciesData.userData).includes(inputCurrency))
                alert(`Баланс составляет: ${UserCurrenciesData.userData[inputCurrency]} ${inputCurrency}`)
            },
            reject = (UserCurrenciesData) => {
                for (let key in UserCurrenciesData.bankData) {
                    if (UserCurrenciesData.bankData[key].max == 0) {
                        delete UserCurrenciesData.bankData[key];
                        delete UserCurrenciesData.userData[key];
                    }
                    if (!Object.keys(UserCurrenciesData.userData).includes(key)) {
                        delete UserCurrenciesData.bankData[key]
                    }
                }
                for (let key in UserCurrenciesData.userData) {
                    if (!Object.keys(UserCurrenciesData.bankData).includes(key)) {
                        delete UserCurrenciesData.userData[key]
                    }
                }
                alert(`Актуальные валюты для снятия: ${Object.keys(UserCurrenciesData.userData).join(`, `)}`)
                do {
                    inputCurrency = prompt(`Введите валюту для снятия в формате ${Object.keys(UserCurrenciesData.userData).join(`, `)}`, `USD`);
                } while (!Object.keys(UserCurrenciesData.userData).includes(inputCurrency));
                let inputSum = prompt(`Введите сумму для снятия`, 500);

                let maxSum = UserCurrenciesData.bankData[inputCurrency].max;
                let maxBalance = UserCurrenciesData.userData[inputCurrency];
                let minSum = UserCurrenciesData.bankData[inputCurrency].min;

                if (inputSum <= minSum) {
                    alert(`Введенная сумма меньше допустимой. Минимальная сумма снятия: ${minSum} ${inputCurrency}`);
                }
                if (inputSum >= maxSum || inputSum >= maxBalance) {
                    alert(`Введенная сумма больше допустимой. Максимальная сумма снятия: ${Math.min(maxSum, maxBalance)} ${inputCurrency}`);
                }
                if (inputSum <= maxSum && inputSum <= maxBalance && inputSum >= minSum) {
                    alert(`Вот Ваши денежки ${inputSum} ${inputCurrency} ${UserCurrenciesData.bankData[inputCurrency].img}`)
                }
            }
        )
        .finally(
            () => alert(`Спасибо, хорошего дня 😊`)
        )
}
GetMoney(userData, bankData);