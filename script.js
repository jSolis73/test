
// Создание ссылок для полей

let nameAlert = 'Введите имя'
let birthAlert = 'Введите дату рождения'
let addressAlert = 'Введите адрес'

let name = document.getElementById('name')
let birthday = document.getElementById('birthDay')
let address = document.getElementById('address')
let button = document.querySelector('button')

let values = []
let inputs = [
  {
    name: name,
    alert: nameAlert
  },
  {
    name: birthday,
    alert: birthAlert
  },
  {
    name: address,
    alert: addressAlert
  },    
]

// Проверка на заполнение полей

function submit() {
  inputs.forEach(input => {
    if (!input.name.value) {
      let alertDiv = document.querySelector('.alert-desk').firstChild
      alertDiv.innerHTML += `${input.alert}<br>`
      setTimeout(() => alertDiv.innerHTML = '', 3000)
      return
    } else {
      // обработка формы в случае правильного заполнения

      values.push({input: input.name, value: input.name.value })
      input.name.value = ''
      button.setAttribute('disabled', 'disabled')
    }
  })
}

// проверка на кирилические символы

function ruLetters(input) {
  input.value = input.value.replace(/[^а-яё0-9]/ig,'')
}



