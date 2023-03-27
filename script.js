
$(window).on('load', function() {
    $("#cover").hide();

});
var indice = 1;
var toggled = false;
var toggled2 = false;
var timerActivity = false;
async function checkOverlap() {
    var navvy = document.getElementById("topNav")
    var titley = document.getElementById("title")



    var navCoord = navvy.getBoundingClientRect();
    var titleCoord = titley.getBoundingClientRect();
    
    if ((navCoord.width + titleCoord.width + 50) >= window.innerWidth) {
        titley.style.transform = "translate(-120%, 0)"
    } else {
        titley.style.transform = "translate(0, 0)"
    }
    lift();
}

addEventListener('resize', (event) => {});

onresize = (event) => {checkOverlap();checkTitle(); };

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
async function lift() {
    $('#Box'+(indice+1)).css("z-index", "-1");
    for (let i = indice+1; i < 7; i++) {
        $('#Box'+(indice)).css("z-index", "-10");
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
                classOn(("Box"+indice), 'closed disabled');
                classOff(("Box"+(indice+1)), 'setup');
                indice += 1;
                sliderX();
                await timer(500);
                classOff(("Box"+(indice-1)), 'disabled');
                
            }
            if (indice > index) {
                classOn(("Box"+indice), 'setup disabled');
                classOff(("Box"+(indice-1)), 'closed');
                indice -= 1;
                sliderX();
                await timer(500);
                classOff(("Box"+(indice+1)), 'disabled');
                
            }
            
        }
    }
    if (!!elem.className.match(new RegExp('(\\s|^)'+'closed'+'(\\s|$)'))) {
        index = indice - 1;
        while (indice != index) {
            if (indice < index) {
                classOn(("Box"+indice), 'closed disabled');
                classOff(("Box"+(indice+1)), 'setup');
                indice += 1;
                sliderX();
                await timer(500);
                classOff(("Box"+(indice-1)), 'disabled');
            }
            if (indice > index) {
                classOn(("Box"+indice), 'setup disabled');
                classOff(("Box"+(indice-1)), 'closed');
                indice -= 1;
                sliderX();
                await timer(500);
                classOff(("Box"+(indice+1)), 'disabled');
                
            }
           
        }
    }
        timerActivity = false;

    }
    lift();
}
async function transition(link,id,cless) {
    classOff(id, cless);
    classOn(id, "trans");
    await timer(800);
    window.location.href = link;

}

async function retransition(link, cless) {
    classOff(link, "corner");
    classOn(link, "closetrans");
    await timer(800);
    classOff(link, "closetrans");
    classOn(link, cless);
    
    
}

async function send(value, urly) {
    document.getElementById("hippy").style.animation="fadeOutAnimation ease .25s";
    document.getElementById("hippy").style.opacity=0;
    await timer(250);
    var search = new URLSearchParams();
    search.append("ID84", value);
    
    if (location.href.match("codermerlin")) {
        location.href = "/users/khoi-pham/Digital%20Portfolio/" + urly + "?" + search.toString();
    } else {
        location.href = "/" + urly + "?" + search.toString();
    }

}

async function recieve() {
    var searchy = new URLSearchParams(window.location.search);
    var pass = searchy.get("ID84");
    if (pass != null) {
        if (pass == "ese") {
            document.getElementById("cornerBox").style.zIndex=-100;
            retransition("Boxfing", "retrans");
            $("#Boxfing").addClass("disabled");
            await timer(800);
            $("#Boxfing").removeClass("disabled");
            document.getElementById("cornerBox").style.zIndex=100;
            
        }
        if (pass == "poj") {
            document.getElementById("Boxfing").style.zIndex=-1000;
            retransition("cornerBox", "corner");
            $("#cornerBox").addClass("disabled");
            await timer(800);
            $("#cornerBox").removeClass("disabled");
            document.getElementById("Boxfing").style.zIndex=120;
            
        }
    }
    window.history.replaceState({}, document.title, window.location.href.split("?")[0]);
}

async function essaySwitch() {
        if (toggled == false) {
        $(".fingerprinting").toggleClass("nextsay");
        await timer(800);
        $(".ai").toggleClass("nextsay");
        toggled = true;
            window.history.replaceState({}, document.title, window.location.href.replace("Fingerprints.html", "AI%20Sentience.html"));
            document.title = "AI Sentience";
    } else {
        if (toggled2 == false) {
            $(".ai").toggleClass("nextsay");
            await timer(800);
            $(".bias").toggleClass("nextsay");
            toggled2 = true;
            document.title = "Bias";
            window.history.replaceState({}, document.title, window.location.href.replace("AI%20Sentience.html", "Decision%20Making.html"));
        } else {
            $(".bias").toggleClass("nextsay");
            await timer(800);
            $(".fingerprinting").toggleClass("nextsay");
            toggled = false;
            toggled2 = false;
            document.title = "Fingerprints";
            window.history.replaceState({}, document.title, window.location.href.replace("Decision%20Making.html", "Fingerprints.html"));
        }
    }

}
async function set(tog, t2og) {
    toggled = tog;
    toggled2 = t2og;

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

function checkSize() {
    if (window.innerWidth <= window.innerHeight) {
        $(".centralBox").css("max-width", "80%");
    }
}

function checkTitle() {
    var nav = document.getElementById("topNav");
    if (nav.getBoundingClientRect().width > window.innerWidth) {
        const ratio = window.innerWidth / nav.getBoundingClientRect().width / 1.2;
        nav.style.transform = "scale(" + ratio + "," + ratio + ")";
    } else {
        nav.style.transform = "";
    }
}
//future khoi, if mr.ben-yaakov asks about RegExp, it make a regular expression literal which is used to see if the string matches the classname, so overall if the class added/removed is already there.

