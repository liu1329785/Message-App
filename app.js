// Take message into a new link and show the message

const { hash } = window.location;

const message =  atob(hash.replace('#',''));

if(message) {
    document.querySelector('#message-form').classList.add('hide');
    document.querySelector('#message-show').classList.remove('hide');

    document.querySelector('h1').innerHTML = message;
}
// Select Form and Add Event
document.querySelector('form').addEventListener('submit', event => {
    event.preventDefault();

    // select form and hide it after message is submitted and just return the link
    document.querySelector('#message-form').classList.add('hide');
    document.querySelector('#link-form').classList.remove('hide');
    // Select input 
    const input = document.querySelector('#message-input');

    // Change value of message to 64encode
    const encrypted = btoa(input.value);

    // Decode message from 64 encode and change to link
    const linkInput = document.querySelector('#link-input');
    linkInput.value = `${window.location}#${encrypted}`;
    linkInput.select();



});