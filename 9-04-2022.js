
// You are given a string of letters and an array of numbers.
// The numbers indicate positions of letters that must be removed, in order, starting from the beginning of the array.
// After each removal the size of the string decreases (there is no empty space).
// Return the only letter left.

// Example:

// let str = "zbk", arr = [0, 1]
//     str = "bk", arr = [1]
//     str = "b", arr = []
//     return 'b'
// Notes
// The given string will never be empty.
// The length of the array is always one less than the length of the string.
// All numbers are valid.
// There can be duplicate letters and numbers.


function lastSurvivor(letters, coords) {
    let result = letters.split("");
      for (let i = 0; i < coords.length; i++){
        result.splice(coords[i],1)
      }
    return result.join("")
  }


//   Description:
// DropCaps means that the first letter of the starting word of the paragraph should be in caps and the remaining lowercase, just like you see in the newspaper.

// But for a change, let"s do that for each and every word of the given String. Your task is to capitalize every word that has length greater than 2, leaving smaller words as they are.

// *should work also on Leading and Trailing Spaces and caps.

// "apple"            => "Apple"
// "apple of banana"  => "Apple of Banana"
// "one   space"      => "One   Space 
// "   space WALK   " => "   Space Walk   " 

function dropCap(n) {
    let array = n.split(" ")
    let stringLength = array.map(words =>{
      if (words.length > 2){
        let as = words.split("").map((letter,index)=>{
          if (index > 0){return letter.toLowerCase()}return letter});
        words = as.join("")
       return words.charAt(0).toUpperCase() + words.slice(1)
      } else{
        return words
      }
    }) 
    return stringLength.join(" ")
   }