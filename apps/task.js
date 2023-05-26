// class Task {
//     constructor(taskname, id) {
//         this.id = id;
//         this.title = taskname;
//     }

//     creatTask() {
//         console.log('creat');
//     }
//     removeTask() {

//     }
// }
const $$ = document;
let taskdata = localStorage.getItem('tasks');
let tasks = [{name: 'تسک نمونه', id: 1},{name:'تسک نمونه 2',id: 2}];
let deleteTaskIcon = $$.querySelector('.Task__icons-delete');
let doneTaskIcon = $$.querySelector('.Task__icons-done');
let creatTaskIcon = $$.querySelector('.creatTask');
let musicIcon = $$.querySelector('.music-icon');
let homeIcon = $$.querySelector('.header__home');
let DarkLightBox = $$.querySelector('.header__DarkLight');
let Darklight_handler = $$.querySelector('.header__DarkLight-handler');
let Darklight_Icon = $$.querySelector('.dark-Light-icon');
let bodyTasks = $$.querySelector('.taskBody');
let musicClose = $$.querySelector('.music-close');
let musicNext = $$.querySelector('#musicNext');
let musicPrev = $$.querySelector('#musicPrev');
let musicPause = $$.querySelector('#musicPause');
let musicPlay = $$.querySelector('#musicPlay');
let addTask_window = $$.querySelector('.addTask__addWindow');
let addTask_windowTitle = $$.querySelector('.addTask__addWindow-title');
let addTask_Input = $$.querySelector('.addTask__addWindow-input');
let addTask_Button = $$.querySelector('.addTask__addWindow-button');
let bodyBlack = $$.querySelector('.bodyBlack');
let addTask_box = $$.querySelector('.addTask');
let addTask_titleText = $$.querySelector('.addTask__title');
let creatTask_box = $$.querySelector('.creatTask');
let addTask_plus = $$.querySelector('.creatTask-add');
let menueTitle = $$.querySelector('.header__title-text');
let body = $$.querySelector('#body');
let trash = $$.querySelector('#trash');
let ul = $$.querySelector('.ul');

//chek first

if(!localStorage.getItem('tasks')){
    localStorage.setItem('tasks',tasks);
}
console.log(taskdata);
//chek mode
if (localStorage.getItem('mode') == 'Dark'){
    DarkPage;
} else {
    localStorage.setItem('mode','Light');
};

creatTaskIcon.addEventListener('click',openBoxAddTask);
function openBoxAddTask() {
    addTask_Input.style.border = '1px solid #33333361';
    addTask_Input.value = "";
    addTask_window.style.display = 'flex';
    bodyBlack.style.display = 'unset';
}
bodyBlack.addEventListener('click',closeCreatTask);
function closeCreatTask() {
    addTask_window.style.display = 'none';
    bodyBlack.style.display = 'none';
}
addTask_Button.addEventListener('click',addTask);
addTask_Input.addEventListener('keypress',(event)=>{
    if(event.keyCode == 13){
        addTask();
    }
})
function addTask() {
    let taskName = addTask_Input.value;
    if (taskName != ""){
        let newLi = $$.createElement('li');
        newLi.className = 'Task';
        let newLi_text = $$.createElement('span');
        newLi_text.className = 'Task__title-text';
        newLi_text.innerHTML = addTask_Input.value;
        let newLI_trash = $$.createElement('span');
        newLI_trash.className = 'material-symbols-outlined';
        newLI_trash.innerText = 'delete'
        newLI_trash.style.cursor = 'pointer';
        newLI_trash.addEventListener('click',(event)=>{
           event.target.parentElement.remove() 
        })
        newLi.append(newLi_text , newLI_trash);
        ul.append(newLi)
        addTask_window.style.display = 'none';
        bodyBlack.style.display = 'none';
    } else {
        addTask_Input.style.border = '1px solid red'
    }
    
}
trash.addEventListener('click',(event)=>{
    event.target.parentElement.remove()
})
homeIcon.addEventListener('click',()=> {
    window.location.href = '../index.html';
})
Darklight_handler.addEventListener('mousedown',()=>{
    if (localStorage.getItem('mode') == 'Light') {
        localStorage.setItem('mode','Dark');
        DarkPage();
    }else {
        localStorage.setItem('mode','Light');
        LightPage();
    }
});

function DarkPage() {
    bodyTasks.style.backgroundColor = '#4c4949';
    addTask_box.style.backgroundColor = '#4c4949';
    addTask_window.style.backgroundColor = '#4c4949';
    DarkLightBox.style.backgroundColor = '#4c4949';
    body.style.backgroundColor = '#4c4949';
    addTask_box.style.borderBottom = '1px solid #e9e7e74d';
    creatTask_box.style.border = '2px dashed rgb(245,245,245)';
    addTask_titleText.style.color = 'rgb(245,245,245)';
    addTask_plus.style.color = 'rgb(245,245,245)';
    addTask_windowTitle.style.color = 'rgb(245,245,245)';
    menueTitle.style.color = '#fff';
    Darklight_Icon.innerText = "dark_mode";
    Darklight_handler.style.right = '50%';
}
function LightPage() {
    bodyTasks.style = '';
    addTask_box.style = '';
    addTask_window.style = '';
    DarkLightBox.style = '';
    body.style = '';
    addTask_box.style = '';
    creatTask_box.style = '';
    addTask_titleText.style = '';
    addTask_plus.style = '';
    addTask_windowTitle.style = '';
    menueTitle.style = '';
    Darklight_Icon.innerText = "Light_mode";
    Darklight_handler.style.right = '5%';
}
trash.addEventListener('click',()=>{console.log('123');})

