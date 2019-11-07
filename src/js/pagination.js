// Generate pagination buttons, up to the max num of pages.
const appendChildLiArchors = (ulElement) => {

    for (let pageNum = 1; pageNum <= getPageCount(); pageNum++) {

        let aElement = document.createElement('a');
        aElement.setAttribute("href", "#");
        aElement.setAttribute("class", "js-page-btn");
        aElement.innerText = pageNum;

        let liElement = document.createElement('li');
        liElement.appendChild(aElement);

        ulElement.appendChild(liElement);
    }
};

//loop through all buttons and deactivate. 
const deactivateAllPageBtns = () => {
    document.querySelectorAll('a.js-page-btn.active').forEach(function (element) {
        deactivateElement(element);
    });
};

//removes element class 'active'
const deactivateElement = (element) => {
    if (element.classList.contains("active"))
         element.classList.remove("active");
};

//add element class 'active'
const activateElement = (element) => {
    if (!element.classList.contains("active"))
        element.classList.add("active");
};

//delete div.pagination from the DOM. 
//helpful when working with the example files.
const removeStudentPaginationNode = () => {
    const studentPagination = document.querySelector('div.pagination');

    if (studentPagination === null) return;

    const parent = studentPagination.parentElement;
    parent.removeChild(studentPagination);
};

//Add click event to unordered list containing the buttons.
const addEventOnBtnPageClick = (element) => {

    element.addEventListener("click", (event) => {
           if (event.target.tagName.toUpperCase() !== 'A') return;
            deactivateAllPageBtns();
            showPage(event.target.innerText);
            activateElement(event.target);
        });
    
};

//Append pagination/buttons to DOM
const generateStudentPaginationNode = () => {

    //removes if exists
    removeStudentPaginationNode();

    //create unordered list and append the buttons
    const ulElement = document.createElement('ul');
    appendChildLiArchors(ulElement);
    addEventOnBtnPageClick(ulElement);

    //create pagination div and add the unordered list
    const divElement = document.createElement('div');
    divElement.setAttribute('class', 'pagination');
    divElement.appendChild(ulElement);

    //append new pagination div
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
