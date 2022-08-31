
$(window).on('load', function() {
    $("#cover").hide();

});
var indice = 1;
var toggled = false;
var timerActivity = false;
function checkOverlap() {
    var navvy = document.getElementById("topNav")
    var titley = document.getElementById("title")



    var navCoord = navvy.getBoundingClientRect().x;
    var titleCoord = titley.getBoundingClientRect().x + titley.getBoundingClientRect().width;
    if (navCoord < titleCoord) {
        titley.style.transform = "translate(-100%, 0)"
    } else {
        titley.style.transform = "translate(0, 0)"
    }

}

addEventListener('resize', (event) => {});

onresize = (event) => {checkOverlap()};

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
async function transition(link) {
    classOff("Boxfing", "retrans");
    classOn("Boxfing", "trans");
    await timer(800);
    window.location.href = "CS-III/Essays/fingerprinting.html";

}

async function retransition(link) {
    classOn("Boxfing", "closetrans")
    await timer(800);
    classOff("Boxfing", "closetrans");
    classOn("Boxfing", "retrans");
    
    
}

function send(value, urly) {
    
    var search = new URLSearchParams();
    search.append("ID84", value);
    
    if (location.href.match("codermerlin")) {
        location.href = "/users/khoi-pham/Digital%20Portfolio/" + urly + "?" + search.toString();
    } else {
        location.href = "/" + urly + "?" + search.toString();
    }

}

function recieve() {
    var searchy = new URLSearchParams(window.location.search);
    var pass = searchy.get("ID84");
    if (pass != null) {
        retransition();
    }
}

async function essaySwitch() {
    if (toggled == false) {
        $(".fingerprinting").toggleClass("nextsay");
        await timer(800);
        $(".ai").toggleClass("nextsay");
        toggled = true;
    } else {
        $(".ai").toggleClass("nextsay");
        await timer(800);
        $(".fingerprinting").toggleClass("nextsay");
        toggled = false;
    }

}

async function nextEPage(elm) {
    if (timerActivity == false) {
        timerActivity = true;
    var elem = document.getElementById("Box"+elm);
    if (!!elem.className.match(new RegExp('(\\s|^)'+'setup'+'(\\s|$)'))) {
        var index = indice + 1;
        while (indice != index) {
            if (indice < index) {
                $((".Box"+indice)).addClass("closed");
                $((".Box"+(indice+1))).removeClass("setup");
                indice += 1;
            }
            if (indice > index) {
                $(".Box"+indice).addClass("setup");
                $(".Box"+(indice-1)).removeClass("closed");
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
                $(".Box"+indice).addClass("closed");
                $(".Box"+(indice+1)).removeClass("setup");
                indice += 1;
            }
            if (indice > index) {
                $(".Box"+indice).addClass("setup");
                $(".Box"+(indice-1)).removeClass("closed");
                indice -= 1;
            }
            sliderX();
            await timer(500);
        }
    }
        timerActivity = false;
    }
}
async function cycleE(index) {
    if (timerActivity == false) {
        timerActivity = true;
        while (indice != index) {
            if (indice < index) {
                $((".Box"+indice)).addClass("closed");
                $((".Box"+(indice+1))).removeClass("setup");
                indice += 1;
            }
            if (indice > index) {
                $(".Box"+indice).addClass("setup");
                $(".Box"+(indice-1)).removeClass("closed");
                indice -= 1;
            }
            sliderX();
            await timer(500);
        }
        timerActivity = false;
    }
    
}


//future khoi, if mr.ben-yaakov asks about RegExp, it make a regular expression literal which is used to see if the string matches the classname, so overall if the class added/removed is already there.

