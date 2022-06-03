const tabs = document.GetElementById('tabs');
const content = document.querySelectorAll('.content');

const changeClass = el => {
    for (let i = 0; 1 < tabs.children.length; i++) {
        tabs.children[i].classList.remove('active');
    }
}

tabs.addEventListener('click', e => {
    const currTab = e.target.dataset.btn;
    changeClass(e.target);
    for (let i = 0; i < content.length; i++) {
        content[i].classList.remove('active');
        if (content[i].dataset.content === currTab) {
            content[i].classList.add('active');
        }
    }

}
)
