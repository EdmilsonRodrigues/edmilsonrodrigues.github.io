const cardsPerPage = 3;
const projects = [
    {
        title: "SOP Chatbot [WIP]",
        description: "This project is a chatbot made in Python where a company can subscribe and send " +
            "Standard Operational Protocols (SOPs) to the chatbot<br/>The chatbot then can help in the " +
            "training of the company's employees and helping with quick doubts.",
        link: "https://github.com/EdmilsonRodrigues/sop_chatbot",
    },
    {
        title: "Client Generator [WIP]",
        description: "This project consists on a CLI made in Python where you can, having a file with an OpenAPI " +
            "Specification of a backend, generate a directory called api with a frontend client for that backend.<br/>" +
            "The project, at the current moment, generates clients for Angular.",
        link: "https://github.com/EdmilsonRodrigues/client_generator",
    },
    {
        title: "Project Initializer [WIP]",
        description: "This project consists on a CLI made in Python made to speed up my development of new projects.<br/>" +
            "It asks information about the project, such as if it's a backend, or an RPA, which is the database, and it generates a template " +
            "for the beginning of the project.",
        link: "https://github.com/EdmilsonRodrigues/project_initializer",
    },
    {
        title: "PyTrajectData [Not Started]",
        description: "A Python SDK for the Traject Data API that will be published in the PyPI with a synchronous and an " +
            "asynchronus client, to help the development of softwares that integrate with these scrapers",
        link: "https://github.com/EdmilsonRodrigues/trajectdata",
    },
    {
        title: "Inventory Manager Server [Not Started]",
        description: "This project consists on a gRPC server made in Golang created to manage the inventory of a company.",
        link: "https://github.com/EdmilsonRodrigues/inventory-manager-server",
    },
    {
        title: "Inventory Manager Client [Not Started]",
        description: "This project consists on a desktop application that is a gRPC client made in Python for the inventory-manager-server.",
        link: "https://github.com/EdmilsonRodrigues/inventory-manager-client",
    },
]
const contributions = [
    {
        title: "Python Libjuju",
        description: "This library is a python library for the Canonical's Juju, possibiliting the usage of Juju via python scripts and the REPL " +
            "instead of the juju CLI.",
        link: "https://github.com/juju/python-libjuju",
    },
    {
        title: "DevOrbit",
        description: "An open source platform intended to be a social media for technology students, enthusiasts and developers written in Flask.",
        link: "https://github.com/Gilderlan0101/DevOrbit",
    },
]
const technologiesCards = [
    { url: 'assets/linux-icon.png', title: 'Linux' },
    { url: 'assets/pydantic-icon.png', title: 'Pydantic' },
    { url: 'assets/golang-icon.png', title: 'Golang' },
    { url: 'assets/python-icon.png', title: 'Python' },
    { url: 'assets/fastapi-icon.png', title: 'Fastapi' },
    { url: 'assets/mongodb-icon.png', title: 'Mongodb' },
    { url: 'assets/postgresql-icon.png', title: 'Postgresql' },
    { url: 'assets/flask-icon.png', title: 'Flask' },
    { url: 'assets/debian-icon.png', title: 'Debian' },
    { url: 'assets/ubuntu-icon.png', title: 'Ubuntu' },
    { url: 'assets/angular-icon.png', title: 'Angular' },
    { url: 'assets/mysql-icon.png', title: 'Mysql' },
    { url: 'assets/javascript-icon.png', title: 'Javascript' },
    { url: 'assets/mariadb-icon.png', title: 'Mariadb' },
    { url: 'assets/css3-icon.png', title: 'CSS3' },
    { url: 'assets/typescript-icon.png', title: 'Typescript' },
    { url: 'assets/django-icon.png', title: 'Django' },
    { url: 'assets/html5_icon.png', title: 'HTML5' },
    { url: 'assets/tkinter-icon.png', title: 'Tkinter' },
    { url: 'assets/sqlite-icon.png', title: 'Sqlite' },
]


/**
 * Loads the given cards into the given container, with pagination.
 * @param {any[]} cards The cards to load
 * @param {string} containerId The id of the container to load the cards into
 */
function loadCards(cards, containerId) {
    let currentPage = 1
    const totalPages = Math.ceil(cards.length / cardsPerPage)
    const previousButton = document.querySelector(`#${containerId} > .pagination > .prev-button`)
    previousButton.disabled = true
    const nextButton = document.querySelector(`#${containerId} > .pagination > .next-button`)
    if (currentPage === totalPages) {
        nextButton.disabled = true
    }
    previousButton.addEventListener("click", () => {
        if (--currentPage < 1) currentPage = 1
        paginateCards()
        if (currentPage == 1) {
            previousButton.disabled = true
        }
        nextButton.disabled = false
    })
    nextButton.addEventListener("click", () => {
        if (++currentPage > totalPages) currentPage = totalPages
        paginateCards()
        if (currentPage === totalPages) {
            nextButton.disabled = true
        }
        previousButton.disabled = false
    })
    function paginateCards() {
        let paginatedCards = cards.slice(((currentPage - 1) * cardsPerPage), (currentPage * cardsPerPage))
        if (paginatedCards == []) return
        fillCards(paginatedCards, containerId)
    }
    paginateCards()
}

/**
 * Populates a specified card container with card elements.
 *
 * @param {any[]} cards - An array of card objects, each containing a title, description, and link.
 * @param {string} containerId - The ID of the container where cards will be inserted.
 */
function fillCards(cards, containerId) {
    const cardsContainer = document.querySelector(`#${containerId} > .pagination > .card-container`)
    cardsContainer.innerHTML = ''
    for (const card of cards) {
        const cardCard = document.createElement("div")
        cardCard.className = "card"

        const cardTitle = document.createElement("h3")
        cardTitle.innerHTML = card.title
        cardCard.appendChild(cardTitle)

        const cardDescription = document.createElement("p")
        cardCard.appendChild(cardDescription)

        cardDescription.innerHTML = card.description
        const cardLink = document.createElement("a")
        cardLink.href = card.link
        cardLink.target = "_blank"
        cardLink.innerHTML = "Learn More"
        cardCard.appendChild(cardLink)

        cardsContainer.appendChild(cardCard)
    }
}

function createMovingCard(card) {
    const movingCard = document.createElement("div");
    movingCard.className = "moving-card";

    const img = document.createElement("img");
    img.src = card.url;
    img.alt = card.title;

    const title = document.createElement("h3");
    title.className = "moving-card-title";
    title.innerHTML = card.title;

    movingCard.appendChild(img);
    movingCard.appendChild(title);
    return movingCard;
}


function initInfiniteScroll() {
    const container = document.getElementById('cardContainer');

    // Create initial set of cards
    technologiesCards.forEach(card => {
        container.appendChild(createMovingCard(card));
    });

    // Clone all cards and append them
    technologiesCards.forEach(card => {
        container.appendChild(createMovingCard(card));
    });

    // Start the animation
    container.classList.add('animate');

    // Reset animation when it completes
    container.addEventListener('animationend', () => {
        container.classList.remove('animate');
        // Clone all cards and append them
        technologiesCards.forEach(card => {
            container.appendChild(createMovingCard(card));
        });
        // Use setTimeout to prevent stuttering
        setTimeout(() => {
            container.classList.add('animate');
        }, 0);
    });
}


(() => {
    loadCards(projects, "projects")
    loadCards(contributions, "contributions")
    initInfiniteScroll()
})();
