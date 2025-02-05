const projects = [
    {
        title: "Project One",
        description: "A brief description of Project One.",
        link: "https://github.com/yourusername/project-one",
    },
    {
        title: "Project Two",
        description: "A brief description of Project Two.",
        link: "https://github.com/yourusername/project-two",
    },
    {
        title: "Project Three",
        description: "A brief description of Project Three.",
        link: "https://github.com/yourusername/project-three",
    },
]

const contributions = [
    {
        title: "Contribution One",
        description: "A brief description of Contribution One.",
        link: "https://github.com/yourusername/contribution-one",
    },
    {
        title: "Contribution Two",
        description: "A brief description of Contribution Two.",
        link: "https://github.com/yourusername/contribution-two",
    },
    {
        title: "Contribution Three",
        description: "A brief description of Contribution Three.",
        link: "https://github.com/yourusername/contribution-three",
    },
]

function fillProjects() {
    const projectsContainer = document.querySelector("#projects > .card-container")
    if (!projectsContainer) {
        console.log("ERROR")
        return
    }
    for (const project of projects) {
        const projectCard = document.createElement("div")
        projectCard.className = "card"
        
        const projectTitle = document.createElement("h3")
        projectTitle.innerHTML = project.title
        projectCard.appendChild(projectTitle)
        
        const projectDescription = document.createElement("p")
        projectCard.appendChild(projectDescription)

        projectDescription.innerHTML = project.description
        const projectLink = document.createElement("a")
        projectLink.href = project.link
        projectLink.target = "_blank"
        projectLink.innerHTML = "Learn More"
        projectCard.appendChild(projectLink)

        projectsContainer.appendChild(projectCard)
    }
}

function fillContributions() {
    const contributionsContainer = document.querySelector("#contributions > .card-container")
    if (!contributionsContainer) {
        console.log("ERROR")
        return
    }
    for (const contribution of contributions) {
        const contributionCard = document.createElement("div")
        contributionCard.className = "card"
        
        const contributionTitle = document.createElement("h3")
        contributionTitle.innerHTML = contribution.title
        contributionCard.appendChild(contributionTitle)
        
        const contributionDescription = document.createElement("p")
        contributionCard.appendChild(contributionDescription)

        contributionDescription.innerHTML = contribution.description
        const contributionLink = document.createElement("a")
        contributionLink.href = contribution.link
        contributionLink.target = "_blank"
        contributionLink.innerHTML = "Learn More"
        contributionCard.appendChild(contributionLink)

        contributionsContainer.appendChild(contributionCard)
    }    
}

(() => {
    fillProjects();
    fillContributions();
})();