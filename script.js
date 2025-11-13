// element link

const home = document.getElementById('home')
const contact = document.getElementById('contact')
const about = document.getElementById('about')
const nomor = document.getElementById('nomor')
const discord = document.getElementById('discord')

//event move page

home.addEventListener('click', function() {
    window.location.href = 'index.html';
});


contact.addEventListener('click', function()  {
     window.location.href = 'contact.html';
});

about.addEventListener('click', function()
{
    window.location.href = 'about.html';
});

//event 2

nomor.addEventListener('click', function() {
    window.open("https://wa.me/6285764577796" );
});

discord.addEventListener('click', function() {
    window.open("")
});

