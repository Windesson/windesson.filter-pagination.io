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

//Generate, append, and add pagination.
const generatePagination = () => {

    //add page navigation to the bottom of the page. 
    appendNewPagination();

    //select and navigate to the first page.
    document.querySelector("a.js-page-btn").click();
};

//Limit the pagination to only students matching the searched name.
const searchOnMatch = (studentNameToSearch) => {

    if (studentNameToSearch.length === 0 || !studentNameToSearch.trim())
    {
        // search all students 
        searchableStudents = allStudents();
        return generatePagination();
    }

    //hide all students 
    document.querySelectorAll('li.student-item').forEach(function (element) {
        element.hidden = true;
    });

    //reduce student search scope
    const matchingStudents = [];
    for (let student of allStudents()) {

        let name = student.querySelector('h3').innerText.toLowerCase();

        if (name.startsWith(studentNameToSearch.toLowerCase())){
            matchingStudents.push(student);
        }

    }
    searchableStudents = matchingStudents;
    
    //Update DOM Pagination to work on matching names only.
    generatePagination();

};

// call pagination and include all students in the DOM 
generatePagination();

