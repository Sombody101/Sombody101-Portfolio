// How to lock onto events 
//onresize = (event) => resizeDiv;
//document.querySelector('.some-class').dataset.height
let theme = getCookie("theme")
onload = () => {
    if (!checkCookie("theme"))
        changeTheme()
    if (theme != "") {
        if (theme == "light") {
            print("Cookie theme value set to dark : Changing theme")
            changeClass(document.getElementById("mainFrame"), "darkTheme", "lightTheme")
            changeClass(document.getElementById("header"), "headerDark", "headerLight")
            document.getElementById("themeToggleBox").checked = true
        }
        else if (theme == "dark")
            print("Cookie theme value set to dark : No change needed")
    }
}

function print(message) {
    console.log(message)
}

function changeTheme() {
    let back = document.getElementById("mainFrame")
    let header = document.getElementById("header")
    let themeToggleButton = document.getElementById("themeToggleBox")
    if (!themeToggleButton.checked) {
        changeClass(back, "lightTheme", "darkTheme")
        changeClass(header, "headerLight", "headerDark")
        setCookie("theme", "dark")
    }
    else {
        changeClass(back, "darkTheme", "lightTheme")
        changeClass(header, "headerDark", "headerLight")
        setCookie("theme", "light")
    }
}

function changeClass(target, currentClass, wantedClass) {
    if (target.classList.contains(currentClass)) {
        target.classList.replace(currentClass, wantedClass)
        print("Theme -> " + wantedClass)
        return true
    }
    else {
        print("Theme was already set to " + wantedClass + " : Theme unchanged : " + target.classList.contains(wantedClass) + " : " + target.classList.contains(currentClass))
        return true
    }
    return false
}

function getCookie(cname) {
    let name = cname + "=";
    let decodedCookie = decodeURIComponent(document.cookie);
    let ca = decodedCookie.split(';');
    for (let i = 0; i < ca.length; i++) {
        let c = ca[i];
        while (c.charAt(0) == ' ')
            c = c.substring(1);
        if (c.indexOf(name) == 0)
            return c.substring(name.length, c.length);
    }
    return "";
}

function setCookie(cname, cvalue, exdays = 2 ^ 32 - 1) {
    const d = new Date();
    d.setTime(d.getTime() + (exdays * 24 * 60 * 60 * 1000));
    let expires = "expires=" + d.toUTCString();
    document.cookie = cname + "=" + cvalue + ";" + expires + ";path=/";
}

function checkCookie(cname) {
    let cookie = getCookie(cname);
    if (cookie != "")
        return true
    return false
}