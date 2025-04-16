
<!DOCTYPE html>
<html lang="{{ str_replace('_', '-', app()->getLocale()) }}">
<head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <meta name="csrf-token" content="{{ csrf_token() }}">

    <title>{{ config('app.name', 'Grevona Cloud') }}</title>

    <!-- Fonts -->
    <link rel="preconnect" href="https://fonts.googleapis.com">
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
    <link href="https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;500;600;700&display=swap" rel="stylesheet">

    <!-- Scripts -->
    @vite(['resources/css/app.css', 'resources/js/app.js'])
    
    <!-- Alpine.js -->
    <script defer src="https://cdn.jsdelivr.net/npm/alpinejs@3.12.0/dist/cdn.min.js"></script>
    
    <style>
        /* Space animations */
        @keyframes orbit {
            from { transform: rotate(0deg) translateX(var(--distance)) rotate(0deg); }
            to { transform: rotate(360deg) translateX(var(--distance)) rotate(-360deg); }
        }
        
        @keyframes orbit-reverse {
            from { transform: rotate(0deg) translateX(var(--distance)) rotate(0deg); }
            to { transform: rotate(-360deg) translateX(var(--distance)) rotate(360deg); }
        }
        
        @keyframes shooting-star {
            0% { 
                transform: translateX(0) translateY(0);
                opacity: 0; 
            }
            10% { opacity: 1; }
            70% { opacity: 1; }
            100% { 
                transform: translateX(300px) translateY(300px);
                opacity: 0; 
            }
        }
        
        @keyframes pulse-glow {
            0% { opacity: 0.6; }
            50% { opacity: 1; }
            100% { opacity: 0.6; }
        }
        
        @keyframes rotate-slow {
            from { transform: rotate(0deg); }
            to { transform: rotate(360deg); }
        }
        
        /* Perspective helpers */
        .perspective {
            perspective: 1000px;
        }
        
        .preserve-3d {
            transform-style: preserve-3d;
        }
        
        /* Animation utility classes */
        .animate-pulse-glow {
            animation: pulse-glow 2s ease-in-out infinite;
        }
        
        .animate-rotate-slow {
            animation: rotate-slow 20s linear infinite;
        }
        
        .animate-shooting-star {
            animation: shooting-star 5s linear infinite;
        }
        
        /* Glow effects */
        .glow-purple {
            box-shadow: 0 0 15px 5px rgba(155, 135, 245, 0.3);
        }
        
        .glow-pink {
            box-shadow: 0 0 15px 5px rgba(245, 135, 200, 0.3);
        }
        
        /* Appearing elements */
        .appear {
            opacity: 0;
            transform: translateY(30px);
            transition: opacity 0.8s ease, transform 0.8s ease;
        }
        
        .appear.visible {
            opacity: 1;
            transform: translateY(0);
        }
    </style>
</head>
<body class="font-sans antialiased bg-space-deep-blue text-white min-h-screen">
    <div class="relative">
        <x-space-background />
        
        <main>
            @yield('content')
        </main>
    </div>
</body>
</html>
