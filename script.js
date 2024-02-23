// Prototipo de Alumno
function Student(name, surname, age) {
    this.name = name;
    this.surname = surname;
    this.age = age;
}


// Función para agregar alumno
function addStudent(event) {
    event.preventDefault();
    const name = document.getElementById('name').value;
    const surname = document.getElementById('surname').value;
    const age = document.getElementById('age').value;
    const student = new Student(name, surname, age);
    students.push(student);
    displayStudents();
    document.getElementById('student-form').reset();
}

// Función para mostrar alumnos
function displayStudents() {
    const outputDiv = document.getElementById('LISTA2');
    outputDiv.innerHTML = '';
    students.forEach(student => {
        const studentDiv = document.createElement('div');
        studentDiv.textContent = `${student.name} ${student.surname} ${student.age}`;
        outputDiv.appendChild(studentDiv);
    });
}

// Conjunto de alumnos
let students = [];

// Event Listener para el formulario de estudiante
document.getElementById('student-form').addEventListener('submit', addStudent);


// Prototipo de Grupo
function Group(name) {
    this.name = name;
    this.students = [];
}

// Define the groups data (replace with your actual data)
const groups2 = [
    // ... your group data here
];

function enrollStudent(student, groupName) {
    const group = groups2.find(group => group.name === groupName);
    if (group) {
        group.students.push(student);
        console.log(`${student.name} ${student.surname} enrolled in ${groupName} group.`);
    } else {
        console.log(`Group ${groupName} not found.`);
    }
}

document.getElementById('enroll-form').addEventListener('submit', function(event) {
    event.preventDefault();
    const selectedStudent = document.getElementById('select-student').value;
    const selectedGroup = document.getElementById('select-group').value; // Use the correct ID

    // Call the enrollStudent function to perform enrollment
    enrollStudent(selectedStudent, selectedGroup);

    // Display enrollment information
    const enrollmentInfo = document.getElementById('enrollment-info');
    enrollmentInfo.textContent = `Estudiante: ${selectedStudent}, Clase: ${selectedGroup}`;
});

////////
// Función para asignar calificaciones a un alumno
function assignGrades(studentName, grades) {
    // Buscar el alumno por nombre
    const student = students.find(student => student.name === studentName);
    if (student) {
        // Asignar las calificaciones al alumno
        student.grades = grades;
        console.log(`Grades assigned to ${student.name} ${student.surname}: ${grades}`);
    } else {
        console.log(`Student ${studentName} not found.`);
    }
}

// Manejar el evento de envío del formulario de calificaciones
document.getElementById('grades-form').addEventListener('submit', function(event) {
    event.preventDefault();
    const selectedStudent = document.getElementById('select-student-grades').value;
    const grades = document.getElementById('grades').value;
    // Lógica para asignar calificaciones al alumno seleccionado
    assignGrades(selectedStudent, grades);
    // Mostrar la información en algún elemento HTML, por ejemplo, en un div con ID "grades-info"
    const gradesInfo = document.getElementById('grades-info');
    gradesInfo.textContent = `Calificación asignada a ${selectedStudent}: ${grades}`;
});

/////

// Función para asignar calificaciones a un alumno
function assignGrades(student, grades) {
    student.grades = grades;
    console.log(`Grades assigned to ${student.name} ${student.surname}`);
}

// Estructura de datos para almacenar grupos
let groups = [];

// Función para crear grupos
function createGroup(groupName) {
    const group = new Group(groupName);
    groups.push(group);
    console.log(`Group ${groupName} created.`);
}

// Función para asignar alumnos a un grupo
function assignStudentsToGroup(groupName, students) {
    const group = groups.find(group => group.name === groupName);
    if (group) {
        students.forEach(student => {
            group.students.push(student);
        });
        console.log(`Students assigned to group ${groupName}`);
    } else {
        console.log(`Group ${groupName} not found.`);
    }
}

// Función para crear grupos y asignar alumnos
document.getElementById('group-form').addEventListener('submit', function(event) {
    event.preventDefault();
    const groupName = document.getElementById('group-name').value;
    const selectedStudents = Array.from(document.getElementById('select-students').selectedOptions).map(option => option.value);
    // Lógica para crear un grupo y asignar alumnos
    createGroup(groupName);
    assignStudentsToGroup(groupName, selectedStudents);
    // Mostrar la información de los alumnos asignados al grupo
    const outputDiv = document.getElementById('output');
    outputDiv.innerHTML = '';
    selectedStudents.forEach(student => {
        const studentDiv = document.createElement('div');
        studentDiv.textContent = `${student} ha sido asignada/o al grupo ${groupName}`;
        outputDiv.appendChild(studentDiv);
    });
});


