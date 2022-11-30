let fruits = new Map();
fruits.set("Яблоко", "Зелёное");
fruits.set("Лимон", "Жёлтый");
fruits.set("Клубника", "Красная");
fruits.set("Арбуз", "Зелёный");
fruits.set("Вишня", "Красная");
for (let color of fruits.keys()){
    console.log(color + " " + fruits.get(color));
}