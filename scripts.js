// Example JavaScript functionality (could be expanded based on needs)
document.addEventListener('DOMContentLoaded', function () {
    const tier1List = document.getElementById('tier-1-list');
    // Example function to dynamically add students
    const addStudent = (name) => {
        const li = document.createElement('li');
        li.textContent = name;
        tier1List.appendChild(li);
    };

    // Adding a new student as an example
    addStudent('Michael Clark - Gifted Student');
});
