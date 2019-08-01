// var pageContent = document.querySelector('.page-content');
// var template = pageContent.appendChild (
//     document.createElement ( "template" )
// );
//
// template.innerHTML = `
//     <style>
//     body {
//         margin: 0;
//     }
//     .container-user {
//         width: 100%;
//         min-height: 100vh;
//         display: -webkit-box;
//         display: -webkit-flex;
//         display: -moz-box;
//         display: -ms-flexbox;
//         display: flex;
//         flex-wrap: wrap;
//         justify-content: center;
//         align-items: center;
//         background-repeat: no-repeat;
//         background-position: center;
//         background-size: cover;
//         position: absolute;
//         z-index: 100;
//         top: 0;
//         left: 0;
//     }
//     .container-user::before {
//         content: "";
//         display: block;
//         position: absolute;
//         z-index: -1;
//         width: 100%;
//         height: 100%;
//         top: 0;
//         left: 0;
//         background-color: rgba(255,255,255,.9);
//     }
//     .wrap-user {
//         max-width: 300px;
//         width: 100%;
//         border-radius: 10px;
//         overflow: hidden;
//         padding: 40px 55px 55px;
//         background: #314a5b;
//         position: relative;
//     }
//
//     .wrap-user .btn-close{
//         width: 20px;
//         height: 20px;
//         position: absolute;
//         top: 25px;
//         right: 15px;
//         cursor: pointer;
//     }
//
//     .wrap-user .btn-close:before {
//         position: absolute;
//         content: '';
//         width: 2px;
//         height: 17px;
//         background: red;
//         transform: rotate(45deg);
//     }
//     .wrap-user .btn-close:after {
//         position: absolute;
//         content: '';
//         width: 2px;
//         height: 17px;
//         background: red;
//         transform: rotate(-45deg);
//     }
//
//     .login-form-logo {
//         font-size: 60px;
//         color: #333;
//         display: -webkit-box;
//         display: -webkit-flex;
//         display: -moz-box;
//         display: -ms-flexbox;
//         display: flex;
//         align-items: center;
//         width: 120px;
//         height: 120px;
//         border-radius: 50%;
//         background-color: #fff;
//         margin: 0 auto;
//         overflow: hidden;
//     }
//      .login-form-logo img{
//         max-width: 120px;
//         height: auto;
//         max-height: 120px;
//     }
//     .login-form-title {
//         font-family: Poppins-Medium;
//         font-size: 30px;
//         color: #fff;
//         line-height: 1.2;
//         text-align: center;
//         text-transform: uppercase;
//         display: block;
//         margin: 25px 30px;
//     }
//     .wrap-input {
//         width: 100%;
//         position: relative;
//         border-bottom: 2px solid rgba(255,255,255,0.24);
//         margin-bottom: 30px;
//     }
//
//     .input {
//         font-size: 16px;
//         color: #fff;
//         line-height: 1.2;
//
//         display: block;
//         width: 100%;
//         height: 45px;
//         background: transparent;
//         padding: 0 5px 0 38px;
//         border: none;
//         outline: none;
//         font-family: 'Open Sans', sans-serif;
//     }
//     .input::placeholder {
//         color: white;
//         opacity: 0.5;
//     }
//
//     .focus-input {
//         position: absolute;
//         display: block;
//         width: 100%;
//         height: 100%;
//         top: 0;
//         left: 0;
//         pointer-events: none;
//         color: white;
//     }
//
//     .focus-input::before {
//         content: "";
//         display: block;
//         position: absolute;
//         bottom: -2px;
//         left: 0;
//         width: 0;
//         height: 2px;
//
//         -webkit-transition: all 0.4s;
//         -o-transition: all 0.4s;
//         -moz-transition: all 0.4s;
//         transition: all 0.4s;
//
//         background: #fff;
//     }
//
//     .focus-input::after {
//         font-family: Material-Design-Iconic-Font;
//         font-size: 22px;
//         color: #fff;
//
//         content: attr(data-placeholder);
//         display: block;
//         width: 100%;
//         position: absolute;
//         top: 6px;
//         left: 0px;
//         padding-left: 5px;
//
//         -webkit-transition: all 0.4s;
//         -o-transition: all 0.4s;
//         -moz-transition: all 0.4s;
//         transition: all 0.4s;
//     }
//
//     .input:focus {
//         padding-left: 5px;
//     }
//
//     .input:focus + .focus-input::after {
//         top: -22px;
//         font-size: 18px;
//     }
//
//     .input:focus + .focus-input::before {
//         width: 100%;
//     }
//     .submit-btn {
//         display: inline-block;
//         background-color: #fa5c65;
//         padding: 15px 30px;
//         font-size: 14px;
//         font-family: 'Open Sans', sans-serif;
//         font-weight: 700;
//         color: white;
//         text-transform: uppercase;
//         border-radius: 8px;
//         position: relative;
//         transition: all 0.5s;
//         overflow: hidden;
//         border: none;
//     }
//     </style>
//
//     <section class="container-user" style="background-image: url('./images/bg-user.jpg');">
//         <div class="wrap-user">
//             <div class="btn-close"></div>
//             <form class="login-form validate-form">
//                     <span class="login-form-logo">
//                         <!--<i class="zmdi zmdi-account"></i>-->
//                         <img src="images/avatar-default.svg" class="user-pic">
//
//                     </span>
//                     <input class="input user-avatar" type="file" name="avatar" placeholder="Avatar">
//
//                 <span class="login-form-title p-b-34 p-t-27">
//                         Log in
//                     </span>
//
//                 <div class="wrap-input validate-input" data-validate = "Enter username">
//                     <input class="input user-name" id="test" type="text" name="username" placeholder="Username">
//                     <span class="focus-input" data-placeholder="&#xf207;"></span>
//                 </div>
//
//                  <div class="wrap-input validate-input" data-validate = "Enter e-mail">
//                     <input class="input user-email" type="text" name="email" placeholder="e-mail">
//                     <span class="focus-input" data-placeholder="&#xf207;"></span>
//                 </div>
//
//                 <div class="wrap-input validate-input" data-validate="Enter password">
//                     <input class="input user-pass" type="password" name="pass" placeholder="Password">
//                     <span class="focus-input" data-placeholder="&#xf191;"></span>
//                 </div>
//
//                 <div class="container-login-form-btn">
//                     <button class="submit-btn">
//                         Register
//                     </button>
//                 </div>
//             </form>
//         </div>
//     </section>
// `;
//
//
//
//     class User extends HTMLElement  {
//         constructor() {
//             super();
//             const shadowRoot = this.attachShadow({ mode: 'open' })
//                 .appendChild( template.content.cloneNode(true)  );
//         }
//         connectedCallback() {
//             console.log(document.querySelector('.user-avatar'));
//         }
//     }
//
//
// customElements.define('user-sign-in', User);
// pageContent.innerHTML = '';
// template = pageContent.appendChild (
//     document.createElement ( "user-sign-in" )
// );

