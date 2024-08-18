const toggleBtn = document.querySelector('.sidebar-toggle')
const closeBtn = document.querySelector('.close-btn')
const sidebar = document.querySelector('.sidebar')

toggleBtn.addEventListener('click', function () {
    //  if (links.classList.contains('show-links')) {
    //     links.classList.remove('show-links')
    // } else {
    //     links.classList.add('show-links')
    // } 
    sidebar.classList.toggle('show-sidebar');
})

closeBtn.addEventListener('click', function () {
    sidebar.classList.remove('show-sidebar')
})