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
            else if (arr[i] === "D") {
                sum += 60;
            }
            else if (arr[i] === "F") {
                sum += 50;
            }
            else {
                console.log("Invalid element at position " + i);
                break;
            }
    }

    var averageGPA = sum / arr.length;

    if (averageGPA > 90) {
        return "A";
    }
    else if (aaverageGPA > 80) {
        return "B";
    }
    else if (averageGPA > 70) {
        return "C";
    }
    else if (averageGPA > 60) {
        return "D";
    }
    else {
        return "F";
    }

}

var grades = ["C", "D", "B", "C", "A", "A", "A"];
console.log("The average GPA is: " + calculateGPA(grades));
document.write("The average GPA is: " + calculateGPA(grades));