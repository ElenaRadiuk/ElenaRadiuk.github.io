var bannerContainer = document.body.querySelector('.top-banner-block > .container')
class BannerText extends HTMLElement {
    constructor() {
        super();
        this.shadow = this.attachShadow({ mode: "closed" });
    }
    connectedCallback() {
        // fetch("chank.html")
        //   .then(response => response.text())
        //   .then(response => (this.shadow.innerHTML = response));
    }
    static get observedAttributes() {
        return ["src"];
    }
    attributeChangedCallback(attrName, oldVal, newVal) {
        if (!newVal) return;
        fetch(newVal)
            .then(response => response.text())
            .then(response => (this.shadow.innerHTML = response));
    }
}
customElements.define("banner-text", BannerText);
bannerContainer.appendChild(document.createElement("banner-text"));