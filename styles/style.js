document.querySelectorAll('.basket-product__packaging-plus').forEach(item => {
    item.addEventListener('click', function () {
        ++item.parentElement.querySelector('input').value;
        if (item.parentElement.querySelector('input').value > 1) {
            item.parentElement.querySelector('.basket-product__packaging-minus').classList.remove('inactive');
        }
    });
});

document.querySelectorAll('.basket-product__packaging-minus').forEach(item => {
    item.addEventListener('click', function () {
        --item.parentElement.querySelector('input').value;
        if (item.parentElement.querySelector('input').value < 2) {
            item.parentElement.querySelector('input').value = 1
            item.classList.add('inactive');
        }
    });
});

const banner = new Swiper('.swiper', {
    pagination: {
        el: '.swiper-pagination',
    },

    navigation: {
        nextEl: '.banner__next',
        prevEl: '.banner__prev',
    },
});