
document.querySelector(".contact-form").addEventListener("submit", submitForm);

function submitForm(e){
    
    e.preventDefault();

    let name = document.getElementById('Name_Input').value;
    let email = document.getElementById('Email_Input').value;
    let message = document.getElementById('Message_Input').value;

    sendEmail(name, email, message);

    document.querySelector(".contact-form").reset();
}

// Send the email via gmail smtp
function sendEmail(name, email, message){
    Email.send({
        Host : "smtp.gmail.com",
        Username : "tikapradhan095@gmail.com",
        Password : "dethglmxlpfwpupu",
        To : 'tikapradhan2003@yahoo.com',
        From : email,
        Subject : name + ' sent you a message.',
        Body : 'Name: ' + name + ' Email: ' + email + ' Message: ' + message,
    }).then( message => alert('Mail has been sent succesfully.'));
}