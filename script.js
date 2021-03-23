const form=document.querySelector("#form")
const username=document.querySelector("#username")
const email=document.querySelector("#email")
const password=document.querySelector("#password")
const ConfirmPassword=document.querySelector("#confirmPassword")

const showError=(input,message)=>{
    const formControl=input.parentElement;
    formControl.className=["form-control", "error"].join(' ')
    const small=formControl.children[2];
    small.innerText=message
//    console.log(small)
}

const sucess=(input)=>{
    const formControl=input.parentElement;
    formControl.className=["form-control", "success"].join(' ')
}

const isVaidEmail=(input)=>{
     const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
//    return re.test(String(input).toLowerCase());
    if(re.test(input.value.trim())){
        sucess(input)
    }else{
        showError(input,`Email is not valid`)
    }
}


const getFirstname=(input)=>{
    return input.id.charAt(0).toUpperCase()+ input.id.slice(1);
} 

const checkRequired=(inputArr)=>{
    inputArr.forEach(item=>{
        if(item.value==""){
            showError(item,`${getFirstname(item)} is Required`)
        }else{
            sucess(item)
        }
    })
}

const checklength=(input,min,max)=>{
    if(input.value.length <min){
        showError(input,`${getFirstname(input)} must be at least ${min} characters`)
    }
    else if(input.value.length >max){
        showError(input,`${getFirstname(input)} must be less than ${max} characters`)
    }else{
        sucess(input)
    }
}

const checkPasswordsMatch=(input1,input2)=>{
    if(input1.value!== input2.value){
        showError(input2,`The passwords are incorrect`)
    }
}

form.onsubmit=(e)=>{
   e.preventDefault();
    let list=[username,password,email,ConfirmPassword]
    checkRequired(list)
    checklength(username,3,15)
    checklength(password,6,25)
//    alert(1)
    isVaidEmail(email)
    checkPasswordsMatch(password,ConfirmPassword)
}
                    
//var str="vishak"
//console.log(str.slice(0))