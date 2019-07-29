( function () {
    // var x = location.hash.substr(1)
    // import ( `./index${location.hash.slice(1)}.js` )

    var topBanner = document.querySelector('.top-banner-text');

    document.body.querySelectorAll('a').forEach(a => a.addEventListener('click', event => {
        event.preventDefault();

        return new Promise (
            ( resolve, reject ) => {
                var module = event.target.getAttribute("data-attr");
                import(`./components/${module}.js`);
                resolve && module ? (topBanner.innerHTML = `<h2 class="main-text">${module}<span class="text-dot">.</span></h2>`) : null;
                // reject (null)}
            }
        )
        .then((resolve, reject) => {
        console.log(resolve);
        console.log(reject)
        })
        .catch(error => {
            console.log(error)
            /* Error */
        })
    }) );



})();


//     document.addEventListener(
//         "DOMContentLoaded",
//         event => import ( `../snippets/mouseTail.js` )
//     )