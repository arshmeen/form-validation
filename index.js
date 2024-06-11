let formData = document.querySelector(".form");
let submitButton = document.querySelector(".button");
let errorMessages = document.querySelectorAll(".error-message");
let emptyFieldMessage = document.querySelectorAll(".empty-field");
let showPasswordBtn = document.querySelector(".btn");
let fnFlag, lnFlag, eFlag, pFlag;
let firstname, lastname, email, password;
let fnTarget, lnTarget, eTarget, pTarget;
let field;

let nameRegex = /^[a-z]+$/i;
let emailRegex = /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/;
let pwdRegex = /^(?=.*\d)(?=.*[!@#$%^&*])(?=.*[a-z])(?=.*[A-Z]).{8,}$/;

for (let errorMessage of errorMessages) {
  errorMessage.classList.add("d-none");
}

for (let message of emptyFieldMessage) {
  message.classList.add("d-none");
}

formData.addEventListener("keyup", (e) => {
  e.preventDefault();
  field = e.target.dataset.key;
  switch (field) {
    case "firstName":
      firstname = e.target.value;
      fnTarget = e.target;
      break;
    case "lastName":
      lastname = e.target.value;
      lnTarget = e.target;
      break;
    case "email":
      email = e.target.value;
      eTarget = e.target;
      break;
    case "password":
      password = e.target.value;
      pTarget = e.target;
      break;
    default:
      firstname = lastname = email = password = "";
      break;
  }
});

submitButton.addEventListener("click", (e) => {
  e.preventDefault();
  console.log(fnTarget, lnTarget, eTarget, pTarget);
  if (firstname) {
    emptyFieldMessage[0].classList.add("d-none");
    if (!nameRegex.test(firstname)) {
      fnTarget.classList.add("error");
      errorMessages[0].classList.remove("d-none");
      fnFlag = false;
    } else {
      errorMessages[0].classList.add("d-none");
      fnTarget.classList.remove("error");
      fnFlag = true;
    }
  } else {
    //Show empty field message
    emptyFieldMessage[0].classList.remove("d-none");
  }
  if (lastname) {
    emptyFieldMessage[1].classList.add("d-none");
    if (!nameRegex.test(lastname)) {
      lnTarget.classList.add("error");
      errorMessages[1].classList.remove("d-none");
      lnFlag = false;
    } else {
      errorMessages[1].classList.add("d-none");
      lnTarget.classList.remove("error");
      lnFlag = true;
    }
  } else {
    emptyFieldMessage[1].classList.remove("d-none");
  }
  if (email) {
    emptyFieldMessage[2].classList.add("d-none");
    if (!emailRegex.test(email)) {
      eTarget.classList.add("error");
      errorMessages[2].classList.remove("d-none");
      eFlag = false;
    } else {
      errorMessages[2].classList.add("d-none");
      eTarget.classList.remove("error");
      eFlag = true;
    }
  } else {
    emptyFieldMessage[2].classList.remove("d-none");
  }
  if (password) {
    emptyFieldMessage[3].classList.add("d-none");
    if (!pwdRegex.test(password)) {
      pTarget.classList.add("error");
      errorMessages[3].classList.remove("d-none");
      pFlag = false;
    } else {
      errorMessages[3].classList.add("d-none");
      pTarget.classList.remove("error");
      pFlag = true;
    }
  } else {
    emptyFieldMessage[3].classList.remove("d-none");
  }
  if (fnFlag && lnFlag && eFlag && pFlag) {
    fnTarget.value = lnTarget.value = eTarget.value = pTarget.value = "";
    window.location.href = "success.html";
  }
});

showPasswordBtn.addEventListener("click", (e) => {
  e.preventDefault();
  if (pTarget.getAttribute("type") === "text") {
    pTarget.setAttribute("type", "password");
  } else {
    pTarget.setAttribute("type", "text");
  }
});



// code explanation linewise
// // getting the data form data from the html
// let formData = document.querySelector(".form");
// // submit button access
// let submitButton = document.querySelector(".button");
// // for the values of items present in the form
// let firstName, lastName, email, password;
// // fetching error messages
// let errorMessages = document.querySelectorAll(".error-message");
// // fetching empty fields warning messages
// let emptyFieldMessage = document.querySelectorAll(".empty-field");

// // need to make sure error messages appear when there is not the
// // fulfilment of the conditions
// // eg - name shouldn't have a number or a special character
// // for this we need to use regex
// // regular expression for name

// let nameRegex = /^[a-z]+$/i;
// let emailRegex = /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/;
// let pwdRegex = /^(?=.*\d)(?=.*[!@#$%^&*])(?=.*[a-z])(?=.*[A-Z]).{8,}$/;

// // for the fileds , to add error messages when required
// let fnTarget, lnTarget, eTarget, pTarget;

// // flags for makig sure, every field is filed and we can move to success page 
// let fnFlag, lnFlag, eFlag, pFlag;

// // keyup is for the text typed trigger
// formData.addEventListener("keyup", (e) => {
// 	// this is to prevent the reloading of the webpage again and again
// 	e.preventDefault();
// 	// this is to get the value of the text typed, but key helps to identify which type of data it is
// 	// field is saving the value
// 	field = e.target.dataset.key;
// 	switch(field) {
// 		// save the filed vauue , on the basis of which kind of data is it
// 		case "firstName":
//             firstName = e.target.value;
//             break;
//         case "lastName":
//             lastName = e.target.value;
//             break;
//         case "email":
//             email = e.target.value;
//             break;
//         case "password":
//             password = e.target.value;
//             break;
// 		// in case when there are no values
// 		default:
// 			firstName = lastName = email = password = "";
// 			break;
// 	}
// });


// // removing the error messages and making sure apears whe there is an error
// // message will appear only when there is an error
// for (let errorMessage of errorMessages) {
// 	errorMessage.classList.add("d-none");
// }

// // removing the error messages and making sure apears whe there is an error
// // message will appear only when user leaves any field empty
// for (let message of emptyFieldMessage) {
// 	message.classList.add("d-none");
// }




// submitButton.addEventListener("click", (e) => {
// 	e.preventDefault();
// 	// console.log(firstName, lastName, email, password);
// 	console.log(fnTarget, lnTarget, eTarget, pTarget);
// 	if (firstName) {
// 	  emptyFieldMessage[0].classList.add("d-none");
// 	  if (!nameRegex.test(firstname)) {
// 		fnTarget.classList.add("error");
// 		errorMessages[0].classList.remove("d-none");
// 		fnFlag = false;
// 	  } else {
// 		errorMessages[0].classList.add("d-none");
// 		fnTarget.classList.remove("error");
// 		fnFlag = true;
// 	  }
// 	} else {
// 	  //Show empty field message
// 	  emptyFieldMessage[0].classList.remove("d-none");
// 	}
// 	if (lastName) {
// 	  emptyFieldMessage[1].classList.add("d-none");
// 	  if (!nameRegex.test(lastname)) {
// 		lnTarget.classList.add("error");
// 		errorMessages[1].classList.remove("d-none");
// 		lnFlag = false;
// 	  } else {
// 		errorMessages[1].classList.add("d-none");
// 		lnTarget.classList.remove("error");
// 		lnFlag = true;
// 	  }
// 	} else {
// 	  emptyFieldMessage[1].classList.remove("d-none");
// 	}
// 	if (email) {
// 	  emptyFieldMessage[2].classList.add("d-none");
// 	  if (!emailRegex.test(email)) {
// 		eTarget.classList.add("error");
// 		errorMessages[2].classList.remove("d-none");
// 		eFlag = false;
// 	  } else {
// 		errorMessages[2].classList.add("d-none");
// 		eTarget.classList.remove("error");
// 		eFlag = true;
// 	  }
// 	} else {
// 	  emptyFieldMessage[2].classList.remove("d-none");
// 	}
// 	if (password) {
// 	  emptyFieldMessage[3].classList.add("d-none");
// 	  if (!pwdRegex.test(password)) {
// 		pTarget.classList.add("error");
// 		errorMessages[3].classList.remove("d-none");
// 		pFlag = false;
// 	  } else {
// 		errorMessages[3].classList.add("d-none");
// 		pTarget.classList.remove("error");
// 		pFlag = true;
// 	  }
// 	} else {
// 	  emptyFieldMessage[3].classList.remove("d-none");
// 	}
// 	if (fnFlag && lnFlag && eFlag && pFlag) {
// 	  fnTarget.value = lnTarget.value = eTarget.value = pTarget.value = "";
// 	  window.location.href = "success.html";
// 	}

// })

// // password visiblity button
// showPasswordBtn.addEventListener("click", (e) => {
// 	e.preventDefault();
// 	if (pTarget.getAttribute("type") === "text") {
// 	  pTarget.setAttribute("type", "password");
// 	} else {
// 	  pTarget.setAttribute("type", "text");
// 	}
//   });