// Manejar el evento de envío del formulario de inscripción
document.getElementById('enroll-form').addEventListener('submit', function(event) {
    event.preventDefault();
    const selectedStudent = document.getElementById('select-student').value;
    const selectedClass = document.getElementById('select-class').value;
    // Lógica para inscribir al alumno en la clase seleccionada
    console.log(`Enrolling ${selectedStudent} to ${selectedClass}`);
});

// Manejar el evento de envío del formulario de calificaciones
document.getElementById('grades-form').addEventListener('submit', function(event) {
    event.preventDefault();
    const selectedStudent = document.getElementById('select-student-grades').value;
    const grades = document.getElementById('grades').value;
    // Lógica para asignar calificaciones al alumno seleccionado
    console.log(`Assigning grades ${grades} to ${selectedStudent}`);
});

// Manejar el evento de envío del formulario de creación de grupos
document.getElementById('group-form').addEventListener('submit', function(event) {
    event.preventDefault();
    const groupName = document.getElementById('group-name').value;
    const selectedStudents = Array.from(document.getElementById('select-students').selectedOptions).map(option => option.value);
    // Lógica para crear un grupo y asignar alumnos
    console.log(`Creating group ${groupName} and assigning students: ${selectedStudents.join(', ')}`);
});


// Supongamos que tienes un array de estudiantes
let estudents = ["Ninguno", "Sasha Hernandez Benitez", "Alison Carrada Gutierrez", "Carlos Alberto del Villar Montes", "Isaac Diaz Jarquin", "Luz Andrea Cruz","William Herondale","James Carstairs","Cristhian Diaz Morales","Irina Peñalva","Joe Bennet","Alexander Gabriel Claremont Diaz","Henry of Wales","Olivia Rodrigo","Taylor Swift"];

// Función para generar las opciones del menú desplegable
function generateStudentOptions() {
    const selectStudent = document.getElementById('select-student');

    // Limpiamos las opciones existentes
    selectStudent.innerHTML = '';

    // Generamos las opciones dinámicamente
    estudents.forEach(function(student) {
        let option = document.createElement('option');
        option.textContent = student;
        option.value = student; // Esto es opcional, pero puede ser útil si necesitas los valores
        selectStudent.appendChild(option);
    });
}

// Llamamos a la función para generar las opciones al cargar la página
generateStudentOptions();

// Supongamos que tienes un array de nombres de grupos
let groupss = ["Ninguno","Ciencias Naturales", "Matemáticas", "Inglés", "Español","Geografía", "Historia"];

// Función para generar las opciones del menú desplegable de grupos
function generateGroupOptions() {
    const selectGroup = document.getElementById('select-group');

    // Limpiamos las opciones existentes
    selectGroup.innerHTML = '';

    // Generamos las opciones dinámicamente
    groupss.forEach(function(group) {
        let option = document.createElement('option');
        option.textContent = group;
        option.value = group; // Esto es opcional, pero puede ser útil si necesitas los valores
        selectGroup.appendChild(option);
    });
}

// Llamamos a la función para generar las opciones al cargar la página
generateGroupOptions();

// Función para generar las opciones del menú desplegable de selección de estudiantes
function generateStudentOptionsForGrades() {
    const selectStudentGrades = document.getElementById('select-student-grades');

    // Limpiamos las opciones existentes
    selectStudentGrades.innerHTML = '';

    // Generamos las opciones dinámicamente
    estudents.forEach(function(student) {
        let option = document.createElement('option');
        option.textContent = student;
        option.value = student; // Esto es opcional, pero puede ser útil si necesitas los valores
        selectStudentGrades.appendChild(option);
    });
}

// Llamamos a la función para generar las opciones al cargar la página
generateStudentOptionsForGrades();


// Función para generar las opciones del menú desplegable de selección de estudiantes para la parte de "Crear grupos y asignar alumnos"
function generateStudentOptionsForGroups() {
    const selectStudents = document.getElementById('select-students');

    // Limpiamos las opciones existentes
    selectStudents.innerHTML = '';

    // Generamos las opciones dinámicamente
    estudents.forEach(function(student) {
        let option = document.createElement('option');
        option.textContent = student;
        option.value = student;
        selectStudents.appendChild(option);
    });
}

// Llamamos a la función para generar las opciones al cargar la página
generateStudentOptionsForGroups();


