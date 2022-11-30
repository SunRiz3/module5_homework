let x = undefined;
if (typeof(x) === 'string' || typeof(x) === 'number' || typeof(x) === 'boolean') {
    console.log("X - " + typeof(x));
} else {
    console.log("Тип X не определен")
}