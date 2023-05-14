const formEl = document.querySelector('.login-form');

formEl.addEventListener('submit', formSubmit);

function formSubmit(event) {
  event.preventDefault();

  const {
    elements: { email, password },
  } = event.currentTarget;

  if (email.value === '' || password.value === '') {
    return alert('Please fill in ALL the fields!');
  }

  const userInfo = {
    email: email.value,
    password: password.value,
  };

  console.log(userInfo);
  event.currentTarget.reset();
}
