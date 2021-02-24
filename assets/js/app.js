let app = {
    init: function () {
        document.querySelector('.button-to-top').addEventListener('click', app.handleTopButton);
    },

    handleTopButton: function (evt) {
        window.scrollTo({top: 0, behavior: 'smooth'});
    }
}

document.addEventListener("DOMContentLoaded", app.init);