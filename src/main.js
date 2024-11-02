import './style.css';

const shareBtn = document.getElementById('share-pc');
const shareBtnMobile = document.getElementById('share-mobile');
const popover = document.getElementById("popover");
const articleMeta = document.getElementById('article-meta');
let shareActive = false;

const toggleBtn = () => {
    shareBtn.addEventListener("click", (e) => {
        popover.classList.toggle('hidden');
        if (innerWidth < 900) {
            articleMeta.classList.toggle('hidden');
        }
    })
    shareBtnMobile.addEventListener("click", (e) => {
        popover.classList.toggle('hidden');
        articleMeta.classList.toggle('hidden');
    })
}

window.onload = () => {
    toggleBtn();
}