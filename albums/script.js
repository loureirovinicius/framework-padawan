function albums(number) {
    const url = `https://jsonplaceholder.typicode.com/albums/${number}`
    fetch(url)
    .then(response => response.json())
    .then((albumsShowed) => {
        const userId = albumsShowed['id']
        const albumsDisplayed = albumsShowed['title']
        showResults(userId, albumsDisplayed)
    })
}

function showResults(idResult, albumResult) {
    const showidResult = (id) => {
        const listResults = document.getElementById('list')
        const listCreated = document.createElement('li')
        listCreated.innerHTML = 'ID do Usuário: ' + id
        listResults.appendChild(listCreated)
    }

    const showAlbumResult = (album) => {
        const listResults = document.getElementById('list')
        const listCreated = document.createElement('li')
        listCreated.innerHTML = 'Descrição do Album: ' + album
        listResults.appendChild(listCreated)
    }
    
    list.innerHTML = ""
    showidResult(idResult)
    showAlbumResult(albumResult)

   
}

window.onload = () => {
    const searchUserField = document.getElementById('searchingFields')
    searchUserField.onkeyup = () => {
        if (searchUserField.value.length === 0 || searchUserField.value.length === 1) {
            if (searchUserField.value >= 1 && searchUserField.value <= 9) {
                albums(searchUserField.value)
            }
        } else {
            window.alert('Você deve inserir um número entre 0 e 9')
            location.reload()
        }
    }
}