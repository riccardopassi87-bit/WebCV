/* --------------------------------------------------
    GLOBAL LANGUAGE FLAG
-------------------------------------------------- */
let german = true;

function getLang() {
    return german ? "de" : "en";
}

/* --------------------------------------------------
    LANGUAGE FLAG BUTTONS
-------------------------------------------------- */
$('#german').on('click', function (){
    german = true;
    updateLanguage();
});

$('#english').on('click', function (){
    german = false;
    updateLanguage();
});

/* --------------------------------------------------
    LANGUAGE SELECTOR
-------------------------------------------------- */
function updateLanguage() {
    const lang = getLang();
    $("[data-lang-group][lang]").hide();
    $(`[data-lang-group][lang='${lang}']`).show();
}

/* --------------------------------------------------
    INITIAL STATUS
-------------------------------------------------- */
$(document).ready(function () {
    updateLanguage();

    $('#power').show();
    $('#monitor').hide();
    $('#navMenu').hide();
    $('#preload').hide();
    $('#languages').hide();
    $('#bisComp').hide();
    $('#softSkills').hide();

    //TEXT CACHE (ALL CONTENT)
    $('#loadDe, #loadEn, #langDe, #langEn, #compDe, #compEn, #softDe, #softEn').each(function () {
        $(this).data('origText', $(this).text().trim());
    });

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
    SHOW BIS COMPETENCES
-------------------------------------------------- */
$('.open-bis').on('click', function() {
    closeAll();
    showLanguages('bisComp', 'bis', 'compDe', 'compEn');
});

/* --------------------------------------------------
    SHOW BIS COMPETENCES
-------------------------------------------------- */
$('.open-skills').on('click', function() {
    closeAll();
    showLanguages('softSkills', 'skl', 'softDe', 'softEn');
});

/* --------------------------------------------------
    SHOW LANGUAGES
-------------------------------------------------- */
$('.open-languages').on('click', function() {
    closeAll();
    showLanguages('languages', 'lng', 'langDe', 'langEn');
});

/* --------------------------------------------------
    CLOSE WINDOW
-------------------------------------------------- */
$('#close-window').on('click', function () {
    $('#monitor').hide();
    $('#power').show();
    $('#navMenu').hide();
    closeAll();
});

/* --------------------------------------------------
    PRELOADER
-------------------------------------------------- */
function preloader() {
    
    const lang = getLang();
    const elementId = lang === "de" ? "loadDe" : "loadEn";
    const textToAnimate = $("#" + elementId).data('origText');
    
    $("[data-lang-group='start'][lang]").hide();
    $("#" + elementId).show().text('');

    const title = `h4[data-lang-group='start'][lang='${lang}']`;

    charAnimation(elementId, textToAnimate, 20, function () {
        setTimeout(() => {
            $(title).show();
            setTimeout(() => {
                $('#preload').hide();
                $('#navMenu').show();
            }, 1500);
        }, 800);
    });
}

/* --------------------------------------------------
    LANGUAGE ANIMATION PANEL
-------------------------------------------------- */
function showLanguages(boxId, group, case1, case2) {

    const lang = getLang();
    const elementId = lang === "de" ? case1 : case2;
    $("#" + boxId).show();
    $(`[data-lang-group='${group}'][lang]`).hide();

    const $title = $("#" + elementId);
    const textToAnimate = $title.data('origText');
    $title.text('').show();

    charAnimation(elementId, textToAnimate, 20, function () {
        
        setTimeout(() => {
            const popItems = $("#" + boxId + " > span").slice(1);
            const langPopItems = popItems.map(function (){
                return $(this).children(`[lang='${lang}']`);
            }).get();

            function showItems(i){
                if (i > langPopItems.length) return;
                langPopItems[i].show();
                setTimeout(() => showItems(i + 1), 200);
            }
            showItems(0);
        }, 1000);
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
        } else if (onComplete) {
            onComplete();
        }
    }
    type();
}

/* --------------------------------------------------
    CLOSE ALL CONTENT FALLBACK
-------------------------------------------------- */

function closeAll(){
    $('#languages').hide();
    $('#bisComp').hide();
    $('#softSkills').hide();
}
