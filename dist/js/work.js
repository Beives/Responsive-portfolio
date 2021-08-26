let currentActive = document.querySelector('.active');
let currentSelection = "";

const buttons = document.querySelectorAll('.selectBtn').forEach(button =>{
    button.addEventListener('click', event=>{
        currentActive.classList.remove('active');
        currentActive = event.target;
        event.target.classList.add('active');
        currentSelection = event.target.dataset.btn;
        changeVisibility();
    })
});

const projects = document.querySelectorAll('.item');

function changeVisibility(){
    projects.forEach(el => {
        if(el.dataset.type == currentSelection){
            el.style.display = 'block';
        }
        else if(currentSelection == ""){
            el.style.display = 'block';
        }
        else{
            el.style.display = 'none';
        }
    });
}