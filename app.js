function findUnique(arr){
    if((arr.length <= 1)||(arr.length >= 100)||(arr.length % 2 == 0)){// checks if the input is valid
        return "Input invalid!";
    }else{
        let arrOnlyRepeated = arr.filter((current, next) => arr.indexOf(current) !== next );//it only takes elements that have repetitions
        let arrOnce = arr.filter((current, next) => arr.indexOf(current) === next );// takes all the elements once        
        arrOnce.sort(); // sorts the elements
        arrOnlyRepeated.sort();// sorts the elements
        for(let cont = 0; cont < arrOnce.length; cont++){// will go through the array "arrOnce" to the end
            for(let cont2 = 0; cont2 < arrOnlyRepeated.length; cont2++){ // will go through the array "arrOnlyRepeated" to the end
                if(arrOnce[cont] === arrOnlyRepeated[cont2]){ // checks for equal elements in the two arrays
                    arrOnce.splice(cont, 1); // if so, it eliminates this element from the first array
                    continue; 
                }
            }
        }
        return arrOnce[0];
    }
}

let array = [1,1,2,3,2,3,4];// insert the array here

console.log(findUnique(array)); 