const inputs = document.querySelectorAll(
  "input[type='text'], input[type='password']"
);

const pseudoChecker = (value) => {
  console.log(value);
};

const emailChecker = (value) => {
  console.log(value);
};

const passwordChecker = (value) => {
  console.log(value);
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
