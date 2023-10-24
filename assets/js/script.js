const myProjectOne = document.getElementById("title1");
const myProjectTwo= document.getElementById("title2");
const myProjectThree = document.getElementById("title3");

const linkOne = document.getElementById("link1");
const linkTwo = document.getElementById("link2");
const linkThree = document.getElementById("link3");

function showProjectOne() {
    linkOne.style.display = "block";
    linkThree.style.display = "none";
    linkTwo.style.display = "none";
  }

function showProject2() {
    linkOne.style.display = "none";
    linkThree.style.display = "none";
    linkTwo.style.display = "block";
  }
  function showProject3() {
    linkOne.style.display = "none";
    linkTwo.style.display = "none";
    linkThree.style.display = "block";
  }
  
myProjectOne.addEventListener("click", showProjectOne);
myProjectTwo.addEventListener("click", showProject2);
myProjectThree.addEventListener("click", showProject3);




