
class Dog {
    constructor(data) {
        Object.assign(this, data)
    }

    getDogHtml() {

        document.querySelector('.dog-card').style.backgroundImage = `url(/${this.avatar})`

        return `
            <div class="profile-image">
                <img class="badge" id="badge-like" src="/images/badge-like.png" alt="">
                <img class="badge" id="badge-nope" src="/images/badge-nope.png" alt="">
                <p class="profile-name">${this.name}, ${this.age}</p>
                <p class="profile-desc">${this.bio}</p>
            </div> 
        `
    }

    swipe() {
        this.hasBeenSwiped = true
    }

    accept() {
        this.hasBeenLiked = true
    }

    reject() {
        this.hasBeenLiked = false
    }
}

export default Dog