// User.prototype.RegistUser = function () {
//     console.log('test')
//     // const login = document.body.appendChild(document.createElement("input"))
//     const login = document.querySelector('.user-name');
//     const pict = document.querySelector('.user-pic');
//     // const pict = document.body.appendChild(document.createElement("img"))
//     // const avatar = document.body.appendChild(document.createElement("input"))
//     const avatar = document.querySelector('.user-avatar');
//     // avatar.type = "file";
//     avatar.onchange = event => {
//         // if (event.target.files[0].type.indexOf("image/") !== 0
//         //     || event.target.files[0].size > 3000000) return
//         const reader = new FileReader();
//         reader.onload = function (event){
//             pict.src = event.target.result
//         }
//         reader.readAsDataURL(event.target.files[0])
//     };
//
//
//     // const submit = document.body.appendChild(document.createElement("button"))
//     const submit = document.querySelector('.submit-btn');
//     submit.onclick = event => {
//         // fetch("https://a-level-json-server.glitch.me/students", {
//         fetch("http://localhost:3000/profile", {
//             method: "POST",
//             headers: {
//                 "Content-Type": "application/json"
//             },
//             body: JSON.stringify({
//                 name: login.value,
//                 "user-photo": pict.src
//             })
//         }).then(response => response.json())
//             .then(response => document.cookie = `userId=${response.id}`)
//     }
// }


