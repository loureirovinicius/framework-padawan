function todo(number) {
    const url = `https://jsonplaceholder.typicode.com/users/${number}/todos`
    fetch(url)
    .then(response => response.json())
    .then((todoShowed) => {
        const usertitle = todoShowed[number]['title']
        const todoCompleted = todoShowed[number]['completed']
        showResults(usertitle, todoCompleted)
    })
}

function showResults(titleResult, completedResult) {
    const showTitleResult = (title) => {
        const listResults = document.getElementById('list')
        const listCreated = document.createElement('li')
        listCreated.innerHTML = 'Tarefa: ' + title
        listResults.appendChild(listCreated)
    }

    const showCompletedResult = (completed) => {
        const listResults = document.getElementById('list')
        const listCreated = document.createElement('li')
        listCreated.innerHTML = 'Terminado: ' + completed
        listResults.appendChild(listCreated)
    }
    
    list.innerHTML = ""
    showTitleResult(titleResult)
    showCompletedResult(completedResult)  
}

window.onload = () => {
    const searchUserField = document.getElementById('searchingFields')
    searchUserField.onkeyup = () => {
        if (searchUserField.value.length === 0 || searchUserField.value.length === 1) {
            if (searchUserField.value >= 1 && searchUserField.value <= 9) {
                todo(searchUserField.value)
            }
        } else {
            window.alert('Você deve inserir um número entre 0 e 9')
            location.reload()
        }
    }
}