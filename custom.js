
let toggleBar = document.getElementById("toggle-bar");
let DropDown = document.getElementById("drop-down");
toggleBar.addEventListener('click', function () {
    DropDown.classList.toggle("active");

})



/*shop filter btn8*/
let filterBtn = document.querySelectorAll(".filter-category button");
let gameBox = document.querySelectorAll(".game-box");

let filterCards = event => {
    document.querySelector(".click").classList.remove("click");
    event.target.classList.add("click");
    console.log(event.target)

    gameBox.forEach(box => {
        box.classList.add("hide");

        if (box.dataset.name === event.target.dataset.name || event.target.dataset.name === "all") {
            box.classList.remove("hide");
        }

    })


}

filterBtn.forEach(button => button.addEventListener("click", filterCards))

/* for contact page*/

let form = document.getElementById("contact-form");
let submit = document.getElementById("submit");
submit.addEventListener("click", (event) => {
    event.preventDefault();

    let isValid = true;
    let name = document.getElementById("first-name");
    let lastName = document.getElementById("last-name");
    let email = document.getElementById("email");
    let subject = document.getElementById("subject");
    let message = document.getElementById("message");

    if (name.value.trim() === "" || lastName.value.trim() === "" || email.value.trim() === "" ||subject.value.trim()===""|| message.value.trim() === "") {
        isValid = false
        alert("Fill All The Form First !");
    }
    if (isValid) {
        alert("Submitted Successfully!");
        //   window.location.href= "contact.html"
        console.log("Name =", name.value);
        console.log("Last Name =", lastName.value);
        console.log("Email =", email.value);
        console.log("Subject =", subject.value);
        console.log("Message =", message.value);


        name.value = "";
        lastName.value = "";
        email.value = "";
        subject.value = "";
        message.value = "";

    }


    // if(name.value.trim()===""){
    //     isValid = false ;
    //     alert("Enter Name please!");
    // }
    // if(lastName.value.trim()===""){
    //     isValid= false;
    //     alert("Enter Last Name please!");
    // }
    // if(email.value.trim()===""){
    //     isvalid = false ;
    //     alert("Enter Email Please!")
    // }
    // if(isValid){
    //     alert("Submitted SuccessFully!")
    // }
})
