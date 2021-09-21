//"number" é o argumento que ela recebe na última função do script e é o que determinará o url da página

function todo(number) { 
    const url = `https://jsonplaceholder.typicode.com/users/${number}/todos`
    fetch(url)
    .then(response => response.json())
    .then((todoShowed) => {
        const usertitle = todoShowed[number].title
        const todoCompleted = todoShowed[number].completed
        showResults(usertitle, todoCompleted)
    })
    .catch((err) => {
        console.log(`It wasn't possible to complete this action due to this cause -> ${err}`)
    })
}

function showResults(titleResult, completedResult) {
    const showTitleResult = () => {
        const listResults = document.getElementById('list')
        const listCreated = document.createElement('li')
        listCreated.textContent = `Tarefa: ${titleResult}`
        listResults.appendChild(listCreated)
    }

    const showCompletedResult = () => {
        const listResults = document.getElementById('list')
        const listCreated = document.createElement('li')
        switch (completedResult) {
            case true:
                completedResult = 'terminado'
                break

            case false:
                completedResult = 'não terminado'
                break
        }
        listCreated.textContent = `Status: ${completedResult}`
        listResults.appendChild(listCreated)
    }

    list.innerHTML = ''  
    showTitleResult()
    showCompletedResult()
}


// Principal mecanismo do site, é onde executa a função que possui a promise a ser resolvida e que mostrará os dados
window.onload = () => {
    const searchUserField = document.getElementById('searchingFields')
    searchUserField.onkeyup = () => {
        if (searchUserField.value.length === 0 || searchUserField.value.length === 1) {
            if (searchUserField.value >= 1 && searchUserField.value <= 9) {
                todo(searchUserField.value) // Recebe como argumento o valor do campo de input e mostrará os dados de determinada task do To Do
            }
        } else {
            window.alert('Você deve inserir um número entre 0 e 9')
            location.reload()
        }
    }
}