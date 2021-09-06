function post(number) {
    const url = `https://jsonplaceholder.typicode.com/users/${number}/posts`
    fetch(url)
    .then(response => response.json())
    .then((postShowed) => {
        const usertitle = postShowed[number]['title']
        const postsDescription = postShowed[number]['body']
        showResults(usertitle, postsDescription)
    })
}

function showResults(titleResult, postResult) {
    const showTitleResult = (title) => {
        const listResults = document.getElementById('list')
        const listCreated = document.createElement('li')
        listCreated.innerHTML = 'Título da postagem: ' + title
        listResults.appendChild(listCreated)
    }

    const showCompletedResult = (post) => {
        const listResults = document.getElementById('list')
        const listCreated = document.createElement('li')
        listCreated.innerHTML = 'Postagem: ' + post
        listResults.appendChild(listCreated)
    }
    
    list.innerHTML = ""
    showTitleResult(titleResult)
    showCompletedResult(postResult)  
}


window.onload = () => {
    const searchUserField = document.getElementById('searchingFields')
    searchUserField.onkeyup = () => {
        if (searchUserField.value.length === 0 || searchUserField.value.length === 1) {
            if (searchUserField.value >= 1 && searchUserField.value <= 9) {
                post(searchUserField.value)
            }
        } else {
            window.alert('Você deve inserir um número entre 0 e 9')
            location.reload()
        }
    }
}