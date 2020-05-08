let alertBtn = document.querySelector('#alertBtn')
alertBtn.onclick = () => {
    alert("Привет, вы запустивли функцию alert!");
}

let promptBtn =  document.querySelector('#promptBtn')
promptBtn.onclick = () => {
    let age = prompt('Сколько тебе лет?', 100);
    alert(`Тебе ${age} лет!`); 
}

let confirmBtn =  document.querySelector('#confirmBtn')
confirmBtn.onclick = () => {
    let isBoss = confirm("Ты здесь главный?");
    alert( isBoss ); 
}