// class User2 extends HTMLUListElement {
//     constructor() {
//         super();
//         console.log('1')
//     }
//
// }
// class UserRegister2 extends User2 {
//     connectedCallback() {
//         console.log(document.querySelector('.user-avatar'));
//     }
// }
// var reg = new UserRegister2();


// customElements.whenDefined('user-sign-in').then(() => {
//     console.log('user-sign-in defined');
//     console.log(document.querySelector('.user-avatar'));
// });

// var reg = new UserRegister();
// class UserRegister extends User {
//     constructor() {
//         super();
//         console.log('test');
//     //
//     RegistUser();
//     }
//     addElem(tagName) {
//         return  document.body.appendChild(document.createElement(tagName))
//     }
//
//
//     // let cookie = Object.assign({},...document.cookie.split("; ")
//     //     .map(item => Object.assign(
//     //         {},{[item.split("=")[0]]:item.split("=")[1]})
//     //     )
//     // )
//     //
//     // cookie.userId
//     //     ? fetch(`https://a-level-json-server.glitch.me/students/${cookie.userId}`)
//     //         .then(response => response.json())
//     //         .then(response => {
//     //             addElem("p").textContent = response.name
//     //             addElem("img").src = response["user-photo"]
//     //         })
//     //     : console.warn("Not registered");
//
//     RegistUser () {
//         console.log('test')
//         // const login = document.body.appendChild(document.createElement("input"))
//         const login = document.querySelector('.user-name');
//         const pict = document.querySelector('.user-pic');
//         // const pict = document.body.appendChild(document.createElement("img"))
//         // const avatar = document.body.appendChild(document.createElement("input"))
//         const avatar = document.querySelector('.user-avatar');
//         // avatar.type = "file";
//         avatar.onchange = event => {
//             // if (event.target.files[0].type.indexOf("image/") !== 0
//             //     || event.target.files[0].size > 3000000) return
//             const reader = new FileReader();
//             reader.onload = function (event){
//                 pict.src = event.target.result
//             }
//             reader.readAsDataURL(event.target.files[0])
//         };
//
//
//         // const submit = document.body.appendChild(document.createElement("button"))
//         const submit = document.querySelector('.submit-btn');
//         submit.onclick = event => {
//             // fetch("https://a-level-json-server.glitch.me/students", {
//             fetch("http://localhost:3000/profile", {
//                 method: "POST",
//                 headers: {
//                     "Content-Type": "application/json"
//                 },
//                 body: JSON.stringify({
//                     name: login.value,
//                     "user-photo": pict.src
//                 })
//             }).then(response => response.json())
//                 .then(response => document.cookie = `userId=${response.id}`)
//         }
//     }
// }
//
// var reg = new UserRegister();
// reg();

// /





// fetch("https://a-level-json-server.glitch.me/students")
//   .then(response => response.json())
//     .then(response => console.log(response))

