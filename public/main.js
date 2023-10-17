
const name = document.getElementById('name');
const tel = document.getElementById('tel')
const saveBtn = document.getElementById('save-btn')
const contactItem = document.querySelector('.contact-item')
const editBtn = document.getElementById('edit-btn')
const deleteBtn = document.getElementById('delete-btn')
const dataTable = document.createElement('table')


function displayContacts(contacts) {
    
    let html = '<table border="1"></table><thead><tr><th>&nbsp;&nbsp;#</th><th>&nbsp;&nbsp;Name</th><th style="text-align: center">Tel</th><th style="text-align: center">Action</th></tr>'
    html += '<tbody>'
    for (let item of contacts) {
        // console.log(item)
        html += `<tr>
        <td>&nbsp;&nbsp;${item.id} </td>
        <td>&nbsp;&nbsp;${item.name}</td>
        <td style="text-align: center">${item.tel}</td>
        <td style="text-align: center; width: 15%;">
            <button id="edit-btn" onclick="updateProductInStock(${item.id})"><i class="material-icons edit">edit</i></button>
            <button id="delete-btn" onclick="deleteProductInStock(${item.id})"><i class="material-icons delete">delete</i></button>
        </td>
        </tr>`
    }
    html += '</tbody>'
    html += '</table>'
    dataTable.innerHTML = html
    contactItem.appendChild(dataTable)
}

function getContacts() {
    axios.get(`/api/contacts`)
        .then(res => {
            let contacts = res.data
            console.log(contacts)
            displayContacts(contacts)
        })
        .catch(error => {
            console.log(error)
        })
}

// Load contacts
getContacts()