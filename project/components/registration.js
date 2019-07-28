function addElem(tagName) {
    return  document.body.appendChild(document.createElement(tagName))
}

let cookie = Object.assign({},...document.cookie.split("; ")
    .map(item => Object.assign(
        {},{[item.split("=")[0]]:item.split("=")[1]})
    )
)

cookie.userId
    ? fetch(`https://a-level-json-server.glitch.me/students/${cookie.userId}`)
        .then(response => response.json())
        .then(response => {
            addElem("p").textContent = response.name
            addElem("img").src = response["user-photo"]
        })
    : console.warn("Not registered");

function RegistUser () {
    const login = document.body.appendChild(document.createElement("input"))
    const pict = document.body.appendChild(document.createElement("img"))
    const avatar = document.body.appendChild(document.createElement("input"))
    avatar.type = "file"
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
        fetch("https://a-level-json-server.glitch.me/students", {
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


// fetch("https://a-level-json-server.glitch.me/students")
//   .then(response => response.json())
//     .then(response => console.log(response))