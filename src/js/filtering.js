var studentSearchInputNode;

//remove students node
const removeStudentSearchNode = () => {
    const studentSearchNode = document.querySelector('div.student-search');

    if (studentSearchNode !== null) {
        let parentNode = studentSearchNode.parentElement;
        parentNode.removeChild(studentSearchNode);
     }
};

//generate students field, add event listener 
const generateStudentSearchNode = () => {

    removeStudentSearchNode();
    
    studentSearchInputNode  = document.createElement("input");
    studentSearchInputNode.setAttribute('placeholder', 'Search for students...');

    const btn = document.createElement("button");
	btn.setAttribute('type', 'Submit');
    btn.innerText = "Search";

	const form = document.createElement("form");
	form.setAttribute('class', 'js-searchForm');
	form.appendChild(studentSearchInputNode);
    form.appendChild(btn); 	
    
	const div = document.createElement("div");
    div.setAttribute('class', 'student-search');
	div.appendChild(form); 
    
    document.querySelector(".page-header").appendChild(div);
};


