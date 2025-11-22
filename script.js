/* LANGUAGE SELECTOR */

document.getElementById('english').addEventListener('click', function(event) {
    event.preventDefault();
    window.location.href = 'index-en.html';
});

document.getElementById('german').addEventListener('click', function(event){
    event.preventDefault();
    window.location.href = 'index-de.html';
});

/* POWER BUTTON */

$('#monitor').hide();
$('#languages').hide();