// Get references to the form and disply area
var form = document.getElementById('resumeForm');
var resumeContainer = document.getElementById('resume');
// Handle form submission
form.addEventListener('submit', function (event) {
    event.preventDefault();
    // Collect input values
    var fullName = document.getElementById('fullName').value;
    var email = document.getElementById('email').value;
    var phone = document.getElementById('phone').value;
    var address = document.getElementById('address').value;
    var skills = document.getElementById('skills').value;
    var experience = document.getElementById('experience').value;
    var education = document.getElementById('education').value;
    //Generate the resume content dynamically
    var resumeHTML = "\n   \n    <h3>Personal Information</h3>\n    <p><b>Name:</b><span contenteditable\"true\">".concat(fullName, "</span></p>\n    <p><b>Email:</b><span contenteditable\"true\">").concat(email, "</span></p>\n    <p><b>Phone:</b><span contenteditable\"true\">").concat(phone, "</span></p>\n    <p><b>Address:</b><span contenteditable\"true\">").concat(address, "</span></p>\n     \n    <h3>Education</3>\n    <p contenteditable\"true\">").concat(education, "</p>\n  \n    <h3>Experience</3>\n    <p contenteditable\"true\">").concat(experience, "</p> \n\n    <h3>Skills</3>\n    <p contenteditable\"true\">").concat(skills, "</p> \n    ");
    //display the generated resume
    if (resumeContainer) {
        resumeContainer.innerHTML = resumeHTML;
    }
    else {
        console.error("the resume disply element is missing");
    }
});
