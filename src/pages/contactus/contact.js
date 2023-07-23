const mytextarea = document.querySelector('.message');

const initialHeight = parseInt(getComputedStyle(mytextarea).getPropertyValue('height'))

mytextarea.addEventListener("input", () => {
    mytextarea.style.height = `${initialHeight}px`;
    const newHeight = mytextarea.scrollHeight - initialHeight;
    mytextarea.style.height = `${newHeight}px`;
})