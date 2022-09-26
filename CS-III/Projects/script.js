
$(window).on('load', function() {
    $("#cover").hide();


// declare the words
const words = [{
    selector: ".code-categories",
    text: ["'airfare'", "['gas', 'parking']"],
    scrollY: 0

}, {
    selector: ".code-type",
    text: ["'physical'", "'virtual'"],
    scrollY: -1390

}, {
    selector: ".code-brand",
    text: ["'visa'", "'mastercard'"],
    scrollY: -840

}, {
    selector: ".code-status",
    text: ["'inactive'", "'active'"],
    scrollY: -1380

}, {
    selector: ".code-currency",
    text: ["'gbp'", "'usd'"],
    scrollY: -120

}, {
    selector: ".code-amount",
    text: ["10000", "35"],
    scrollY: -190

}]

// alias $ to document.querySelector
const pry = document.querySelector.bind(document)

const element = pry('.card-overlay')

const codeContainer = pry(".card-code")

// set an initial currentStep and select the element from the DOM
const codeChanges = words.map(word => {
    return {
        ...word,
        currentStep: 0,
        el: pry(word.selector)
          
    }

})

// method to scroll the codeContainer to the word
const scrollContainer = value => codeContainer.style.transform = `translate3d(0, ${value}px, 0)`

// type the text into the word element
const typeText = word => {
    const { el, newText } = word
      let num = 0
      // wait 500ms after its been scrolled to the text
    setTimeout(() => {
        if(el.classList.contains("code-null")) {
            el.classList.remove("code-null")
            el.classList.add("code-string")
                
        }
            // set a 50ms interval to simulate typing
        const timer = setInterval(() => {
                  el.style.fontWeight = 700
            el.textContent = newText.substr(0, num)
            // if we're done with the word text, clear the interval
            num === newText.length && clearInterval(timer)
                  num += 1
                
        }, 50)
          
    }, 500)

}

// type a word
const startTypingForStep = step => {
      const word = codeChanges[step]
    scrollContainer(word.scrollY)
    typeText({
        el: word.el,
        newText: word.text[word.currentStep]
          
    })
    // increment the currentStep, or reset it
    codeChanges[step] = {
        ...word,
        currentStep: word.currentStep === word.text.length - 1 ? 0 : word.currentStep + 1
          
    }
    const newStep = step === codeChanges.length - 1 ? 0 : step + 1
      // wait 4s before typing the next word
    setTimeout(() => startTypingForStep(newStep), 4e3)

}

// kick things off with the first word
startTypingForStep(0)
});
var indice = 1;
var toggled = false;
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
            document.getElementById("cornerBox").style.zIndex=0;
            retransition("Boxfing", "retrans");
            await timer(800);
            document.getElementById("cornerBox").style.zIndex=100;
            
        }
        if (pass == "poj") {
            document.getElementById("Boxfing").style.zIndex=0;
            retransition("cornerBox", "corner");
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
        $(".ai").toggleClass("nextsay");
        await timer(800);
        $(".fingerprinting").toggleClass("nextsay");
        toggled = false;
        document.title = "Fingerprints";
        window.history.replaceState({}, document.title, window.location.href.replace("AI%20Sentience.html", "Fingerprints.html"));
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

