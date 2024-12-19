const form = document.getElementById('contact-form');
const nameInput = document.getElementById('name');
const emailInput = document.getElementById('email');
const nameError = document.getElementById('name-error');
const emailError = document.getElementById('email-error');

// Функция проверки имени
function validateName() {
    if (nameInput.value.trim() === '') {
        nameError.style.display = 'inline';
        return false;
    } else {
        nameError.style.display = 'none';
        return true;
    }
}

// Функция проверки email
function validateEmail() {
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailPattern.test(emailInput.value.trim())) {
        emailError.style.display = 'inline';
        return false;
    } else {
        emailError.style.display = 'none';
        return true;
    }
}


nameInput.addEventListener('blur', validateName);  
emailInput.addEventListener('blur', validateEmail);

// Обработчик события отправки формы
form.addEventListener('submit', function(event) {
    event.preventDefault();  

    const isNameValid = validateName();
    const isEmailValid = validateEmail();

    if (isNameValid && isEmailValid) {

        const formData = new FormData(form);
        const data = {};
        formData.forEach((value, key) => {
            data[key] = value; 
        });

        console.log('Данные для отправки:', data);

        fetch('http://localhost:8000/contacts', { 
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(data),
        })
        .then(response => {
            if (!response.ok) {
                throw new Error(`Ошибка HTTP: ${response.status}`);
            }
            return response.json();
        })
        .then(json => console.log('Данные успешно отправлены:', json))
        .catch(error => console.error('Ошибка при отправке данных:', error));
    } else {
        console.log('Форма содержит ошибки, данные не отправлены.');
    }
});
