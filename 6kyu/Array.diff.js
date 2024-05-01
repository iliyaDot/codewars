DESCRIPTION:
Your goal in this kata is to implement a difference function, which subtracts one list from another and returns the result.

It should remove all values from list a, which are present in list b keeping their order.

arrayDiff([1,2],[1]) == [2]
If a value is present in b, all of its occurrences must be removed from the other:

arrayDiff([1,2,2,2,3],[2]) == [1,3]







JavaScript:
function arrayDiff(a, b) {
  // Initialize an empty array to hold the result
  let result = [];

  // Loop through each element in list 'a'
  for (let i = 0; i < a.length; i++) {
    // Check if the current element of 'a' is NOT included in 'b'
    if (!b.includes(a[i])) {
      // If it is not included in 'b', add it to the result array
      result.push(a[i]);
    }
  }

  // Return the result array, which now contains only those elements
  // from 'a' that are not in 'b'
  return result;
}