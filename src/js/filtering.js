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
    
    const studentSearchInputNode  = document.createElement("input");
    studentSearchInputNode.setAttribute('placeholder', 'Search for students...');
    studentSearchInputNode.addEventListener("keyup", (event) => {
        var x = event.which || event.keyCode;
        if (x !== 13) return;
        searchOnMatch(studentSearchInputNode.value);
    });

    const btn = document.createElement("button");
    btn.innerText = "Search";
    btn.addEventListener("click", (event) => {
        searchOnMatch(studentSearchInputNode.value);
    });

    const div = document.createElement("div");
    div.setAttribute('class', 'student-search');
    div.appendChild(studentSearchInputNode);
    div.appendChild(btn);        
    
    document.querySelector(".page-header").appendChild(div);
};


