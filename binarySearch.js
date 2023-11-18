function binarySearch (number, list){

    let low = 0;
    let high = list.length;
    
    while (low <= high){
        let mid = (low + high)/2;
        mid = Math.floor(mid); 

        if (list[mid] == number){
            return list[mid];
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
console.log("Number" + " " + binarySearch(4, [1,2,3,4,5,6,7,8,9,10]));