document.addEventListener("DOMContentLoaded", function () {
    const nombres = document.getElementById('nombres').getElementsByTagName('li');
    const apellidos = document.getElementById('apellidos').getElementsByTagName('li');
    const clase1 = document.getElementById('clase1').getElementsByTagName('li');
    const calificacion1 = document.getElementById('calificacion1').getElementsByTagName('li');
    const clase2 = document.getElementById('clase2').getElementsByTagName('li');
    const calificacion2 = document.getElementById('calificacion2').getElementsByTagName('li');
    const grupo = document.getElementById('grupo').getElementsByTagName('li');

    let estudiantes = [];

    for (let i = 0; i < nombres.length; i++) {
        estudiantes.push({
            nombre: nombres[i].textContent.trim(),
            apellido: apellidos[i].textContent.trim(),
            clase1: clase1[i].textContent.trim(),
            calificacion1: parseFloat(calificacion1[i].textContent.trim()),
            clase2: clase2[i].textContent.trim(),
            calificacion2: parseFloat(calificacion2[i].textContent.trim()),
            grupo: grupo[i].textContent.trim()
        });
    }

    // Función para buscar por nombre
    function buscarPorNombre() {
        const inputNombre = document.getElementById('buscar-nombre').value.trim().toLowerCase();
        const resultado = estudiantes.filter(estudiante => estudiante.nombre.toLowerCase().includes(inputNombre));
        mostrarResultados(resultado);
    }

    // Función para mostrar los resultados en el HTML
    function mostrarResultados(resultados) {
        const resultadosContainer = document.getElementById('resultados');
        resultadosContainer.innerHTML = ''; // Limpiar resultados anteriores

        if (resultados.length === 0) {
            resultadosContainer.innerHTML = '<p>No se encontraron resultados</p>';
            return;
        }

        resultados.forEach(estudiante => {
            const estudianteInfo = document.createElement('div');
            estudianteInfo.innerHTML = `<p>Nombre: ${estudiante.nombre} ${estudiante.apellido}</p>
                                        <p>Clase 1: ${estudiante.clase1}, Calificación 1: ${estudiante.calificacion1}</p>
                                        <p>Clase 2: ${estudiante.clase2}, Calificación 2: ${estudiante.calificacion2}</p>
                                        <p>Grupo: ${estudiante.grupo}</p>`;
            resultadosContainer.appendChild(estudianteInfo);
        });
    }

    // Asignar evento al botón de búsqueda
    const buscarButton = document.getElementById('buscar-button');
    buscarButton.addEventListener('click', buscarPorNombre);
});

// Función para buscar por nombre
function searchByName(name) {
    return students4.filter(student => student.name === name);
}

// Función para buscar por apellido
function searchBySurname(surname) {
    return students4.filter(student => student.surname === surname);
}

// Función para obtener el promedio de un alumno
function getAverageGrade(student) {
   if (student.grades.length === 0) return 0;
   const sum = student.grades.reduce((acc, curr) => acc + curr, 0);
   return sum / student.grades.length;
}

// Función para obtener el promedio del grupo
function getGroupAverage(groupName) {
    const students4InGroup = students4.filter(student => student.group === groupName);
    if (students4InGroup.length === 0) return 0;

    let totalGrades = 0;
    let totalStudents = 0;
    students4InGroup.forEach(student => {
        totalGrades += student.grades.reduce((acc, curr) => acc + curr, 0);
        totalStudents4 += student.grades.length;
    });

    return totalGrades / totalStudents4;
}

// Función para obtener la lista de alumnos ordenados ascendente por apellido
function getStudentsByAscendingSurname() {
    return students4.slice().sort((a, b) => {
       return a.surname.localeCompare(b.surname);
    });
}

// Función para obtener la lista de alumnos ordenados descendente por apellido
function getStudentsByDescendingSurname() {
    return students4.slice().sort((a, b) => {
       return b.surname.localeCompare(a.surname);
    });
}

// Función para mostrar el promedio del estudiante
function showStudentAverage() {
    const selectedStudentName = document.getElementById('select-student-average').value;
    const student = students4.find(student => student.name === selectedStudentName);
    if (student) {
        const average = getAverageGrade(student);
        document.getElementById('student-average').textContent = `Promedio de ${student.name} ${student.surname}: ${average}`;
    } else {
        document.getElementById('student-average').textContent  

    }
}

// Definición única de assignGrades
function assignGrades(student, grades) {
    // Si el parámetro 'student' es una cadena, asumimos que se está asignando calificaciones a un estudiante individual
    if (typeof student === 'string') {
        const foundStudent = students.find(s => s.name === student);
        if (foundStudent) {
            foundStudent.grades = grades;
            console.log(`Grades assigned to ${foundStudent.name} ${foundStudent.surname}: ${grades}`);
        } else {
            console.log(`Student ${student} not found.`);
        }
    } else { // Si el parámetro 'student' es un objeto, asumimos que se está asignando calificaciones a un grupo de estudiantes
        student.forEach(s => {
            const foundStudent = students.find(stud => stud.name === s);
            if (foundStudent) {
                foundStudent.grades = grades;
                console.log(`Grades assigned to ${foundStudent.name} ${foundStudent.surname}: ${grades}`);
            } else {
                console.log(`Student ${s} not found.`);
            }
        });
    }
}

