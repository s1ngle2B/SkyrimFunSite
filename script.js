const form = document.getElementById('loginForm');

if(form){

form.addEventListener('submit', function(e){
    e.preventDefault();

    document.getElementById('message').innerHTML =
    'Успішний вхід!';

});

}