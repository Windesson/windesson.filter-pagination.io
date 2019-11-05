// Generate a list of links up to the max num of pages.
const appendChildLiArchors = (ulElement) => {

    for (let pageNum = 1; pageNum <= getPageCount(); pageNum++) {

        let aElement = document.createElement('a');
        aElement.setAttribute("href", "#");
        aElement.setAttribute("class", "js-page-btn");
        aElement.innerText = pageNum;
        addBtnEventListener(aElement);

        let liElement = document.createElement('li');
        liElement.appendChild(aElement);

        ulElement.appendChild(liElement);
    }
};

const deactivateElements = () => {
    document.querySelectorAll('a.js-page-btn.active').forEach(function (element) {
        deactivateElement(element);
    });
};

const deactivateElement = (element) => {
    if (element.classList.contains("active"))
         element.classList.remove("active");
};

const activateElement = (element) => {
    if (!element.classList.contains("active"))
        element.classList.add("active");
};

const removeExistingPagination = () => {
    const existingDivPagination = document.querySelector('div.pagination');

    if (existingDivPagination !== null)
        document.querySelector('div.page').removeChild(existingDivPagination);
};

const addBtnEventListener = (abutton) => {

    abutton.addEventListener("click",  () => {
            deactivateElements();
            showPage(abutton.innerText);
            activateElement(abutton);
        });
    
};

const appendNewPagination = () => {
    const ulElement = document.createElement('ul');
    appendChildLiArchors(ulElement);

    const divElement = document.createElement('div');
    divElement.setAttribute('class', 'pagination');
    divElement.appendChild(ulElement);
    document.querySelector('div.page').appendChild(divElement);
};

//An arrow function to hide all of the items in the list except for the items you want to show.
const showPage = (pageNum) => {

    const startIndex = pageNum * MAXITEMSPERPAGE - MAXITEMSPERPAGE;
    const endIndex = pageNum * MAXITEMSPERPAGE;

    for (let studentIndex = 0; studentIndex < searchableStudents.length; studentIndex++) {
        if (studentIndex >= startIndex && studentIndex < endIndex)
            searchableStudents[studentIndex].hidden = false;
        else
            searchableStudents[studentIndex].hidden = true;
    }
};
