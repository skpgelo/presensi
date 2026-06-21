const scriptURL = 'https://script.google.com/macros/s/AKfycbzN_KVjz6e9x-INX26wSCAX2l3t4ggb9FEjlmlCscAydCCEPk6K432iI9V_9RITs56PNA/exec'

const form = document.forms['contact-form']

form.addEventListener('submit', e => {
  e.preventDefault()
  fetch(scriptURL, { method: 'POST', body: new FormData(form)})
  .then(response => alert("Thank you! your form is submitted successfully." ))
  .then(() => { window.location.reload(); })
  .catch(error => console.error('Error!', error.message))
})

