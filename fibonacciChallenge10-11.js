function fibonacciGenerator(n){
    var output=[];
    for (i=0;i<n;i++){
        if (output.length === 0){
            output.push(0);
        }else if (output.length ===1){
            output.push(1);
        }else{
            var newNum = (output[output.length-1]+output[output.length-2]);
            output.push(newNum);
        }
    }
    console.log(output);
}
