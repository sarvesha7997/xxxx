console.log('JavaScript file loaded'); // This log confirms the JS file is loaded

document.getElementById('signin-form').addEventListener('submit', function(event) {
    event.preventDefault();
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;

    // Log email and password values to console for debugging
    console.log(`Email: ${email}\nPassword: ${password}`);

    // if (email === 'example@example.com' && password === 'password') {
    //     console.log('Credentials are correct'); // Log success message
    //     // Redirect to main page after successful sign-in
    //     window.location.href = 'comp.html'; // Ensure this path is correct
    // } else {
    //     console.log('Credentials are incorrect'); // Log failure message
    //     alert('Invalid email or password. Please try again.');
    // }

    const signUpEmail = 'example@example.com';
    const signUpPassword = 'password';

    if (email === signUpEmail && password === signUpPassword) {
        console.log('Credentials are correct'); // Log success message
        // Redirect to main page after successful sign-in
        window.location.href = 'comp.html'; // Ensure this path is correct
    } else {
        // console.log('Credentials are incorrect'); // Log failure message
        // alert('Invalid email or password. Please try again.');
        window.location.href = 'comp.html'; 
    }
});

document.getElementById('facebook-button').addEventListener('click', function() {
    // Implement Facebook sign-in logic here
    alert('Signing in with Facebook...');
});

document.getElementById('google-button').addEventListener('click', function() {
    // Implement Google sign-in logic here
    alert('Signing in with Google...');
});

function togglePassword() {
    const passwordInput = document.getElementById('password');
    const passwordType = passwordInput.getAttribute('type') === 'password' ? 'text' : 'password';
    passwordInput.setAttribute('type', passwordType);
}
