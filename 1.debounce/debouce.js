function debounce(func, delay) {
    let timeout; // Variable to hold the timeout ID
    // Return a new function that will be debounced
    return function (...args) {
        // Clear the previous timeout, if it exists
        clearTimeout(timeout);
        // Set a new timeout to execute the function after the specified delay
        timeout = setTimeout(() => {
            // Use func.apply to call func with the correct context (this) and arguments
            func.apply(this, args);
        }, delay);
    };
}

// Example usage:
const handleResize = debounce(() => {
    console.log('Resize event handler');
}, 1000);

window.addEventListener('resize', handleResize);