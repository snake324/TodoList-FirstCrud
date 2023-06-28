let persons = [];

function createPerson(name) {
    let person = {
        id: Date.now(),
        name: name
    };

    persons.push(person);

    document.getElementById('person-form').reset();

    displayPersons();
}

function displayPersons() {
    document.getElementById('person-list').innerHTML = '';

    for (let i = 0; i < persons.length; i++) {
        let person = persons[i];

        let listItem = document.createElement('li');
        listItem.textContent = person.name;

        let editButton = document.createElement('button');
        editButton.textContent = 'Edit';
        editButton.addEventListener('click', function() {
            editPerson(person.id);
        });

        let deleteButton = document.createElement('button');
        deleteButton.textContent = 'Delete';
        deleteButton.addEventListener('click', function() {
            deletePerson(person.id);
        });

        listItem.appendChild(editButton);
        listItem.appendChild(deleteButton);

        document.getElementById('person-list').appendChild(listItem);
    }
}

function editPerson(id) {
    let newName = prompt('Enter a new name:');
    if (newName) {
        let person = persons.find(person => person.id === id);
        if (person) {
            person.name = newName;
            displayPersons();
        }
    }
}

function deletePerson(id) {
    let index = persons.findIndex(person => person.id === id);
    if (index !== -1) {
        persons.splice(index, 1);
        displayPersons();
    }
}

document.getElementById('person-form').addEventListener('submit', function(e) {
    e.preventDefault();
    let name = document.getElementById('name-input').value;
    createPerson(name);
});

displayPersons();
