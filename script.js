the_x_array=[];
the_y_array=[];
the_1_1_array=[];
the_1_2_array=[];
the_2_1_array=[];
the_2_2_array=[];
the_3_1_array=[];
the_3_2_array=[];
the_4_1_array=[];
the_4_2_array=[];


the_x_array.push(`x`);
the_y_array.push(`y`);

second_1_1_array=[];
second_1_2_array=[];
second_2_1_array=[];
second_2_2_array=[];
second_3_1_array=[];
second_3_2_array=[];
second_4_1_array=[];
second_4_2_array=[];

x_delete_array=[];
y_delete_array=[];

let symbols = ['+', '-', '*', '/'];

const operations = {
    '+': (a, b) => a + b,
    '-': (a, b) => a - b,
    '*': (a, b) => a * b,
    '/': (a, b) => a / b
};

function FirstPartCalculation(x,y,z,t,q){
  x=Number(x);
  y=Number(y);
  let first_array=[1,2,3,4,5,6,x,y];
  let second_array=[1,2,3,4,5,6,y,x];
  let count=Number(-1);
  if((z==3)||(z==1)){
    q.push(x);
  }
  else if((z==4)||(z==2)){
    q.push(y);
  }
  const array_length=8;

  for (let i = 0; i < symbols.length; i++) {
    if(z==1 || z==3){
      for (let m = 0; m < array_length; m++) {
        count++;
        let operation = operations[symbols[i]];
        if(((i==3 ||i==2) && m==0) || m==6){
          count--;
          continue;
        }
        

        else if((i==3) && (first_array[m]===0)){
          let result =1111;
          q.push(result);
          if (z==3){
            let resultString = `sigma`;
            t.push(resultString);
          }
          if(x_delete_array.includes(count)==false){

            x_delete_array.push(Number(count));

          }
          continue;
        }
        let result = operation(x, first_array[m]);
        q.push(result);
        if(z==3){
          if(m<6){
            let resultString = `(x ${symbols[i]} ${first_array[m]})`;
            t.push(resultString);
          }
          else if(m==7){
            let resultString = `(x ${symbols[i]} y)`;
            t.push(resultString);
          }
        }
      }
    }
    else if(z==2 || z==4){
      for (let m = 0; m < array_length; m++) {
        count++;
        let operation = operations[symbols[i]];

        if(((i==3 ||i==2) && m==0)||m==6){
          count--;
          continue;
        }

        if(i==3 && second_array[m]==0){
          let result =1112;
          q.push(result);
          if (z==4){
            let resultString = `sigma`;
            t.push(resultString);
          }
          if(!y_delete_array.includes(count)){
            y_delete_array.push(count);
          }
          continue;
        }
        let result = operation(y, second_array[m]);
        q.push(result);
        if(z==4){
          if(m<6){
            let resultString = `(y ${symbols[i]} ${second_array[m]})`;
            t.push(resultString);
          }
          else if(m==7){
            let resultString = `(y ${symbols[i]} x)`;
            t.push(resultString);
          }
        }
      }
    }
  }
}




