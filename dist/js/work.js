let currentActive = document.querySelector('.active');
let currentSelection = "";

const buttons = document.querySelectorAll('.selectBtn').forEach(button =>{
    button.addEventListener('click', event=>{
        currentActive.classList.remove('active');
        currentActive = event.target;
        event.target.classList.add('active');
        currentSelection = event.target.dataset.btn.toString().toLowerCase();
        changeVisibility();
        fade();
    })
});

const fade = () => {
    const fading = document.querySelector('.fading')
    fading.classList.add("fade-effect")
    setTimeout(() => {
            fading.classList.remove("fade-effect")
        }, 1000);
    }

const projects = document.querySelectorAll('.item');
projects.forEach(p => {
    p.classList.add("displayed")
})

const changeVisibility = () => {

    let projectType = ""

    projects.forEach(project => {

        projectType = project.dataset.type.toLowerCase()

        if (projectType.includes(currentSelection)) {

            setTimeout(() => {
                project.classList.add('displayed')
                project.classList.remove('hidden')
            }, 500);
            
        } else {
            setTimeout(() => {
                project.classList.add('hidden')
                project.classList.remove('displayed')
            }, 500);
        }
    })
}