import throttle from "lodash.throttle";
const emailSelector = document.querySelector("input");
const messageSelector = document.querySelector("textarea");
const storage = {
    email: "",
    message:""
};
const check = localStorage.getItem("feedback-form-state");
emailSelector.addEventListener("input", throttle((event) => { 
    storage.email = event.currentTarget.value;
    localStorage.setItem("feedback-form-state", JSON.stringify(storage));
}),500);
messageSelector.addEventListener("input", throttle((event) => { 
    storage.message = event.currentTarget.value;
    localStorage.setItem("feedback-form-state", JSON.stringify(storage));
}),500);
document.addEventListener("DOMContentLoaded", () => { 
    if (check != null) {
        const parseCheck = JSON.parse(check);
        emailSelector.value = parseCheck.email;
        messageSelector.value = parseCheck.message;
    }
});
const feedbackForm = document.querySelector(".feedback-form");
feedbackForm.addEventListener("submit", (event) => { 
    event.preventDefault();
    const result = JSON.parse(check);
    console.log(result);
    localStorage.removeItem("feedback-form-state");
    emailSelector.value = "";
    messageSelector.value = "";
});