//listing element
document.getElementById('resumeForm')?.addEventListener('submit', function(event) {
    event.preventDefault();


    //type assertion
    const profilePictureInput = document.getElementById('profilePicture') as HTMLInputElement;
    const nameElement = document.getElementById('name') as HTMLInputElement;
    const emailElement = document.getElementById('email') as HTMLInputElement;
    const phoneElement = document.getElementById('phone') as HTMLInputElement;
    const educationElement = document.getElementById('education') as HTMLTextAreaElement;
    const experienceElement = document.getElementById('experience') as HTMLTextAreaElement;
    const skillsElement = document.getElementById('skills') as HTMLTextAreaElement;
    const usernameElement = document.getElementById(
        "username"
    ) as HTMLInputElement;

    if (profilePictureInput && nameElement && emailElement && phoneElement && educationElement && experienceElement && skillsElement && usernameElement) {


        const name = nameElement.value;
        const email = emailElement.value;
        const phone = phoneElement.value;
        const education = educationElement.value;
        const experience = experienceElement.value;
        const skills = skillsElement.value;
        const username = usernameElement.value;
        const uniquePath = `resumes/${username.replace(/\a+/g,'_')}_sv.html`


        //picture elements
        const profilePictureFile = profilePictureInput.files?.[0]
        const profilePictureURL = profilePictureFile? URL.createObjectURL(profilePictureFile) : '';
    

    // create resume output
    const resumeOutput = `
    <h2>Resume</h2>
    ${profilePictureURL ? `<img src="${profilePictureURL}" alt="Profile Picture" class="profilePicture">` : ''}
    <p><strong>Name:</strong> ${name} </p> <br>
    <p><strong>Email:</strong> ${email} </p> <br>
    <p><strong>Phone:</strong> ${phone}</p> <br>

    <h3>Education</h3>
    <p>${education}</p><br>

    <h3>Experience</h3>
    <p>${experience}</p><br>

    <h3>Skills</h3>
    <p>${skills}</p><br>
    `;

    


    const downloadLink = document.createElement('a')
    downloadLink.href = 'data:text/html;charset=utf-8,' + encodeURIComponent(resumeOutput)
    downloadLink.download = uniquePath;
    downloadLink.textContent = 'Download Your Resume';





    //display the resume putput

    const resumeOutputElement = document.getElementById('resumeOutput')
    if (resumeOutputElement){
        resumeOutputElement.innerHTML = resumeOutput

        resumeOutputElement.appendChild(downloadLink)




        resumeOutputElement.style.display = "block";
    } else {
        console.error('THE RESUME OUTPUT ELEMENTS ARE MISSING')
        
    }
} else {
    console.error('ONE OR MORE OUTPUT ELEMENTS ARE MISSING')
}
})