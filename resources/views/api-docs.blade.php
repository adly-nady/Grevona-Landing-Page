
@extends('layouts.app')

@section('content')
    <x-navbar />
    
    <x-section.hero />
    
    <x-section.problem />
    
    <x-section.solution />
    
    <x-section.advantages />
    
    {{-- Add the remaining sections when implemented --}}
    
    {{-- Footer --}}
    <footer class="py-10 relative z-10">
        <div class="container mx-auto px-4 text-center">
            <p class="text-gray-400">© 2025 Grevona Cloud. All rights reserved.</p>
            <p class="text-gray-500 text-sm mt-2">A graduation project that redefines ERP for the milling industry.</p>
        </div>
    </footer>
@endsection
