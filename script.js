const rufusTheDog = {
    age: 4,
    species: "Dalmatian",
    contentsOfStomach: [],
    eat: function (item) {
        this.contentsOfStomach.push(item)
    },
    puke: function () {
        this.contentsOfStomach.clear()
    },
    bark: function (something) {
        window.alert(`Rufus barks 'WOOF!' at ${something}`)
    }
}

rufusTheDog.eat("leftovers")
rufusTheDog.eat("treat")
rufusTheDog.eat("bunny")

console.log(rufusTheDog.contentsOfStomach)

