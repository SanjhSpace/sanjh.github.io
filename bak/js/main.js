document.addEventListener('DOMContentLoaded', function() {
    const passwordInput = document.getElementById('password');
    const wishesButton = document.getElementById('wishesButton');

    passwordInput.addEventListener('input', function() {
        const password = passwordInput.value;
        if (password === '0605') { // 替换为实际的密码
            wishesButton.style.display = 'inline-block';
			tryButton.style.display = 'inline-block';
        } else {
            wishesButton.style.display = 'none';
			tryButton.style.display = 'none';
        }
    });

    setInterval(updateTimeAlive, 1000);
});
