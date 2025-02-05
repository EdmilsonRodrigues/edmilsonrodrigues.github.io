const cardsPerPage = 3;
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
    {
        title: "Project Four",
        description: "A brief description of Project Four.",
        link: "https://github.com/yourusername/project-four",
    },
    {
        title: "Project Five",
        description: "A brief description of Project Five.",
        link: "https://github.com/yourusername/project-five",
    },
    {
        title: "Project Six",
        description: "A brief description of Project Six.",
        link: "https://github.com/yourusername/project-six",
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
        console.log(currentPage, totalPages)
        paginateCards()
        if (currentPage === totalPages) {
            nextButton.disabled = true
        }
        previousButton.disabled = false
    })
    function paginateCards() {
        let paginatedCards = cards.slice(((currentPage - 1) * cardsPerPage), (currentPage * cardsPerPage))
        if (paginatedCards == []) return
        console.log(paginatedCards)
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

(() => {
    loadCards(projects, "projects")
    loadCards(contributions, "contributions")
})();