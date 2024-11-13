let particles = [];
    const pointer = {
        x: 0.1 * window.innerWidth,
        y: 0.1 * window.innerHeight
    };

    const params = {
        pointsNumber: 10, // Number of particles per frame
        particleSize: 3,
        particleSpeed: 2,
        particleLifetime: 100 // Particle lifespan in frames
    };

    const canvas = document.getElementById('interactionCanvas');
    const ctx = canvas.getContext('2d');

    function setupCanvas() {
        canvas.width = window.innerWidth;
        canvas.height = window.innerHeight;
    }

    function updateMousePosition(e) {
        pointer.x = e.clientX;
        pointer.y = e.clientY;

        // Generate new particles on mouse move
        for (let i = 0; i < params.pointsNumber; i++) {
            createParticle(pointer.x, pointer.y);
        }
    }

    function createParticle(x, y) {
        const angle = Math.random() * Math.PI * 2; // Random angle
        const speed = Math.random() * params.particleSpeed + 1; // Random speed
        particles.push({
            x: x,
            y: y,
            vx: Math.cos(angle) * speed, // Horizontal velocity
            vy: Math.sin(angle) * speed, // Vertical velocity
            size: Math.random() * params.particleSize + 1, // Random size
            color: getRandomColor(),
            lifetime: params.particleLifetime // Particle lifetime
        });
    }

    function getRandomColor() {
        const r = Math.floor(Math.random() * 255);
        const g = Math.floor(Math.random() * 255);
        const b = Math.floor(Math.random() * 255);
        return `rgb(${r}, ${g}, ${b})`;
    }

    function updateParticles() {
        // Apply a semi-transparent rectangle to create a trailing effect
        ctx.fillStyle = 'rgba(0, 0, 0, 0.1)'; // Adjust opacity for trail effect
        ctx.fillRect(0, 0, canvas.width, canvas.height);

        // Update and draw each particle
        particles = particles.filter(particle => particle.lifetime > 0); // Remove dead particles
        particles.forEach(particle => {
            // Update position
            particle.x += particle.vx;
            particle.y += particle.vy;

            // Draw particle
            ctx.beginPath();
            ctx.arc(particle.x, particle.y, particle.size, 0, Math.PI * 2);
            ctx.fillStyle = particle.color;
            ctx.fill();

            // Decrease lifetime
            particle.lifetime -= 1;
        });
    }

    function animate() {
        updateParticles();
        requestAnimationFrame(animate);
    }

    window.addEventListener('mousemove', updateMousePosition);
    window.addEventListener('resize', setupCanvas);

    setupCanvas();
    animate(); // Start the animation loop