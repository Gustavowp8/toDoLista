function escuro() {
    body.style.background= 'black'
    tema.style.background= '#595959'
    
}

function claro() {
    body.style.background= '#BFBFBF'
    tema.style.background= '#d06dff'
    
}

function padrao() {
    body.style.background= ''
    tema.style.background= '#ffffff'
}

document.querySelector('#push').onclick = function () {
    if(document.querySelector('#newtask input').value.length == 0){
        alert("Digite algo")
    }
    else{
        //adicinar na lista 
        document.querySelector('#tasks').innerHTML += `
        <div class="task">
            <span id="taskname">
                ${document.querySelector('#newtask input').value}
            </span>
            <button class="delete">
            <i class="fas fa-backspace"></i>
            </button>
        </div>
        `;

        var current_tasks = document.querySelectorAll(".delete");
        for(var i=0; i<current_tasks.length; i++){
            current_tasks[i].onclick = function() {
                this.parentNode.remove();
            }
        }

        var tasks = document.querySelectorAll(".task");
        for(var i=0; i<tasks.length; i++) {
            tasks[i].onclick = function () {
                this.classList.toggle('completed');

            }
        }
    }
    document.querySelector('#newtask input').value = "";
    
}