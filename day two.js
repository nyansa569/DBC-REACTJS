let age = 18;
if (age >= 18) {
  console.log("You are an adult");
} else {
  console.log("You are not an adult");
}

let score = 85;
if (score >= 80) {
  console.log("Grade: A");
} else if (score >= 70) {
  console.log("Grade B");
} else if (score >= 60) {
  console.log("Grade C");
} else {
  console.log("Grade F");
}

let t_age = 18;
let result = t_age >= 18 ? "You are an adult" : "You are a minor";
console.log("Result is", result);

let t_score = 85;
let s_result =
  t_score >= 80
    ? "Grade A"
    : t_score >= 70
    ? "Grade B"
    : t_score >= 60
    ? "Grade C"
    : "Grade D";
console.log(s_result)

// For loops 
for (let i = 0; i < 11; i++){
    console.log("count ",i)
}

let mixed = [1, 2, 3 , "Hello", true, 2.5]

for (let i = 0; i < mixed.length; i++){
    console.log(mixed[i]);
}


let x= 0;
while(x< mixed.length){
    console.log(mixed[x])
    x++;
}

let i = 0;
do{
    console.log(i)
    i++;
}while(i<5){
    console.log(i);
    i++;
}
