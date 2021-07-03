const submitButton = document.getElementById('submitBtn');
const textElement = document.getElementById('message');
const containerElement = document.querySelector('.message-content');
const alertElement = document.querySelector('.alert-danger');

submitButton.addEventListener('click', (event) => {
    event.preventDefault();
    var msg = textElement.value;
    if(msg !== ''){
        //console.log(containerElement.textContent);
        containerElement.textContent = msg;
        textElement.value = '';
    }else{
        alertElement.classList.add('show');
        setTimeout(() => {
            alertElement.classList.remove('show');
        }, 2000);
    }
    
    
})