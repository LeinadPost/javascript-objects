class studentName {
    constructor(firstName, lastName, userName) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.userName = userName;
    }
    regNumber() {
        const number =  Math.floor(Math.random() * 10000000000);
        return number
    }
    avatar() {
        let profile = document.getElementById('profile');
        let file = document.getElementById('file');
        
        file.onchange = function() {
            profile.src = URL.createObjectURL(file.files[0]);
        }
        return picture
    }
}

const myStudent = new studentName(prompt('Enter Firstname:'), prompt('Enter Lastname:'), prompt('Enter Username'));
console.log(myStudent.regNumber());
let firstName = document.getElementById('firstname').innerHTML += myStudent.firstName;
let lastName = document.getElementById('lastname').innerHTML += myStudent.lastName;
let userName = document.getElementById('username').innerHTML += myStudent.userName;
document.getElementById('regnum').innerHTML += myStudent.regNumber();




document.body.innerHTML += myStudent.avatar()

