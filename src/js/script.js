/******************************************
Treehouse Techdegree:
FSJS project 2 - List Filter and Pagination
******************************************/
   
//Study guide for this project - https://drive.google.com/file/d/1OD1diUsTMdpfMDv677TfL1xO2CEkykSz/view?usp=sharing

//Maximum number of item to show
const MAXITEMSPERPAGE = 10;

//An arrow function to return the students list elements. 
const allStudents = () => document.querySelectorAll('li.student-item');
var searchableStudents = allStudents();

//calculate the number of pages needed to diplay at most 10 students at the time.
const getPageCount = () => Math.ceil(searchableStudents.length / 10.0);

const createStudentDOMPagination = () => {
    //add page navigation to the bottom of the page. 
    generateStudentPaginationNode();

    //select and navigate to the first page.
    const firstBtn = document.querySelector("a.js-page-btn");
    if (firstBtn) firstBtn.click();
};

//Limit the pagination to only students matching the searched name.
const searchOnMatch = (studentNameToSearch) => {

    if (studentNameToSearch.length === 0 || !studentNameToSearch.trim()) {
        // display all students 
        searchableStudents = allStudents();
        return createStudentDOMPagination();
    }

    //lookup matching students
    const matchingStudents = [];
    for (let student of allStudents()) {
        let name = student.querySelector('h3').innerText.toLowerCase();
        if (name.includes(studentNameToSearch.toLowerCase())) {
            matchingStudents.push(student);
        }
    }

    //When a search yields 0 results, a message is displayed
    if (matchingStudents.length === 0) {
        alert("no results have been found.");
        return;
    }

    //reduce students scope
    searchableStudents = matchingStudents;

    //hide all students 
    document.querySelectorAll('li.student-item').forEach(function (element) {
        element.hidden = true;
    });

    //Pagination links display based on how many search results are
    createStudentDOMPagination();
};

const main = () => {

    //Generate, append, and add pagination.
    createStudentDOMPagination();

    //Use unobtrusive JavaScript to append HTML for a search bar
    const form = createStudentDOMSearchForm();
	
	//call student search upon form submit event.
	form.addEventListener("submit", (event) => {
        event.preventDefault();
        let input = form.querySelector('input');
        searchOnMatch(input.value);
    }); 
};

// call pagination and include all students in the DOM 
document.addEventListener('DOMContentLoaded', () => {
    main();
});


