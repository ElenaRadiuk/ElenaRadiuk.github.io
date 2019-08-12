( function () {
    var pageContent = document.querySelector('.page-content');
    var registerContainer = document.querySelector('.register-user-wrapper');
    var bannerText = document.querySelector('banner-text');
    function clearContent() {
        Array.from(arguments).forEach(item => (item.innerHTML = null));
    }
    // var clearContent = (elem) => elem.innerHTML = null;
    var clearContentBanner = () => bannerText.innerHTML = null;
    var topBanner = document.querySelector('.top-banner-text');
    var loginContent = document.querySelector('#sign-in-user');

    document.addEventListener(
        "DOMContentLoaded", function() {
            pageContent.appendChild(document.createElement('index-content'));
            loginContent.appendChild(document.createElement('sign-in-user'))
        }
    );
    registerContainer.appendChild (
        document.createElement("test-user")
    );


    document.body.querySelectorAll('a').forEach(a => a.addEventListener('click', event => {
        event.preventDefault();

        var target = event.target

        while (target.tagName !== 'A') {
            target = target.parentNode;
            console.log(target)
        }
        var module = target.getAttribute("data-attr");

        // var textBanner = target.textContent;

        console.log(module)
        // if (module === "register-user" || module== "sign-in-user") {
        if (module === "register-user") {
            console.log(module)
            registerContainer.appendChild (
                document.createElement(module)
            );
        }
        else if (module){
            clearContent(pageContent, bannerText);
            bannerText.setAttribute('src', `./banner-template/${module}.html`);

            pageContent.appendChild (
                document.createElement ( module )
            );
            console.log(module)
        }
    }) );
})();
