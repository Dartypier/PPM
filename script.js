//splash screen per session
$(document).ready(function () {
    if (!localStorage.getItem('splash')) {
        var splashHtml = '<div id="splash"><p>The New Hampshire Gazette</p></div>';
        $('body').append(splashHtml);

        setTimeout(function () {
            $('#splash').fadeOut(500, function () {
                $('body').remove(splashHtml);
            });
        }, 2000);

        localStorage.setItem('splash', 'true');
    } else {
        //   $('#splash').remove();
    }
    // console.log("Splash set: " + localStorage.getItem('splash'));
});


//search toolbar
function closeSearch() {
    document.querySelector('.search-form').classList.remove('d-flex');
    document.querySelector('.search-form').classList.add('d-none');
}

function openSearch() {
    document.querySelector('.search-form').classList.remove('d-none');
    document.querySelector('.search-form').classList.add('d-flex');
}