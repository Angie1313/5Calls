function validateForm() {
    var email = document.getElementById('emailInput').value;

    if (email === '' || !/\S+@\S+\.\S+/.test(email)) {
        document.getElementById('emailError').innerText = 'Please enter a valid email address.';
        return false;
    }

    document.getElementById('submissionForm').submit();
}