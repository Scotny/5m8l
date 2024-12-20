let food = ["non", "asal", "banan", "olma", "aziza", "mashina", "Gul"]

food1 = []

food2 = []



for (let element of food) {
    if (element.includes("n")) {
        food1.push(element);
    }else {
        food2.push(element)
    }
}
console.log(food1, 'n harfi ishtirok etgan sozlar')
console.log(food2, 'n harfi ishtirok etmagan sozlar')
