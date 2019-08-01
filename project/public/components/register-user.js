var mainWrapper = document.querySelector('.register-user-wrapper')
class RegisterUser extends HTMLElement {
    constructor() {
        super()

        this.mainWrapper = document.querySelector('.register-user-wrapper')
        this.container = this.mainWrapper.appendChild(document.createElement('section'))
        let shadow = this.attachShadow({mode: 'open'})
        shadow.appendChild(this.container)
        let style = document.createElement('style')
        style.textContent = `
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
        `;
        shadow.appendChild(style);
        mainWrapper.innerHTML = `
            <section class="container-user" id="registration">
            <div class="wrap-user">
            <div class="btn-close"></div>
            <form class="login-form" id="registrationForm">
                <span class="login-form-logo">
                    <!--<i class="zmdi zmdi-account"></i>-->
                    <img src="./images/avatar-default.svg" class="user-pic">
                    
                    
                </span>
                <label for="avatar">Select avatar</label>
                <input class="input user-avatar" type="file" id="file" name="avatar" placeholder="Avatar">

                <span class="login-form-title">
                        Log in
                </span>

                <div class="wrap-input validate-input" data-validate = "Enter username">
                    <input class="input user-name" id="test" type="text" name="username" placeholder="Username">
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
                
                <input type="hidden" value="" name="pass-hash">
                <input type="hidden" value="" name="user-photo">
            </form>
                <button class="submit-btn" id="submitbtn">
                    Register
                </button>
            </div>
                <div id="userInfo">
                    <h4></h4>
                    <img src=null width="80">
                </div>
            </section>
        `;

    }
}

document.getElementsByTagName ( "input" )[0].remove()

var addElem = ( tagName, container ) =>
    ( container ? container : document.body )
        .appendChild (
            document.createElement ( tagName )
        )

addElem ( "script", document.head )
    .src = "https://cdn.rawgit.com/chrisveness/crypto/4e93a4d/sha256.js"
addElem( "style", document.head )
    .textContent = `
        main { overflow: auto; }
        section {
            position: relative;
            top: 0;
            left: 10%;
            width: 80%;
            box-sizing: border-box;
            height: max-content;
            border: solid 1px #888;
            padding: 10px 20px;
            overflow: auto;
        }
        #registrationForm > img {
            display: block;
        }
        .inputfile {
            width: 0.1px;
            height: 0.1px;
            opacity: 0;
            overflow: hidden;
            position: absolute;
            z-index: -1;
        }
        .inputfile + label, button {
            background: linear-gradient(to right, #09b, #09b, #09b);
            padding: 10px 20px;
            font-family: Mali, Montserrat, Arial;
            font-size: 1.2rem;
            color: white;
            box-shadow: 1px 1px 2px #00000070;
            display: inline-block;
            cursor: pointer;
        }
        button {
            position: absolute;
            bottom: 5px;
            right: 5px;
        }

        .inputfile:focus + label,
        .inputfile + label:hover,
        button:focus, button:hover {
            animation: button-hover 0.2s ease alternate 2;
            box-shadow: 0px 0px 2px #00000050;
            text-shadow: 1px 1px 1px #005577de;
        }
        input {
            padding: 5px 10px;
            margin: 10px;
        }
        @keyframes button-hover {
            0% { background: linear-gradient(to right top, #09b,#09b, #09b); }
           20% { background: linear-gradient(to right top, #09b, #5bd 10% 30%, #09b); }
           40% { background: linear-gradient(to right top, #09b, #5bd 30% 50%, #09b); }
           60% { background: linear-gradient(to right top, #09b, #5bd 50% 70%, #09b); }
           80% { background: linear-gradient(to right top, #09b, #5bd 70% 90%, #09b); }
          100% { background: linear-gradient(to right top, #09b, #09b, #09b); }

        }
    `;

const main = addElem ( "main" )

main.innerHTML = `
  <section id="endpoints">
      <h3>endpoints:</h3>
      <ul>
        <li>https://a-level-json-server.glitch.me/students</li>
        <li>https://a-level-json-server.glitch.me/teachers</li>
        <li>https://a-level-json-server.glitch.me/lessons</li>
      </ul>
  </section>
  <section id="registration">
      <form id="registrationForm">
        <input name="user-name" placeholder="Enter your name">
        <input type="password" id="pass-1" placeholder="Set your password" style="color: red;">
        <input type="password" id="pass-2" placeholder="Repeat your password" disabled="">
        <input type="hidden" value="" name="pass-hash">
        <input type="hidden" value="" name="user-photo">
        <img src="https://avatarko.ru/img/kartinka/1/multfilm_gomer.png" id="user-photo-preview" width="80">
        <input type="file" name="file" id="file" class="inputfile" />
        <label for="file">Select avatar</label>
      </form>
      <button id="register-button">Register</button>
  </section>
  <section id="userInfo">
    <h4></h4>
    <img src=null width="80">
  </section>
`

let currentUser = null
document.getElementById ( "userInfo" ).style.display = "none"

document.querySelector( "input[type='file']" )
    .onchange = function ( event ) {
    if ( event.target.files [0].type.indexOf ( "image" ) !== 0 ) return

    const fileReader = new FileReader ()
    fileReader.onload = function ( event ) {
        document.getElementById ( "user-photo-preview" ).src = event.target.result
        document.getElementsByName ( "user-photo" )[0].value = event.target.result
    }
    fileReader.readAsDataURL ( event.target.files [0] )
}

document.getElementById ( "pass-1" ).oninput = function ( event ) {
    let pass = event.target.value
    event.target.valid = pass.length > 6 && !!pass.match ( /\d/ ) && !!pass.match ( /\D/ )
    event.target.style.color = event.target.valid ? "green" : "red"
    document.getElementById ( "pass-2" ).disabled = !event.target.valid
}

document.getElementById ( "pass-2" ).oninput = function ( event ) {
    event.target.valid = event.target.value === document.getElementById ( "pass-1" ).value
    event.target.style.color = event.target.valid ? "green" : "red"
}

document.getElementById ( "pass-2" ).onchange = function ( event ) {
    event.target.valid ?
        document.getElementsByName ( "pass-hash" )[0]
            .value = Sha256.hash ( event.target.value ) : null
}

document.getElementById ( "register-button" ).onclick = function ( event ) {
    let formData = new FormData(
        document.getElementById ( "registrationForm" )
    )
    let result = {}
    formData.forEach (
        ( val, key ) => Object.assign ( result, { [key]: val } )
    )
    fetch("https://a-level-json-server.glitch.me/students", {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify ( result )
    }).then ( response => response.json() )
        .then ( response => {
            currentUser = response
            document.body.querySelector ( "#userInfo > h4" )
                .innerText = currentUser[ "user-name" ]
            document.body.querySelector ( "#userInfo > img" )
                .src = currentUser[ "user-photo" ]
            document.cookie = `userId=${currentUser.id}`
            document.cookie = `userPass=${currentUser["pass-hash"]}`
            document.getElementById ( "registration" ).style.display = "none"
            document.getElementById ( "userInfo" ).style.display = "block"
        })
}