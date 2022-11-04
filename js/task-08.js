const contactForm = document.querySelector(`.login-form`)
const onContactFormSubmit = event => {
    event.preventDefault();
    
    const {
    elements: { email, password },
    } = event.target;
    if (!email.value  || !password.value )
    {
        return alert("Усі поля повинні бути заповнені!")
    }
    const information = {
        email: email.value,
    password: password.value
    }
    event.target.reset();
  return  information 
}
contactForm.addEventListener(`submit`, (event) => {
  console.log(onContactFormSubmit(event));
});
