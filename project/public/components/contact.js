var pageContent = document.querySelector('.page-content');
var template = pageContent.appendChild (
    document.createElement ( "template" )
);

template.innerHTML = `
    <style>
   .contact-block {
        padding-top: 85px;
        padding-bottom: 110px;
    }
    
    .contact-block p {
        font-size: 15px;
        line-height: 1.5;
        color: #9aa0ab;
        font-family: 'Open Sans', sans-serif;
        font-weight: 400;
        margin-top: 25px;
    }
    
    .contact-block h2 {
        font-size: 40px;
        line-height: 1.1;
        color: #314a5b;
        font-family: 'Montserrat', sans-serif;
        font-weight: 700;
        text-transform: uppercase;
        margin: 40px 0 25px;
    }
    </style>
    
    <section class="contact-block">
       <h2>OUR advantages<span class="text-dot">.</span></h2>
            <p>NEW YORK OFFICE:</p>

            <p>First Floor WeWork Building, 1870 Broadway</p>

            <p>New York, NY 10036-7306, US</p>
            
        <h2>CALL US AT </h2>   
            <p>+1 (347) 434-3333</p>
    </section>
`;

customElements.define('contact-block',
    class extends HTMLElement {
        constructor() {
            super();

            const shadowRoot = this.attachShadow({ mode: 'open' })
                .appendChild( template.content.cloneNode(true)  );
        }
        connectedCallback() {
            var contact = this.shadowRoot.querySelector('.contact-block')
            console.log(contact)
        }
    });

pageContent.innerHTML = '';
template = pageContent.appendChild (
    document.createElement ( "contact-block" )
);
