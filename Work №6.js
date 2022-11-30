let arr = [1, 2, 3, 4, 5, "Число"];

let coincidence = true;
for (let i = 0; i < arr.length - 1; i++){
    for (let j = i + 1; j < arr.length; j++){
        if (typeof(arr[i]) !== typeof(arr[j])){
            coincidence = false;
        }
    }
}
if (coincidence) {
    console.log("true");
} else {
    console.log("false");
}