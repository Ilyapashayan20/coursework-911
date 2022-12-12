const modal = document.getElementById('modal')
const modal2 = document.getElementById('modal2')
const username = document.getElementById('username')
const password = document.getElementById('password')
const submit = document.getElementById('submit')
const cancel = document.getElementById('cancel')
const error2 = document.getElementById('error2')
const firstBlock = document.getElementById('about-project')
const animationBlock = document.getElementById('animationBlock')

let adminPassword = 'admin1234'
let adminUsername = 'il_pashayan' 



setTimeout(()=>{
    firstBlock.style.display = 'none'
    animationBlock.style.display = 'block'
    setTimeout(() => {
        animationBlock.style.display = 'none'
         modal.style.display = 'block'
    }, 6000);
},2000)



submit.addEventListener('click', submitForm)
function submitForm(){
    if(password.value !== adminPassword ){
        error2.innerText = 'Սխալ Գաղտնաբառ'
    }
    else{
        window.location.href = 'main.html'
    }
};



cancel.addEventListener('click', closeModal)
function closeModal(){
    modal.style.display = 'none'
}

const changePasswordBtn = document.getElementById('changePassword')
const submitChangeBtn = document.getElementById('change')
const newusername = document.getElementById('newusername')
const newpassword = document.getElementById('newpassword')


newusername.value = adminUsername
newpassword.value = adminPassword
username.value = innerText = adminUsername

changePasswordBtn.addEventListener('click', ()=>{ modal.style.display = 'none'; modal2.style.display = 'flex'})

submitChangeBtn.addEventListener('click', submitChange)

function submitChange(){
    adminUsername = newusername.value
    adminPassword = newpassword.value
    alert('username and password have been successfully changed')
    modal.style.display = 'flex'; modal2.style.display = 'none'

}