function SecondPartCalculation(input_array,x,y,z,t,q){
  x=Number(x);
  y=Number(y);
  let first_array=[1,2,3,4,5,6,x,y];
  let second_array=[1,2,3,4,5,6,y,x];

  
  let count=input_array.length-1;
  const array_length=8;
  if(z==1 || z==3){
    for(let n=1;n<input_array.length;n++){  
      for (let i = 0; i < symbols.length; i++) {
        for (let m = 0; m < array_length; m++) {
          count++;
          let operation = operations[symbols[i]];
          
          let result_plus=the_x_array[n].includes("+");
          let result_minus=the_x_array[n].includes("-");
          let result_mult=the_x_array[n].includes("*");
          let result_divide=the_x_array[n].includes("/");
          
          if((i==3 || i==2) && m==0){
            count--;
            continue;
          }
          if((i==3 && first_array[m]==0)){
            
            let result =1113;
            q.push(result);
            if (z==3){
              let resultString = `sigma`;
              t.push(resultString);
            }
            if(!x_delete_array.includes(count)){
              
              x_delete_array.push(count);
            }
            continue;
          }
          
          if((result_plus==true ||result_minus==true)&&(i<2)){
            count--;
            continue;
          }
          if((result_mult==true ||result_divide==true)&&(1<i)){
            count--;
            continue;
          }

          let result = operation(Number(input_array[n]), first_array[m]);
          q.push(result);
          if(z==3){
            if(m<6){
              let resultString = `(${the_x_array[n]} ${symbols[i]} ${first_array[m]})`;
              t.push(resultString);
            }
            if(m==6){
              let resultString = `(${the_x_array[n]} ${symbols[i]} x)`;
              t.push(resultString);
            }            
            else if(m==7){
              let resultString = `(${the_x_array[n]} ${symbols[i]} y)`;
              t.push(resultString);
            }
          }
        }
      }
    } 
  }
    else if(z==2 || z==4){
      for(let n=1;n<input_array.length;n++){
        for (let i = 0; i < symbols.length; i++){  
          for (let m = 0; m < array_length; m++) {

            count++;

            let operation = operations[symbols[i]];

            let result_plus=the_y_array[n].includes("+");
            let result_minus=the_y_array[n].includes("-");
            let result_mult=the_y_array[n].includes("*");
            let result_divide=the_y_array[n].includes("/");

            if((i==3 ||i==2) && m==0){
              count--;
              continue;
            }
            if((i==3 && first_array[m]==0)){
            
              let result =1113;
              q.push(result);
              if (z==4){
                let resultString = `sigma`;
                t.push(resultString);
              }
              if(!y_delete_array.includes(count)){
                y_delete_array.push(count);
              }
              continue;
            }
            if((result_plus==true ||result_minus==true)&&(i<2)){
              count--;
              continue;
            }
            if((result_mult==true ||result_divide==true)&&(1<i)){
              count--;
              continue;
            }

            let result = operation(Number(input_array[n]), second_array[m]);
            q.push(result);
            if(z==4){
              if(m<6){
                let resultString = `(${the_y_array[n]} ${symbols[i]} ${second_array[m]})`;
                t.push(resultString);
              }
              if(m==6){
                let resultString = `(${the_y_array[n]} ${symbols[i]} y)`;
                t.push(resultString);
              }  
              else if(m==7){
                let resultString = `(${the_y_array[n]} ${symbols[i]} x)`;
                t.push(resultString);
            }
          }
        }
      }  
    }
  }
}

function FillingArrays(newarray,oldarray){
  for(let i=0;i<oldarray.length;i++){
    newarray[i]=oldarray[i];
  }
}

function DeletingRepeates(the_array_to_delete,the_strings_array,the_fi_arr,the_sec_arr,the_thi_arr,the_four_arr){

  the_array_to_delete.sort((a, b) => a - b);

  for(let i=the_array_to_delete.length -1;-1<i;i--){
      the_strings_array.splice(Number(the_array_to_delete[i]), 1);
      the_fi_arr.splice(Number(the_array_to_delete[i]), 1);
      the_sec_arr.splice(Number(the_array_to_delete[i]), 1);
      the_thi_arr.splice(Number(the_array_to_delete[i]), 1);
      the_four_arr.splice(Number(the_array_to_delete[i]), 1);
    
  }
  the_array_to_delete=[];
}

function CalculationsAlgorithm(array_to_scan,store_numbers,store_indexes,array_in_array){
   array_in_array=[]; //WHY DOES IT WORK???????
  for (let i=0;i<array_to_scan.length;i++){
    if (!store_numbers.includes(array_to_scan[i])){

      for (let m=i;m<array_to_scan.length;m++){
        if(array_to_scan[m]==array_to_scan[i]){
          array_in_array.push(m);
        }
      }
      store_indexes.push(array_in_array);
      store_numbers.push(array_to_scan[i]);
      array_in_array=[];
    }
  }
}


