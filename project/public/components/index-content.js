var template2 = document.createElement ( "template" )

template2.innerHTML = `
    <style>
    a {
        text-decoration: none;
        color: #fa5c65;
    }
    
    a.wave-effect {
        transition: none;
    }
    
    a.wave-effect:hover {
        background-image: url("data:image/svg+xml;charset=utf8,%3Csvg id='squiggle-link' xmlns='http://www.w3.org/2000/svg' xmlns:xlink='http://www.w3.org/1999/xlink' xmlns:ev='http://www.w3.org/2001/xml-events' viewBox='0 0 20 4'%3E%3Cstyle type='text/css'%3E.squiggle{animation:shift .3s linear infinite;}@keyframes shift {from {transform:translateX(0);}to {transform:translateX(-20px);}}%3C/style%3E%3Cpath fill='none' stroke='%23fa5c65' stroke-width='2' class='squiggle' d='M0,3.5 c 5,0,5,-3,10,-3 s 5,3,10,3 c 5,0,5,-3,10,-3 s 5,3,10,3'/%3E%3C/svg%3E");
        background-position: 0 100%;
        background-size: auto 3px;
        background-repeat: repeat-x;
        text-decoration: none;
    }
    
    img {
        width: 100%;
        max-width: 100%;
        height: auto;
    }
    h1,h2,h3,h4,h5,h6 {
        font-weight: normal;
        font-size: 100%;
    }
    
    font-face {
        font-family: "OpenSansRegular";
        src: url("./fonts/OpenSans-Regular.ttf");
    }
    
    font-face {
        font-family: "OpenSansBold";
        src: url("./fonts/OpenSans-Bold.ttf");
    }
    
    font-face {
        font-family: "MontserratRegular";
        src: url("./fonts/Montserrat-Regular.ttf");
    }
    
    font-face {
        font-family: "MontserratBold";
        src: url("./fonts/Montserrat-Bold.ttf");
    }
    
    .container {
        max-width: 940px;
        margin: 0 auto;
    }
    
    .text-dot {
        color: #fa5c65;
    }
        .advantages-block {
        padding-top: 85px;
        padding-bottom: 110px;
        display: flex;
        justify-content: space-between;
    }
    
    .advantages-block  .advantages-item{
       max-width: 260px;
    }
    
    .advantages-block .advantages-item .advantages-item-title{
        font-size: 26px;
        line-height: 1;
        color: #314a5b;
        font-family: 'Montserrat', sans-serif;
        font-weight: 700;
        text-transform: uppercase;
    }
    
    .advantages-block .advantages-item .advantages-item-text{
        font-size: 15px;
        line-height: 1.5;
        color: #9aa0ab;
        font-family: 'Open Sans', sans-serif;
        font-weight: 400;
        margin: 25px 0 30px;
    }
    
    .advantages-block .advantages-item .advantages-item-link{
        font-size: 15px;
        line-height: 1.5;
        /*color: #fa5c65;*/
        font-family: 'Montserrat', sans-serif;
        font-weight: 600;
        text-transform: uppercase;
    }
    
    .advantages-block .advantages-item .advantages-item-link span {
        display: inline-block;
        margin-left: 8px;
    }
    
    
    .portfolio-block {
        display: flex;
        /*justify-content: space-between;*/
    }
    
    .portfolio-block img {
        max-width: 390px;
    }
    
    .portfolio-block .portfolio-content {
        max-width: 415px;
        margin-left: 100px;
    }
    
    .portfolio-block .portfolio-content .portfolio-title{
        font-size: 40px;
        line-height: 1.1;
        color: #314a5b;
        font-family: 'Montserrat', sans-serif;
        font-weight: 700;
        text-transform: uppercase;
    }
    
    .portfolio-block .portfolio-content .portfolio-subtitle{
        font-size: 16px;
        line-height: 1.1;
        color: #314a5b;
        font-family: 'Open Sans', sans-serif;
        font-weight: 600;
        margin: 15px 0 30px;
    }
    
    .portfolio-block .portfolio-content .portfolio-text {
        margin-bottom: 35px;
    }
    
    .portfolio-block .portfolio-content .portfolio-text p{
        font-size: 15px;
        line-height: 1.5;
        color: #9aa0ab;
        font-family: 'Open Sans', sans-serif;
        font-weight: 400;
        margin-top: 25px;
    }
    
    .portfolio-block .portfolio-content .portfolio-item-link{
        font-size: 15px;
        line-height: 1.5;
        color: #fa5c65;
        font-family: 'Montserrat', sans-serif;
        font-weight: 600;
        text-transform: uppercase;
    }
    
    .portfolio-block .portfolio-content .portfolio-item-link span {
        display: inline-block;
        margin-left: 8px;
    }
    
    
    
    .team-block {
        margin-top: 105px;
    }
    
    .team-block .team-block-title {
        font-size: 32px;
        line-height: 1.1;
        color: #314a5b;
        font-family: 'Montserrat', sans-serif;
        font-weight: 700;
        text-transform: uppercase;
    }
    
    .team-block .team-block-sutitle {
        font-size: 16px;
        line-height: 1;
        color: #9aa0ab;
        font-family: 'Open Sans', sans-serif;
        font-weight: 400;
        margin: 15px 0 35px;
    }
    
    .team-block .team-block-link {
        text-align: right;
        margin-bottom: 55px;
    }
    .team-block .team-block-link > a {
        font-size: 15px;
        line-height: 1.5;
        color: #fa5c65;
        font-family: 'Montserrat', sans-serif;
        font-weight: 600;
        text-transform: uppercase;
    }
    
    .team-block .team-block-link a span {
        display: inline-block;
        margin-left: 8px;
    }
    
    
    .team-block .team-member-wrapper {
        display: flex;
        justify-content: space-between;
        margin-bottom: 50px;
    }
    
    .team-block .team-member img, .team-member > div {
        float: left;
    }
    
    .team-block .team-member img {
        max-width: 120px;
        height: auto;
        border-radius: 50%;
    }
    
    .team-member > div {
        margin-left: 20px;
    }
    
    .team-block .team-member .team-member-name {
        font-size: 22px;
        line-height: 1.1;
        color: #314a5b;
        font-family: 'Montserrat', sans-serif;
        font-weight: 700;
        text-transform: uppercase;
    }
    
    .team-block .team-member .team-member-position {
        font-size: 14px;
        line-height: 1;
        color: #fa5c65;
        font-family: 'Open Sans', sans-serif;
        font-weight: 500;
        margin: 10px 0 15px;
    }
    
    .team-block .team-member .team-member-facts {
        font-size: 14px;
        line-height: 1.4;
        color: #9aa0ab;
        font-family: 'Open Sans', sans-serif;
        font-weight: 400;
        margin-bottom: 35px;
        max-width: 160px;
    }   
    </style>
    
 
    <section class="advantages-block">
        <div class="advantages-item">
            <h4 class="advantages-item-title">Peace<br>
                of Mind<span class="text-dot">.</span>
            </h4>
            <p class="advantages-item-text">You’re safe with us. The privacy and security of your financial information is our top priority.</p>
            <a href="#" data-attr="about" class="advantages-item-link wave-effect">MORE<span><img src="images/Arrow.svg" alt="arrow"></span></a>
        </div>

        <div class="advantages-item">
            <h4 class="advantages-item-title">FREE<span class="text-dot">.</span><br>
                Actually free
            </h4>
            <p class="advantages-item-text">No more pricing grids. No more fine print. Sending and receiving cash is free without gimmicks.</p>
            <a href="#" data-attr="about" class="advantages-item-link wave-effect">MORE<span><img src="images/Arrow.svg" alt="arrow"></span></a>
        </div>

        <div class="advantages-item">
            <h4 class="advantages-item-title">Simple<br>
                payments<span class="text-dot">.</span>
            </h4>
            <p class="advantages-item-text">The same debit card you use to buy coffee lets deposit money straight to your bank account.</p>
            <a href="#" data-attr="about" class="advantages-item-link wave-effect">MORE<span><img src="images/Arrow.svg" alt="arrow"></span></a>
        </div>
    </section>


    <section class="portfolio-block">
        <img src="images/MacBook.png">
        <div class="portfolio-content">
            <h2 class="portfolio-title">PORTFOLIO<span class="text-dot">.</span></h2>
            <div class="portfolio-subtitle">We are small, but strong team</div>
            <div class="portfolio-text">
                <p>No more pricing grids. No more fine print. <br> Sending and receiving cash is free without gimmicks.</p>
                <p>The same debit card you use to buy coffee <br> lets deposit money straight to your bank account.</p>
            </div>
            <a href="#" data-attr="portfolio-content" class="portfolio-item-link wave-effect">MORE<span><img src="images/Arrow.svg" alt="arrow"></span></a>
        </div>
    </section>


    <section class="team-block">
        <h3 class="team-block-title">OUR TEAM<span class="text-dot">.</span></h3>
        <div class="team-block-sutitle">They are big but still friendly.</div>

        <div class="team-member-wrapper">
            <div class="team-member">
                <img src="images/Photo.png">
                <div>
                    <div class="team-member-name">Joey</div>
                    <div class="team-member-position">Web developer</div>
                    <div class="team-member-facts">Coffee lover. Always on bike. iPhone fan.</div>
                </div>
            </div>
            <div class="team-member">
                <img src="images/Photo2.png">
                <div>
                    <div class="team-member-name">MATT</div>
                    <div class="team-member-position">Web designer</div>
                    <div class="team-member-facts">MTB Biker. Photoshop Master. Loving Father.</div>
                </div>
            </div>
            <div class="team-member">
                <img src="images/Photo3.png">
                <div>
                    <div class="team-member-name">MIKE</div>
                    <div class="team-member-position">Copywriter</div>
                    <div class="team-member-facts">Drummer. Soup lover. Beer Drinker. Cyclist.</div>
                </div>
            </div>
        </div>

        <div class="team-block-link">
            <a href="#" data-attr="work" class="wave-effect">MORE<span><img src="images/Arrow.svg" alt="arrow"></span></a>
        </div>
    </section>
    `;

customElements.define('index-content',
    class extends HTMLElement {
        constructor() {
            super();
            const shadowRoot = this.attachShadow({ mode: 'open' })
                .appendChild( template2.content.cloneNode(true)  );
        }
        // connectedCallback() {
        //     var contact = this.shadowRoot.querySelector('.portfolio-block')
        //     console.log(contact)
        // }
    });



