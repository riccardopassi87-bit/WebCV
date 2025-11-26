/* --------------------------------------------------
    GLOBAL LANGUAGE FLAG
-------------------------------------------------- */
let german = true;

function getLang() {
    return german ? "de" : "en";
}
/* --------------------------------------------------
    LANGUAGE SELECTOR
-------------------------------------------------- */
$(".lang-selector").on("click", function () {
    const selected = $(this).data("lang");

    german = (selected === "de");  // keep animation system in sync

    $("[data-lang-group][lang]").hide();
    $(`[data-lang-group][lang='${selected}']`).show();
});

/* --------------------------------------------------
    LANGUAGE FLAG BUTTONS
-------------------------------------------------- */
$('#german').on('click', function () { german = true; });
$('#english').on('click', function () { german = false; });

/* --------------------------------------------------
    INITIAL STATUS
-------------------------------------------------- */
$(document).ready(function () {
    $("[data-lang-group][lang='en']").hide();
    $("[data-lang-group][lang='de']").show();

    $('#power').show();
    $('#monitor').hide();
    $('#navMenu').hide();
    $('#preload').hide();
    $('#languages').hide();
});

/* --------------------------------------------------
    POWER BUTTON
-------------------------------------------------- */
$('#power').on('click', function () {
    $('#power').hide();
    $('#monitor').show();

    $('#preload').show();
    preloader();
});

/* --------------------------------------------------
    SHOW LANGUAGES (attach handler correctly)
-------------------------------------------------- */
$('#open-languages').on('click', function () {
    showLanguages();
});

/* --------------------------------------------------
    CLOSE WINDOW
-------------------------------------------------- */
$('#close-window').on('click', function () {
    $('#monitor').hide();
    $('#power').show();
    $('#navMenu').hide();
    $('#languages').hide();
});

/* --------------------------------------------------
    PRELOADER
-------------------------------------------------- */
function preloader() {
    
    const lang = getLang();
    const elementId = lang === "de" ? "loadDe" : "loadEn";
    const textToAnimate = $("#" + elementId).text();
    
    const title = `h4[data-lang-group='start'][lang='${lang}']`;

    $("[data-lang-group='start'][lang]").hide();
    $("#" + elementId).show().text('');

    charAnimation(elementId, textToAnimate, 20, function () {
        setTimeout(function () {
            $(title).show();
            setTimeout(function () {
                $('#preload').hide();
                $('#navMenu').show();
            }, 1500);
        }, 250);
    });
}

/* --------------------------------------------------
    LANGUAGE ANIMATION PANEL
-------------------------------------------------- */
function showLanguages() {
    $('#languages').toggle();

    const lang = getLang();
    const elementId = lang === "de" ? "langDe" : "langEn";

    $("#" + elementId).show();                  // show first
    const textToAnimate = $("#" + elementId).text(); // then read text
    $("#" + elementId).text(''); 

    const title = `h3[data-lang-group='lng'][lang='${lang}']`;
    const subtitle = `h4[data-lang-group='lng'][lang='${lang}']`;

    $("[data-lang-group='lng'][lang]").hide();
    $("#" + elementId).show().text('');

    charAnimation(elementId, textToAnimate, 20, function () {
        setTimeout(function () {
            $(title).show();
            $(subtitle).show();
        }, 300);
    });
}

/* --------------------------------------------------
    CHARACTER-BY-CHARACTER TYPING ANIMATION
-------------------------------------------------- */
function charAnimation(elementId, text, delay, onComplete) {
    let i = 0;

    function type() {
        if (i < text.length) {
            $("#" + elementId).append(text.charAt(i));
            i++;
            setTimeout(type, delay);
        } else {
            if (onComplete) onComplete();
        }
    }

    type();
}
