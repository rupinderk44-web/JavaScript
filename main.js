// class grade 
// A = 80-100, B = 79 - 70, C = 69 - 60 D = 59 - 50 E = 49 - 40 F = 39" 
// using conditionals print the grade of a particular student

// function grade(score){
//     if (score>100){
//         console.log("Number sholud be less than 100.");
//     }else if(score>79){
//        console.log("A"); 
//     }
//     else if(score>69){
//        console.log("B"); 
//     }
//        else if(score>59){
//        console.log("c"); 
//     }
//        else if(score>49){
//        console.log("D"); 
//     }
//        else if(score>39){
//        console.log("E"); 
//     }
//        else {
//        console.log("F"); 
//     }
// }

// grade(35);

const wit_alumi=["Rupinder","Aman","Prabh","Nav","Harpreet","Kamal","Share","Manjeet"];
const wit_current_student=["Rupinder","Aman","Kamal","Prabh"];
const show=[];
const diffStudent=(wit_alumi,wit_current_student)=>{
    for(i=0;i< wit_alumi.length;i++){
       for(j=0;j< wit_current_student.length;j++){
            if(wit_alumi[i]===wit_current_student[j]){
                show.push(wit_alumi[i]);
            }
        }
    }

};
diffStudent(wit_alumi,wit_current_student);
console.log(show);