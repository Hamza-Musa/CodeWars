/* Instructions:
For every good kata idea there seem to be quite a few bad ones!

In this kata you need to check the provided array (x) for good ideas 'good' and bad ideas 'bad'. If there are one or two good ideas, return 'Publish!', if there are more than 2 return 'I smell a series!'. If there are no good ideas, as is often the case, return 'Fail!'.
*/

//Answer
function well(x) {
  const goodCount = x.filter((idea) => idea === "good").length;

  if (goodCount === 1 || goodCount === 2) {
    return "Publish!";
  } else if (goodCount > 2) {
    return "I smell a series!";
  } else {
    return "Fail!";
  }
}

// Example usage:
const ideasArray = ["good", "bad", "good", "good"];
console.log(well(ideasArray));

//Best practice
const well = (x) => {
  const good_count = x.filter((x) => x == "good").length;
  return good_count < 1
    ? "Fail!"
    : good_count < 3
    ? "Publish!"
    : "I smell a series!";
};
