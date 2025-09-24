var canvas = document.getElementById("canvas");
        var ctx = canvas.getContext("2d");

        // Array to store particles
        var particles = [];

        // Particle class
        class Particle {
            constructor(x, y, color) {
                this.x = x;
                this.y = y;
                this.color = color;
                this.radius = 2;
                this.speed = {
                    x: -5 + Math.random() * 10,
                    y: -5 + Math.random() * 10
                };
            }

            draw() {
                ctx.beginPath();
                ctx.arc(this.x, this.y, this.radius, 0, Math.PI * 2);
                ctx.fillStyle = this.color;
                ctx.fill();
                ctx.closePath();
            }

            update() {
                this.x += this.speed.x;
                this.y += this.speed.y;
                this.radius -= 0.02;
            }
        }

        // Function to create a firework explosion
        function createFirework(x, y) {
            for (var i = 0; i < 50; i++) {
                var particle = new Particle(x, y, 'hsl(' + Math.random() * 360 + ', 100%, 50%)');
                particles.push(particle);
            }
        }

        // Function to draw particles and update their positions
        function draw() {
            ctx.clearRect(0, 0, canvas.width, canvas.height);
            particles.forEach(function(particle) {
                particle.update();
                particle.draw();
            });
            particles = particles.filter(function(particle) {
                return particle.radius > 0;
            });
        }

        // Event listener for canvas click 