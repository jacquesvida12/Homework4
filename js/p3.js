sum = 0;
max = 0;
const values = [3, 11, 7, 2, 9, 10];
for (i = 0; i < values.length; i++){
    sum += values[i];
}
min = values[0];
for (i = 0; i < values.length; i++){
    if (values[i] < min){
        min = values[i];
    }
}
max = 0;
for (i = 0; i < values.length; i++){
    if (values[i] > max){
        max = values[i];
    }
}
console.log(`The sum of the array is: ${sum}`)
console.log(`The min of the array is: ${min}`);
console.log(`The max of the array is: ${max}`);
