// script.js
const linksPerPage = 30; // Set to 1 link per page
const container = document.getElementById('link-container');
const prevButton = document.querySelector('.prev-btn');
const nextButton = document.querySelector('.next-btn');
const linkDiv = document.getElementById('linkdiv'); // Use the correct ID for the div

let currentPage = 0;
let links = []; // To store the fetched links

function fetchLinksFromDiv() {
    const linkElements = linkDiv.querySelectorAll('a'); // Fetch all <a> tags inside the div

    linkElements.forEach(linkElement => {
        links.push(linkElement.href);
    });

    showLinks(currentPage);
}

function showLinks(pageIndex) {
    const start = pageIndex * linksPerPage;
    const end = start + linksPerPage;
    const pageLinks = links.slice(start, end);

    container.innerHTML = '';

    pageLinks.forEach(link => {
        const div = document.createElement('div');
        div.classList.add('post-item');

        const a = document.createElement('a');
        a.classList.add('post', 'white-effect');
        a.href = link;

        const h3 = document.createElement('h3');
        h3.classList.add('title');
        h3.textContent = `Download @${getUsernameFromLink(link)} Leaked Videos & Photos`;

        const p = document.createElement('p');
        p.classList.add('description');
        p.innerHTML = `Mega Pack Leaks of @${getUsernameFromLink(link)} - ${getUsernameFromLink(link)} full mega pack leaks`;

        a.appendChild(h3);
        a.appendChild(p);
        div.appendChild(a);
        container.appendChild(div);
    });
}

function getUsernameFromLink(link) {
    return link.split('/').pop(); // Get the last part of the URL as the username
}

function handlePrevClick() {
    if (currentPage > 0) {
        currentPage--;
        showLinks(currentPage);
    }
}

function handleNextClick() {
    if ((currentPage + 1) * linksPerPage < links.length) {
        currentPage++;
        showLinks(currentPage);
    }
}

prevButton.addEventListener('click', handlePrevClick);
nextButton.addEventListener('click', handleNextClick);

// Fetch links from the div and initially show the first page of links
fetchLinksFromDiv();
