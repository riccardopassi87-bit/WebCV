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

$('#preload').hide();
$('#monitor').hide();
$('#languages').hide();

$('#power').on('click', function(){
    $('#power').hide();
    $('#monitor').show();
    $('#preload').show();
})