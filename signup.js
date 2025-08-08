const auth = firebase.auth();

document.getElementById("signupForm").addEventListener("submit", function(e) {
    e.preventDefault();

    const email = document.getElementById("email").value;
    const password = document.getElementById("password").value;

    auth.createUserWithEmailAndPassword(email, password)
        .then(userCredential => {
            const user = userCredential.user;
            user.sendEmailVerification()
                .then(() => {
                    alert("สมัครสำเร็จ! กรุณาตรวจสอบอีเมลของคุณเพื่อยืนยัน");
                    window.location.href = "verify.html"; // เด้งไปหน้า verify.html
                });
        })
        .catch(error => {
            alert(error.message);
        });
});