var mainWrapper = document.querySelector('.register-user-wrapper')
class SignInUser extends HTMLElement {
    constructor() {
        super()

        this.mainWrapper = document.querySelector('.register-user-wrapper')
        this.container = this.mainWrapper.appendChild(document.createElement('section'))
        let shadow = this.attachShadow ( { mode: 'open' } )
        shadow.appendChild ( this.container )
        let style = document.createElement ( 'style' )

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
        `
        shadow.appendChild ( style )
        this.visible = true
        this.wrapUser = this.createElem( 'div', this.container )
        this.btnClose = this.createElem( 'div', this.wrapUser )
        this.form = this.createElem( 'form', this.wrapUser )
        this.imgContainer = this.createElem( 'span', this.form )
        var imgForm = this.createElem( 'img', this.imgContainer )
        imgForm.src = "images/avatar-default.svg"

        var inputImg = this.createElem( 'input', this.form )
        inputImg.type = "file"
        inputImg.classList.add('user-avatar')


        this.formTitle = this.createElem( 'span', this.form )
        this.formTitle.classList.add('login-form-title')
        this.formTitle.innerHTML = 'Register'

        this.inputName = this.createElem( 'input', this.form )
        this.inputName.type = "text"
        this.inputName.name = 'name'
        this.inputName.placeholder = 'name'
        this.inputName.classList.add('name')
        this.inputName.classList.add('wrap-input')

        this.inputEmail = this.createElem( 'input', this.form )
        this.inputEmail.type = "text"
        this.inputEmail.name = 'email'
        this.inputEmail.placeholder = 'e-mail'
        this.inputEmail.classList.add('email')
        this.inputEmail.classList.add('wrap-input')

        var script = document.head.appendChild(document.createElement("script"));
        script.src = "https://cdn.rawgit.com/chrisveness/crypto/4e93a4d/sha256.js"
        this.inputPass = this.createElem( 'input', this.form )
        this.inputPass.type = "password"
        this.inputPass.placeholder = 'password'
        this.inputPass.classList.add('pass')
        this.inputPass.classList.add('wrap-input')

        console.log('test')

        // this.containerformButton = this.createElem( 'div', this.form )
        this.formButton = this.createElem( 'button', this.form )
        this.formButton.classList.add('submit-btn')
        this.formButton.id = 'submitbtn'
        this.formButton.innerText = 'Register'


        this.formButtonDelete = this.createElem( 'button', this.form )
        this.formButtonDelete.classList.add('submit-btn')
        this.formButtonDelete.id = 'submitbtn'
        this.formButtonDelete.innerText = 'Delete'


        this.hash = ''
        this.inputPass.addEventListener('change', this._hashPass.bind(this));

        // this.formButton.addEventListener('click', this.sendData.bind(this));
        this.formButton.onclick = event => {
            // event.preventDefault()
            // fetch("https://a-level-json-server.glitch.me/students", {
            fetch("http://localhost:3000/users", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify({
                    name: this.inputName.value,
                    // email: this.inputEmail.value,
                    // pass: this.hash,
                    // "user-photo": imgForm.src
                })
            }).then(response => response.json())
                .then(response => {document.cookie = `userId=${response.id}`
                    console.log ( 'response: ', response )})
        }

        // this.inputPass.onchange = function(event){
        //     this.hash = Sha256.hash (event.target.value);
        //     console.log(this.hash)
        // }

        // btnClose.onclick = function (event) {
        //     console.dir(container)
        //     document.body.removeChild(container)
        // }


        // var inpName = this.form.appendChild(document.createElement("input"))
        // var inpAva = this.form.appendChild(document.createElement("input"))
        // inpAva.classList.add('user-avatar')
        // var inpPass = this.form.appendChild(document.createElement("input"));
        // var button = this.form.appendChild(document.createElement("button"));
        // button.classList.add('submit-btn')
        // button.textContent = "Submit";
        // var img = this.form.appendChild(document.createElement("img"));
        //
        // inpAva.type = "file";
        // inpAva.onchange = function(event) {
        //     var reader = new FileReader();
        //     reader.onload = function(event){
        //         img.src = event.target.result;
        //     }
        //     reader.readAsDataURL(event.target.files[0])
        // }



        // this.inputImg.addEventListener('change', this.loadPic.bind(this));

        this.btnClose.addEventListener('click', this._onClickHide.bind(this));
        this.formButtonDelete.addEventListener('click', this._onClickRemove.bind(this));


        inputImg.onchange = function (e) {
            var reader = new FileReader();
            console.log(imgForm.src)

            reader.onload = function (e){
                console.log(imgForm.src)

                imgForm.src = e.target.result
                console.log(reader.result)

            }

            console.log(imgForm.src)
            // if(target.files[0]){
            reader.readAsDataURL(e.target.files[0]);
            // }
            // console.log(reader.readAsDataURL(target.files[0]))
            // reader.readAsDataURL(target.files[0])

        }


    }
    _onClick(event) {
        // this.checked = !this._checked;
        console.log('test bind')
        console.log(event)
    }

    _onClickHide(event) {
        console.log(this.container)
        // this.container.remove()
        document.querySelector('.register-user-wrapper').style.display = 'none'
        // document.body.appendChild(this.container)

        // document.getElementById("register-user").parentElement.style.display = `none`
        this.visible = false;


        // var visible = true;
        //
        //     if(visible) {
        //         this.container.style.display = 'none';
        //         visible = false;
        //     } else {
        //         this.container.style.display = 'block';
        //         visible = true;
        //     }




    }

    _onClickRemove(event) {
        console.log(this.container)
        this.container.remove()
        document.getElementById("register-user").parentElement.style.display = `none`
        this.visible = false;
    }

    _hashPass(event) {
            this.hash = Sha256.hash (event.target.value);
            console.log(this.hash)
    }


    disconnectedCallback() {
        console.log('Custom square element removed from page.');
    }
    connectedCallback() {
            console.log(document.querySelector('.user-avatar'));
        this.container.classList.add('container-user')
        this.wrapUser.classList.add('wrap-user')
        this.btnClose.classList.add('btn-close')
        this.form.classList.add('login-form')
        this.imgContainer.classList.add('login-form-logo')
        this.imgForm.classList.add('user-pic')

        // this.inputImg.onchange = () => this.changePicture()
        // this.inputImg.addEventListener( "change", this.loadPic );


    }
        loadPic = e => {

        var reader = new FileReader();
        console.log(this.imgForm.src)

        reader.onload = function (e){
            console.log(this.imgForm.src)

            this.imgForm.src = e.target.result
            console.log(reader.result)

        }

        console.log(this.imgForm.src)
        // if(target.files[0]){
            reader.readAsDataURL(e.target.files[0]);
        // }
        // console.log(reader.readAsDataURL(target.files[0]))
        // reader.readAsDataURL(target.files[0])


    }

    sendData(imgForm, event) {
            // fetch("https://a-level-json-server.glitch.me/students", {
            fetch("http://localhost:3000/profile", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify({
                    name: this.inputName.value,
                    email: this.inputEmail.value,
                    pass: this.hash,
                    "user-photo": imgForm.src
                })
            }).then(response => response.json())
                .then(response => document.cookie = `userId=${response.id}`)
    }

    createElem ( tagName, container ) {
        return  ( !container ? document.body : container )
            .appendChild (
                document.createElement ( tagName )
            )
    }

    changePicture() {
        var reader = new FileReader();
        console.log(this.imgForm.src)

        reader.onload = function (event){
            this.imgForm.src = event.currentTarget.result
        }
        console.dir(event.target)
        console.log(reader.readAsDataURL(event.currentTarget.files[0]))
        reader.readAsDataURL(event.currentTarget.files[0])
    }


        RegistUser () {
        console.log('test')
        // const login = document.body.appendChild(document.createElement("input"))
        // const login = document.querySelector('.user-name');
        // const pict = document.querySelector('.user-pic');
        // const pict = document.body.appendChild(document.createElement("img"))
        // const avatar = document.body.appendChild(document.createElement("input"))
        // const avatar = document.querySelector('.user-avatar');
        // avatar.type = "file";
            this.inputImg.onchange = event => {
            // if (event.target.files[0].type.indexOf("image/") !== 0
            //     || event.target.files[0].size > 3000000) return
            const reader = new FileReader();
            reader.onload = function (event){
                this.imgForm.src = event.target.result
            }
            reader.readAsDataURL(event.target.files[0])
        };


        // const submit = document.body.appendChild(document.createElement("button"))
        // const submit = document.querySelector('.submit-btn');
        // submit.onclick = event => {
        //     // fetch("https://a-level-json-server.glitch.me/students", {
        //     fetch("http://localhost:3000/profile", {
        //         method: "POST",
        //         headers: {
        //             "Content-Type": "application/json"
        //         },
        //         body: JSON.stringify({
        //             name: login.value,
        //             "user-photo": pict.src
        //         })
        //     }).then(response => response.json())
        //         .then(response => document.cookie = `userId=${response.id}`)
        // }
    }
}
customElements.define ( 'user-sign-in', SignInUser );

const elem = mainWrapper.appendChild (
    document.createElement ( 'user-sign-in' )
);

customElements.whenDefined('user-sign-in').then(() => {
    console.log('user-sign-in defined');
    console.log('');
});

