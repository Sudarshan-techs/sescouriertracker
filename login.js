const auth = firebase.auth();
const loginForm = document.getElementById("login-form");

loginForm.addEventListener("submit", (e) => {
    e.preventDefault();

    const email = document.getElementById("email").value;
    const password = document.getElementById("password").value;

    auth.signInWithEmailAndPassword(email, password)
        .then((userCredential) => {
            const user = userCredential.user;
            // Store user info in localStorage (for session management)
            localStorage.setItem("user", JSON.stringify(user));
            window.location.href = "index.html"; // Redirect to the main page
        })
        .catch((error) => {
            alert(error.message);
        });
});
