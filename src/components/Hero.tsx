import React, { useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import { Terminal, Code, Cpu, Rocket } from 'lucide-react';

const Hero = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    if (!canvasRef.current) return;

    const canvas = canvasRef.current;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    // Set canvas size
    const setCanvasSize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };
    setCanvasSize();
    window.addEventListener('resize', setCanvasSize);

    // Particle system
    class Particle {
      x: number;
      y: number;
      size: number;
      speedX: number;
      speedY: number;
      opacity: number;

      constructor() {
        this.x = Math.random() * canvas.width;
        this.y = Math.random() * canvas.height;
        this.size = Math.random() * 2;
        this.speedX = Math.random() * 2 - 1;
        this.speedY = Math.random() * 2 - 1;
        this.opacity = Math.random() * 0.5 + 0.2;
      }

      update() {
        this.x += this.speedX;
        this.y += this.speedY;

        if (this.x > canvas.width) this.x = 0;
        if (this.x < 0) this.x = canvas.width;
        if (this.y > canvas.height) this.y = 0;
        if (this.y < 0) this.y = canvas.height;
      }

      draw() {
        if (!ctx) return;
        ctx.fillStyle = `rgba(74, 222, 128, ${this.opacity})`;
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
        ctx.fill();
      }
    }

    const particles: Particle[] = [];
    for (let i = 0; i < 100; i++) {
      particles.push(new Particle());
    }

    // Binary rain effect
    class BinaryDrop {
      x: number;
      y: number;
      value: string;
      speed: number;
      opacity: number;

      constructor() {
        this.x = Math.random() * canvas.width;
        this.y = Math.random() * canvas.height;
        this.value = Math.random() > 0.5 ? '1' : '0';
        this.speed = Math.random() * 2 + 1;
        this.opacity = Math.random() * 0.5 + 0.2;
      }

      update() {
        this.y += this.speed;
        if (this.y > canvas.height) {
          this.y = 0;
          this.x = Math.random() * canvas.width;
        }
      }

      draw() {
        if (!ctx) return;
        ctx.fillStyle = `rgba(74, 222, 128, ${this.opacity})`;
        ctx.font = '12px monospace';
        ctx.fillText(this.value, this.x, this.y);
      }
    }

    const binaryDrops: BinaryDrop[] = [];
    for (let i = 0; i < 50; i++) {
      binaryDrops.push(new BinaryDrop());
    }

    // Animation loop
    const animate = () => {
      if (!ctx) return;
      ctx.fillStyle = 'rgba(17, 24, 39, 0.1)';
      ctx.fillRect(0, 0, canvas.width, canvas.height);

      particles.forEach((particle) => {
        particle.update();
        particle.draw();
      });

      binaryDrops.forEach((drop) => {
        drop.update();
        drop.draw();
      });

      requestAnimationFrame(animate);
    };

    animate();

    return () => {
      window.removeEventListener('resize', setCanvasSize);
    };
  }, []);

  return (
    <section className="relative min-h-screen overflow-hidden bg-gray-900">
      <canvas
        ref={canvasRef}
        className="absolute inset-0 w-full h-full"
        style={{ opacity: 0.4 }}
      />
      
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-32 pb-16">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center"
        >
          <h1 className="text-5xl md:text-7xl font-extrabold tracking-tight text-white mb-8">
            <span className="inline-block bg-clip-text text-transparent bg-gradient-to-r from-green-400 to-emerald-600">
              Future of Web
            </span>
            <br />
            Development
          </h1>
          
          <p className="mt-6 text-xl text-gray-300 max-w-3xl mx-auto">
            Enter the digital frontier with cutting-edge web solutions that push the boundaries
            of what's possible online.
          </p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.8 }}
            className="mt-12 grid grid-cols-2 gap-6 md:grid-cols-4 max-w-4xl mx-auto"
          >
            {[
              { icon: Terminal, text: 'Advanced Tech' },
              { icon: Code, text: 'Clean Code' },
              { icon: Cpu, text: 'AI Powered' },
              { icon: Rocket, text: 'Fast Deploy' },
            ].map((item, index) => (
              <motion.div
                key={item.text}
                whileHover={{ scale: 1.05, y: -5 }}
                className="group relative p-6 bg-gray-800/50 backdrop-blur-sm rounded-xl border border-gray-700 hover:border-green-500/50 transition-colors"
              >
                <div className="absolute inset-0 bg-gradient-to-r from-green-500/10 to-emerald-500/10 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity" />
                <item.icon className="h-8 w-8 mb-4 text-green-400 mx-auto" />
                <p className="text-gray-300 font-medium">{item.text}</p>
              </motion.div>
            ))}
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.6 }}
            className="mt-12"
          >
            <motion.a
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              href="#contact"
              className="inline-flex items-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-black bg-green-400 hover:bg-green-500 md:text-lg"
            >
              Start Your Journey
            </motion.a>
          </motion.div>
        </motion.div>
      </div>

      <div className="absolute inset-0 bg-gradient-to-t from-gray-900 via-transparent to-transparent pointer-events-none" />
    </section>
  );
};

export default Hero;