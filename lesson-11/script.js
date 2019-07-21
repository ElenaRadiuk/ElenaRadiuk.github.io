function getData() {
    var request = new XMLHttpRequest();
    request.open("GET", "data.json");
    request.send();

    request.onreadystatechange = function () {

        if(this.readyState===4){
            if(this.status ===200) {
                var elements = JSON.parse(this.responseText),
                    container = document.querySelector('.parse-json');

                elements.forEach(function (element) {
                    for (var elem in element) {
                        elem === "title" ? container.appendChild(document.createElement('span')).innerHTML = element[elem] : null
                        elem === "ref" ? container.appendChild(document.createElement('img')).src = element[elem] : null
                    }
                })
            }
        }
    }
};