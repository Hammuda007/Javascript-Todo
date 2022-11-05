//queryselector
const todoInput= document.querySelector(".todo-input")
const todoBtn= document.querySelector(".todo-button")
const todoResult=document.querySelector(".todo-result")


function addTodo(e){
   e.preventDefault();


  //add todo-item div


  const todoDiv=document.createElement('div');
  todoDiv.classList.add('todo-item')



  //add h3, data h3
  const newTodo= document.createElement('h3')
  newTodo.innerHTML=todoInput.value ;
  newTodo.classList.add('todo-title')
  todoDiv.appendChild(newTodo)
  
  // remove data from input
  todoInput.value=""


// crate buttons div
const buttonDiv= document.createElement('div');
todoDiv.appendChild(buttonDiv)


//add complete, delete buttons

const completeBtn= document.createElement('button');
completeBtn.innerHTML=  '<i class="fa-sharp fa-solid fa-check todo-check todo-icon"></i>';
buttonDiv.appendChild(completeBtn);


const removeBtn= document.createElement('button');
removeBtn.innerHTML=  '<i class="fa-sharp fa-solid fa-trash todo-delete todo-icon"></i>';
buttonDiv.appendChild(removeBtn);


todoResult.appendChild(todoDiv);


}





function toggleTodo(e) {
   const item = e.target
   if (item.classList[3] =='todo-check'){
    const btn_div= item.parentElement.parentElement
    //btn_div.classList.add('completed-todo')
    btn_div.childNodes[0].classList.toggle('completed-todo')

   }
   if (item.classList[3] =='todo-delete'){
    const btn_div= item.parentElement.parentElement
    btn_div.classList.add('remove-todo')

    }
    



}

todoBtn.addEventListener('click',addTodo)
todoResult.addEventListener('click',toggleTodo)


