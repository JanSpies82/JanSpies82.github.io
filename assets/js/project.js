AOS.init();
/* Project Cards */

const projectcards = document.querySelector(".projectcards");

// Array of object for projects
const projects = [
  // {
  //   title: "Quiz App",
  //   cardImage: "assets/images/project-page/quiz.jpg",
  //   description: "A quiz app built using basic react.",
  //   tagimg: "https://cdn.iconscout.com/icon/free/png-512/react-1-282599.png",
  //   Githublink: "",
  // },
  {
    title: "WriteToPdf",
    cardImage: "assets/images/project-page/writetopdf.png",
    description: "A document editor that can scan handwritten documents and convert them to pdfs. Built as a group project in my final year as a full stack application.",
    tagimg: "https://cdn.iconscout.com/icon/free/png-512/angular-226066.png",
    Githublink: "https://github.com/COS301-SE-2023/WriteToPdf",
  },
  {
    title: "War Engine",
    cardImage: "assets/images/project-page/war.png",
    description: "A basic war simulator built using C++ as a group project in my second year.",
    tagimg: "https://cdn.iconscout.com/icon/free/png-512/c-plus-569563.png",
    Githublink: "https://github.com/JanSpies82/COS-214-Project-JJJJM",
  },
  {
    title: "Auction program",
    cardImage: "assets/images/project-page/auction.png",
    description: "An auction program built using Python for fundraisers.",
    tagimg: "https://cdn.iconscout.com/icon/free/png-512/python-14-569257.png",
    Githublink: "https://github.com/JanSpies82/Auction-program",
  },
  {
    title: "MiniMax Tic Tac Toe",
    cardImage: "assets/images/project-page/tictactoe.png",
    description: "A simple tic tac toe game made in java that uses the minimax algorithm to play against the user.",
    tagimg: "https://cdn.iconscout.com/icon/free/png-512/java-43-569305.png",
    Githublink: "https://github.com/JanSpies82/MiniMax-Tic-Tac-Toe",
  },

];

// function for rendering project cards data
const showCards = () => {
  let output = "";
  projects.forEach(({ title, cardImage, description, Githublink }) => {
    output += `       
        <div class="column skill-card card" style="margin: 15px"data-aos="zoom-in-up" data-aos-easing="linear" data-aos-delay="300" data-aos-duration="600" >
          <div class="wrapper" style="background: url(${cardImage}) center / cover no-repeat; background-size: 100% 100%;">
            <div class="header">
            </div>
            <div class="data">
              <div class="content">
              <div class="title-div">
                <h1 class="title"><a href="#">${title}</a>
                <!-- <ul class="menu-content"><br> -->
                <!--<li> --><a href="${Githublink}" class="social-icon" target="_blank"><svg xmlns="http://www.w3.org/2000/svg" width="30" height="25" viewBox="0 0 30 28" fill="none" stroke="#fff" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" class="feather feather-github"><path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path></svg></a><!-- </li> -->
                      <!-- </ul> -->
                      </h1>
                </div>
                ${description}
              </div>
            </div>
          </div>
        </div>`;
  });
  projectcards.innerHTML = output;
};
document.addEventListener("DOMContentLoaded", showCards);

function myFunction() {
  // Declare variables
  var input, button, i, skillcard, card, title;
  input = document.getElementById("myInput").value;
  input = input.toUpperCase();
  skillcard = document.getElementsByClassName("skill-card");
  card = document.getElementsByClassName("card");
  title = document.getElementsByClassName("title");

  // Loop through all list items, and hide those who don't match the search query
  for (i = 0; i < button.length; i++) {
    if (
      button[i].innerHTML.toUpperCase().includes(input) ||
      title[i].innerHTML.toUpperCase().includes(input)
    ) {
      skillcard[i].style.display = "";
      card[i].style.display = "";
    } else {
      skillcard[i].style.display = "none";
      card[i].style.display = "none";
    }
  }
}
