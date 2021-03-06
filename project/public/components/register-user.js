var autorizationSection = document.getElementById('autorization-section');
autorizationSection.style.display = "none";
var imgAutoriz = document.getElementById('login-user-photo');
var nameAutoriz = document.getElementById('login-user-name');
var logOut = document.getElementById("log-out");

var templateReg = document.createElement ("template" );


templateReg.innerHTML = `
        <style>
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
        </style>
        
     <section class="container-user" id="registration">
            <div class="wrap-user">
            <div class="btn-close"></div>
            <form class="login-form" id="registrationForm">
                <span class="login-form-logo">
                    <img src="./images/ghost-1.png" class="user-pic">
                </span>
                <label for="avatar" class="label-avatar">Select avatar</label>
                <input class="input user-avatar" type="file" id="avatar" placeholder="Avatar">

                <span class="login-form-title">
                        Log in
                </span>

                <div class="wrap-input validate-input" data-validate = "Enter username">
                    <input class="input user-name" id="user-name" type="text" name="user-name" placeholder="Username">
                    <span class="focus-input" data-placeholder="&#xf207;"></span>
                </div>
                
                 <div class="wrap-input validate-input" data-validate = "Enter e-mail">
                    <input class="input user-email" type="text" id="email" name="email" placeholder="e-mail">
                    <span class="focus-input" data-placeholder="&#xf207;"></span>
                </div>

                <div class="wrap-input validate-input" data-validate="Enter password">
                    <input class="input user-pass" id="pass" type="password" placeholder="Password">
                    <span class="focus-input" data-placeholder="&#xf191;"></span>
                </div>
                
                <input type="hidden" value="" name="pass-hash" id="pass-hash">
                <input type="hidden" value="" name="user-photo" id="user-photo-bs">
            </form>
            <button class="submit-btn" id="submit-btn">
                Register
            </button>
            
            <div id="userInfo">
                <h4></h4>
                <img src="#">
            </div>
            <div id="warnInfo" style="display: none">
                
            </div>
            </div>          
      </section>
    `;


customElements.define('register-user',
    class extends HTMLElement {
        constructor() {
            super();
            const shadowRoot = this.attachShadow({mode: 'open'})
                .appendChild(templateReg.content.cloneNode(true));
            this.script = document.head.appendChild(document.createElement("script"));
            this.script.src = "https://cdn.rawgit.com/chrisveness/crypto/4e93a4d/sha256.js";

            this.registrationSection = this.shadowRoot.getElementById ("registration");
            var currentUser = null;

            var inputImg = this.shadowRoot.querySelector("#avatar");
            var imgForm = this.shadowRoot.querySelector(".user-pic");
            var imgFormBs = this.shadowRoot.getElementById("user-photo-bs");
            var regForm = this.shadowRoot.getElementById("registrationForm");
            var userInfoName = this.shadowRoot.querySelector ("#userInfo > h4");
            var userInfoImg = this.shadowRoot.querySelector ("#userInfo > img");
            var submitBtn = this.shadowRoot.getElementById("submit-btn");
            var userBlock = this.shadowRoot.getElementById("userInfo");
            var inputPass = this.shadowRoot.getElementById ("pass");
            var passHash = this.shadowRoot.getElementById ("pass-hash");
            var inputEmail = this.shadowRoot.getElementById ("email");
            var inputName = this.shadowRoot.getElementById ("user-name");
            var btnClose = this.shadowRoot.querySelector(".btn-close");
            var warnInfo = this.shadowRoot.getElementById("warnInfo");
            this.shadowRoot.querySelector(".btn-close").addEventListener('click', this.removeBlock.bind(this));

            // this.checkUser.bind(this)();
            checkUser();



            userBlock.style.display = "none";
            inputImg.onchange = function (e) {
                if (e.target.files[0].type.indexOf("image/") !== 0
                    || e.target.files[0].size > 300000) return
                const reader = new FileReader();
                console.log(imgForm.src)

                reader.onload = function (e){
                    console.log(imgForm.src)

                    imgForm.src = e.target.result;
                    imgFormBs.value = event.target.result;
                    console.log(reader.result)
                };
                reader.readAsDataURL(e.target.files[0]);
            };

            inputPass.oninput = function(event) {
                let pass = event.target.value;
                event.target.valid = pass.length > 5;
                event.target.style.color = event.target.valid ? "green" : "red"
            };

            inputPass.onchange = function(event) {
                event.target.valid ?
                    passHash.value = Sha256.hash(event.target.value) : null
            };



            this.shadowRoot.getElementById("submit-btn").onclick = function(event) {
                let formData = new FormData(regForm);
                let result = {};
                formData.forEach (
                    (val, key) => Object.assign (result, {[key]: val})
                )
                Object.assign(result, {"activeSession": "true"})
                fetch("http://localhost:3000/profile", {
                // fetch("https://a-level-json-server.glitch.me/users", {
                    method: "POST",
                    headers: {
                        "Content-Type": "application/json"
                    },
                    body: JSON.stringify ( result )
                }).then ( response => response.json() )
                    .then ( response => {
                        currentUser = response
                        userInfoName.innerText = currentUser["user-name"]
                        userInfoImg.src = currentUser["user-photo"]
                        document.cookie = `userId=${currentUser.id}`
                        document.cookie = `userPass=${currentUser["pass-hash"]}`
                        document.cookie = `userEmail=${currentUser["email"]}`;
                        console.log(`${response["activeSession"]}`);
                        console.log(`${currentUser["activeSession"]}`);
                        document.cookie = `activeSession=${currentUser["activeSession"]}`;
                        regForm.style.display = "none"
                        submitBtn.style.display = "none"
                        userBlock.style.display = "block"

                        autorizationSection.style.display = "block";

                        imgAutoriz.src = response["user-photo"];
                        nameAutoriz.innerText = response["user-name"];
                        logOut.src = "./images/directions_run-24px.svg";
                        document.querySelector("#sign-in-user > a").style.display = "none;"
                    })
            }

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
                            inputEmail.placeholder = response["email"]
                            inputName.placeholder = response["user-name"]
                            imgForm.src = response["user-photo"]
                            document.cookie = `activeSession=${response["activeSession"]}`
                        })
                    : console.warn("Not registered")
                }

            }

        }

        removeBlock(event) {
            this.registrationSection.remove()
            console.log(this.script)
            document.head.removeChild(this.script)
        };

    });

