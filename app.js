var dateOfBirth = document.querySelector("#date-of-birth");
var luckNumber = document.querySelector("#luck-number");
var checkButton = document.querySelector("#check-button");
var output = document.querySelector(".message");
var log = console.log;
var image = document.querySelector("#birthday-celebration");


function compareSumAndLucky(total,luckNumber){

    if(total%luckNumber === 0){

       output.innerText = "Your Birthday Number is lucky";
          
    }
    else{
        output.innerText = "Sorry your Birthday Number is  not lucky";
    }
   
}

function sumOfBirthday(born){

    var sum = 0;

    for(var postion=0; postion < born.length; postion++){
          sum = sum + Number(born.charAt(postion));

         
        
    }
    return sum;
  
 
     
}

function birthdayButtonHandler() {
  
    var born = dateOfBirth.value;
    var born = born.replaceAll("-","");
    var total = sumOfBirthday(born);
    compareSumAndLucky(total,luckNumber.value)
   

};
checkButton.addEventListener('click', birthdayButtonHandler)