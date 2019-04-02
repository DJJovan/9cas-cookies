


function createCookie(cookieName, cookieValue, expires) {
    document.cookie = cookieName + '=' + cookieValue;
}

function newCookie () {
    var cookieName = prompt('koji kuki zelite da sacuvate');
    var cookieValue = prompt('sta zelite da upisete u cookie ' + cookieName + '?');
    var expires = propmt('koliko dana zelite da sacuvate cookie')


    createCookie(cookieName, cookieValue);

}

