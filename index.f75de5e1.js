"use strict";
const elements = [
    ...document.querySelectorAll("li")
];
function getEmployees(employees) {
    return employees.map((employee)=>({
            name: employee.textContent.trim(),
            position: employee.dataset.position,
            salary: employee.dataset.salary,
            age: employee.dataset.age,
            element: employee
        }));
}
function sortList(list) {
    const sortedEmployees = [
        ...list
    ].sort((employee1, employee2)=>{
        const salary1 = parseInt(employee1.salary.replace(/[^0-9]/g, ""), 10);
        const salary2 = parseInt(employee2.salary.replace(/[^0-9]/g, ""), 10);
        return salary2 - salary1;
    });
    const listContainer = document.querySelector("ul");
    listContainer.innerHTML = "";
    sortedEmployees.forEach((employee)=>{
        listContainer.appendChild(employee.element);
    });
}
const employeeList = getEmployees(elements);
sortList(employeeList);

//# sourceMappingURL=index.f75de5e1.js.map
