var pageContent = document.querySelector('.page-content');
var template = pageContent.appendChild (
    document.createElement ( "template" )
);

template.innerHTML = `
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
        justify-content: center;
        align-items: center;
        width: 120px;
        height: 120px;
        border-radius: 50%;
        background-color: #fff;
        margin: 0 auto;
        overflow: hidden;
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
    .login-form-btn {
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
    } 
    </style>
    
    <section class="container-user" style="background-image: url('./images/bg-user.jpg');">
        <div class="wrap-user">
            <div class="btn-close"></div>
            <form class="login-form validate-form">
                    <span class="login-form-logo">
                        <!--<i class="zmdi zmdi-account"></i>-->
                        <img src="images/avatar-default.svg" class="user-pic">
                        <input class="input user-avatar" type="text" name="avatar" placeholder="Avatar">
                    </span>

                <span class="login-form-title p-b-34 p-t-27">
                        Log in
                    </span>

                <div class="wrap-input validate-input" data-validate = "Enter username">
                    <input class="input user-name" type="text" name="username" placeholder="Username">
                    <span class="focus-input" data-placeholder="&#xf207;"></span>
                </div>
                
                 <div class="wrap-input validate-input" data-validate = "Enter e-mail">
                    <input class="input user-email" type="text" name="email" placeholder="e-mail">
                    <span class="focus-input" data-placeholder="&#xf207;"></span>
                </div>

                <div class="wrap-input validate-input" data-validate="Enter password">
                    <input class="input user-pass" type="password" name="pass" placeholder="Password">
                    <span class="focus-input" data-placeholder="&#xf191;"></span>
                </div>

                <div class="container-login-form-btn">
                    <button class="login-form-btn">
                        Login
                    </button>
                </div>
            </form>
        </div>
    </section>
`;

customElements.define('user-sign-in',
    class extends HTMLElement {
        constructor() {
            super();
            const shadowRoot = this.attachShadow({ mode: 'open' })
                .appendChild( template.content.cloneNode(true)  );
            function addElem(tagName) {
                return  document.body.appendChild(document.createElement(tagName))
            }

            // let cookie = Object.assign({},...document.cookie.split("; ")
            //     .map(item => Object.assign(
            //         {},{[item.split("=")[0]]:item.split("=")[1]})
            //     )
            // )
            //
            // cookie.userId
            //     ? fetch(`https://a-level-json-server.glitch.me/students/${cookie.userId}`)
            //         .then(response => response.json())
            //         .then(response => {
            //             addElem("p").textContent = response.name
            //             addElem("img").src = response["user-photo"]
            //         })
            //     : console.warn("Not registered");

            function RegistUser () {
                // const login = document.body.appendChild(document.createElement("input"))
                const login = document.querySelector('.user-name');
                const pict = document.querySelector('.user-pic');
                // const pict = document.body.appendChild(document.createElement("img"))
                // const avatar = document.body.appendChild(document.createElement("input"))
                const avatar = document.querySelector('.user-avatar');
                avatar.type = "file";
                avatar.onchange = event => {
                    if (event.target.files[0].type.indexOf("image/") !== 0
                        || event.target.files[0].size > 300000) return
                    const reader = new FileReader();
                    reader.onload = function (event){
                        pict.src = event.target.result
                    }
                    reader.readAsDataURL(event.target.files[0])
                }

                const submit = document.body.appendChild(document.createElement("button"))
                submit.onclick = event => {
                    // fetch("https://a-level-json-server.glitch.me/students", {
                    fetch("https://a-level-json-server.glitch.me/users", {
                        method: "POST",
                        headers: {
                            "Content-Type": "application/json"
                        },
                        body: JSON.stringify({
                            name: login.value,
                            "user-photo": pict.src
                        })
                    }).then(response => response.json())
                        .then(response => document.cookie = `userId=${response.id}`)
                }
            }
        }
    });

pageContent.innerHTML = '';
template = pageContent.appendChild (
    document.createElement ( "user-sign-in" )
);




// /





// fetch("https://a-level-json-server.glitch.me/students")
//   .then(response => response.json())
//     .then(response => console.log(response))