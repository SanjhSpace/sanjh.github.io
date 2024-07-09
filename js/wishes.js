document.addEventListener('DOMContentLoaded', function() {
    const wishForm = document.getElementById('wishForm');
    const nameInput = document.getElementById('nameInput');
    const wishText = document.getElementById('wishText');
    const wishList = document.getElementById('wishList');

    // 添加一条默认的祝福
    const defaultWish = document.createElement('li');
    defaultWish.innerHTML = `<strong>小散:</strong> 身体嘎嘎棒,颜值嘎嘎高,球技嘎嘎猛！`;
    wishList.appendChild(defaultWish);

    wishForm.addEventListener('submit', function(event) {
        event.preventDefault();
        const name = nameInput.value.trim();
        const wish = wishText.value.trim();

        if (name && wish) {
            const newWish = document.createElement('li');
            newWish.innerHTML = `<strong>${name}:</strong> ${wish}`;
            wishList.appendChild(newWish);
            nameInput.value = '';
            wishText.value = '';
        }
    });
});
