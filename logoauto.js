document.addEventListener('DOMContentLoaded', function() {
    // Only run on mobile screens
    if (window.innerWidth < 768) {
        const scroller = document.getElementById('logo-scroller');
        const container = document.getElementById('logo-container');
        
        // Calculate maximum scroll position
        const maxScroll = container.offsetWidth - scroller.offsetWidth;
        let scrollDirection = 1; // 1 for right, -1 for left
        let currentPosition = 0;
        const scrollSpeed = 1; // Pixels per interval, adjust as needed
        const pauseAtEnds = 10; // Pause in milliseconds at each end
        let isPaused = false;
        
        // Auto-scroll function
        const autoScroll = setInterval(() => {
            if (isPaused) return;
            
            currentPosition += scrollSpeed * scrollDirection;
            
            // Check if we've reached the end
            if (currentPosition >= maxScroll) {
                currentPosition = maxScroll;
                scrollDirection = -1;
                
                // Pause at the right end
                isPaused = true;
                setTimeout(() => { isPaused = false; }, pauseAtEnds);
            }
            // Check if we've reached the beginning
            else if (currentPosition <= 0) {
                currentPosition = 0;
                scrollDirection = 1;
                
                // Pause at the left end
                isPaused = true;
                setTimeout(() => { isPaused = false; }, pauseAtEnds);
            }
            
            // Apply the scroll position
            scroller.scrollLeft = currentPosition;
        }, 20); // Control smoothness of animation
        
        // Stop scrolling when user interacts with the container
        scroller.addEventListener('touchstart', () => {
            clearInterval(autoScroll);
        });
        
        // Optional: restart auto-scroll after user interaction ends
        scroller.addEventListener('touchend', () => {
            currentPosition = scroller.scrollLeft;
            
            // Restart the auto-scroll
            setInterval(autoScroll, 20);
        });
    }
});