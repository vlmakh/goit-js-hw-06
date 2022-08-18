const formRef = document.querySelector(".login-form");
const inputEmailRef = formRef.querySelector('[name="email"]');
const inputPasswordRef = formRef.querySelector('[name="password"]');

formRef.addEventListener("submit", onSubmitForm);

function onSubmitForm(event) {
  event.preventDefault();

  if (inputEmailRef.value === "" || inputPasswordRef.value === "") {
    return window.alert("Все поля должны быть заполнены");
  }

  const email = event.currentTarget.elements.email.value;
  const pass = event.currentTarget.elements.password.value;

  console.log({ email, pass });

  formRef.reset();
}
