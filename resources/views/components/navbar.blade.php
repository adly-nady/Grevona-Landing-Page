
<nav 
    x-data="{ isScrolled: false, isMobileMenuOpen: false }"
    x-init="window.addEventListener('scroll', () => { isScrolled = window.scrollY > 20; })"
    :class="isScrolled ? 'bg-space-darker-blue bg-opacity-80 backdrop-blur-md' : 'bg-transparent'"
    class="fixed top-0 left-0 w-full py-4 px-6 z-50 transition-all duration-300"
>
    <div class="container mx-auto flex justify-between items-center">
        <a href="#" class="text-xl font-bold text-white flex items-center gap-2">
            <span class="inline-block w-8 h-8 rounded-full bg-space-nebula-pink glow-pink"></span>
            Grevona
        </a>
        
        {{-- Desktop Menu --}}
        <div class="hidden md:flex gap-8">
            @foreach(['Problem' => '#problem', 'Solution' => '#solution', 'Advantages' => '#advantages', 'UI/UX' => '#uiux', 'Team' => '#team'] as $name => $href)
                <a 
                    href="{{ $href }}"
                    class="text-gray-300 hover:text-white transition-colors relative group"
                >
                    {{ $name }}
                    <span class="absolute bottom-0 left-0 w-0 h-0.5 bg-space-nebula-pink transition-all duration-300 group-hover:w-full"></span>
                </a>
            @endforeach
        </div>
        
        <button class="hidden md:block bg-transparent border border-space-light-purple text-white hover:bg-space-light-purple hover:text-space-deep-blue transition-all">
            Contact
        </button>
        
        {{-- Mobile Menu Button --}}
        <button 
            class="md:hidden text-white"
            @click="isMobileMenuOpen = !isMobileMenuOpen"
        >
            <template x-if="isMobileMenuOpen">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><line x1="18" y1="6" x2="6" y2="18"></line><line x1="6" y1="6" x2="18" y2="18"></line></svg>
            </template>
            <template x-if="!isMobileMenuOpen">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><line x1="3" y1="12" x2="21" y2="12"></line><line x1="3" y1="6" x2="21" y2="6"></line><line x1="3" y1="18" x2="21" y2="18"></line></svg>
            </template>
        </button>
    </div>
    
    {{-- Mobile Menu --}}
    <div 
        x-show="isMobileMenuOpen"
        x-transition
        class="md:hidden fixed inset-0 top-16 bg-space-darker-blue bg-opacity-95 backdrop-blur-md z-40 flex flex-col p-6"
    >
        @foreach(['Problem' => '#problem', 'Solution' => '#solution', 'Advantages' => '#advantages', 'UI/UX' => '#uiux', 'Team' => '#team'] as $name => $href)
            <a 
                href="{{ $href }}"
                class="text-white text-lg py-4 border-b border-gray-700"
                @click="isMobileMenuOpen = false"
            >
                {{ $name }}
            </a>
        @endforeach
        <button class="mt-6 bg-space-light-purple text-space-deep-blue hover:bg-space-nebula-pink">
            Contact
        </button>
    </div>
</nav>
