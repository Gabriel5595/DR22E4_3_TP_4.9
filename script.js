
function ativar() {
  const login = document.getElementById("login").value;
  const data = new Date(document.getElementById("date").value) ;
  const genero = document.getElementById("genero").value;
  const pass = document.getElementById("pass").value;
  const confirm = document.getElementById('confirm').value;
  const music = document.getElementsByName('music');
  
  const form = {
    login: login,
    data: data,
    genero: genero,
    pass : pass,
    confirm: confirm,
    m: music
  }
 let count = 0;
  for(i = 0; i < music.length; i++){
    if(music[i].checked){
      count++;
    }
  }
  if(count < 2){
    console.log('escolher no mínimo 2 gêneros musicais.');
  }
  if(login.length > 8){
    console.log('Máximo de oito caractéres');
    login.value = '';
  }
  if(genero === '-'){
    console.log('Escolher gênero obrigatório!');
  }
  if(pass.length < 4 || pass.length > 10){
    console.log('Senha entre 4 e 10 caracteres.');
  }
  if(confirm !== pass){
    console.log('Senhas não compatíveis.');
    pass.value = '';
    confirm.value = '';
  }
  console.log(form); 
}
console.log(login);


