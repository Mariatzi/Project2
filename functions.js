

let priority_level = document.getElementById("priority_level");


let inProgress = [];
let completed = [];


document.addEventListener('DOMContentLoaded', function() {

    document.querySelector('#add').onclick = function() {
        const li = document.createElement('li');
        const p_level = document.querySelector('#priority_level').value;
         if (p_level === 'high') {
             p_level.style.color = red;
         }
         if (p_level === 'medium') {
            p_level.style.color = blue;
         }
        if (p_level === 'low') {
             p_level.style.color = green;
         }

        let task_title = document.querySelector('#task').value;
        let task_html = `
                            <span> ${task_title} </span>
                            <button class="complete">Completed</button>
                            <button class="remove">Remove</button>
                            <span class = "priority"> Priority: ${p_level} </span>
                            
                        `;
        li.innerHTML = task_html;

        document.querySelector("#toDo-List").append(li);
        console.log(`\"${task_title}\" was appended to toDo-List`);


        document.querySelector("#task").value = '';
        console.log("task input was cleared");
        inProgress.push(task_title);
        console.log(inProgress);
        return false;
 
    } 

    document.querySelector('#priority_level').onchange = function() {
    
    }
 
    document.addEventListener('click', function(event) {
        element = event.target;
        if(element.className === 'remove') {
            element.parentElement.remove();
            console.log(`\"${element.value}\" was removed from the toDo-List`);
        }
        else if(element.className === 'complete') {
            element.parentElement.style.opacity = '0.5';
        }

    }) 

}); 