function Factorial_for_array(first_arra,second_arra,third_arra,fourth_arra,arra_to_store_strings){
  
  let firsto=[];
  let secendo=[];
  let thirdo=[];
  let fourtho=[];
  let temporary_array=[firsto,secendo,thirdo,fourtho];
  let temporary_array_2=[firsto,secendo,thirdo,fourtho];

  for(let q=0;q<first_arra.length;q++){
    temporary_array[0][q]=first_arra[q];
    temporary_array[1][q]=second_arra[q];
    temporary_array[2][q]=third_arra[q];
    temporary_array[3][q]=fourth_arra[q];


    temporary_array_2[0][q]=first_arra[q];
    temporary_array_2[1][q]=second_arra[q];
    temporary_array_2[2][q]=third_arra[q];
    temporary_array_2[3][q]=fourth_arra[q];
  }

  for (let i=0 ;i<first_arra.length;i++){

    
    let investigator=0;
    if (first_arra[i]<0 || 6<first_arra[i] || !Number.isInteger(first_arra[i])){
      investigator=1;
    }
    if (second_arra[i]<0 || 6<second_arra[i]|| !Number.isInteger(second_arra[i])){
      investigator=1;
    }
    if (third_arra[i]<0 || 6<third_arra[i]|| !Number.isInteger(third_arra[i])){
      investigator=1;
    }
    if (fourth_arra[i]<0 || 6<fourth_arra[i]|| !Number.isInteger(fourth_arra[i])){
      investigator=1;
    }

    if (investigator==0){
      for(let m=0;m<4;m++){
        switch (temporary_array[m][i]){
          case 0:
            temporary_array_2[m].push(1);
            break;
          case 1:
            temporary_array_2[m].push(1);
            break;
          case 2:
            temporary_array_2[m].push(2);
            break;
          case 3:
            temporary_array_2[m].push(6);
            break;
          case 4:
            temporary_array_2[m].push(24);
            break;
          case 5:
            temporary_array_2[m].push(120);
            break;                                    
          case 6:
            temporary_array_2[m].push(720);
            break;
        }
      }
      let resultString = `(${arra_to_store_strings[i]}!)`;
      arra_to_store_strings.push(resultString);
    }            
  }
  for(let k=0;k<temporary_array_2[0].length;k++){
    first_arra[k]=temporary_array_2[0][k];
    second_arra[k]=temporary_array_2[1][k];
    third_arra[k]=temporary_array_2[2][k];
    fourth_arra[k]=temporary_array_2[3][k];
  }
}


function countDigits(number) {
  return number.toString().replace(/\D/g, '').length;
}
function sumDigits(number) {
  return number
      .toString()
      .replace(/\D/g, '') 
      .split('')          
      .map(Number)       
      .reduce((a, b) => a + b, 0); 
}

function Sums_for_array(first_arra,second_arra,third_arra,fourth_arra,arra_to_store_strings){
  
  let firsto=[];
  let secendo=[];
  let thirdo=[];
  let fourtho=[];
  let temporary_array=[firsto,secendo,thirdo,fourtho];

  for(let a=0;a<first_arra.length;a++){
    temporary_array[0][a]=first_arra[a];
    temporary_array[1][a]=second_arra[a];
    temporary_array[2][a]=third_arra[a];
    temporary_array[3][a]=fourth_arra[a];
  }
  let lengtho=first_arra.length;
  for (let i=0;i<lengtho;i++){
    
    let investigator=0;
    if (countDigits(first_arra[i])<2 || 4<countDigits(first_arra[i]) || !Number.isInteger(first_arra[i])){
      investigator=1;
    }
    if (countDigits(second_arra[i])<2 || 4<countDigits(second_arra[i])|| !Number.isInteger(second_arra[i])){
      investigator=1;
    }
    if (countDigits(third_arra[i])<2 || 4<countDigits(third_arra[i])|| !Number.isInteger(third_arra[i])){
      investigator=1;
    }
    if (countDigits(fourth_arra[i])<2 || 4<countDigits(fourth_arra[i])|| !Number.isInteger(fourth_arra[i])){
      investigator=1;
    }

    if (investigator==0){
        
      temporary_array[0].push(sumDigits(first_arra[i]));
      temporary_array[1].push(sumDigits(second_arra[i]));
      temporary_array[2].push(sumDigits(third_arra[i]));
      temporary_array[3].push(sumDigits(fourth_arra[i]));

      let resultString = `(${arra_to_store_strings[i]}Sum)`;
      arra_to_store_strings.push(resultString);
    }            
  }
  let lengthing=temporary_array[0].length;
  for(let k=0;k<lengthing;k++){
    first_arra[k]=temporary_array[0][k];
    second_arra[k]=temporary_array[1][k];
    third_arra[k]=temporary_array[2][k];
    fourth_arra[k]=temporary_array[3][k];
  }
}

function multDigits(number) {
  return number
      .toString()
      .replace(/\D/g, '') 
      .split('')          
      .map(Number)       
      .reduce((a, b) => a * b, 1); 
}

