// main.ts

interface Student {
    firstName: string;
    lastName: string;
    age: number;
    location: string;
}

const student1: Student = {
    firstName: "John",
    lastName: "Doe",
    age: 20,
    location: "New York"
};

const student2: Student = {
    firstName: "Jane",
    lastName: "Smith",
    age: 22,
    location: "Los Angeles"
};

const studentsList: Student[] = [student1, student2];

// Create the table and append it to the body using Vanilla JavaScript
const table = document.createElement('table');
const tableHeader = document.createElement('tr');

const headerName = document.createElement('th');
headerName.textContent = 'First Name';
tableHeader.appendChild(headerName);

const headerLocation = document.createElement('th');
headerLocation.textContent = 'Location';
tableHeader.appendChild(headerLocation);

table.appendChild(tableHeader);

studentsList.forEach(student => {
    const row = document.createElement('tr');
    
    const cellName = document.createElement('td');
    cellName.textContent = student.firstName;
    row.appendChild(cellName);
    
    const cellLocation = document.createElement('td');
    cellLocation.textContent = student.location;
    row.appendChild(cellLocation);
    
    table.appendChild(row);
});

document.body.appendChild(table);

