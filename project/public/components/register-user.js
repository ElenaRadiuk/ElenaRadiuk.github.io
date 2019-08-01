var mainWrapper = document.querySelector('.register-user-wrapper')

var template = document.createElement ( "template" );

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
        </style>
        
     <section class="container-user" id="registration">
            <div class="wrap-user">
            <div class="btn-close"></div>
            <form class="login-form" id="registrationForm">
                <span class="login-form-logo">
                    <!--<i class="zmdi zmdi-account"></i>-->
                    <img src="./images/avatar-default.svg" class="user-pic">
                    
                    
                </span>
                <label for="avatar" class="label-avatar">Select avatar</label>
                <input class="input user-avatar" type="file" id="avatar" name="avatar" placeholder="Avatar">

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
    `

// class RegisterUser extends HTMLElement {
//     constructor() {
//         super();
//         const shadowRoot = this.attachShadow({ mode: 'open' })
//             .appendChild( templateRegister.content.cloneNode(true)  );

        // this.mainWrapper = document.querySelector('.register-user-wrapper')
        // this.container = this.mainWrapper.appendChild(document.createElement('section'))
        // let shadow = this.attachShadow({mode: 'open'})
        // shadow.appendChild(this.container)
        // let style = document.createElement('style')
        // style.textContent = `
        // body {
        //     margin: 0;
        // }
        // .container-user {
        //     width: 100%;
        //     min-height: 100vh;
        //     display: -webkit-box;
        //     display: -webkit-flex;
        //     display: -moz-box;
        //     display: -ms-flexbox;
        //     display: flex;
        //     flex-wrap: wrap;
        //     justify-content: center;
        //     align-items: center;
        //     background-repeat: no-repeat;
        //     background-position: center;
        //     background-size: cover;
        //     position: absolute;
        //     z-index: 100;
        //     top: 0;
        //     left: 0;
        //     background-image: url('./images/bg-user.jpg');
        // }
        // .container-user::before {
        //     content: "";
        //     display: block;
        //     position: absolute;
        //     z-index: -1;
        //     width: 100%;
        //     height: 100%;
        //     top: 0;
        //     left: 0;
        //     background-color: rgba(255,255,255,.9);
        // }
        // .wrap-user {
        //     max-width: 300px;
        //     width: 100%;
        //     border-radius: 10px;
        //     overflow: hidden;
        //     padding: 40px 55px 55px;
        //     background: #314a5b;
        //     position: relative;
        // }
        //
        // .wrap-user .btn-close{
        //     width: 20px;
        //     height: 20px;
        //     position: absolute;
        //     top: 25px;
        //     right: 15px;
        //     cursor: pointer;
        // }
        //
        // .wrap-user .btn-close:before {
        //     position: absolute;
        //     content: '';
        //     width: 2px;
        //     height: 17px;
        //     background: red;
        //     transform: rotate(45deg);
        // }
        // .wrap-user .btn-close:after {
        //     position: absolute;
        //     content: '';
        //     width: 2px;
        //     height: 17px;
        //     background: red;
        //     transform: rotate(-45deg);
        // }
        //
        // .login-form-logo {
        //     font-size: 60px;
        //     color: #333;
        //     display: -webkit-box;
        //     display: -webkit-flex;
        //     display: -moz-box;
        //     display: -ms-flexbox;
        //     display: flex;
        //     align-items: center;
        //     width: 120px;
        //     height: 120px;
        //     border-radius: 50%;
        //     background-color: #fff;
        //     margin: 0 auto;
        //     overflow: hidden;
        // }
        //  .login-form-logo img{
        //     max-width: 120px;
        //     height: auto;
        //     max-height: 120px;
        // }
        // .label-avatar {
        //     display: block;
        //     text-align: center;
        //     color: white;
        //     margin-top: 5px;
        // }
        // .input.user-avatar {
        //     padding: 0;
        //     width: 5px;
        //     position: relative;
        //     height: 5px;
        //     top: -12px;
        //     left: 50%;
        //     z-index: -1;
        // }
        // .login-form-title {
        //     font-family: Poppins-Medium;
        //     font-size: 30px;
        //     color: #fff;
        //     line-height: 1.2;
        //     text-align: center;
        //     text-transform: uppercase;
        //     display: block;
        //     margin: 25px 30px;
        // }
        // .wrap-input {
        //     width: 100%;
        //     position: relative;
        //     border-bottom: 2px solid rgba(255,255,255,0.24);
        //     margin-bottom: 30px;
        // }
        //
        //  input.wrap-input {
        //     font-size: 16px;
        //     color: #fff;
        //     line-height: 1.2;
        //
        //     padding: 5px;
        //     max-width: 100%;
        //     background: transparent;
        //     outline: none;
        //     border: none;
        //     border-bottom: 2px solid white;
        //     color: white;
        //     font-size: 16px;
        //     font-family: 'Open Sans', sans-serif;
        // }
        //  input.wrap-input::placeholder {
        //     color: white;
        //     opacity: 0.5;
        // }
        //
        // .submit-btn {
        //     display: inline-block;
        //     background-color: #fa5c65;
        //     padding: 15px 30px;
        //     font-size: 14px;
        //     font-family: 'Open Sans', sans-serif;
        //     font-weight: 700;
        //     color: white;
        //     text-transform: uppercase;
        //     border-radius: 8px;
        //     position: relative;
        //     transition: all 0.5s;
        //     overflow: hidden;
        //     border: none;
        //     margin-right: 15px;
        // }
        // `;
        // shadow.appendChild(style);
        // mainWrapper.innerHTML = `
        //     <section class="container-user" id="registration">
        //     <div class="wrap-user">
        //     <div class="btn-close"></div>
        //     <form class="login-form" id="registrationForm">
        //         <span class="login-form-logo">
        //             <!--<i class="zmdi zmdi-account"></i>-->
        //             <img src="./images/avatar-default.svg" class="user-pic">
        //
        //
        //         </span>
        //         <label for="avatar label-avatar">Select avatar</label>
        //         <input class="input user-avatar" type="file" id="avatar" name="avatar" placeholder="Avatar">
        //
        //         <span class="login-form-title">
        //                 Log in
        //         </span>
        //
        //         <div class="wrap-input validate-input" data-validate = "Enter username">
        //             <input class="input user-name" id="test" type="text" name="username" placeholder="Username">
        //             <span class="focus-input" data-placeholder="&#xf207;"></span>
        //         </div>
        //
        //          <div class="wrap-input validate-input" data-validate = "Enter e-mail">
        //             <input class="input user-email" type="text" name="email" placeholder="e-mail">
        //             <span class="focus-input" data-placeholder="&#xf207;"></span>
        //         </div>
        //
        //         <div class="wrap-input validate-input" data-validate="Enter password">
        //             <input class="input user-pass" type="password" name="pass" placeholder="Password">
        //             <span class="focus-input" data-placeholder="&#xf191;"></span>
        //         </div>
        //
        //         <input type="hidden" value="" name="pass-hash">
        //         <input type="hidden" value="" name="user-photo">
        //     </form>
        //         <button class="submit-btn" id="submitbtn">
        //             Register
        //         </button>
        //     </div>
        //         <div id="userInfo">
        //             <h4></h4>
        //             <img src=null width="80">
        //         </div>
        //     </section>
        // `;
//
//         var inputImg = this.shadowRoot.querySelector('user-avatar')
//         // console.log(inputImg)
//     }
// }

// customElements.define ( 'register-user', RegisterUser );

// const elem = mainWrapper.appendChild (
//     document.createElement ( 'register-user' )
// );

customElements.define('register-user',
    class extends HTMLElement {
        constructor() {
            super();
            var shadowRoot = this.attachShadow({mode: 'open'})
                .appendChild(template.content.cloneNode(true));
        }
        connectedCallback() {
            let currentUser = null
            this.shadowRoot.getElementById ( "userInfo" ).style.display = "none"

            var submitbtn = this.shadowRoot.querySelector('.submit-btn')
            console.log(submitbtn)
        }
    });