function Mult_for_array(first_arra,second_arra,third_arra,fourth_arra,arra_to_store_strings){
  
  let firsto=[];
  let secendo=[];
  let thirdo=[];
  let fourtho=[];
  let temporary_array=[firsto,secendo,thirdo,fourtho];

  for(let a=0;a<first_arra.length;a++){
    temporary_array[0][a]=first_arra[a];
    temporary_array[1][a]=second_arra[a];
    temporary_array[2][a]=third_arra[a];
    temporary_array[3][a]=fourth_arra[a];
  }
  let lengtho=first_arra.length;
  for (let i=0;i<lengtho;i++){
    
    let investigator=0;
    if (countDigits(first_arra[i])<2 || 3<countDigits(first_arra[i]) || !Number.isInteger(first_arra[i])){
      investigator=1;
    }
    if (countDigits(second_arra[i])<2 || 3<countDigits(second_arra[i])|| !Number.isInteger(second_arra[i])){
      investigator=1;
    }
    if (countDigits(third_arra[i])<2 || 3<countDigits(third_arra[i])|| !Number.isInteger(third_arra[i])){
      investigator=1;
    }
    if (countDigits(fourth_arra[i])<2 || 3<countDigits(fourth_arra[i])|| !Number.isInteger(fourth_arra[i])){
      investigator=1;
    }

    if (investigator==0){
        
      temporary_array[0].push(multDigits(first_arra[i]));
      temporary_array[1].push(multDigits(second_arra[i]));
      temporary_array[2].push(multDigits(third_arra[i]));
      temporary_array[3].push(multDigits(fourth_arra[i]));

      let resultString = `(${arra_to_store_strings[i]}Mult)`;
      arra_to_store_strings.push(resultString);
    }            
  }
  let lengthing=temporary_array[0].length;
  for(let k=0;k<lengthing;k++){
    first_arra[k]=temporary_array[0][k];
    second_arra[k]=temporary_array[1][k];
    third_arra[k]=temporary_array[2][k];
    fourth_arra[k]=temporary_array[3][k];
  }
}


let the_x_store_numbers=[];
let the_x_store_indexes=[];
let the_y_store_numbers=[];
let the_y_store_indexes=[];
let array_in_another_array=[];



function Answers_Filterer(x_part,symbol,y_part,distinguisher){

  let x_last_symbol = x_part[x_part.length-4];
  let y_last_symbol = y_part[y_part.length-4];

  let x_last_number = x_part[x_part.length-2];
  let y_last_number = y_part[y_part.length-2];


  if (symbol==0||symbol==1){
    if(x_last_symbol=='-'||x_last_symbol=='+'){
      if(y_last_symbol=='-'||y_last_symbol=='+'){
          distinguisher[0]=1;
      }
    }
  }
  else if(symbol==2){
    if ((x_last_symbol==`*` && y_last_symbol==`/`)||(y_last_symbol==`*` && x_last_symbol==`/`)){
        if(x_last_number==y_last_number){
          distinguisher[0]=1;
      }
    }
  }
  else if(symbol==3){
    if ((x_last_symbol==`/` && y_last_symbol==`/`)||(y_last_symbol==`*` && x_last_symbol==`*`)){
        if(x_last_number==y_last_number){
          distinguisher[0]=1;
      }
    }
  }
}


// function Answers_Filterer_2(numbers_array,strings_array,x_part,symbol,y_part){
  
//   let firsto=[],secondo=[],thirdo=[],fourtho=[],fiftho=[],sixtho=[];
//   let array_of_arrays=[firsto,secondo,thirdo,fourtho,fiftho,sixtho];
//   let trial_numbers_x=[33,16,124,7,37,99,9];
//   let trial_numbers_y=[31,17,24,55,25,113,44];

//   for (let i=0;i<strings_array.length;i++){
//     if(strings_array[i].includes(`Sum`)){
//       let index=strings_array[i].indexOf(`Sum`);
//       for(let n=0;n<trial_numbers.length;n++){
//         // let string_to_num=strings_array[i].replace(`x`,trial_numbers_x[n]).replace((`y`,trial_numbers_y[n]));
//         if (x_part[i].includes(xSum)){

//         }
//         else{

//         }

//         for (let k=x_part[i].length-1;k>=0;k--){
          
//         }
//         strings_array[i]
//         array_of_arrays[n].push(x);
//       }
//     }
//     else if(strings_array[i].includes(`Mult`)){
//       for(let n=0;n<trial_numbers.length;n++){
        
