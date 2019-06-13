function ajax(url, settings, callback) {
    if(settings) {
        var xhr = new XMLHttpRequest();
        xhr.onload = function() {
            if(xhr.responseText) {
                var response = JSON.parse(xhr.response);
                callback(response);
            }
        };
        xhr.open(settings.method || "GET", url, true);
        if(settings.method == "POST") {
            xhr.setRequestHeader("Content-Type", "application/json");
        }
        console.log("Sending " + settings.data);
        xhr.send(settings.data || null);
    }
}

function resetInput() {
    var errors = document.getElementsByClassName("field-input");
    Array.prototype.forEach.call(errors, function(el) {
        el.value = '';
    });
}

function getCookie(nameOfCookie) {
    var value = "; " + document.cookie;
    var parts = value.split("; " + nameOfCookie + "=");
    if (parts.length == 2) return parts.pop().split(";").shift();

    return "";
}

function updateLogin() {
    var cookie = getCookie("displayInfo");    
    if(cookie) {
        var displayText = decodeURIComponent(cookie).replace("+", " ");
        loginInfo.appendChild(document.createTextNode("Здравейте, " + displayText));
    }
}