window.addEventListener('load', function() {
let html = document.querySelector(`html`)
html.setAttribute(`lang`,`en`);



let head = document.querySelector(`head`)

let meta = document.createElement(`meta`)
meta.setAttribute(`charset`,`UTF-8`);
    document.head.append(meta)

let title = document.createElement(`title`)
title.innerHTML =`Choose Your Option`
    document.head.append(title)

let style = document.createElement(`style`)
style.innerHTML =`
* {
    margin: 0;
    padding: 0; 
 }
  
 html, body {
    display: flex;
    justify-content: center;
    font-family: Arial;
    text-align: center;
    
}
 .content {
    margin-top: 8%;
     width: 400px;
     margin-left: auto;
     margin-right: auto;
     border: solid black 2px;
 }
 
 
 .mainCont {
    display: flex;
      
 }

 .enter {
    margin: 5px;
    width: 95%;
 }

 .title {
    background-color: LimeGreen;
    padding: 10px;
   
 }

 .inputTask {
    border-top: solid black 2px ;
    width: 100%;



.addedTask {
    background-color: LimeGreen;
    list-style-type: none;

}



`
document.head.append(style)

let body = document.querySelector(`body`)
let content = body.querySelector(`.content`)
let mainCont = content.querySelector(`.mainCont`)
let liTask = mainCont.querySelector(`.liTask`)



console.log(liTask)

const addNew = function() {
let li = document.createElement('li');
li.classList.add(`addedTask`)
let task = document.createElement(`span`);
task.innerHTML = document.querySelector('.enter').value;
document.querySelector('.enter').value = ``;
task.classList.add(`addedTask`)

let input = document.createElement(`input`);
input.setAttribute('type', 'checkbox');
input.setAttribute('id', 'checkbox');

let label = document.createElement(`label`);
label.setAttribute('for', 'checkbox');
label.classList.add('label');

liTask.append(li)
li.append(input)
li.append(label)
label.append(task)

const delbutton = function () {

    if ( li ) {

        buttonDel = document.createElement(`button`);
        buttonDel.setAttribute('name', 'button');
        buttonDel.innerHTML =`Delete`
        liTask.append(buttonDel);
    }
} 
delbutton();
buttonDel.onclick = function(){
    liTask.remove()
    
}

input.onclick = function() {
    if(this.checked){
        label.style.textDecoration = 'line-through';
        label.style.color = 'red';
        
    } else {
        label.style.textDecoration = 'none';
        label.style.color = 'black';
    }
}


}


body.addEventListener('keyup', function(event) {
    event.preventDefault();
    if (event.keyCode === 13) {
        addNew();
    } 


})



})

