function insertion_sort(unsorted_array) {
    let position;
    let valueToInsert;
    let array_length= unsorted_array.length;

    for (let i = 1; i < array_length; i++) {
        valueToInsert = unsorted_array[i];
        position = i;

        while((position > 0) && (unsorted_array[position - 1] > valueToInsert)) {
            unsorted_array[position] = unsorted_array[position - 1];
            position = position - 1;
        }

        unsorted_array[position] = valueToInsert;
    }
    return unsorted_array;
}

const test = insertion_sort([7,34,7,2,45,0,2,2,7,8,28,11,34]);
console.log(test);
