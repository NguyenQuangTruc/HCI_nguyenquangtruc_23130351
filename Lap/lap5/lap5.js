
const tabs = [];
for (let i = 0; i < document.querySelectorAll('.tab_title .nav-link').length; i++) {
    tabs[i] = document.querySelector('.tab_' + (i + 1));
}
const content_tabs = [];
for (let i = 0; i < document.querySelectorAll('.tab-content .content').length; i++) {
    content_tabs[i] = document.querySelector('#content_tab_' + (i + 1));
}
const listNavLink = document.querySelectorAll('.tab_title .nav-link');
const content = document.querySelectorAll('.tab-content .content');

tabs.forEach((tab, index) => {
    tab.addEventListener('click', () => {
        for (let i = 0; i < listNavLink.length; i++) {
            listNavLink[i].classList.remove('active');
            content[i].classList.remove('active');
            for (let i = 0; i < tabs.length; i++) {
                tabs[i].classList.add('text-white');
            }
        }
        tab.classList.add('active');
        tab.classList.remove('text-white');
        tab.classList.add('text-black');
        content_tabs[index].classList.add('active');
        
    });
});
