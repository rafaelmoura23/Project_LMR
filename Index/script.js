const chk = document.getElementById('chk')

chk.addEventListener('change', () =>{
    document.body.classList.toggle('dark')
})

function sair(){
    let deslogar = document.getElementById("deslogar").value;

    alert("Você Deslogou!")
    window.location.href = "index.html";
}