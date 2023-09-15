import { getElement } from './utils.js';

const toggleNav = getElement('.toggle-nav');
const closeBtn = getElement('.sidebar-close');
const sidebarOverlay = getElement('.sidebar-overlay');

toggleNav.addEventListener('click', ()=>{
 sidebarOverlay.classList.add('show')
});

closeBtn.addEventListener('click', ()=>{
 sidebarOverlay.classList.remove('show')
});