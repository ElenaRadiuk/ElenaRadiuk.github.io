var loginContainer = document.querySelector('#sign-in-user > a')
var templateLogin = document.createElement ( "template" );

templateLogin.innerHTML = `
    <style >
       body {
            margin: 0;
        }
        .container-user {
            width: 100%;
            min-height: 100vh;
            display: -webkit-box;
            display: -webkit-flex;
            display: -moz-box;
            display: -ms-flexbox;
            display: flex;
            flex-wrap: wrap;
            justify-content: center;
            align-items: center;
            background-repeat: no-repeat;
            background-position: center;
            background-size: cover;
            position: absolute;
            z-index: 100;
            top: 0;
            left: 0;
            position: fixed;
            background-image: url('./images/bg-user.jpg');
        }
        .container-user::before {
            content: "";
            display: block;
            position: absolute;
            z-index: -1;
            width: 100%;
            height: 100%;
            top: 0;
            left: 0;
            background-color: rgba(255,255,255,.9);
        }
        
        #autorization-section {
            display: flex;
            align-items: center;
        }
        
        .wrap-user {
            max-width: 300px;
            width: 100%;
            border-radius: 10px;
            overflow: hidden;
            padding: 40px 55px 55px;
            background: #314a5b;
            position: relative;
        }
        
        .wrap-user .btn-close{
            width: 20px;
            height: 20px;
            position: absolute;
            top: 25px;
            right: 15px;
            cursor: pointer;
        }
        
        .wrap-user .btn-close:before {
            position: absolute;
            content: '';
            width: 2px;
            height: 17px;
            background: red;
            transform: rotate(45deg);
        }
        .wrap-user .btn-close:after {
            position: absolute;
            content: '';
            width: 2px;
            height: 17px;
            background: red;
            transform: rotate(-45deg);
        }
        
        .login-form-logo {
            font-size: 60px;
            color: #333;
            display: -webkit-box;
            display: -webkit-flex;
            display: -moz-box;
            display: -ms-flexbox;
            display: flex;
            align-items: center;
            justify-content: center;
            width: 120px;
            height: 120px;
            border-radius: 50%;
            background-color: #fff;
            margin: 0 auto;
            overflow: hidden;
        }
         .login-form-logo img{
            max-width: 120px;
            height: auto;
            max-height: 120px;
        }
        .label-avatar {
            display: block;
            text-align: center;
            color: white;
            margin-top: 5px;
        }
        .input.user-avatar {
            padding: 0;
            width: 5px;
            position: relative;
            height: 5px;
            top: -12px;
            left: 50%;
            z-index: -1;
        }
        .login-form-title {
            font-family: Poppins-Medium;
            font-size: 30px;
            color: #fff;
            line-height: 1.2;
            text-align: center;
            text-transform: uppercase;
            display: block;
            margin: 25px 30px;
        }
        .wrap-input {
            width: 100%;
            position: relative;
            border-bottom: 2px solid rgba(255,255,255,0.24);
            margin-bottom: 30px;
        }
        
        .input {
            font-size: 16px;
            color: #fff;
            line-height: 1.2;
            box-sizing: border-box;
            display: block;
            width: 100%;
            height: 45px;
            background: transparent;
            padding: 0 5px 0 38px;
            border: none;
            outline: none;
            font-family: 'Open Sans', sans-serif;
        }
        .input::placeholder {
            color: white;
            opacity: 0.5;
        }
        
        .focus-input {
            position: absolute;
            display: block;
            width: 100%;
            height: 100%;
            top: 0;
            left: 0;
            pointer-events: none;
            color: white;
        }
        
        .focus-input::before {
            content: "";
            display: block;
            position: absolute;
            bottom: -2px;
            left: 0;
            width: 0;
            height: 2px;
        
            -webkit-transition: all 0.4s;
            -o-transition: all 0.4s;
            -moz-transition: all 0.4s;
            transition: all 0.4s;
        
            background: #fff;
        }
        
        .focus-input::after {
            font-family: Material-Design-Iconic-Font;
            font-size: 22px;
            color: #fff;
        
            content: attr(data-placeholder);
            display: block;
            width: 100%;
            position: absolute;
            top: 6px;
            left: 0px;
            padding-left: 5px;
        
            -webkit-transition: all 0.4s;
            -o-transition: all 0.4s;
            -moz-transition: all 0.4s;
            transition: all 0.4s;
        }
        
        .input:focus {
            padding-left: 5px;
        }
        
        .input:focus + .focus-input::after {
            top: -22px;
            font-size: 18px;
        }
        
        .input:focus + .focus-input::before {
            width: 100%;
        }      
         input.wrap-input {
            font-size: 16px;
            color: #fff;
            line-height: 1.2;
        
            padding: 5px;
            max-width: 100%;
            background: transparent;
            outline: none;
            border: none;
            border-bottom: 2px solid white;
            color: white;
            font-size: 16px;
            font-family: 'Open Sans', sans-serif;
        }
         input.wrap-input::placeholder {
            color: white;
            opacity: 0.5;
        }
        
        .submit-btn {
            display: inline-block;
            background-color: #fa5c65;
            padding: 15px 30px;
            font-size: 14px;
            font-family: 'Open Sans', sans-serif;
            font-weight: 700;
            color: white;
            text-transform: uppercase;
            border-radius: 8px;
            position: relative;
            transition: all 0.5s;
            overflow: hidden;
            border: none;
            margin-right: 15px;
        } 
        #userInfo {
            color:white;
        }
        #userInfo img {
           max-width: 200px;
        }
        
        img {
            width: auto!important;
            height: auto!important;
            max-height: 50px!important;
        }
        
        #sign-in-user {
            display: flex;
            align-items: center;
        }
    
    
    #log-out {
        cursor: pointer;
        display: inline-block;
    }
   
    </style>
    
    <section class="container-user" id="login-form">
            <div class="wrap-user">
            <div class="btn-close"></div>
            <form class="login-form" id="registrationForm">
                <span class="login-form-title">
                        Insert your login and pass 
                </span>

                <div class="wrap-input validate-input" data-validate = "Enter username">
                    <input class="input user-name" id="user-name" type="text" name="user-name" placeholder="Username">
                    <span class="focus-input" data-placeholder="&#xf207;"></span>
                </div>

                <div class="wrap-input validate-input" data-validate="Enter password">
                    <input class="input user-pass" id="pass" type="password" placeholder="Password">
                    <span class="focus-input" data-placeholder="&#xf191;"></span>
                </div>
                
                <input type="hidden" value="" name="pass-hash" id="pass-hash">
                <input type="hidden" value="" name="user-photo" id="user-photo-bs">
            </form>
            <button class="submit-btn" id="submit-btn2">
                Log in
            </button>
            
            
            <div id="warnInfo" style="display: none; color: red">
                incorrect
            </div>
            </div>          
    </section>
      
    <!--<span id="reg-section">-->
        <!--<img src="./images/account_icon24px.svg" id="login-user-photo">-->
        <!--<span id="login-user-name"></span>-->
        <!--<span><img src="./images/directions_run-24px.svg" id="log-out" style="display:none"></span>-->
    <!--</span>-->
`;

