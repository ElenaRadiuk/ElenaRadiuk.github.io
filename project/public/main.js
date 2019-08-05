( function () {
    var pageContent = document.querySelector('.page-content');
    var registerContainer = document.querySelector('.register-user-wrapper');
    var bannerText = document.querySelector('banner-text');
    var clearContent = () => pageContent.innerHTML = null;
    var clearContentBanner = () => bannerText.innerHTML = null;
    var topBanner = document.querySelector('.top-banner-text');

    document.addEventListener(
        "DOMContentLoaded", function() {
            pageContent.appendChild(document.createElement('index-content'))
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
        if (module === "register-user") {
            console.log(module)
            registerContainer.appendChild (
                document.createElement(module)
            );
        }
        else if (module){
            clearContentBanner();
            bannerText.setAttribute('src', `./banner-template/${module}.html`);

            clearContent();
            pageContent.appendChild (
                document.createElement ( module )
            );
            console.log(module)
        }
    }) );
})();
