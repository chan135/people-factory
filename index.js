const personForm = document.querySelector('form')

personForm.onsubmit = (event) => {
    event.preventDefault()
    const form = event.target
    const details = document.querySelector('.details')


    const personName = (form.personName.value)
    details.innerHTML = `<em>${personName}</em>`

}