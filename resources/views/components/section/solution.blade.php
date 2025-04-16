
<section 
    id="solution" 
    class="py-20 relative z-10"
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
        
        const elements = this.$el.querySelectorAll('.appear');
        elements.forEach((el) => observer.observe(el));
        
        return observer;
    } }"
    x-init="const observer = initObserver(); 
            $cleanup = () => {
                const elements = this.$el.querySelectorAll('.appear');
                elements.forEach((el) => observer.unobserve(el));
            }"
>
    <div class="container max-w-6xl mx-auto px-4">
        <div class="flex flex-col md:flex-row items-center gap-12">
            <div class="md:w-1/2 order-2 md:order-1">
                <h2 class="text-3xl md:text-5xl font-bold mb-6 appear">
                    Our <span class="text-green-400">Solution</span>
                </h2>
                <p class="text-gray-300 mb-8 appear" style="transition-delay: 0.1s;">
                    Grevona Cloud is a specialized ERP system designed exclusively for the milling industry, addressing the unique challenges that general ERP systems can't handle.
                </p>
                
                <div class="space-y-4 appear" style="transition-delay: 0.2s;">
                    @php
                    $solutionPoints = [
                        'Purpose-built for the milling industry\'s unique needs',
                        'Streamlined workflows for grain processing and inventory',
                        'Seamless integration with milling equipment and IoT devices',
                        'Specialized reporting and analytics for mill operations',
                        'Cloud-based architecture for accessibility and scalability'
                    ];
                    @endphp
                    
                    @foreach($solutionPoints as $point)
                        <div class="flex items-start gap-3">
                            <div class="mt-1">
                                <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6 text-green-400" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path><polyline points="22 4 12 14.01 9 11.01"></polyline></svg>
                            </div>
                            <p class="text-white">{{ $point }}</p>
                        </div>
                    @endforeach
                </div>
                
                <div class="mt-10 grid grid-cols-1 sm:grid-cols-3 gap-6 appear" style="transition-delay: 0.3s;">
                    <div class="bg-space-deeper-blue bg-opacity-40 backdrop-blur-sm border border-space-light-purple border-opacity-30 rounded-lg p-4 text-center">
                        <svg xmlns="http://www.w3.org/2000/svg" class="h-10 w-10 mx-auto mb-2 text-space-light-purple" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M4.5 16.5c-1.5 1.26-2 5-2 5s3.74-.5 5-2c.71-.84.7-2.13-.09-2.91a2.18 2.18 0 0 0-2.91-.09z"></path><path d="m12 15-3-3a22 22 0 0 1 2-3.95A12.88 12.88 0 0 1 22 2c0 2.72-.78 7.5-6 11a22.35 22.35 0 0 1-4 2z"></path><path d="M9 12H4s.55-3.03 2-4c1.62-1.08 5 0 5 0"></path><path d="M12 15v5s3.03-.55 4-2c1.08-1.62 0-5 0-5"></path></svg>
                        <h4 class="text-white font-medium">Specialized</h4>
                    </div>
                    <div class="bg-space-deeper-blue bg-opacity-40 backdrop-blur-sm border border-space-light-purple border-opacity-30 rounded-lg p-4 text-center">
                        <svg xmlns="http://www.w3.org/2000/svg" class="h-10 w-10 mx-auto mb-2 text-space-light-purple" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2"></polygon></svg>
                        <h4 class="text-white font-medium">Efficient</h4>
                    </div>
                    <div class="bg-space-deeper-blue bg-opacity-40 backdrop-blur-sm border border-space-light-purple border-opacity-30 rounded-lg p-4 text-center">
                        <svg xmlns="http://www.w3.org/2000/svg" class="h-10 w-10 mx-auto mb-2 text-space-light-purple" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.77-3.77a6 6 0 0 1-7.94 7.94l-6.91 6.91a2.12 2.12 0 0 1-3-3l6.91-6.91a6 6 0 0 1 7.94-7.94l-3.76 3.76z"></path></svg>
                        <h4 class="text-white font-medium">Customizable</h4>
                    </div>
                </div>
            </div>
            
            <div class="md:w-1/2 flex justify-center order-1 md:order-2 appear" style="transition-delay: 0.4s;">
                <div class="relative w-[280px] h-[280px] perspective">
                    <x-planet-3d 
                        size="260" 
                        color="bg-green-500 bg-opacity-20" 
                        glowColor="glow"
                        rotationSpeed="20"
                    >
                        <div class="absolute inset-0 flex items-center justify-center">
                            <div class="w-3/4 h-3/4 rounded-full bg-green-400 bg-opacity-40 flex items-center justify-center">
                                <div class="w-1/2 h-1/2 rounded-full bg-green-300 bg-opacity-60 animate-pulse-glow flex items-center justify-center">
                                    <div class="w-5 h-5 rounded-full bg-green-200"></div>
                                </div>
                            </div>
                        </div>
                    </x-planet-3d>
                    
                    <div class="absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
                        <div class="w-20 h-20 bg-space-deeper-blue bg-opacity-80 backdrop-blur-sm rounded-lg flex items-center justify-center border border-green-400 border-opacity-30">
                            <svg xmlns="http://www.w3.org/2000/svg" class="h-10 w-10 text-green-400" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M4.5 16.5c-1.5 1.26-2 5-2 5s3.74-.5 5-2c.71-.84.7-2.13-.09-2.91a2.18 2.18 0 0 0-2.91-.09z"></path><path d="m12 15-3-3a22 22 0 0 1 2-3.95A12.88 12.88 0 0 1 22 2c0 2.72-.78 7.5-6 11a22.35 22.35 0 0 1-4 2z"></path><path d="M9 12H4s.55-3.03 2-4c1.62-1.08 5 0 5 0"></path><path d="M12 15v5s3.03-.55 4-2c1.08-1.62 0-5 0-5"></path></svg>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
    
    {{-- Visual elements --}}
    <div class="absolute top-1/3 left-0 w-64 h-64 bg-green-500 opacity-10 rounded-full blur-3xl"></div>
    <div class="absolute bottom-1/4 right-0 w-80 h-80 bg-green-400 opacity-5 rounded-full blur-3xl"></div>
</section>
