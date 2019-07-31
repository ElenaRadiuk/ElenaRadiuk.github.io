( function () {
    // var x = location.hash.substr(1)
    // import ( `./index${location.hash.slice(1)}.js` )

    var pageContent = document.querySelector('.page-content');
    var clearContent = () => pageContent.innerHTML = null;

    var topBanner = document.querySelector('.top-banner-text');
    var bannerText = document.querySelector('banner-text')

    document.addEventListener(
        "DOMContentLoaded", function() {
            pageContent.appendChild(document.createElement('index-content'))
        }
    );

    document.body.querySelectorAll('a').forEach(a => a.addEventListener('click', event => {
        event.preventDefault();
        event.stopImmediatePropagation()

        var target = event.target

        while (target.tagName !== 'A') {
            target = target.parentNode;
            console.log(target)
        }
        var module = target.getAttribute("data-attr");
        var textBanner = target.textContent

        console.log(target)
        console.log(target.getAttribute("data-attr"));

        if (module == "register-user") {
            document.querySelector('.register-user-wrapper').style.display = 'block'
            import(`./components/${module}.js`);

        } else if(module == "index-content") {
            console.log('index content click')
            clearContent();

            pageContent.appendChild (
                document.createElement ( module )
            );
            // import ( `./components/index-content.js` )
        }
        else {
            console.log('no index click')
            // module ? import(`./components/${module}.js`) : null;
            clearContent();

            pageContent.appendChild (
                document.createElement ( module )
            );
            // var  bannerT = document.querySelector('banner-text').src
            // bannerText.src = `${module}.html`;
            // console.log(bannerText)
            // document.querySelector('banner-text').src = bannerText.src
            bannerText.setAttribute('src', `${module}.html`);
            console.log(document.querySelector('banner-text'))

            // module ? (topBanner.innerHTML = `<h2 class="main-text">${textBanner}<span class="text-dot">.</span></h2>`) : null;
        }


        // return new Promise (
        //     ( resolve, reject ) => {
        //         var module = event.target.getAttribute("data-attr");
        //         console.log(event.target)
        //
        //         if (module == "register-user") {
        //             document.querySelector('.register-user-wrapper').style.display = 'block'
        //             import(`./components/${module}.js`);
        //
        //         } else if(module == "index-content") {
        //             console.log('index content click')
        //             clearContent();
        //
        //             pageContent.appendChild (
        //                 document.createElement ( module )
        //             );
        //             // import ( `./components/index-content.js` )
        //         }
        //         else {
        //             console.log('no index click')
        //             module ? import(`./components/${module}.js`) : null;
        //             resolve && module ? (topBanner.innerHTML = `<h2 class="main-text">${module}<span class="text-dot">.</span></h2>`) : null;
        //         }
        //         // reject (null)}
        //     }
        // )
        // .then((resolve, reject) => {
        // console.log(resolve);
        // console.log(reject)
        // })
        // .catch(error => {
        //     console.log(error)
        //     /* Error */
        // })
    }, false) );



})();


//     document.addEventListener(
//         "DOMContentLoaded",
//         event => import ( `../snippets/mouseTail.js` )
//     )