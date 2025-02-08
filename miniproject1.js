"use strict";

function calculateGPA(arr) {
    var sum = 0;
    for (var i = arr.length-1; i >=0; i--) {
            if (arr[i] === "A") {
                sum += 100;
            }
            else if (arr[i] === "B") {
                sum += 80;
            }
            else if (arr[i] === "C") {
                sum += 70;
            }
            else {
                console.log("Invalid element at position " + i);
                break;
            }
    }

    var averageGPA = sum / arr.length;

    if (averageGPA > 80) {
        return "A";
    }
    else if (averageGPA <= 80 && averageGPA > 70) {
        return "B";
    }
    else if (averageGPA <=70) {
        return "C";
    }

}

var grades = ["C", "B", "C", "A", "A", "A"];
console.log("The average GPA is: " + calculateGPA(grades));
document.write("The average GPA is: " + calculateGPA(grades));