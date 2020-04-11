
//Variables
const listEmojis = ['😍','😉','🥶','😜','😬','😘','😇','🤩','🥳','🤤','👽','😬','🥴','😏'];
const miEmoji = document.getElementById('emoji');
let emoji ;

function aleatorio(minimo,maximo){
    return Math.floor(Math.random() * ((maximo+1)-minimo)+minimo);
}


//guardar el resultado y llamar a la función
emoji = aleatorio(0, listEmojis.length - 1);


//poner un nuevo emoji
miEmoji.innerHTML = listEmojis[emoji];

