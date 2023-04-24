/** 
 *
  * @returns A promise that is designed to resolve with a list of hobbits, or potentially fail with an failure object. The failure object includes a boolean success property and a string message property.
 */


function getList() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      let potentialFail = Math.round(Math.random() * 100) < 10;
      if (potentialFail) {
        reject({ success: false, message: "Failed to get list of hobbits." });
      } else {
        resolve(["Bilbo", "Frodo", "Sam", "Merry", "Pippin"]);
      }
    }, 10);
  });
}

const feedbackPara = document.querySelector("#error");
const hobbitsUl = document.querySelector("#list");
// TODO: Handle the resolved or rejected states of the promise

getList()
  .then((res) => {
  console.log(res);
  for (let i = 0; i < res.length; i++) {
    const newLi = document.createElement("li");
    const newP = document.createElement("p");
    newP.textContent = res[i]; //Hobbit names
    //use knowledge from the DOM
    newLi.appendChild(newP);
    hobbitsUl.appendChild(newLi);
  }
  })//you can use err instead of rej
  //.catch is similar to try/catch block
  .catch((rej) => {
    console.error(rej);
    feedbackPara.textContent = rej.message;
  });

// TODO: If the promise resolves with the list of hobbits
// Render the list of hobbits as list items within the unordered list with id="list" (check the index.html file)

// TODO: If the promise rejects with the failure object
// Display the failure message in the paragraph element with id="error" (check index.html file)
