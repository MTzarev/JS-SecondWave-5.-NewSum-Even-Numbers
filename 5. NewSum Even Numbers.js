function newSum(arr) {
    let sum = 0;
    for (let i = 0; i < arr.length; i++) {
        arr[i] = Number(arr[i]);
    }
    for (let j = 0; j < arr.length; j++) {
        if (arr[j] % 2 === 0) {
            sum += arr[j];
        }
    }
    console.log(sum);

}
newSum(['2', '4', '6', '8', '10']);
