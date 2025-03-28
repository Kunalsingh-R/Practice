document.addEventListener('DOMContentLoaded', function () {

    const searchIcon = document.getElementById('searchIcon');
    const searchBox = document.getElementById('searchBox');

    searchIcon.addEventListener('click', function () {
        searchBox.style.display = searchBox.style.display === "none" ? "block" : "none";
    });

    const newsLink = document.getElementById('newsLink');
    const newsSection = document.getElementById('newsSection');

    newsLink.addEventListener('click', function () {
        newsSection.style.display = newsSection.style.display === "none" ? "block" : "none";
        document.getElementById('eventsPinkBox').style.display = 'none';
        document.querySelector('.event-container').style.display = 'none';
    });


    document.querySelectorAll('.event-title').forEach(function (eventTitle) {
        eventTitle.addEventListener('click', function () {
            const description = eventTitle.nextElementSibling.nextElementSibling;
            description.style.display = description.style.display === 'none' ? 'block' : 'none';
        });
    });

    document.getElementById('eventsLink').addEventListener('click', function () {
        const pinkBox = document.getElementById('eventsPinkBox');

        if (pinkBox.style.display === 'none' || pinkBox.style.display === '') {
            pinkBox.style.display = 'block';
            pinkBox.style.width = '100%';
            pinkBox.style.height = '100px';
            pinkBox.style.backgroundColor = 'pink';
        } else {
            pinkBox.style.display = 'none';
        }

        document.getElementById('newsSection').style.display = 'none';
        document.querySelector('.event-container').style.display = 'block';
    });

    newsLink.addEventListener('click', function () {
        document.getElementById('newsSection').style.display = 'block';
        document.getElementById('eventsPinkBox').style.display = 'none';
        document.querySelector('.event-container').style.display = 'none';
    });

    document.getElementById('homeLink').addEventListener('click', function () {
        window.scrollTo(0, 0);
        document.getElementById('eventsPinkBox').style.display = 'none';
        document.getElementById('newsSection').style.display = 'none';
        document.querySelector('.event-container').style.display = 'block';
    });
});
