import  dogsDataCopy from "/data.js"
import Dog from "/Dog.js"


const dogsData = dogsDataCopy
let buttonActive = true
let dog = new Dog(dogsData.shift())
render()



document.addEventListener('click', (e) => {
    if(e.target.id === "accept-button" || e.target.id === "accept-button-icon" && buttonActive === true) {
        buttonActive = false;
        swipeAccept()
    }
    if(e.target.id === "reject-button" || e.target.id === "reject-button-icon" && buttonActive === true) {
        buttonActive = false;
        swipeReject()
    }
})

function newDog() {
    if(dogsData.length > 0) {
        setTimeout( () => {
            buttonActive = true;
            dog = new Dog(dogsData.shift())
            hideBadges()
            render()
        },1000)
    }
}

function swipeAccept() {
    console.log("swipe")
    document.getElementById('badge-like').style.visibility = "visible"
    document.getElementById('badge-nope').style.visibility = "hidden"
    dog.accept()
    newDog()
}

function swipeReject() {
    document.getElementById('badge-nope').style.visibility = "visible"
    document.getElementById('badge-like').style.visibility = "hidden"
    dog.reject()
    newDog()
}

function render() {
    document.querySelector(".dog-card").innerHTML = dog.getDogHtml()
}

function hideBadges() {
    document.getElementById('badge-like').style.visibility = "hidden"
    document.getElementById('badge-nope').style.visibility = "hidden"
}

