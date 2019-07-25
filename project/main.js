( function () {
    // var x = location.hash.substr(1)
    // import ( `./index${location.hash.slice(1)}.js` )

    document.getElementById('main-menu').addEventListener('click', event => {
        event.preventDefault();
        (event.target.getAttribute("data-attr") == 'about') ? import('./components.js')
            .then(resolve => {
                console.log(resolve)
            })
            .catch(error => {
                console.log(error)
                /* Error handling */
            })
            : null
    });
})()


//     document.addEventListener(
//         "DOMContentLoaded",
//         event => import ( `../snippets/mouseTail.js` )
//     )