const listTask = document.getElementById('listTask');
const userInput = document.getElementById('userInput');
const addTask = document.getElementById('addTask');
const alertMsg = document.getElementById('alertMsg');


addTask.addEventListener('click', () =>{

let newTask = userInput.value.trim()


if( newTask === "" || newTask == null){
    alertMsg.innerHTML = " please enter a task!"

}

    else {
       
        const newLi = document.createElement('li');
        newLi.textContent = newTask;
        listTask.appendChild(newLi);

        const delBtn = document.createElement('button');
        delBtn.textContent = "delete";
        listTask.appendChild(delBtn);

        const editBtn = document.createElement('button');
        editBtn.textContent = "edit";
        listTask.appendChild(editBtn);
        
        alertMsg.innerHTML = ""

        delBtn.addEventListener('click', () => {
            alertMsg.innerHTML = " please enter a task!"
            listTask.removeChild(newLi);
            delBtn.remove();
            editBtn.remove()
            alertMsg.innerHTML = "Deleted"
            clearAlert();
            
        })

        editBtn.addEventListener('click', () => {
            let currentText = newLi.firstChild.textContent; // Get task text
            let editTask = prompt("Edit your task:", currentText);

            

            if (editTask == newLi.firstChild.textContent) {
               

                alertMsg.innerHTML = "edit was canceled";
                clearAlert();


            } else if( editTask !== null && editTask.trim() !== ""){

                newLi.firstChild.textContent = editTask; 
                alertMsg.style.color = "green";
                clearAlert();

            }
            
            else{
                alertMsg.innerHTML = "edit canceled";
                clearAlert();
            }


        });

      
    
        

        userInput.value = '';
    }

  
    function clearAlert() {
        setTimeout(() => {
            alertMsg.innerHTML = "";
            alertMsg.style.color = "rgb(92, 37, 37)"
        }, 5000); 
    }

})