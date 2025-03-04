let project = document.getElementById('project')
let projectTitle = document.getElementById("projects-description");
const container=document.getElementById('container');
const sideArrow=document.getElementById('sideArrow');
let display = () =>{
   console.log('clicked');
   console.log(projectTitle.classList);
    if(projectTitle.classList.contains("opacity-0")){
        project.classList.add("text-xl");
        project.classList.add("font-bold");
        projectTitle.classList.remove("opacity-0");
        container.classList.add("w-[42vw]")
        projectTitle.classList.remove("max-h-0");
        projectTitle.classList.add("max-h-100%");
        projectTitle.classList.add("m-5");
        projectTitle.classList.add("mt-0");
        projectTitle.classList.add("opacity-100");
        // sideArrow.classList.remove("-rotate-90");
        sideArrow.classList.add("-rotate-90");
        
    }
    else{
        // project.classList.remove("text-xl");
        project.classList.remove("font-bold");
        projectTitle.classList.remove("opacity-100");
        projectTitle.classList.remove("max-h-100%");
        projectTitle.classList.add("max-h-0");
        projectTitle.classList.add("opacity-0");
        container.classList.remove("w-[42vw]") 
        container.classList.add("w-44")
        projectTitle.classList.remove("m-5");
        projectTitle.classList.remove("mt-0");
        sideArrow.classList.remove("-rotate-90");
    }
    // projectTitle.classList.remove("hidden");
}

project.addEventListener('click', display)
project.addEventListener('click', container.classList.toggle('max-w-[100%]'))
