
<canvas id="starCanvas" class="fixed top-0 left-0 w-full h-full pointer-events-none z-0"></canvas>

<script>
document.addEventListener('DOMContentLoaded', function() {
    const canvas = document.getElementById('starCanvas');
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    // Set canvas to full screen
    const handleResize = () => {
        canvas.width = window.innerWidth;
        canvas.height = window.innerHeight;
    };
    
    window.addEventListener('resize', handleResize);
    handleResize();

    // Create stars
    const count = 200;
    const speed = 0.05;
    
    const stars = Array(count).fill(null).map(() => ({
        x: Math.random() * canvas.width - canvas.width / 2,
        y: Math.random() * canvas.height - canvas.height / 2,
        z: Math.random() * 1000
    }));

    // Animation
    let animationFrameId;
    const render = () => {
        // Clear canvas
        ctx.fillStyle = 'rgba(14, 21, 38, 0.2)';
        ctx.fillRect(0, 0, canvas.width, canvas.height);
        
        // Center the coordinate system
        ctx.save();
        ctx.translate(canvas.width / 2, canvas.height / 2);
        
        // Draw stars
        stars.forEach(star => {
            // Store previous z
            star.prevZ = star.z;
            
            // Move star closer to screen
            star.z -= speed * 10;
            
            // Reset star if it's too close
            if (star.z <= 0) {
                star.x = Math.random() * canvas.width - canvas.width / 2;
                star.y = Math.random() * canvas.height - canvas.height / 2;
                star.z = 1000;
                star.prevZ = 1000;
            }
            
            // Project 3D star onto 2D screen
            const sx = star.x / star.z * 300;
            const sy = star.y / star.z * 300;
            
            // Calculate previous position for trail
            let prevSx = 0, prevSy = 0;
            if (star.prevZ) {
                prevSx = star.x / star.prevZ * 300;
                prevSy = star.y / star.prevZ * 300;
            }
            
            // Calculate size and brightness based on z distance
            const r = Math.max(0, 1.5 - star.z / 1000);
            const brightness = Math.max(0, 1 - star.z / 1000);
            
            // Draw star
            ctx.beginPath();
            ctx.fillStyle = `rgba(255, 255, 255, ${brightness})`;
            ctx.arc(sx, sy, r, 0, Math.PI * 2);
            ctx.fill();
            
            // Draw trail
            if (star.prevZ && star.prevZ > 0) {
                ctx.beginPath();
                ctx.strokeStyle = `rgba(255, 255, 255, ${brightness * 0.5})`;
                ctx.lineWidth = r * 0.5;
                ctx.moveTo(prevSx, prevSy);
                ctx.lineTo(sx, sy);
                ctx.stroke();
            }
        });
        
        ctx.restore();
        
        // Continue animation
        animationFrameId = requestAnimationFrame(render);
    };
    
    render();
    
    // Cleanup on page leave
    document.addEventListener('beforeunload', () => {
        window.removeEventListener('resize', handleResize);
        cancelAnimationFrame(animationFrameId);
    });
});
</script>
