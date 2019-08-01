var pageContent = document.querySelector('.page-content');
var template = pageContent.appendChild (
    document.createElement ( "template" )
);

template.innerHTML = `
    <style>
    .work-block {
    padding-top: 85px;
    padding-bottom: 110px;
    }
    .work-block > .container {
        display: flex;
        justify-content: space-between;
        flex-wrap: wrap;
    }
    .work-block figure {
        -webkit-box-shadow: 10px 7px 5px -5px rgba(204,202,204,0.85);
        -moz-box-shadow: 10px 7px 5px -5px rgba(204,202,204,0.85);
        box-shadow: 10px 7px 5px -5px rgba(204,202,204,0.85);
    }
    .work-block .work-block-item {
        margin: 10px;
        width: 31%;
        overflow: hidden;
        position: relative;
    }
    .work-block .work-block-item figcaption{
        position: absolute;
        bottom: -20px;
        left: 0;
        z-index: -1;
        display: block;
        width: 300px;
        margin: 0;
        padding: 0;
        color: #314a5b;
        font-size: 18px;
        font-family: 'Montserrat', sans-serif;
        font-weight: 700;
        text-decoration: none;
        text-align: center;
        -webkit-transition: .3s ease-in-out;
        transition: .3s ease-in-out;
        opacity: 0;
        z-index: 10;
    }
    .work-block .work-block-item:hover figcaption {
        bottom: 20px;
        opacity: 1;
    }
    .work-block .work-block-item img {
        opacity: 1;
        -webkit-transition: .3s ease-in-out;
        transition: .3s ease-in-out;
        max-width: 100%;
    }
    .work-block .work-block-item:hover img {
        opacity: .5;
    }
    </style>
    
     <section class="work-block">
        <div class="container">
            <figure class="work-block-item">
                <img src="images/portfolio/1p.jpg">
                <figcaption>work</figcaption>
            </figure>
            <figure class="work-block-item">
                <img src="images/portfolio/2p.jpg">
                <figcaption>work</figcaption>
            </figure>
            <figure class="work-block-item">
                <img src="images/portfolio/3p.jpg">
                <figcaption>work</figcaption>
            </figure>
            <figure class="work-block-item">
                <img src="images/portfolio/4p.jpg">
                <figcaption>work</figcaption>
            </figure>
            <figure class="work-block-item">
                <img src="images/portfolio/5p.jpg">
                <figcaption>work</figcaption>
            </figure>
            <figure class="work-block-item">
                <img src="images/portfolio/6p.jpg">
                <figcaption>work</figcaption>
            </figure>
        </div>
    </section>
`;

customElements.define('content-portfolio',
    class extends HTMLElement {
        constructor() {
            super();
            const shadowRoot = this.attachShadow({ mode: 'open' })
                .appendChild( template.content.cloneNode(true)  );
        }
    });

pageContent.innerHTML = '';
template = pageContent.appendChild (
    document.createElement ( "content-portfolio" )
);