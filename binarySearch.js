function binarySearch (number, list){

    let low = 0;
    let high = list.length;
    
    while (low <= high){
        let mid = (low + high)/2;
        mid = Math.floor(mid); 

        if (list[mid] == number){
            return list[mid] + " with index " + mid;
        }
        
        if (list[mid] > number){
            high = mid - 1;
        } 
        else {
            low = mid + 1;
        }
    }

    return "not in the list";

}

function newArray () {
    let arr = [0];
    for (i = 1; i < 100; i++){
        let n = Math.random() * 100;
        n = Math.round(n);
        //if (arr[i-1] <= n){
            arr.push(n);
        //}
    }

    return arr;
}

//console.log(newArray())
console.log("Number is" + " " + binarySearch(54, [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,23,24,26,27,28,34.36,38,39,45,46,49,52,54,68,66,67,69,73,75,79,84,87,89,91,92,93,94,95,96,97,98,99,100]));