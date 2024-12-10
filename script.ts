    // Get references to the form and disply area
    const form = document.getElementById('resumeForm') as HTMLFormElement;
    const resumeContainer = document.getElementById('resume') as HTMLDivElement;
  
    // Handle form submission
    form.addEventListener('submit', (event: Event) => {
      event.preventDefault();
  
      // Collect input values
      const fullName = (document.getElementById('fullName') as HTMLInputElement).value;
      const email = (document.getElementById('email') as HTMLInputElement).value;
      const phone = (document.getElementById('phone') as HTMLInputElement).value;
      const address = (document.getElementById('address') as HTMLInputElement).value;
      const skills = (document.getElementById('skills') as HTMLTextAreaElement).value;
      const experience = (document.getElementById('experience') as HTMLTextAreaElement).value;
      const education = (document.getElementById('education') as HTMLTextAreaElement).value;
  
     //Generate the resume content dynamically
  
      const resumeHTML = `
   
    <h3>Personal Information</h3>
    <p><b>Name:</b><span contenteditable"true">${fullName}</span></p>
    <p><b>Email:</b><span contenteditable"true">${email}</span></p>
    <p><b>Phone:</b><span contenteditable"true">${phone}</span></p>
    <p><b>Address:</b><span contenteditable"true">${address}</span></p>
     
    <h3>Education</3>
    <p contenteditable"true">${education}</p>
  
    <h3>Experience</3>
    <p contenteditable"true">${experience}</p> 

    <h3>Skills</3>
    <p contenteditable"true">${skills}</p> 
    `;
  //display the generated resume
  if(resumeContainer){
    resumeContainer.innerHTML = resumeHTML;
}else{
    console.error(`the resume disply element is missing`);
}
  })
