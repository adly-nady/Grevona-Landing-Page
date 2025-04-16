
<section 
    id="advantages" 
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
        <div class="text-center mb-16 relative">
            <div class="inline-block relative">
                <h2 class="text-3xl md:text-5xl font-bold mb-6 appear">
                    Key <span class="text-space-light-purple">Advantages</span>
                </h2>
                <div class="absolute -top-10 -right-16 w-20 h-20">
                    <div class="relative w-full h-full">
                        <x-orbiting-element 
                            size="12" 
                            distance="30" 
                            duration="10" 
                            color="bg-space-light-purple" 
                            class="glow-purple"
                        />
                    </div>
                </div>
            </div>
            <p class="text-gray-300 max-w-3xl mx-auto appear" style="transition-delay: 0.1s;">
                Grevona Cloud offers substantial advantages over generic ERP systems, delivering value specifically tailored to the milling industry.
            </p>
        </div>
        
        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            @php
            $advantages = [
                [
                    'icon' => 'trending-up',
                    'title' => '40% Increased Efficiency',
                    'description' => 'Purpose-built workflows reduce manual processes and streamline operations.'
                ],
                [
                    'icon' => 'clock',
                    'title' => '50% Faster Implementation',
                    'description' => 'No need for extensive customizations means quicker deployment.'
                ],
                [
                    'icon' => 'coins',
                    'title' => '35% Cost Reduction',
                    'description' => 'Lower implementation costs and reduced need for specialized consultants.'
                ],
                [
                    'icon' => 'bar-chart-2',
                    'title' => 'Enhanced Analytics',
                    'description' => 'Mill-specific reports and dashboards provide actionable insights.'
                ],
                [
                    'icon' => 'shield-check',
                    'title' => 'Compliance Built-in',
                    'description' => 'Industry-specific compliance features are integrated from the start.'
                ],
                [
                    'icon' => 'thumbs-up',
                    'title' => 'Intuitive User Experience',
                    'description' => 'Designed with millers in mind for a natural workflow.'
                ]
            ];
            @endphp
            
            @foreach($advantages as $index => $advantage)
                <div 
                    class="bg-space-deeper-blue bg-opacity-40 backdrop-blur-sm border border-space-light-purple border-opacity-20 overflow-hidden group hover:border-space-light-purple transition-all duration-300 appear rounded-lg" 
                    style="transition-delay: {{ 0.2 + $index * 0.1 }}s;"
                >
                    <div class="p-6">
                        <div class="w-16 h-16 rounded-full bg-space-light-purple bg-opacity-10 flex items-center justify-center mb-6 mx-auto group-hover:bg-opacity-20 transition-all duration-300">
                            @if($advantage['icon'] == 'trending-up')
                                <svg xmlns="http://www.w3.org/2000/svg" class="h-10 w-10 text-space-light-purple" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polyline points="23 6 13.5 15.5 8.5 10.5 1 18"></polyline><polyline points="17 6 23 6 23 12"></polyline></svg>
                            @elseif($advantage['icon'] == 'clock')
                                <svg xmlns="http://www.w3.org/2000/svg" class="h-10 w-10 text-space-light-purple" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="10"></circle><polyline points="12 6 12 12 16 14"></polyline></svg>
                            @elseif($advantage['icon'] == 'coins')
                                <svg xmlns="http://www.w3.org/2000/svg" class="h-10 w-10 text-space-light-purple" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="8" cy="8" r="6"></circle><path d="M18.09 10.37A6 6 0 1 1 10.34 18"></path><path d="M7 6h1v4"></path><path d="m16.71 13.88.7.71-2.82 2.82"></path></svg>
                            @elseif($advantage['icon'] == 'bar-chart-2')
                                <svg xmlns="http://www.w3.org/2000/svg" class="h-10 w-10 text-space-light-purple" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><line x1="18" y1="20" x2="18" y2="10"></line><line x1="12" y1="20" x2="12" y2="4"></line><line x1="6" y1="20" x2="6" y2="14"></line></svg>
                            @elseif($advantage['icon'] == 'shield-check')
                                <svg xmlns="http://www.w3.org/2000/svg" class="h-10 w-10 text-space-light-purple" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M20 13c0 5-3.5 7.5-8 9.5-4.5-2-8-4.5-8-9.5V6.75c0-1.33.774-2.54 1.978-3.094L11.5 1 17 3.75A3.33 3.33 0 0 1 20 6.75V13"></path><path d="m9 11 2 2 4-4"></path></svg>
                            @elseif($advantage['icon'] == 'thumbs-up')
                                <svg xmlns="http://www.w3.org/2000/svg" class="h-10 w-10 text-space-light-purple" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M7 10v12"></path><path d="M15 5.88 14 10h5.83a2 2 0 0 1 1.92 2.56l-2.33 8A2 2 0 0 1 17.5 22H4a2 2 0 0 1-2-2v-8a2 2 0 0 1 2-2h2.76a2 2 0 0 0 1.79-1.11L12 2h0a3.13 3.13 0 0 1 3 3.88Z"></path></svg>
                            @endif
                        </div>
                        <h3 class="text-xl font-semibold mb-4 text-white text-center">{{ $advantage['title'] }}</h3>
                        <p class="text-gray-400 text-center">{{ $advantage['description'] }}</p>
                    </div>
                </div>
            @endforeach
        </div>
        
        <div class="mt-16 p-8 bg-space-light-purple bg-opacity-5 border border-space-light-purple border-opacity-20 rounded-lg text-center appear" style="transition-delay: 0.8s;">
            <p class="text-white text-lg font-medium mb-2">
                "Grevona Cloud is transforming how we operate our mill. The specialized features have increased our productivity by 45%."
            </p>
            <p class="text-space-light-purple">- John Miller, Operations Director at MillTech Industries</p>
        </div>
    </div>
    
    {{-- Visual elements --}}
    <div class="absolute top-1/4 left-0 w-80 h-80 bg-space-light-purple opacity-5 rounded-full blur-3xl"></div>
    <div class="absolute bottom-1/3 right-0 w-96 h-96 bg-space-nebula-pink opacity-5 rounded-full blur-3xl"></div>
</section>
