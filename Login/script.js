const container = document.getElementById('container');
const registerBtn = document.getElementById('register');
const loginBtn = document.getElementById('login');



registerBtn.addEventListener('click', () => {
    container.classList.add("active");
});

loginBtn.addEventListener('click', () => {
    container.classList.remove("active");
});

function s1(){
  let name=document.getElementById('inp1').value
  let email=document.getElementById('inp2').value

//   localStorage.setItem(name,email);


  if(name==""|| email=="") return 0

  let found=false;

  for(let i=0;i<=localStorage.length;i++)
  {
    let key=localStorage.key(i);
    let value=localStorage.getItem(key);

    if(value===email)
    {
        found=true;
        break;

    }
  }
  if(found)
  {
    alert("user Already Exist !")

  }
  else{
    localStorage.setItem(name,email);
    alert("loged In Successfull !");
  }
}




