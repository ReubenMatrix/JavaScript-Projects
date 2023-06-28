const passwordInput=document.querySelector(".pass-field input");
const eyesymbol=document.querySelector(".pass-field i")
const requirementList=document.querySelectorAll(".requirement-list li")

const requirements=[
    {regex: /.{8,}/,index:0},
    {regex: /[0-9]/,index:1},
    {regex: /[a-z]/,index:2},
    {regex: /[^A-Za-z0-9]/,index:3},
    {regex: /[A-Z]/,index:4},

]
passwordInput.addEventListener("keyup",(e)=>{
    requirements.forEach(item=>{
        const valid=item.regex.test(e.target.value);
        const requireItem=requirementList[item.index];

        if(valid){
            requireItem.classList.add("valid");
            requireItem.firstElementChild.className= "fa-solid fa-check"   
        }
        else{
            requireItem.classList.remove("valid");
            requireItem.firstElementChild.className= "fa-solid fa-circle"  
        }
    })

});

eyesymbol.addEventListener('click',()=>{
    passwordInput.type=passwordInput.type==="password"?"text":"password";
    eyesymbol.className=`fa-solid fa-eye${passwordInput.type==="password"?"":"-slash"}`

});