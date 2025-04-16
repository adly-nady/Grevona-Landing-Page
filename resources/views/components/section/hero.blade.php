
<div 
    class="min-h-screen flex flex-col justify-center items-center relative pt-20 pb-10 px-4 overflow-hidden"
    x-data="{ initObserver() { 
        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        entry.target.classList.add('visible');
                    }
                });
            },
            { threshold: 0.1 }
        );
        
        const elements = document.querySelectorAll('.appear');
        elements.forEach((el) => observer.observe(el));
        
        return observer;
    } }"
    x-init="const observer = initObserver(); 
            $cleanup = () => {
                const elements = document.querySelectorAll('.appear');
                elements.forEach((el) => observer.unobserve(el));
            }"
>
    <div class="container max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between gap-10 z-10">
        <div class="md:w-1/2 flex flex-col gap-6 text-center md:text-left">
            <h1 class="text-4xl md:text-6xl font-bold text-white appear">
                <span class="text-space-light-purple">Mill</span>Verse
                <span class="text-space-nebula-pink">Cloud</span>
            </h1>
            <p class="text-xl text-gray-300 appear" style="transition-delay: 0.1s;">
                The first specialized cloud ERP system for mills that outperforms industry giants
            </p>
            <p class="text-gray-400 appear" style="transition-delay: 0.2s;">
                An innovative solution designed specifically for the milling industry, offering specialized features that generic ERPs like Odoo and SAP can't match.
            </p>
            <div class="flex flex-col sm:flex-row gap-4 justify-center md:justify-start appear" style="transition-delay: 0.3s;">
                <button class="bg-space-light-purple hover:bg-space-purple text-white rounded-full px-8 py-6">
                    Explore Features
                </button>
                <button class="border-space-light-purple text-white hover:bg-space-light-purple hover:text-space-deep-blue rounded-full px-8 py-6">
                    Request Demo
                </button>
            </div>
        </div>
        
        <div class="md:w-1/2 flex justify-center appear" style="transition-delay: 0.4s;">
            <div class="relative w-[300px] h-[300px] flex items-center justify-center perspective">
                <x-planet-3d 
                    size="240" 
                    color="bg-space-purple bg-opacity-90" 
                    glowColor="glow-purple"
                >
                    <div class="absolute inset-0 rotate-45 opacity-20 bg-[url('/placeholder.svg')] bg-cover rounded-full"></div>
                </x-planet-3d>
                
                <x-orbiting-element 
                    size="30" 
                    distance="180" 
                    color="bg-space-nebula-pink" 
                    startPosition="45"
                    class="glow-pink"
                />
                
                <x-orbiting-element 
                    size="20" 
                    distance="180" 
                    color="bg-space-light-purple" 
                    startPosition="160"
                    :reverse="true"
                    class="glow-purple"
                />
                
                <x-orbiting-element 
                    size="15" 
                    distance="160" 
                    color="bg-white" 
                    startPosition="240"
                />
            </div>
        </div>
    </div>
    
    <div class="absolute bottom-10 left-1/2 transform -translate-x-1/2 animate-bounce z-10">
        <a href="#problem" class="text-gray-400 hover:text-white transition-colors flex flex-col items-center gap-2">
            <span>Scroll Down</span>
            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M12 5v14"></path><path d="m19 12-7 7-7-7"></path></svg>
        </a>
    </div>
    
    {{-- Accent decorations --}}
    <div class="absolute top-1/3 left-0 w-64 h-64 bg-space-purple opacity-20 rounded-full blur-3xl"></div>
    <div class="absolute bottom-1/3 right-0 w-96 h-96 bg-space-nebula-pink opacity-10 rounded-full blur-3xl"></div>
</div>
