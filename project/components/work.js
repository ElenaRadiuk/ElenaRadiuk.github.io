var pageContent = document.querySelector('.page-content');
var template = document.createElement(template);

template.innerHTML = `
    <style>
    .aboutus-block {
        padding-top: 85px;
        padding-bottom: 110px;
    }
    
    .aboutus-block p {
        font-size: 15px;
        line-height: 1.5;
        color: #9aa0ab;
        font-family: 'Open Sans', sans-serif;
        font-weight: 400;
        margin-top: 25px;
    }
    
    .aboutus-block h2 {
        font-size: 40px;
        line-height: 1.1;
        color: #314a5b;
        font-family: 'Montserrat', sans-serif;
        font-weight: 700;
        text-transform: uppercase;
        margin: 40px 0 25px;
    }
    </style>
    
     <section class="aboutus-block container">
        <div>
            <p>
            WE are top-of-the-line creative digital company, dedicated to enriching digital experiences by providing innovative and ingenious
            solutions to small and large-scale businesses. Every day, we strive to assist you in augmenting your brand’s online visibility,
            increasing reach & engagement with your target audience, and eventually driving sales.
            </p>
            <p>
                As one of the leading web design agencies in New York, we understand that every client has a unique set
                of requirements that can be in the form of either generating leads, increasing sales or boosting traffic on their virtual storefronts.
            </p>
        </div>

        <h2>OUR advantages<span class="text-dot">.</span></h2>
            <p class="advantages-item-text">You’re safe with us. The privacy and security of your financial information is our top priority.</p>

            <p class="advantages-item-text">No more pricing grids. No more fine print. Sending and receiving cash is free without gimmicks.</p>

            <p class="advantages-item-text">The same debit card you use to buy coffee lets deposit money straight to your bank account.</p>

    </section>
`;

customElements.define('content-about',
    class extends HTMLElement {
        constructor() {
            super()
            const shadowRoot = this.attachShadow({ mode: 'open' })
                .appendChild( template.content );
        }
    });



pageContent.replaceWith(template);