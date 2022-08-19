var indice = 1;
var timerActivity = false;
function classOn(elem,cls) {
    const elm = document.getElementById(elem);
    if (!(!!elm.className.match(new RegExp('(\\s|^)'+cls+'(\\s|$)')))) {
        elm.className += " "+cls;
    } 
}
function classOff(elem,cls) {
    const elm = document.getElementById(elem);
    if (!!elm.className.match(new RegExp('(\\s|^)'+cls+'(\\s|$)'))) {
        var exp = new RegExp('(\\s|^)'+cls+'(\\s|$)');
        elm.className=elm.className.replace(exp,' ');
    }
}   


function sliderX() {
    var lefty = document.querySelector(':root');
    
    switch (indice) {
    case 1:
        lefty.style.setProperty('--spindex', '3%')
        break;
    case 2:
        lefty.style.setProperty('--spindex', '17%')
        break;
    case 3:
        lefty.style.setProperty('--spindex', '36.8%')
        break;
    case 4:
        lefty.style.setProperty('--spindex', '49.5%')
        break;
    case 5:
        lefty.style.setProperty('--spindex', '68%')
        break;
    case 6:
        lefty.style.setProperty('--spindex', '80%')
        break;
    }
}

const timer = ms => new Promise(res => setTimeout(res, ms));


async function cycle(index) {
    if (timerActivity == false) {
        timerActivity = true;
    while (indice != index) {
        if (indice < index) {
            classOn(("Box"+indice), 'closed');
            classOff(("Box"+(indice+1)), 'setup');
            indice += 1;
        }
        if (indice > index) {
            classOn(("Box"+indice), 'setup');
            classOff(("Box"+(indice-1)), 'closed');
            indice -= 1;
        }
        sliderX();
        timerActivity = true;
        await timer(500);
    }
        timerActivity = false;
    }
    
}
async function nexty(elm) {
    if (timerActivity == false) {
        timerActivity = true;
    var elem = document.getElementById("Box"+elm);
    if (!!elem.className.match(new RegExp('(\\s|^)'+'setup'+'(\\s|$)'))) {
        var index = indice + 1;
        while (indice != index) {
            if (indice < index) {
                classOn(("Box"+indice), 'closed');
                classOff(("Box"+(indice+1)), 'setup');
                indice += 1;
            }
            if (indice > index) {
                classOn(("Box"+indice), 'setup');
                classOff(("Box"+(indice-1)), 'closed');
                indice -= 1;
            }
            sliderX();
            await timer(500);
        }
    }
    if (!!elem.className.match(new RegExp('(\\s|^)'+'closed'+'(\\s|$)'))) {
        index = indice - 1;
        while (indice != index) {
            if (indice < index) {
                classOn(("Box"+indice), 'closed');
                classOff(("Box"+(indice+1)), 'setup');
                indice += 1;
            }
            if (indice > index) {
                classOn(("Box"+indice), 'setup');
                classOff(("Box"+(indice-1)), 'closed');
                indice -= 1;
            }
            sliderX();
            timerActivity = true;
            await timer(500);
        }
    }
        timerActivity = false;
    }
}

        //future khoi, if mr.ben-yaakov asks about RegExp, it make a regular expression literal which is used to see if the string matches the classname, so overall if the class added/removed is already there.

