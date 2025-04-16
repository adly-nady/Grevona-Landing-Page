
<section 
    id="problem" 
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
        <div class="text-center mb-16">
            <h2 class="text-3xl md:text-5xl font-bold mb-6 appear">
                <span class="text-red-500">Problem</span> Statement
            </h2>
            <p class="text-gray-300 max-w-3xl mx-auto appear" style="transition-delay: 0.1s;">
                The milling industry faces unique challenges that standard ERP systems are not equipped to handle, leading to inefficiencies and missed opportunities.
            </p>
        </div>
        
        <div class="grid grid-cols-1 md:grid-cols-3 gap-8">
            @php
            $problems = [
                [
                    'icon' => 'alert-triangle',
                    'title' => 'Generic Solutions',
                    'description' => 'Existing ERP systems like Odoo and SAP are designed for general business processes and lack specialized features for the milling industry.'
                ],
                [
                    'icon' => 'bug',
                    'title' => 'Inefficient Workflows',
                    'description' => 'Mills require specific workflows for grain processing, quality control, and inventory management that generic ERPs struggle to accommodate.'
                ],
                [
                    'icon' => 'x-octagon',
                    'title' => 'Complex Customizations',
                    'description' => 'Adapting general ERP systems for mills requires extensive, costly customizations that often result in bloated, hard-to-maintain solutions.'
                ]
            ];
            @endphp
            
            @foreach($problems as $index => $problem)
                <div class="bg-space-deeper-blue bg-opacity-40 backdrop-blur-sm border border-gray-800 rounded-lg overflow-hidden appear" style="transition-delay: {{ 0.2 + $index * 0.1 }}s;">
                    <div class="p-6">
                        <div class="w-16 h-16 rounded-full bg-red-500 bg-opacity-10 flex items-center justify-center mb-6 mx-auto">
                            @if($problem['icon'] == 'alert-triangle')
                                <svg xmlns="http://www.w3.org/2000/svg" class="h-10 w-10 text-red-500" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="m21.73 18-8-14a2 2 0 0 0-3.48 0l-8 14A2 2 0 0 0 4 21h16a2 2 0 0 0 1.73-3Z"></path><path d="M12 9v4"></path><path d="M12 17h.01"></path></svg>
                            @elseif($problem['icon'] == 'bug')
                                <svg xmlns="http://www.w3.org/2000/svg" class="h-10 w-10 text-red-500" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="m8 2 1.88 1.88"></path><path d="M14.12 3.88 16 2"></path><path d="M9 7.13v-1a3.003 3.003 0 1 1 6 0v1"></path><path d="M12 20c-3.3 0-6-2.7-6-6v-3a4 4 0 0 1 4-4h4a4 4 0 0 1 4 4v3c0 3.3-2.7 6-6 6"></path><path d="M12 20v-9"></path><path d="M6.53 9C4.6 8.8 3 7.1 3 5"></path><path d="M6 13H2"></path><path d="M3 21c0-2.1 1.7-3.9 3.8-4"></path><path d="M20.97 5c0 2.1-1.6 3.8-3.5 4"></path><path d="M22 13h-4"></path><path d="M17.2 17c2.1.1 3.8 1.9 3.8 4"></path></svg>
                            @elseif($problem['icon'] == 'x-octagon')
                                <svg xmlns="http://www.w3.org/2000/svg" class="h-10 w-10 text-red-500" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polygon points="7.86 2 16.14 2 22 7.86 22 16.14 16.14 22 7.86 22 2 16.14 2 7.86 7.86 2"></polygon><path d="m15 9-6 6"></path><path d="m9 9 6 6"></path></svg>
                            @endif
                        </div>
                        <h3 class="text-xl font-semibold mb-4 text-white text-center">{{ $problem['title'] }}</h3>
                        <p class="text-gray-400 text-center">{{ $problem['description'] }}</p>
                    </div>
                </div>
            @endforeach
        </div>
        
        <div class="mt-16 p-8 bg-red-500 bg-opacity-5 border border-red-500 border-opacity-20 rounded-lg appear" style="transition-delay: 0.5s;">
            <p class="text-white text-center leading-relaxed">
                Mills spend <span class="text-red-400 font-bold">30-40%</span> more on ERP implementation and customization than necessary due to the lack of industry-specific solutions. This leads to prolonged timelines, increased costs, and decreased operational efficiency.
            </p>
        </div>
    </div>
    
    {{-- Visual elements --}}
    <div class="absolute top-1/4 right-20 w-32 h-32 bg-red-500 opacity-10 rounded-full blur-3xl"></div>
    <div class="absolute bottom-1/3 left-0 w-64 h-64 bg-red-500 opacity-5 rounded-full blur-3xl"></div>
</section>
