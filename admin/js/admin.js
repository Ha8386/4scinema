function toggleSubmenu(element) {
    const submenuItems = document.querySelectorAll('.submenu-item');
    const icon = element.querySelector('.fa-chevron-right');
    submenuItems.forEach(item => {
        if (item.style.maxHeight) {
            item.style.maxHeight = null;
            item.style.display = 'none';
            icon.style.transform = 'rotate(0deg)';
        } else {
            item.style.display = 'block';
            item.style.maxHeight = item.scrollHeight + "px";
            icon.style.transform = 'rotate(90deg)';
        }
    });
}

function toggleSidebar() {
    const sidebar = document.querySelector('.sidebar');
    const header = document.querySelector('.header');
    const content = document.querySelector('.content');
    sidebar.classList.toggle('hidden');
    header.classList.toggle('shifted');
    content.classList.toggle('shifted');
}