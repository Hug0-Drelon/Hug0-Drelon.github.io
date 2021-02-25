let app = {

    aboutElement: undefined,

    projectElement: undefined,

    contactElement: undefined,

    init: function () {

        app.aboutElement = document.querySelector('.about-title');

        app.projectElement = document.querySelector('.project-title');

        app.contactElement = document.querySelector('.contact-title');

        document.querySelector('.button-to-top').addEventListener('click', app.handleTopButton);

        document.querySelector('.nav_about').addEventListener('click', app.handleNavButton);

        document.querySelector('.nav_project').addEventListener('click', app.handleNavButton);

        document.querySelector('.nav_contact').addEventListener('click', app.handleNavButton);
    },

    handleTopButton: function () {
        window.scrollTo({top: 0, behavior: 'smooth'});
    },

    handleNavButton: function (evt) {

        let scrollIntoViewOptions = {
            behavior: 'smooth',
        }

        if (evt.target.className === 'nav_about') {
            app.aboutElement.scrollIntoView(scrollIntoViewOptions);
        }
        else if (evt.target.className === 'nav_project') {
            app.projectElement.scrollIntoView(scrollIntoViewOptions);
        }
        else if (evt.target.className === 'nav_contact') {
            app.contactElement.scrollIntoView(scrollIntoViewOptions);
        }
    },
}

document.addEventListener("DOMContentLoaded", app.init);