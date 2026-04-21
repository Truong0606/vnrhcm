import { useEffect, useRef } from 'react';

/**
 * Interactive 3D Particle Globe
 * Pure Canvas implementation - no external libraries needed.
 */
export default function ThreeDGlobe() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let width = canvas.width = canvas.offsetWidth;
    let height = canvas.height = canvas.offsetHeight;

    const dots: Dot[] = [];
    const DOT_COUNT = 1000;
    const GLOBE_RADIUS = Math.min(width, height) * 0.45;
    
    let rotationX = 0;
    let rotationY = 0;
    let mouseX = 0;
    let mouseY = 0;

    class Dot {
      x: number = 0;
      y: number = 0;
      z: number = 0;
      radius: number = 2;
      
      theta: number;
      phi: number;

      constructor() {
        this.theta = Math.random() * Math.PI * 2;
        this.phi = Math.acos((Math.random() * 2) - 1);
        this.project();
      }

      project() {
        // Spherical to Cartesian
        this.x = GLOBE_RADIUS * Math.sin(this.phi) * Math.cos(this.theta);
        this.y = GLOBE_RADIUS * Math.sin(this.phi) * Math.sin(this.theta);
        this.z = GLOBE_RADIUS * Math.cos(this.phi);
      }

      draw(rotationX: number, rotationY: number) {
        // Rotate X
        let y1 = this.y * Math.cos(rotationX) - this.z * Math.sin(rotationX);
        let z1 = this.y * Math.sin(rotationX) + this.z * Math.cos(rotationX);

        // Rotate Y
        let x2 = this.x * Math.cos(rotationY) + z1 * Math.sin(rotationY);
        let z2 = -this.x * Math.sin(rotationY) + z1 * Math.cos(rotationY);

        // Perspective
        const perspective = 1200;
        const scale = perspective / (perspective - z2);
        const xProjected = x2 * scale + width / 2;
        const yProjected = y1 * scale + height / 2;

        if (z2 < 0) ctx!.globalAlpha = 0.3; // Back side
        else ctx!.globalAlpha = 1.0;

        const brightness = (z2 + GLOBE_RADIUS) / (GLOBE_RADIUS * 2);
        ctx!.fillStyle = `rgba(255, 215, 0, ${0.4 + brightness * 0.6})`;
        ctx!.beginPath();
        ctx!.arc(xProjected, yProjected, this.radius * scale, 0, Math.PI * 2);
        ctx!.fill();
      }
    }

    for (let i = 0; i < DOT_COUNT; i++) {
      dots.push(new Dot());
    }

    const animate = () => {
      ctx.clearRect(0, 0, width, height);

      rotationY += 0.005 + (mouseX * 0.0001);
      rotationX += mouseY * 0.0001;

      dots.forEach(dot => dot.draw(rotationX, rotationY));
      requestAnimationFrame(animate);
    };

    const handleResize = () => {
      width = canvas.width = canvas.offsetWidth;
      height = canvas.height = canvas.offsetHeight;
    };

    const handleMouseMove = (e: MouseEvent) => {
      mouseX = e.clientX - width / 2;
      mouseY = e.clientY - height / 2;
    };

    window.addEventListener('resize', handleResize);
    window.addEventListener('mousemove', handleMouseMove);
    animate();

    return () => {
      window.removeEventListener('resize', handleResize);
      window.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);

  return (
    <canvas 
      ref={canvasRef} 
      className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-[800px] pointer-events-none opacity-80 z-[5] mix-blend-screen"
    />
  );
}
