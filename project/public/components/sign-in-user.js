var loginContainer = document.querySelector('#sign-in-user > a')
var templateLogin = document.createElement ( "template" );


templateLogin.innerHTML = `
    <style >
    #log-out {
        cursor: pointer;
        display: inline-block;
    }
   
    </style>
    <span id="reg-section">
        <img src="./images/account_icon24px.svg" id="login-user-photo">
    
    <span id="login-user-name"></span>
    <span id="log-out"><img src="./images/directions_run-24px.svg" id="login-user-photo"></span>
    </span>
`;

customElements.define('sign-in-user',
    class extends HTMLElement {
        constructor() {
            super();
            const shadowRoot = this.attachShadow({ mode: 'open' })
                .appendChild( templateLogin.content.cloneNode(true)  );
            function addElem(tagName) {
                return  this.shadowRoot.appendChild(document.createElement(tagName))
            }
            checkUser();
            console.log('login');
            var logiUserName = this.shadowRoot.getElementById("login-user-name");
            var logiUserPhoto = this.shadowRoot.getElementById("login-user-photo");

            this.shadowRoot.getElementById("log-out").addEventListener('click', this.removeBlock.bind(this));

            function checkUser() {
                // let cookie = Object.assign({}, ...document.cookie.split("; "))
                //     .map(item => Object.assign({}, {[item.split("=")[0]]:item.split("=")[1]})
                //     );
                var cookie = document.cookie.split("; ");
                for (var key in cookie) {
                    var arrCookie = cookie[key].split('=');
                    ((arrCookie[0] == "userId") && arrCookie[1]) ? getUserData(arrCookie[0]) : null;
                    // console.log(arrCookie[0])
                    // console.log(arrCookie[1])
                }
                function getUserData() {
                    console.log('test')
                    cookie
                        ? fetch(`http://localhost:3000/profile/`)
                            .then(response => response.json())
                            .then(response => {
                                console.log(response["email"]);
                                console.log(arrCookie[0]);
                                loginContainer.style.display = "none"
                                logiUserPhoto.src = response["user-photo"];
                                logiUserName.textContent = response["user-name"];
                                document.cookie = `userSignIn=${response.id}true`
                            })
                        : console.warn("Not registered")
                }

            }


        }
        removeBlock(event) {
            loginContainer.style.display = "block";
            // document.cookie = `userSignIn=false`;
            this.shadowRoot.getElementById("reg-section").remove();

        };
    });

// login.innerHTML = '';
// template = pageContent.appendChild (
//     document.createElement ( "sign-in-user" )
// );




// /





// fetch("https://a-level-json-server.glitch.me/students")
//   .then(response => response.json())
//     .then(response => console.log(response))