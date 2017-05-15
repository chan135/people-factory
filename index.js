const personForm = document.querySelector('form')

const handleSubmit = (event) => {
    event.preventDefault()
    const form = event.target
    const details = document.querySelector('.details')


    const personName = (form.personName.value)
    const hairColor = form.hairColor.value;
    // details.innerHTML = `<em>${personName}</em>`
    // const em = document.createElement('em')

    // em.textContent = personName
    // details.appendChild(em)
    // details.
    const colorDiv = `
    <div style= "height: 50px; width: 100px; background-color: ${hairColor}"></div>`

    details.innerHTML = `
        <ul>
            <li> Name: ${personName} </li> 
            <li> Hair Color: ${colorDiv} </li>
        </ul>
    `    
}
personForm.addEventListener('submit', handleSubmit);
