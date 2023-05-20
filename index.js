allSqrs = document.querySelectorAll('.sqr');
let title = document.getElementById("title");
let turn = "X";

// print X_O in squares function.

function _click(id) {
  let sqrs = document.getElementById(id);
  if (turn === "X" && sqrs.innerHTML === "") {
    sqrs.innerHTML = "X";
    title.innerHTML = "Player (O) turn..";
    turn = "O";
    winner();
    draw();
  } else if (turn === "O" && sqrs.innerHTML === "") {
    sqrs.innerHTML = "O";
    title.innerHTML = "Player (X) turn..";
    turn = "X";
    winner();
    draw();
  }
}

//  Defining winner function.

function winner() {
  const winningCases = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6],
  ];
  winningCases.forEach((Case) => {
    // X  Cases
    const caseX = Case.every((indx) => allSqrs[indx].innerHTML === "X");
    //  O  Cases
    const caseO = Case.every((indx) => allSqrs[indx].innerHTML === "O");

    // Checking for winning case.
    if (caseX) {
      celebrate_winner(allSqrs[Case[0]], allSqrs[Case[1]], allSqrs[Case[2]]);
   
      for (sqr of allSqrs) {
        if (sqr.innerHTML === "") {
          sqr.innerHTML = " ";
        }
      }
    } else if (caseO) {
      celebrate_winner(allSqrs[Case[0]], allSqrs[Case[1]], allSqrs[Case[2]]);
    
      for (sqr of allSqrs) {
        if (sqr.innerHTML === "") {
          sqr.innerHTML = " ";
        }
      }
    }
    //end kerli's
  });
}

// Draw Function.
function draw() {
  const arr = [];
  allSqrs.forEach((sqr) => {
    if (sqr.innerHTML !== "") {
      arr.push(sqr);
    }
  });

  const checkTitle = !title.classList.contains("Winning");
  if (arr.length === 9 && checkTitle) {
    arr.forEach((sqr) => {
      sqr.classList.add("drawCase");
    });
    // change the title.
    title.innerHTML = `no winners.`;

    // function of printibg points.
    let prin_point = setInterval(() => {
      title.innerHTML += " .";
    }, 2000);

    // function to stop printing points.
    setTimeout(() => {
      clearInterval(prin_point);
    }, 6000);

    // Function of reloading after 12 seconds of declaring any result .
    setTimeout(() => {
      window.location.reload(true);
    }, 9000);
  }

  //  End of the Kerlis
}

//  Celebrating the winner function.
function celebrate_winner(n1, n2, n3) {
  n1.setAttribute("class", "winningCase");
  n2.setAttribute("class", "winningCase");
  n3.setAttribute("class", "winningCase");
  document.body.style.cssText = `background: #00284d;
   transition: 10s`;
  title.innerHTML = `${n1.innerHTML}   wins`;
  title.classList.add("Winning");

  // function of printibg points.
  let prin_point = setInterval(() => {
    title.innerHTML += " .";
  }, 1500);
  // function to stop the points printing.
  setTimeout(() => {
    clearInterval(prin_point);
  }, 5000);
  //Function of reloading.
  confetti.start();
  setTimeout(() => {
    window.location.reload(true);
  }, 25000);
}

// make restart btn.
start_btn = document.querySelector("#restart");
function reload() {
  window.location.reload(true);
}
