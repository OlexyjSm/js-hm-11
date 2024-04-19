function Student(firstName, lastName) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.grades = [];
}


Student.prototype.addGrade = function(grade) {
    this.grades.push(grade);
};


Student.prototype.calculateAverageGrade = function() {
    if (this.grades.length === 0) {
        console.log("Error: No grades available.");
        return 0;
    }

    const sum = this.grades.reduce((accumulator, currentValue) => accumulator + currentValue, 0);
    return sum / this.grades.length;
};


const student = new Student("John", "Doe");


student.addGrade(85);
student.addGrade(90);
student.addGrade(75);


const averageGrade = student.calculateAverageGrade();
console.log(`Average grade for ${student.firstName} ${student.lastName}: ${averageGrade}`);
