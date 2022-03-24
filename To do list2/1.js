(function(){

    const container = document.querySelector(".container")
    const container1 = document.querySelector(".container1")
    const container2 = document.querySelector(".container2")
    const container3 = document.querySelector(".container3")
    const container4 = document.querySelector(".container4")
    // function cont(){
    //      const h1 = document.createElement('h1')
    //      container3.append(h1)
    // }
    // cont()
    function createAppTitle(title){
        const appTitle = document.createElement('h1');
        appTitle.innerHTML = title;
        appTitle.style.textAlign = "center"
        return appTitle;
    }
    
    function createTodoItemForm(){
        const form = document.createElement('form');
        const input = document.createElement('input');
        const addButton = document.createElement('button');
        const div = document.createElement('div');
    
        // addButton.disabled = true
        // input.addEventListener('input', () => {
        //     if (input.value == null){
        //       addButton.disabled = true   
        //     }
        //     else{addButton.disabled = ""}
        // });
    
        form.classList.add('input-group', 'mb-3');
        input.classList.add('form-control');
        input.placeholder = 'Введите название дела';
        input.classList.add("input")
        input.type = "text"
    
        addButton.classList.add('btn', 'btn-primary');
        addButton.textContent = 'Добавить дело';
        addButton.type = "button"
        // addButton.addEventListener("click", ()=>{
        //     addButton.disabled = true
        //     createTodoItem()
        // })
    
    
        div.append(addButton);
        form.append(input);
        form.append(addButton);
        form.append(div);
    
        return {
            form,
            input,
            addButton
        }
    }
    function createTodoList(){
        const list = document.createElement('ul');
        list.classList.add("ul")
        list.classList.add('list-group');
        list.style.listStyleType = "none"
        return list
    }
    
    function createTodoItem(input_value){
        const todoItem = document.createElement('li');
        const divBtn = document.createElement('div');
        const doneBtn = document.createElement('button');
        const deleteBtn = document.createElement('button');
        
        // const input = document.querySelector(".input")
        // const list = document.querySelector(".ul")
        
        
        
        todoItem.classList.add('list-group-item', 'd-flex', 'justify-content-between', 'align-items-center');
    
        todoItem.textContent = input_value
        // list.append(todoItem)
        // input.value = null
        
    
    
        doneBtn.classList.add('btn', 'btn-success');
        deleteBtn.classList.add('btn', 'btn-danger');
    
        doneBtn .textContent = "Готово"
        deleteBtn.textContent = "Удалить"
    
        divBtn.append(doneBtn);
        divBtn.append(deleteBtn);
        todoItem.append(divBtn);
    
        deleteBtn.addEventListener("click", ()=>{
            if (confirm("Вы уверены, что хотите удалить запись?")){
                todoItem.remove()
            }
        })
    
        doneBtn.addEventListener('click', ()=>{
            todoItem.classList.toggle('list-group-item-success');
        })
    
        return {
            todoItem,
            doneBtn,
            deleteBtn,
            divBtn
        }
    
    }
    function createTodoApp(container, title) {
        const appTitle = createAppTitle(title);
        const appForm = createTodoItemForm();
        const appList = createTodoList();
    
        container.append(appTitle, appForm.form, appList);
    
        // appForm.form.addEventListener('submit', (e) => {
        //     e.preventDefault();
    
        //     const todoItem = createTodoItem(appForm.input.value);
        //     // todoItem.classList.add('list-group-item', 'd-flex', 'justify-content-between', 'align-items-center');
    
        //     if (appForm.input.value == ""){
        //         appForm.addButton.disabled = true   
        //     }
        //     else{
        //         appForm.addButton.disabled = ""
                
        //     }
        //     appList.append(todoItem.todoItem);
        //     appForm.input.value = '';
        // })
        appForm.addButton.addEventListener("click", ()=>{
            
            createTodoItem(appForm.input.value);

        })
    }
    
    // document.addEventListener('DOMContentLoaded',()=>{
    //     // createTodoApp(container, "My To-do")
    //     // createTodoApp(container1, "Sister To-do")
    //     // createTodoApp(container2, "Dad To-do")
    // })
    // document.addEventListener('DOMContentLoaded',()=>{
    //     createTodoApp(container3, "Sister To-do")
    // })
    // document.addEventListener('DOMContentLoaded',()=>{
    //     createTodoApp(container4, "Dad To-do1")
    // })


    window.createTodoApp = createTodoApp;
})();

