const inputs = document.querySelectorAll(
  "input[type='text'], input[type='password']"
);
let pseudo, email, password, confirmPass;

const errorDisplay = (tag, message, valid) => {
  const container = document.querySelector("." + tag + "-container");
  const span = document.querySelector("." + tag + "-container> span");

  if (!valid) {
    container.classList.add("error");
    span.textContent = message;
  } else {
    container.classList.remove("error");
    span.textContent = message;
  }
};
const pseudoChecker = (value) => {
  if ((value.length > 0 && value.length <= 3) || value.length > 20) {
    errorDisplay("pseudo", "Le pseudo doit faire entre 3 et 20 caractères");
    pseudo = null;
  } else if (!value.match(/^[a-zA-Z0-9_.-]*$/)) {
    errorDisplay(
      "pseudo",
      "Le pseudo ne doit pas contenir de caractères spéciaux"
    );
    pseudo = null;
  } else {
    errorDisplay("pseudo", "", true);
    pseudo = value;
  }
};

const emailChecker = (value) => {
  if (value.length > 4) {
    if (!value.match(/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/)) {
      errorDisplay("email", "le mail n'est pas valide");
      email = null;
    } else {
      errorDisplay("email", "", true);
      email = value;
    }
  } else {
    errorDisplay("email", "", true);
    email = value;
  }
};

// const pseudoChecker = (value) => {
//   const pseudoContainer = document.querySelector(".pseudo-container");
//   const errorDisplay = document.querySelector(".pseudo-container > span");

//   if ((value.length > 0 && value.length <= 3) || value.length > 20) {
//     pseudoContainer.classList.add("error");
//     errorDisplay.textContent = "le pseudo doit faire entre 3 et 20 caractères";
//   } else if (!value.match(/^[a-zA-Z0-9_.-]*$/)) {
//     pseudoContainer.classList.add("error");
//     errorDisplay.textContent =
//       "Le pseudo ne doit pas contenir de caractères spéciaux";
//   } else {
//     pseudoContainer.classList.remove("error");
//     errorDisplay.textContent = "";
//   }
// };

// const emailChecker = (value) => {
//   const emailContainer = document.querySelector(".email-container");
//   const errorDisplay = document.querySelector(".email-container > span");

//   if (value.length > 5) {
//     if (!value.match(/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/)) {
//       emailContainer.classList.add("error");
//     } else {
//       emailContainer.classList.remove("error");
//     }
//   } else {
//     emailContainer.classList.remove("error");
//   }
// };

const passwordChecker = (value) => {
  const passwordContainer = document.querySelector(".password-container");
  const errorDisplay = document.querySelector(".password-container > span");

  console.log(passwordContainer, errorDisplay);
};

const confirmChecker = (value) => {
  console.log(value);
};

inputs.forEach((input) => {
  input.addEventListener("input", (e) => {
    switch (e.target.id) {
      case "pseudo":
        pseudoChecker(e.target.value);
        break;
      case "email":
        emailChecker(e.target.value);
        break;
      case "password":
        passwordChecker(e.target.value);
        break;
      case "confirm":
        confirmChecker(e.target.value);
        break;
      default:
        null;
    }
  });
});
