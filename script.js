// 1. 
console.log(hello);
var hello = 'world';
// var hello;
// console.log(hello); logs undefined
// hello = "world"

// 2. 
var needle = 'haystack';
test();
function test(){
    var needle = 'magnet';
    console.log(needle);
}
// needle = "haystack"
// calls function test
// function test() is defined
// needle = "magnet"
// console.log(needle); should print magnet

// 3. 
var brendan = 'super cool';
function print(){
    brendan = 'only okay';
    console.log(brendan);
}
console.log(brendan);
// brenden = "supercool";
// function print() is defined
// brendan = "only okay"
// calls to print brenden should print only okay if function is called
// console.log(brendan); prints super cool

// 4. 
var food = 'chicken';
console.log(food);
eat();
function eat(){
    food = 'half-chicken';
    console.log(food);
    var food = 'gone';
}
// food = "chicken"
// console.log(food); prints chicken
// eat(); calls eat function
// function eat() is defined
// food = "half chicken";
// console.log(food); prints half-chicken
// food = "gone";

// 5. 
mean();
console.log(food);
var mean = function() {
    food = "chicken";
    console.log(food);
    var food = "fish";
    console.log(food);
}
console.log(food);
// mean(); calls the mean function
// console.log(food) returns undefined; food isnt defined
// var mean = function(); incorrectly sets mean to be a function
// food ="chicken";
// console.log(food); prints chicken
// food = "fish"
// console.log(food); prints fish
// console.log(food) returns undefined; food isnt defined
// returns an error because mean is not a function

// 6. 
console.log(genre);
var genre = "disco";
rewind();
function rewind() {
    genre = "rock";
    console.log(genre);
    var genre = "r&b";
    console.log(genre);
}
console.log(genre);
// console.log(genre); returns undefined
// genre = "disco";
// rewind(); calls the rewind function
// function rewind(); is defined
// gerne ="rock"
// console.log(genre); prints rock
// genre = "r&b";
// console.log(genre); prints r&b
// console.log(genre); prints disco

// 7. 
dojo = "san jose";
console.log(dojo);
learn();
function learn() {
    dojo = "seattle";
    console.log(dojo);
    var dojo = "burbank";
    console.log(dojo);
}
console.log(dojo);
// dojo = "san jose"
// console.log(dojo); prints san jose
// Learn(); class the learn function
// function Learn() ; defines the learn function
// dojo ="seattle";
// console.log(dojo); prints seattle;
// dojo = "burbank"
// console.log(dojo) prints burbank
// console.log(dojo) prints san jose

// 8.
console.log(makeDojo("Chicago", 65));
console.log(makeDojo("Berkeley", 0));
function makeDojo(name, students){
    const dojo = {};
    dojo.name = name;
    dojo.students = students;
    if(dojo.students > 50){
        dojo.hiring = true;
    }
    else if(dojo.students <= 0){
        dojo = "closed for now";
    }
    return dojo;
}

// console.log(makeDojo("Chicago", 65)); prints the return of the function called
// console.log(makeDojo("Berkeley", 0)); prints the return of the function called
// function makeDojo(name, students) is defined
// dojo = {};
// dojo.name = name; sets the dojo name = name
// dojo.students = students; sets the students = students which is a number
// if statement says if there are mroe than 50 students set dojo.hiring to true
// else if says if the students are less than or equal to 0 dojo ="closed for now"
// return dojo; 
// first function call should print {"name" : Chicago, "students" : 65, "hiring" : true}
// second function call should print an error because dojo is a constant












