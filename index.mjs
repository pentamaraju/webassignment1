import "./styles.css";

// index.mjs

// Function to load different sections dynamically
function loadContent(section) {
  const app = document.getElementById("app");

  switch (section) {
    case "aboutme":
      app.innerHTML = `
          <section>
            <h2>ABOUT ME</h2>
            <div class="paragraph">
            <p> I am a recent M.Tech graduate with a focus on data analysis and deep learning. During my studies, I have specialized in leveraging deep learning techniques to analyze complex datasets and derive meaningful insights </p>
            <p> My projects have involved developing and training neural networks for tasks such as image classification, natural language processing, and predictive analytics. Through hands-on experience with tools and frameworks like TensorFlow, PyTorch, and scikit-learn </p>
           </div>
          </section>
        `;
      break;
    case "education":
      app.innerHTML = `
          <section>
            <h2>Education</h2>
            <div class="education-container">
            <div class="education-item">
              <h3>Vellore Institute of Technology, Bhopal, MP</h3>
              <p class="degree">MTech - Artificial Intelligence and Data Science</p>
              <p><strong>Duration:</strong> Aug. 2023 – Mar. 2025</p>
              <p><strong>CGPA:</strong> 6.7</p>
            </div>
        
            <div class="education-item">
              <h3>TKR College Of Engineering, Hyderabad, TS</h3>
              <p class="degree">BTech – Computer Science Engineering</p>
              <p><strong>Duration:</strong> Jul. 2016 – Apr. 2020</p>
              <p><strong>CGPA:</strong> 6.5</p>
            </div>

            <div class="education-item">
            <h3>Sri Chaitanya Junior Kalasala, Hyderabad, TS</h3>
            <p class="degree">MPC - Math’s-Physics-Chemistry</p>
            <p><strong>Duration:</strong> Aug. 2012 – May. 2014</p>
            <p><strong>Percentage:</strong> 80%</p>
          </div>
        </div>
          </section>
        `;
      break;
    case "projects":
      app.innerHTML = `
          <section>
            <h2>Acadmeic Projects</h2>

          <div class="project-item">
            <h3>Communication Channel</h3>
            <p class="technology">Technologies: XML, Java, Android Studio, Firebase</p>
            <p class="duration">Duration: Jul 2019 – Dec 2019</p>
            <p>Developed a security-based communication app for an organization using Android Studio, utilizing XML for designing the app’s frontend, defining the layout and appearance of the user interface elements.</p>
            <p>Java was employed to handle employee data and user interactions, and manage the app’s overall functionality. It demonstrates the way information flows between stakeholders.</p>
          </div>
      
          <div class="project-item">
            <h3>Emergency SOS</h3>
            <p class="technology">Technologies: HTML, CSS, Database, SQL, Python</p>
            <p class="duration">Duration: Mar 2020 – Oct 2020</p>
            <p>Created and built a portfolio and message-sent service by the movement of the phone. Developed an app that sends a message in an emergency by detecting the movement of the mobile device.</p>
          </div>

          <div class="project-item">
            <h3>Deep Learning</h3>
           <p class="technology">Technologies: Python, CNN, LSTM, CoLab, OpenAI API Key, TensorFlow</p>
           <p class="duration">Duration: Aug 2023 – Dec 2023</p>
           <p>Developed a deep learning model using CNN and LSTM-based RNN for sign language detection. Enhanced signs using an open-source API, connecting to advanced language models like Chat GPT-4 for informative and ethical content.</p>
           <p>Ensures detection of letters for particular Indian signs.</p>
         </div>
   </div>
          </section>
        `;
      break;
    case "skills":
      app.innerHTML = `
          <section>
            <h2>Skills Requried</h2>
            <div class="skills-container">
               <div class="skills-section">
                 <h3>Languages</h3>
                 <p>Java, Python, SQL (Postgres), HTML/CSS, Django, Android</p>
               </div>
            <div class="skills-section">
               <h3>Frameworks</h3>
               <p>React, Node.js, Firebase, Ionic, CNN, LSTM</p>
            </div>
          <div class="skills-section">
             <h3>Developer Tools</h3>
             <p>GitHub, Google Cloud Platform, VS Code, Xcode, Jupyter, Android Studio, IntelliJ, Tableau</p>
          </div>
        <div class="skills-section">
          <h3>Libraries</h3>
          <p>Pandas, NumPy, Matplotlib, TensorFlow, Sklearn</p>
        </div>
  </div>
            
          </section>
        `;
      break;

    case "contact":
      app.innerHTML = `
          <section>
          <ul>
          <div class="contact-container">
           <div class="contact-item">
             <h3>Contact Information</h3>
             <p>Phone: +91-9398631451</p>
             <p>Gmail: <a href="gmailto:pentamarajuabhinav@gmail.com">pentamarajuabhinav@gmail.com</a></p>
           </div>
          <div class="contact-item">
            <h3>Address</h3>
            <p>H:NO:18-183/1/A, Papaiah Nagar Colony, Nagarkurnool-509209</p>
          </div>
  </div>
  </ul>
          </section>
        `;
      break;

    case "linkedin":
      app.innerHTML = `
          <section>
            <p>LinkedIn: <a href="https://www.linkedin.com/in/pentamaraju-abhinav-a63a21207">pentamaraju-abhinav-a63a21207</a></p>
          </section>
        `;
      break;
    default:
      app.innerHTML = `
          <section>
            <h2>Welcome</h2>
            <p>Select a section from the menu to view content.</p>
          </section>
        `;
      break;
  }
}

// Event listeners for navigation links
document.getElementById("showAboutMe").addEventListener("click", (e) => {
  e.preventDefault();
  loadContent("aboutme");
});

document.getElementById("showEducation").addEventListener("click", (e) => {
  e.preventDefault();
  loadContent("education");
});

document.getElementById("showProjects").addEventListener("click", (e) => {
  e.preventDefault();
  loadContent("projects");
});

document.getElementById("showSkills").addEventListener("click", (e) => {
  e.preventDefault();
  loadContent("skills");
});

document.getElementById("showContact").addEventListener("click", (e) => {
  e.preventDefault();
  loadContent("contact");
});

// Load default content on page load
loadContent("home");
