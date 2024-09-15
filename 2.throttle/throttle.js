let throttle = function (fn, limit) {
    let lastCall = 0; // Timestamp of the last function call

    return function (...args) {
        const now = Date.now(); // Current timestamp
        // Check if enough time has passed since the last call
        if (now - lastCall >= limit) {
            lastCall = now; // Update the timestamp of the last call
            fn(...args); // Call the function with the latest arguments
        }
    };
};