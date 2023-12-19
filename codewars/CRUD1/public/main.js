
const update = document.querySelector('#update-button')

update.addEventListener('click', _ => {
    fetch('/quotes', {
        method: 'put',
        headers: {'Content-Type': 'application/json'},
        body: JSON.stringify({
            name: 'Jonathan B',
            quote: 'Sweet4!'
        })
    })
    .then(res => {
        if(res.ok) return res.json()
    })
    .then(data => {
        console.log(data+' I putted')
        window.location.reload()
    })
})

const deleteButton = document.querySelector('#delete-button')
const messageDiv = document.querySelector('#message')

deleteButton.addEventListener('click', _ => {
    fetch('/quotes', {
        method: 'delete',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
            name: 'JB'
        })
    })
    .then(res => {
        if(res.ok) return res.json()
    })
    .then(data => {
        console.log(data)
        if(data === 'No quote to delete') messageDiv.textContent = 'No Darth Vader to delete'
        window.location.reload()
    })
})


