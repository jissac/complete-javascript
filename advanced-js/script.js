//////////////////////////////////////////////////////////
/* CREATING OBJECTS
--In JS, everything is an object
--Prototype based language, every object has prototype property
--prototype prop of an obj is where we put methods and properties that we want other objects to inherit
*/


/*
// Function constructor

var john = {
    name: 'John',
    yearOfBirth: 1990,
    job: 'teacher'
};

var Person = function(name, yearOfBirth, job){
    this.name = name;
    this.yearOfBirth = yearOfBirth;
    this.job = job;
};

Person.prototype.calculateAge = function() {
    console.log(2018 - this.yearOfBirth);
};

Person.prototype.lastName = 'Smith';

var john = new Person('John', 1990, 'teacher');
var jane = new Person('Jane', 1969, 'designer');
var mark = new Person('Mark', 1993, 'architect');
john.calculateAge();
jane.calculateAge();
mark.calculateAge();

console.log(john.lastName);
console.log(jane.lastName);
console.log(mark.lastName);
*/

/*
--A diff way to create objects is to use Object.create
--Object.create inherits directly from the passed argument
--A function constructor inherits directly from constructor's prototype property
*/

/*
// Object.create
var personProto = {
    calculateAge: function() {
        console.log(2016-this.yearOfBirth);
    }
};

var john = Object.create(personProto);
john.name = 'John';
john.yearOfBirth = 1990;
john.job = 'teacher';

var jane = Object.create(personProto, {
    name: {value:'Jane'},
    yearOfBirth: {value: 1993},
    job: {value: 'designer'}
});
*/
//////////////////////////////////////////////////////////

/*
//Primitives vs Objects
// Primitives
var a = 23;
var b = a;
a = 40;
console.log(a);
console.log(b);

// Objects
var obj1 = {
    name: 'John',
    age: 29
};
var obj2 = obj1; // both point to same memory location
obj1.age = 27;
console.log(obj1.age);
console.log(obj2.age);
*/

/*
// Functions

var age = 20;
var obj = {
    name: 'James',
    city: 'AA'
};
function change(a,b) {
    a = 30;
    b.city = 'San Francisco';
}
console.log(obj);
// reference to object is passed, change is reflected outside function
change(age,obj);
console.log(age);
console.log(obj.city);
*/


//////////////////////////////////////////////////////////
/* FUNCTIONS
-- a function is an instance of the Object type
-- behaves like any othe object
-- can store functions in a variable
*/

/*
var years = [1990,1965, 1937, 2005, 1998];

function arrayCalc(arr, fn){
    var arrRes = [];
    for (var i=0; i<arr.length;i++){
        arrRes.push(fn(arr[i]));
    }
    return arrRes;
}

function calculateAge(el) {
    return 2018 - el;
}
function isFullAge(el) {
    return el>=18;
}
function maxHeartRate(el){
    if (el>=18 && el<=81) {
        return Math.round(206.9-(0.67*el));
    } else {
        return -1;
    }
    
}

var ages = arrayCalc(years,calculateAge);
var fullAges = arrayCalc(ages, isFullAge);
var rates = arrayCalc(ages, maxHeartRate);
console.log(ages);
console.log(fullAges);
console.log(rates)
*/

//////////////////////////////////////////////////////////
/*
// Functions returning functions

function interviewQuestion(job) {
    if (job === 'designer') {
        return function(name) {
            console.log(name + ', can you please explain what UX design is?');
        }
    }else if (job === 'teacher'){
        return function(name) {
            console.log(name + ', what subject do you teach?');
        };
    } else {
        return function(name) {
            console.log(name + ', what do you do?');
        }
    }
}

var teacherQuestion = interviewQuestion('teacher');
teacherQuestion('John');
var designerQuestion = interviewQuestion('designer');
designerQuestion('Mark');
designerQuestion('Amy');
interviewQuestion('designer')('Kim');

*/
//////////////////////////////////////////////////////////
/*
// IIFE - for data privacy

(function() {
    var score = Math.random()*10;
    console.log(score>=5);
})();

(function(goodLuck) {
    var score = Math.random()*10;
    console.log(score>=5 - goodLuck);
})(5);
*/
//////////////////////////////////////////////////////////
/*
// Closures: An inner function always has access to the variables and parameters of its outer function, even after the outer function has returned
*/
function retirement(retirementAge) {
    var yearsLeft = ' years left until retirement';
    return function (yearOfBirth) {
        var age = 2018-yearOfBirth;
        console.log((retirementAge -age) + yearsLeft);
    }
}
var retirementUS = retirement(66);
var retirementGermany = retirement(65); 
var retirementIceland = retirement(67);

