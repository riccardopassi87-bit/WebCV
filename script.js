// LANGUAGE SELECTOR

$(".lang-selector").on("click", function () {
    const selected = $(this).data("lang");

    $("[data-lang-group][lang]").hide();

    $(`[data-lang-group][lang='${selected}']`).show();
});

// DEFAULT LANGUAGE
$(document).ready(function () {
    $("[data-lang-group][lang='en']").hide();
    $("[data-lang-group][lang='de']").show();
});

// FLAG SYSTEM FOR ANIMATIONS

let german = true;

$('#german').on('click', function(){
    german = true;
})

$('#english').on('click', function(){
    german = false;
})


$('#power').show();
$('#monitor').hide();
$('#navMenu').hide();
$('#preload').hide();
$('#languages').hide();

// POWER BUTTON

$('#power').on('click', function(){
    $('#power').toggle();
    $('#monitor').toggle();
    $('#preload').show();
    
    const elementId = german ? 'loadDe' : 'loadEn';
    const systemReady = "h4[data-lang-group='start'][lang='" + (german ? "de" : "en") + "']";

    const textToAnimate = $('#' + elementId).text();

    $("[data-lang-group='start'][lang]").hide();
    $('#' + elementId).show().text('');

    charAnimation(elementId, textToAnimate, 25, function() {
        setTimeout(function (){
            $(systemReady).show();
            setTimeout(function () {
                $('#preload').hide();
                $('#navMenu').show();
            }, 2000);
        }, 1000);
    });    
})

$('#close-window').on('click', function(){
    $('#monitor').toggle();
    $('#power').toggle();
    $('#navMenu').hide();
    $('#preload').hide();
})

// 1 BY 1 CHAR ANIMATION
function charAnimation(elementId, text, delay, onComplete){
    let i = 0;

    function type() {
        if(i < text.length) {
            $('#' + elementId).append(text.charAt(i));
            i++;
            setTimeout(type, delay);
        } else {
            if (onComplete) onComplete();
        }
    }
    type();
}