
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
            <button id="edit-btn" onclick="updateContact(${item.id})"><i class="material-icons edit">edit</i></button>
            <button id="delete-btn" onclick="deleteContact(${item.id})"><i class="material-icons delete">delete</i></button>
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

function createContact(event) {
    event.preventDefault();
    const obj = {
        name: name.value,
        tel: tel.value,
    }
    console.log(obj)
    axios.post(`/api/contacts`, obj)
        .then((res) => {
            let contacts = res.data
            displayContacts(contacts)
            clearForm()
        })
        .catch((error) => {
            console.log(error)
        })
}

function clearForm() {
    name.value = ''
    tel.value = ''
}
saveBtn.addEventListener('click', createContact);

function updateContact(id) {
    let isConfirm = confirm('Are you sure you want to update this record?')
    if (!isConfirm) {

    }
}

function deleteContact(id) {
    let isConfirm = confirm('Are you sure you want to delete this record?')
    if (!isConfirm) {
        axios.delete(`/api/contacts/${id}`)
        .then((res) => {
            let contacts = res.data
            displayContacts(contacts)
        })
        .catch((error) => {
            console.log(error)
        })
    }
}   

// Load contacts
getContacts()