// Q1 - Write a function that takes your name and age as an input parameter and print it by using
// string concatenation.

     //First Solution
  const myData = (name, age) => {

       console.log(' My name is ' + name + ' and i am ' + age + ' years old!')      
  }
    myData('Hina Asad', 34)

  
        //Second Solution
    const mySelf = (name, age) => {

    return (' My name is ' + name + ' and i am ' + age + ' years old!')      
    }
    console.log(mySelf('Hina Asad', 34))
   

    // Q2 - Write a function name ‘Double’ that takes an input parameter and multiply that parameter
    // by 2 and store the result in a variable and call the function by passing an argument.   


        //First Solution
    const doubleNum = (num) => {
        let numb =  num * 2;
        return numb;
    }
    console.log(doubleNum(15))

        //Second Solution
    const double = (num) => {
        return num * 2;
    }
    console.log(double(5))

    // Q3 - Write a function to print the square of a number by using function expression and that
    // function can be used as variable value for other variables. 

    var func = function(a, b) {
        return a*b/2
    }
    console.log(func(5,5))

    // Q4 - Write an arrow function as an expression to check the age of the baby . If the age of the
    // baby is less than 18 print Baby else print adult.

    let age = 18;
    let baby = () => {
        if (age < 18) {
            console.log('Print baby')           
        }
        else (console.log('Print adult'))        
    }
    baby()

    // Q5 - Write an arrow function and print a sum of two numbers by passing a single parameter
    // inside the arrow function.
     
    let sum = a => a + 8
       console.log(sum(5) )
    