// script.js
document.addEventListener('DOMContentLoaded', () => {
    const section = document.getElementById('section-3');
    const skillBar = section.querySelector('.skill-bar');
    const skillItems = section.querySelectorAll('.skill-bar-item');

    const observer = new IntersectionObserver(entries => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                skillBar.classList.add('animate');
                skillItems.forEach(item => {
                    item.classList.add('animate');
                });
            } else {
                skillBar.classList.remove('animate');
                skillItems.forEach(item => {
                    item.classList.remove('animate');
                });
            }
        });
    }, { threshold: 0.5 });

    observer.observe(section);
});


// JavaScript to handle the background change
document.querySelector('.input').addEventListener('change', function () {
    const darkElements = document.getElementsByClassName('dark');
    const darkElements2 = document.getElementsByClassName('dark2');
    const sections = ['section-1', 'section-2', 'section-3', 'section-4', 'section-5'];
    const isChecked = this.checked;
    const color = isChecked ? 'white' : '';
    const color2 = isChecked ? '#ff6b00' : '';
    const backgroundColor = isChecked ? '#0E152C' : '';

    // Apply styles to dark elements
    for (let i = 0; i < darkElements.length; i++) {
        darkElements[i].style.color = color;
    }

    // Apply styles to dark2 elements
    for (let i = 0; i < darkElements2.length; i++) {
        darkElements2[i].style.color = color2;
    }

    // Apply background color to sections and header
    sections.forEach(id => document.getElementById(id).style.backgroundColor = backgroundColor);
    document.getElementById('main-header').style.backgroundColor = backgroundColor;
});







