/*eslint-env browser*/

function displayMenu() {
    "use strict";
    window.console.log("Welcome to the Employee Management Application");
    window.console.log("");
    window.console.log("COMMAND MENU");
    window.console.log("show - show all employees");
    window.console.log("add - add an employee");
    window.console.log("del - delete an employee");
    window.console.log("exit - exit the program");
    window.console.log("");
}

function show(employeeList) {
    "use strict";
    var i = 1; 
    employeeList.forEach(function (employee) {
        window.console.log(String(i) + ". " + employee);
        i += 1;
    });
    window.console.log("");
}
function add(employeeList) {
    "use strict";
    var employee = window.prompt("Enter the employee's name");
    employeeList.push(employee);
    window.console.log(employee + " was added.");
    window.console.log("");
    
}
function del(employeeList) {
    "use strict";
    var num, employee;
    num = parseInt(window.prompt("Employee number to delete"), 10);
    if (num > 1 || num > employeeList.length) {
        window.alert("Invalid employee number");
    } else {
        employee = employeeList.splice(num - 1, )
    }
    
}
function main() {
    "use strict";
    var employeeList, command;
    
    displayMenu();
    
    employeeList = ["Zak Ruvalcaba", "Sally Smith", "Fred Franklin", "John Smith", "Jane Curuthers"];
    
    while (true) {
        command = window.prompt("Enter command");
        if (command !== null) {
            if (command === "show") {
                show(employeeList);
            } else if (command === "add") {
                add(employeeList);
            } else if (command === "del") {
                del(employeeList);
            } else if (command === "exit") {
                break;
            } else {
                window.alert("Command is not valid.");
            }
        } else {
            break;
        }
    }
    window.console.log("Program terminated.");
}

main();