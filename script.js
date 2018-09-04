const coin = {
    state: 0,
    flip: function () {
        this.state = (Math.floor(Math.random() * 2));
    },
    toString: function () {
        if (this.state === 0) {
            console.log("head")
        }
        else if (this.state === 1) {
            console.log("tail")
        }
    },
    toHTML: function () {
        let image = document.createElement('img');
        if (this.state === 0) {image.src = "head.jpg"
            document.body.appendChild(image)
            document.write("Heads")
        }
        else if (this.state === 1) {
            // image.classList.add("tail")
            image.src = "tail.png"
            document.body.appendChild(image)
            document.write("Tails")

        }
            return image;
    }
};

for (let x=0; x<20; x++) {
    coin.flip()
    coin.toHTML()
    coin.toString()
}