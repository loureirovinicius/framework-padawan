//"number" é o argumento que ela recebe na última função do script e é o que determinará o url da página

function albums(number) {
    const url = `https://jsonplaceholder.typicode.com/albums/${number}`
    fetch(url)
    .then(response => response.json())
    .then((albumsShowed) => {
        const userId = albumsShowed['id']
        const albumsDisplayed = albumsShowed['title']
        console.log(albumsShowed)
        showResults(userId, albumsDisplayed)
    })
}

function showResults(idResult, albumResult) {
    const showidResult = () => {
        const listResults = document.getElementById('list')
        const listCreated = document.createElement('li')
        listCreated.innerHTML = `ID do Usuário: ${idResult}`
        listResults.appendChild(listCreated)
    }

    const showAlbumResult = (album) => {
        const listResults = document.getElementById('list')
        const listCreated = document.createElement('li')
        listCreated.innerHTML = `Descrição do Album: ${albumResult}`
        listResults.appendChild(listCreated)
    }
    
    list.innerHTML = ""
    showidResult()
    showAlbumResult()
}

// Principal mecanismo do site, é onde executa a função que possui a promise a ser resolvida e que mostrará os dados
window.onload = () => {
    const searchUserField = document.getElementById('searchingFields')
    searchUserField.onkeyup = () => {
        if (searchUserField.value.length === 0 || searchUserField.value.length === 1) {
            if (searchUserField.value >= 1 && searchUserField.value <= 9) {
                albums(searchUserField.value) // Recebe como argumento o valor do campo de input e mostrará os dados de determinado album
            }
        } else {
            window.alert('Você deve inserir um número entre 0 e 9')
            location.reload()
        }
    }
}