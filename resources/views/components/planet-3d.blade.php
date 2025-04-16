
@props([
    'size' => 200,
    'color' => 'bg-space-purple',
    'glowColor' => 'glow-purple',
    'rotationSpeed' => 15,
    'class' => ''
])

<div class="perspective relative">
    <div
        id="{{ 'planet-' . md5(rand()) }}"
        class="preserve-3d rounded-full relative animate-rotate-slow {{ $color }} {{ $glowColor }} {{ $class }}"
        style="width: {{ $size }}px; height: {{ $size }}px; animation-duration: {{ $rotationSpeed }}s;"
        x-data="planet3D()"
        x-init="init()"
        @mousemove.window="handleMouseMove"
    >
        {{ $slot ?? '' }}
        
        {{-- 3D effect highlights and shadows --}}
        <div class="absolute inset-0 rounded-full bg-white opacity-20" 
             style="transform: translateZ(2px); width: 60%; height: 60%; top: 10%; left: 10%; border-radius: 50%;" 
        ></div>
        <div class="absolute rounded-full bg-black opacity-20"
             style="transform: translateZ(2px); width: 70%; height: 70%; bottom: 0%; right: 0%; border-radius: 50%;"
        ></div>
    </div>
</div>

<script>
function planet3D() {
    return {
        rotationX: 0,
        rotationY: 0,
        rafId: null,
        planet: null,
        
        init() {
            this.planet = this.$el;
            this.updateRotation();
        },
        
        updateRotation() {
            if (!this.planet) return;
            this.planet.style.transform = `rotateX(${this.rotationX}deg) rotateY(${this.rotationY}deg)`;
            this.rafId = requestAnimationFrame(this.updateRotation.bind(this));
        },
        
        handleMouseMove(e) {
            if (!this.planet) return;
            const rect = this.planet.getBoundingClientRect();
            const centerX = rect.left + rect.width / 2;
            const centerY = rect.top + rect.height / 2;
            
            const distanceX = (e.clientX - centerX) / (window.innerWidth / 2) * 15;
            const distanceY = (e.clientY - centerY) / (window.innerHeight / 2) * 15;
            
            this.rotationX = -distanceY;
            this.rotationY = distanceX;
        }
    }
}
</script>
