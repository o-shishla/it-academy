//удалить из массива все повторяющиеся элементы

function deleteDuplicates(arr){
    for(let i=1;i<arr.length;i++){
        if(arr[i]===arr[i-1]){
            arr.splice(i,1);
        }
    }
    return arr;
}

const arr = [1, 1, 2, 2, 3, 4, 4, 5, 5,6];
console.log(deleteDuplicates(arr));