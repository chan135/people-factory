const personForm = document.querySelector('form')

const handleSubmit = (event) => {
    event.preventDefault()
    const form = event.target
    const details = document.querySelector('.details')

    // details.innerHTML = `<em>${personName}</em>`
    // const em = document.createElement('p')
    // em.textContent = 'Name: ' + personName
    // details.appendChild(em);
    // details.innerHTML = `
    //     <ul>
    //         <li> Name: ${personName} </li> 
    //         <li> Hair Color: ${colorDiv} </li>
    //     </ul>
    // `   const colorDiv = `
    //<div style= "height: 50px; width: 100px; background-color: ${form[c].value}">
    //</div>`
    var pars = form.getElementsByTagName('p')
    var array = [];
    for (var a = 0; a < pars.length - 1; a++) {
        array[a] = pars[a].textContent;
    }
    
    var array2 = [];
    var d = -1;
    for (var c = 0; c < array.length; c++) {
        if (form[c].type == 'color') {
            d = c;
            continue;
        }
        array2[c] = form[c].value;               
    }
    var list = document.createElement('UL');
    for (var b = 0; b < array.length; b++) {
        //console.log(array[b])
        const word = document.createElement('LI'); 
        if (d >= 0 && b == d) {
            var colorDiv = document.createElement('LI');
            colorDiv.style.height = 50;
            colorDiv.style.width = 100;
            colorDiv.style.backgroundColor = form[d].value;
            word.textContent = array[b] + ': ';
            var doc = document.createDocumentFragment();
            doc.appendChild(word);
            doc.appendChild(colorDiv);
            list.appendChild(doc);
            console.log(list)
            continue;
        }
        word.textContent = array[b] + ': ' + array2[b];
        //console.log(word.textContent)
        list.appendChild(word);
    }
    
    details.appendChild(list);
    

}
personForm.addEventListener('submit', handleSubmit);