customElements.define('sign-in-user',
    class extends HTMLElement {
        constructor() {
            super();
            const shadowRoot = this.attachShadow({ mode: 'open' })
                .appendChild( templateLogin.content.cloneNode(true)  );

            var containerUserLogin = document.querySelector('#sign-in-user');
            function addElem(tagName) {
                return  regSection.appendChild(document.createElement(tagName))
            }
            checkUser();
            console.log('login');
            // var logiUserName =  containerUserLogin.appendChild(document.createElement("span"));
            // var logiUserPhoto =  this.shadowRoot.querySelector('#login-user-photo');
            // var logiUserName =  this.shadowRoot.querySelector('#login-user-name');
            // var logiUserOut =  this.shadowRoot.querySelector('#log-out');

            var autorizationSection = document.getElementById('autorization-section');
            autorizationSection.style.display = "none";
            var imgAutoriz = document.getElementById('login-user-photo');
            var nameAutoriz = document.getElementById('login-user-name');
            var logOut = document.getElementById("log-out");

            console.log(imgAutoriz)
            console.log(nameAutoriz)


            var warnInfo =  this.shadowRoot.querySelector('#warnInfo');
            // var logiUserPhoto = containerUserLogin.appendChild(document.createElement("img"));

            var formLogin = this.shadowRoot.querySelector('#login-form');
            var regSection = this.shadowRoot.querySelector('#reg-section');
            var inputName = this.shadowRoot.getElementById ("user-name");
            formLogin.style.display = "none";



            document.getElementById("log-out").addEventListener('click', removeBlock.bind(this));

            this.shadowRoot.querySelector(".btn-close").addEventListener('click', removeBlockLogin.bind(this));


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
                        ? fetch(`http://localhost:3000/profile/`,{
                            method: "PATCH",
                            headers: {
                                "Content-Type": "application/json"
                            },
                            body: JSON.stringify({
                                activeSession: "true"
                            })
                        })
                            .then(response => response.json())
                            .then(response => {
                                console.log(response["email"]);
                                console.log(arrCookie[0]);
                                loginContainer.style.display = "none";

                                autorizationSection.style.display = "flex";

                                imgAutoriz.src = response["user-photo"];

                                nameAutoriz.textContent = response["user-name"];
                                console.log(response["user-name"]);

                                document.cookie = `activeSession=${response["activeSession"]}`
                                // var runUser = containerUserLogin.appendChild(document.createElement("img"));
                                // runUser.src = "./images/directions_run-24px.svg";
                                // runUser.id = "log-out";
                                logOut.style.display = 'block';
                            })
                        : warnInfo.style.display = 'block'
                }

            }

            loginContainer.onclick = () => {
                warnInfo.style.display = 'none';
                formLogin.style.display = "flex";


            }

            console.log( this.shadowRoot.getElementById("submit-btn2"));

            this.shadowRoot.getElementById("submit-btn2").addEventListener('click', loginBlock.bind(this));
            function loginBlock() {
                console.log('test cbt');
                var currentUser = null;
                document.cookie
                    ? fetch(`http://localhost:3000/profile/`, {
                        method: "PATCH",
                        headers: {
                            "Content-Type": "application/json"
                        },
                        body: JSON.stringify({
                            activeSession: "true"
                        })
                    }
                    )
                        .then(response => response.json())
                        .then(response => {
                            // console.log(logiUserName.textContent)
                            if(inputName.value === response["user-name"]) {
                                console.log('ffffffffffffff')
                                loginContainer.style.display = "none"

                                // autorizationSection.innerHTML = null;
                                autorizationSection.style.display = 'flex';

                                // addElem("img").src = response["user-photo"];
                                // addElem("span").innerText = response["user-name"];
                                // addElem("span").src = "./images/directions_run-24px.svg";
                                imgAutoriz.src = response["user-photo"];
                                nameAutoriz.innerText = response["user-name"];
                                logOut.src = "./images/directions_run-24px.svg";
                                loginContainer.style.display = "none;"
                                document.cookie = `activeSession=${response["activeSession"]}`

                                // var runUser = containerUserLogin.appendChild(document.createElement("img"));
                                // runUser.src = "./images/directions_run-24px.svg";
                                // runUser.id = "log-out";
                                logOut.style.display = 'block';

                                formLogin.style.display = 'none';
                            }
                            warnInfo.style.display = 'block';



                        })
                    :  warnInfo.style.display = 'block';
            }



            function removeBlockLogin() {
                loginContainer.style.display = "block";
                autorizationSection.style.display = 'none';
                this.shadowRoot.getElementById("login-form").style.display = 'none'

            }
            function removeBlock(event) {
                loginContainer.style.display = "block";
                // document.cookie = `userSignIn=false`;
                // this.shadowRoot.getElementById("reg-section").remove();
                // this.shadowRoot.getElementById("login-form").remove();
                autorizationSection.style.display = 'none';
                this.shadowRoot.getElementById("login-form").style.display = 'none'

                fetch("http://localhost:3000/profile", {
                    // fetch("https://a-level-json-server.glitch.me/users", {
                    method: "PATCH",
                    headers: {
                        "Content-Type": "application/json"
                    },
                    body: JSON.stringify ({
                        "activeSession": "false"
                    })
                }).then ( response => response.json() )
                    .then ( response => {
                       console.log(response)
                        document.cookie = `activeSession=${response["activeSession"]}`
                    })

            };

        }

    });

// login.innerHTML = '';
// template = pageContent.appendChild (
//     document.createElement ( "sign-in-user" )
// );




// /





// fetch("https://a-level-json-server.glitch.me/students")
//   .then(response => response.json())
//     .then(response => console.log(response))