//         array_of_arrays[n].push(x);
//       }
//     }
//     else if(strings_array[i].includes(`!`)){
//       for(let n=0;n<trial_numbers.length;n++){
        
//         array_of_arrays[n].push(x);
//       }
//     }
//     else{
//       for(let n=0;n<trial_numbers.length;n++){
        
//         array_of_arrays[n].push(x);
//       }
//     }    
//   }
// }

function StartCalculation() {

  console.time("program timing");

  let the_1_1=document.getElementById("the_1_1").value;
  let the_1_2=document.getElementById("the_1_2").value;
  let the_1_3=document.getElementById("the_1_3").value;
  let the_2_1=document.getElementById("the_2_1").value;
  let the_2_2=document.getElementById("the_2_2").value;
  let the_2_3=document.getElementById("the_2_3").value;
  let the_3_1=document.getElementById("the_3_1").value;
  let the_3_2=document.getElementById("the_3_2").value;
  let the_3_3=document.getElementById("the_3_3").value;
  let the_4_1=document.getElementById("the_4_1").value;
  let the_4_2=document.getElementById("the_4_2").value;
  
  let answer_a=document.getElementById("a").value;
  let answer_b=document.getElementById("b").value;
  let answer_c=document.getElementById("c").value;
  let answer_d=document.getElementById("d").value;
  let answer_e=document.getElementById("e").value;

  FirstPartCalculation(the_1_1,the_1_2,3,the_x_array,the_1_1_array);
  FirstPartCalculation(the_1_1,the_1_2,4,the_y_array,the_1_2_array);
  FirstPartCalculation(the_2_1,the_2_2,1,the_x_array,the_2_1_array);
  FirstPartCalculation(the_2_1,the_2_2,2,the_y_array,the_2_2_array);
  FirstPartCalculation(the_3_1,the_3_2,1,the_x_array,the_3_1_array);
  FirstPartCalculation(the_3_1,the_3_2,2,the_y_array,the_3_2_array);
  FirstPartCalculation(the_4_1,the_4_2,1,the_x_array,the_4_1_array);
  FirstPartCalculation(the_4_1,the_4_2,2,the_y_array,the_4_2_array);

  DeletingRepeates(x_delete_array,the_x_array,the_1_1_array,the_2_1_array,the_3_1_array,the_4_1_array);
  DeletingRepeates(y_delete_array,the_y_array,the_1_2_array,the_2_2_array,the_3_2_array,the_4_2_array);

  Factorial_for_array(the_1_1_array,the_2_1_array,the_3_1_array,the_4_1_array,the_x_array);
  Factorial_for_array(the_1_2_array,the_2_2_array,the_3_2_array,the_4_2_array,the_y_array);

  Sums_for_array(the_1_1_array,the_2_1_array,the_3_1_array,the_4_1_array,the_x_array);
  Sums_for_array(the_1_2_array,the_2_2_array,the_3_2_array,the_4_2_array,the_y_array);

  Mult_for_array(the_1_1_array,the_2_1_array,the_3_1_array,the_4_1_array,the_x_array);
  Mult_for_array(the_1_2_array,the_2_2_array,the_3_2_array,the_4_2_array,the_y_array);

  console.log(the_x_array);
  console.log(the_1_1_array);

  FillingArrays(second_1_1_array,the_1_1_array);
  FillingArrays(second_1_2_array,the_1_2_array);
  FillingArrays(second_2_1_array,the_2_1_array);
  FillingArrays(second_2_2_array,the_2_2_array);
  FillingArrays(second_3_1_array,the_3_1_array);
  FillingArrays(second_3_2_array,the_3_2_array);
  FillingArrays(second_4_1_array,the_4_1_array);
  FillingArrays(second_4_2_array,the_4_2_array);

  console.log(the_x_array);
  console.log(the_1_1_array);

  SecondPartCalculation(the_1_1_array,the_1_1,the_1_2,3,the_x_array,second_1_1_array);
  SecondPartCalculation(the_1_2_array,the_1_1,the_1_2,4,the_y_array,second_1_2_array);
  SecondPartCalculation(the_2_1_array,the_2_1,the_2_2,1,the_x_array,second_2_1_array);
  SecondPartCalculation(the_2_2_array,the_2_1,the_2_2,2,the_y_array,second_2_2_array);
  SecondPartCalculation(the_3_1_array,the_3_1,the_3_2,1,the_x_array,second_3_1_array);
  SecondPartCalculation(the_3_2_array,the_3_1,the_3_2,2,the_y_array,second_3_2_array);
  SecondPartCalculation(the_4_1_array,the_4_1,the_4_2,1,the_x_array,second_4_1_array);
  SecondPartCalculation(the_4_2_array,the_4_1,the_4_2,2,the_y_array,second_4_2_array);

  DeletingRepeates(x_delete_array,the_x_array,second_1_1_array,second_2_1_array,second_3_1_array,second_4_1_array);
  DeletingRepeates(y_delete_array,the_y_array,second_1_2_array,second_2_2_array,second_3_2_array,second_4_2_array);


  console.log(`it starts here`);
  CalculationsAlgorithm(second_1_1_array,the_x_store_numbers,the_x_store_indexes,array_in_another_array);
  CalculationsAlgorithm(second_1_2_array,the_y_store_numbers,the_y_store_indexes,array_in_another_array);

  
  let counta=0;
  for(let i =0;i<the_x_store_numbers.length;i++){
    for(let m=0;m<symbols.length;m++){
      for(let n=0;n<the_y_store_numbers.length;n++){
        let operation = operations[symbols[m]];
        
        if(operation(the_x_store_numbers[i], the_y_store_numbers[n])==the_1_3){

          for(let k=0;k<the_x_store_indexes[i].length;k++){
            for(let r=0;r<the_y_store_indexes[n].length;r++){
              counta++;
              if(operation(second_1_1_array[the_x_store_indexes[i][k]], second_1_2_array[the_y_store_indexes[n][r]])==the_1_3){

                if(operation(second_2_1_array[the_x_store_indexes[i][k]], second_2_2_array[the_y_store_indexes[n][r]])==the_2_3){
                  
                  if(operation(second_3_1_array[the_x_store_indexes[i][k]], second_3_2_array[the_y_store_indexes[n][r]])==the_3_3){
                    let ResFour=operation(second_4_1_array[the_x_store_indexes[i][k]], second_4_2_array[the_y_store_indexes[n][r]]);
                    if(ResFour==answer_a||ResFour==answer_b||ResFour==answer_c||ResFour==answer_d||ResFour==answer_e){
                      
                      // console.log(second_1_1_array[the_x_store_indexes[i][k]],second_1_2_array[the_y_store_indexes[n][r]]);
                      // console.log(second_4_1_array[the_x_store_indexes[i][k]],second_4_2_array[the_y_store_indexes[n][r]]);
                      // console.log(i,k,n,r);
                      let disting=[0];
                      Answers_Filterer(the_x_array[the_x_store_indexes[i][k]],m,the_y_array[the_y_store_indexes[n][r]],disting);
                      if (disting[0]==1){
                        console.log(`nigro is:`,the_x_array[the_x_store_indexes[i][k]],symbols[m],the_y_array[the_y_store_indexes[n][r]]);
                        continue;
                      }
                      let ResFour=operation(second_4_1_array[the_x_store_indexes[i][k]], second_4_2_array[the_y_store_indexes[n][r]]);
                      console.log(the_x_array[the_x_store_indexes[i][k]],symbols[m],the_y_array[the_y_store_indexes[n][r]]);
                      console.log(`Answer is ${ResFour}`);
                      switch(ResFour){
                        case Number(answer_a):
                          console.log(`the answer is A`);
                          break;
                        case Number(answer_b):
                          console.log(`the answer is B`);
                          break;
                        case Number(answer_c):
                          console.log(`the answer is C`);
                          break;
                        case Number(answer_d):
                          console.log(`the answer is D`);
                          break;  
                        case Number(answer_e):
                          console.log(`the answer is E`);
                          break;                          
                        }
                    }
                }
              }
            }
          }
        }
      }
    }
  }
}
  console.log(the_x_store_numbers);
  console.log(the_x_store_indexes);
  console.log(second_4_2_array);

  console.log(`finish`);

  console.timeEnd("program timing");

  console.log(the_1_1_array);
  console.log(second_1_1_array);
  console.log(the_x_array);
  console.log(second_1_2_array);
  console.log(the_y_array);

  // Answers_Filterer_2();
}

function handleInput(element) {
    if (element.value.trim() !== "") {
      element.classList.add('filled');
    } else {
      element.classList.remove('filled');
    }
  }