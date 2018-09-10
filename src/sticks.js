/* You are given a number of sticks of varying lengths. You will iteratively cut the sticks into smaller sticks, 
discarding the shortest pieces until there are none left. At each iteration you will determine the length of the 
shortest stick remaining, cut that length from each of the longer sticks and then discard all the pieces of that 
shortest length. When all the remaining sticks are the same length, they cannot be shortened so discard them.
Given the lengths of some number of sticks, return an array containg the numbers of sticks remaing before each cut was made.

If any input is provided other than an array you should return an empty array because no sticks were ever there.

For example, 
provided an array such as: [5,4,4,2,2,8]
we would expect: [6,4,2,1]
explination:
stick lengths     length of cut     sticks before cut
5 4 4 2 2 8         2                 6
3 2 2 - - 6         2                 4
1 - - - - 4         1                 2
- - - - - 3         3                 1
- - - - - -         done              done
*/
function solution(arr) {
  // TODO: Create the solution

  for (let k = 0; k < arr.length; k++) {//iterate array until done


    let smallestStick = arr[0];

    for (let i = 0; i < arr.length; i++) {//get smallest stick length

      if (arr[i] <= smallestStick) {

        smallestStick = arr[i];

      }


    }//end of get smallest stick


    for (let j = 0; j < arr.length; j++) {//edit array 

      if (arr[j] === smallestStick) { //removes the items that are equal to the lower stick

        arr.splice(j, 1)


      }

      else if (arr[j] != smallestStick) { // subtracts the smallest stick amount from the larger sticks

        arr[j] = arr[j] - smallestStick

      }


    }//end of edit array


    for (let l = 1; l < arr.length; l++) {//check elements array for similarity

      if (arr[l] === arr[1 - 1]) { //if all indecies have same values return empty array
        
        
      }

      else{// element not similar
        break;//exit loop
      }


    }// end check elements for similarity


       if (arr.length === 1) {//if only one element left in the array

      return arr;
    }

    else { // if different elements then go to interate again

    }

  } // end of for loop to iterate through sticks until end

  return arr;
}// end function



module.exports = solution;
