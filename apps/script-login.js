let todoButton = document.querySelector('#Login__todoList');
let brainstormButton = document.querySelector('#Login__brainStorm');
let helpButton = document.querySelector('#Login__help');
todoButton.addEventListener('click' , getPages);
brainstormButton.addEventListener('click' , getPages);
helpButton.addEventListener('click' , getPages);
function getPages(event) {
    let eventId = event.target.id;
    if (eventId == 'Login__todoList') {
        window.location.href = './pages/todolist.html';
    }else if(eventId == 'Login__brainStorm'){
        window.location.href = './pages/brainstorm.html';
    }else if (eventId == 'Login__help') {
        window.location.href = './pages/help.html';
    } else {
        console.warn('not found 404');
    }
}