const auth = firebase.auth();
const signupForm = document.getElementById("signup-form");

signupForm.addEventListener("submit", (e) => {
    e.preventDefault();

    const email = document.getElementById("signup-email").value;
    const password = document.getElementById("signup-password").value;

    auth.createUserWithEmailAndPassword(email, password)
        .then((userCredential) => {
            const user = userCredential.user;
            alert("User registered successfully!");
            window.location.href = "login.html"; // Redirect to login after successful signup
        })
        .catch((error) => {
            alert(error.message);
        });
});
