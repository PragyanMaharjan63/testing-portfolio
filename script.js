const getProjects = async () =>{
    try{
        const data = await fetch("http://127.0.0.1:5500/projects/projects.json")
        let project = await data.json()
        console.log(project)
    }
    catch(err){
        console.log(err)
    }
}

getProjects()
