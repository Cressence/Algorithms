function merge_sort(unsorted_array) {
    if(unsorted_array.length <= 1) return unsorted_array;

    const middle_index = Math.floor(unsorted_array.length / 2);
    let left_side = unsorted_array.slice(0, middle_index);
    let right_side = unsorted_array.slice(middle_index);

    left_side = merge_sort(left_side);
    right_side = merge_sort(right_side);

    return merge(left_side, right_side);
}

function merge(left, right) {
    let final_array = [];
    while(left.length > 0 && right.length > 0) {
        if(left[0] > right[0]) {
            final_array.push(right[0]);
            right.splice(0, 1);
        } else {
            final_array.push(left[0]);
            left.splice(0, 1);
        }
    }

    while(left.length > 0) {
        final_array.push(left[0]);
        left.splice(0, 1);
    }

    while(right.length > 0) {
        final_array.push(right[0]);
        right.splice(0, 1);
    }

    return final_array
}

// Test the merge function
let test = merge_sort([7,34,7,2,45,0,2,2,7,8,28,11,34]);
console.log(test);