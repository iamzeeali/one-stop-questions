function debounce(func, wait) {
    let timeout;
    return function (...args) {
        clearTimeout(timeout);
        timeout = setTimeout(() => func.apply(this, args), wait);
    };
}

// Example usage:
const handleResize = debounce(() => {
    console.log('Resize event handler');
}, 200);

window.addEventListener('resize', handleResize);