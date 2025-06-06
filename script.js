// 1. Object with constructor and methods
function Character(name, age, status) {
    this.name = name;
    this.age = age;
    this.status = status;
  
    this.introduce = function () {
      return `Hello, this is ${this.name}, 
      I am a ${this.age}-year-old ${this.status}. 
      I'm excited to start my journey on Job Finder!`;
    };
  }

  let slideIndex = [1,1];
let slideId = ["mySlides1", "mySlides2"]
showSlides(1, 0);
showSlides(1, 1);

function plusSlides(n, no) {
  showSlides(slideIndex[no] += n, no);
}

function showSlides(n, no) {
  let i;
  let x = document.getElementsByClassName(slideId[no]);
  let dots = document.getElementsByClassName("dot");
  if (n > x.length) {slideIndex[no] = 1}    
  if (n < 1) {slideIndex[no] = x.length}
  for (i = 0; i < x.length; i++) {
     x[i].style.display = "none";  
  }
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }
  x[slideIndex[no]-1].style.display = "block";
  dots[slideIndex-1].className += " active";  
}
  
  // 2. Arrays: Options for interactivity
  const choices = ["Learn New Digital Skills", "Find Job Opportunities"];
  
  // 3. Variables: Personalized output
  let userName = "";
  
  // 4. Functions with parameters + return
  function makeChoice(choice) {
    return `${userName} chose to: ${choice}. Great move! Let’s get started.`;
  }
  
  function handleChoice(index) {
    if (index === 0) {
      document.getElementById("skills-form").style.display = "block";
      document.getElementById("jobs-form").style.display = "none";
      document.getElementById("choice-output").innerText = "";
    } else if (index === 1) {
      document.getElementById("jobs-form").style.display = "block";
      document.getElementById("skills-form").style.display = "none";
      document.getElementById("choice-output").innerText = "";
    } else {
      const output = makeChoice(choices[index]);
      document.getElementById("choice-output").innerText = output;
    }
  }
  //skills form
  function submitForm(event) {
    event.preventDefault();
  
    const name = document.getElementById("name").value;
    const age = document.getElementById("age").value;
    const status = document.getElementById("role").value;
    const workType = document.getElementById("workType").value;
  
    const user = new Character(name, age, status);
    userName = user.name;
  
    localStorage.setItem("userIntro", user.introduce());
    localStorage.setItem("workType", workType);
  
    window.location.href = "skills.html";
    return false;
  }
  //jobs form
  function submitJobForm(event) {
    event.preventDefault();
  
    const name = document.getElementById("job-name").value;
    const age = document.getElementById("job-age").value;
    const status = document.getElementById("job-role").value;
    const skills = document.getElementById("job-skills").value;
    const workType = document.getElementById("job-workType").value;
  
    const user = new Character(name, age, status);
    userName = user.name;
  
    localStorage.setItem("userIntro", user.introduce());
    localStorage.setItem("workType", workType);
    localStorage.setItem("skills", skills);
  
    window.location.href = "jobs.html";
    return false;
  }
  //image slider
  const imagePaths = ["img3.avif", "img1.jpg", "img2.jpg"];
let currentImageIndex = 0;

function updateImage() {
  document.getElementById("slider-image").src = imagePaths[currentImageIndex];
}

function nextImage() {
  currentImageIndex = (currentImageIndex + 1) % imagePaths.length;
  updateImage();
}

function prevImage() {
  currentImageIndex = (currentImageIndex - 1 + imagePaths.length) % imagePaths.length;
  updateImage();
}
