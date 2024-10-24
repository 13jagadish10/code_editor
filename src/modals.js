
// JavaScript for save project modal open and close
const openSPModalBtn = document.getElementById('openSPModalBtn');
const SaveProjectModal = document.getElementById('SaveProjectModal');

const closeModalBtn = SaveProjectModal.querySelector('.closeModalBtn');
const closeModalBtn2 = SaveProjectModal.querySelector('.closeModalBtn2');
const saveProjectBtn = SaveProjectModal.querySelector('.saveProjectBtn');


const openSPModal = () => {
    SaveProjectModal.classList.remove('hidden');
}
const closeSPModal = () => {
    SaveProjectModal.classList.add('hidden');
}
const saveNewProject = () => {
    let savedProjects = JSON.parse(localStorage.getItem("projects")) || [];
    const projectName = SaveProjectModal.querySelector('.projectName').value;
    if (!projectName) { return alert('provide project name') }
    const HTML = htmlCodeEl.value
    const CSS = cssCodeEl.value
    const JS = jsCodeEl.value
    let d = new Date()
    const dateSaved = `${d.getDate()}/${d.getMonth()+1}/${d.getFullYear()}`
    const existingProject = savedProjects.filter(e=>{return e.projectName === projectName})[0]
    if (existingProject) savedProjects = savedProjects.filter(e=>(e.projectName !== existingProject.projectName))
    
    const newProjects = [{ projectName, HTML, CSS, JS, dateSaved }, ...savedProjects] 
    localStorage.setItem("projects", JSON.stringify(newProjects))

    closeSPModal() 
}


// Open the modal when the "Open Modal" button is clicked
openSPModalBtn.addEventListener('click', openSPModal);

// Close the modal when the "Close" button (X) is clicked
closeModalBtn.addEventListener('click', closeSPModal);

// Close the modal when the "Close" button at the bottom is clicked
closeModalBtn2.addEventListener('click', closeSPModal);

// Close the modal when clicking outside the modal content
window.addEventListener('click', function (e) {
    if (e.target === SaveProjectModal) {
        closeSPModal()
    }
});

// Close the modal when the "Close" button at the bottom is clicked
saveProjectBtn.addEventListener('click', saveNewProject);




// JavaScript for save project modal open and close
const openProjectsModalBtn = document.getElementById('openProjectsModalBtn');
const ProjectsModal = document.getElementById('ProjectsModal');
const closeProjectsModalBtn = ProjectsModal.querySelector('.closeModalBtn');
const closeProjectsModalBtn2 = ProjectsModal.querySelector('.closeModalBtn2');
const projectsContainer = ProjectsModal.querySelector('.projectsContainer')

const closePModal = () => {
    ProjectsModal.classList.add('hidden');
}
const openProject = (projectName) => {
    const savedProjects = JSON.parse(localStorage.getItem("projects")) || [];
    const project = savedProjects.filter((e) => { return e.projectName === projectName })
    htmlCodeEl.value = project[0].HTML || ""
    cssCodeEl.value = project[0].CSS || ""
    jsCodeEl.value = project[0].JS || ""
    closePModal()
}
const openPModal = () => {
    ProjectsModal.classList.remove('hidden');
    projectsContainer.innerHTML = '';
    const projects = JSON.parse(localStorage.getItem("projects")) || []; 
    if(projects.length==0 || !projects) return projectsContainer.innerHTML = '<p class="text-black mt-4">No Projects Found!</p>'
    projects.forEach(project => {
        projectsContainer.innerHTML += `
        <div class="bg-black/10  rounded-md">
        <p class="p-2 py-1 rounded-t-md block mb-2 text-sm font-medium text-gray-900 my-4 bg-[#808080]">
            ${project.projectName}
        </p>
        <div class="flex flex-wrap justify-between px-2 pb-2">
            <p class="inline text-black">
                ${project.HTML && '<i class="fa-brands fa-html5"></i><span>HTML</span>'}
                ${project.CSS && '<i class="fa-brands fa-css3-alt"></i><span>CSS</span>'}
                ${project.JS && '<i class="fa-brands fa-square-js fa-css3-alt"></i><span>JS</span>'} 
                <span class="ml-3 text-sm text-gray-700">
                ${project.dateSaved || ""}
                </span>
            </p> 
            <div class="flex justify-end gap-2">
                <button
                onclick="deleteProject('${project.projectName}')"
                    class=" py-1 px-2 inline-flex items-center gap-x-2 text-sm font-medium rounded-lg border text-white bg-red-500 shadow-sm hover:bg-red-600 focus:outline-none">
                    Delete
                </button>
                <button
                    onclick="openProject('${project.projectName}')"
                    class="saveProjectBtn py-1 px-2 inline-flex items-center gap-x-2 text-sm font-medium rounded-lg border border-transparent bg-green-500  hover:bg-green-600 focus:outline-none">
                    Open
                </button>
            </div>
        </div>
    </div>
        `;
    })

}
const deleteProject = (projectName) => {
    const savedProjects = JSON.parse(localStorage.getItem("projects")) || [];
    let projects = savedProjects.filter((e) => { return e.projectName !== projectName }) 
    localStorage.setItem("projects", JSON.stringify(projects))

    projectsContainer.innerHTML = '';
    projects = JSON.parse(localStorage.getItem("projects")) || [];
    if(projects.length==0 || !projects) return projectsContainer.innerHTML = '<p class="text-black mt-4">No Projects Found!</p>'
    projects.forEach(project => {
        projectsContainer.innerHTML += `
        <div class="bg-black/10  rounded-md">
        <p class="p-2 py-1 rounded-t-md block mb-2 text-sm font-medium text-gray-900 my-4 bg-[#808080]">
            ${project.projectName}
        </p>
        <div class="flex flex-wrap justify-between px-2 pb-2">
            <p class="inline text-black">
            ${project.HTML && '<i class="fa-brands fa-html5"></i><span>HTML</span>'}
            ${project.CSS && '<i class="fa-brands fa-css3-alt"></i><span>CSS</span>'}
            ${project.JS && '<i class="fa-brands fa-square-js fa-css3-alt"></i><span>JS</span>'} 
                <span class="ml-3 text-sm text-gray-700">
                ${project.dateSaved || ""}
                </span>
            </p> 
            <div class="flex justify-end gap-2">
                <button
                onclick="deleteProject('${project.projectName}')"
                    class=" py-1 px-2 inline-flex items-center gap-x-2 text-sm font-medium rounded-lg border text-white bg-red-500 shadow-sm hover:bg-red-600 focus:outline-none">
                    Delete
                </button>
                <button
                    onclick="openProject('${project.projectName}')"
                    class="saveProjectBtn py-1 px-2 inline-flex items-center gap-x-2 text-sm font-medium rounded-lg border border-transparent bg-green-500  hover:bg-green-600 focus:outline-none">
                    Open
                </button>
            </div>
        </div>
    </div>
        `;
    })
}

// Open the modal when the "Open Modal" button is clicked
openProjectsModalBtn.addEventListener('click', openPModal);

closeProjectsModalBtn.addEventListener('click', closePModal)
closeProjectsModalBtn2.addEventListener('click', closePModal)