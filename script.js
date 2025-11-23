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

// POWER BUTTON
$('#power').show();
$('#preload').hide();
$('#monitor').hide();
$('#languages').hide();

$('#power').on('click', function(){
    $('#power').toggle();
    $('#monitor').toggle();
    $('#preload').show();
})

$('#close-window').on('click', function(){
    $('#monitor').toggle();
    $('#power').toggle();
})