retirementUS(1990);
retirementGermany(1990);
retirementIceland(1990);

// Using closures on previous interviewQuestion code

function interviewQuestion(job) {
    return function(name) {
        if (job==='designer') {
            console.log(name + ', can you please explain what UX design is?');
        } else if (job ==='teacher') {
            console.log(name + ', what subject do you teach?');
        } else {
            console.log(name + ', what do you do?');
        }
    }
}

var teacherQuestion = interviewQuestion('teacher');
teacherQuestion('John');
var designerQuestion = interviewQuestion('designer');
designerQuestion('Mark');
designerQuestion('Amy');
interviewQuestion('designer')('Kim');


//////////////////////////////////////////////////////////
//Call, bind methods
//call method allows us to borrow the this method from another function
var john = {
    name: 'John',
    age: 26,
    job: 'teacher',
    presentation: function(style,timeOfDay) {
        if (style === 'formal') {
            console.log('Good ' + timeOfDay + ', ladies and gentlemen! I\'m ' + this.name + ' and I\'m ' + this.age + ' years old.');
        } else if('informal') {
            console.log('Hey! What\'s up? I\'m ' + this.name + ', I\'m a ' + this.job + ' and I\'m '+ this.age + ' years old. Have a nice ' + timeOfDay +'! ');
        }
    }
}

var emily = {
    name: 'Emily',
    age: 30,
    job: 'designer'
};

john.presentation('formal','morning');
john.presentation('informal');
john.presentation.call(emily,'informal','afternoon')

/*
--bind function similar to call, except it doesn't immediately call the function but generates a copy of the function
-- currying: technique to create functions with preset parameters based on another function 
*/
var johnFriendly = john.presentation.bind(john,'friendly');
johnFriendly('morning');
johnFriendly('night');

var emilyFormal = john.presentation.bind(emily,'formal')
emilyFormal('afternoon');


//example from previous callback fn ex, but with bind
var years = [1990,1965, 1937, 2005, 1998];

function arrayCalc(arr, fn){
    var arrRes = [];
    for (var i=0; i<arr.length;i++){
        arrRes.push(fn(arr[i]));
    }
    return arrRes;
}

function calculateAge(el) {
    return 2018 - el;
}
// add age limit to function
function isFullAge(ageLimit,el) {
    return el>=ageLimit;
}

var ages = arrayCalc(years,calculateAge);
var fullJapan = arrayCalc(ages,isFullAge.bind(this,20));
console.log(ages)
console.log(fullJapan)

//////////////////////////////////////////////////////////
// PROGRAMMING CHALLENGE //
//function constructor
var Question = function(question,answers,corrAnswer) {
    this.question = question;
    this.answers = answers;
    this.corrAnswer = corrAnswer;
};

Question.prototype.displayQuestion(){
    console.log(this.question);
}
var answers = {
    a1: 'asdf1',
    a2: 'asdf2',
    a3: 'asdf3'
};

var Q1 = new Question('Genesis is which book of the Bible?',
['1','4','22'],0);
var Q2 = new Question('David\'s father\'s name was?',
['Obed','Jesse','Solomon'],1);
var Q3 = new Question('The fear of the Lord is the beginning of?',['love','hope','wisdom'],2);

var questions = [Q1,Q2,Q3];
var randNum = Math.floor(Math.random()*questions)