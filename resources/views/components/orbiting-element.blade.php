
@props([
    'size' => 20,
    'distance' => 100,
    'duration' => 20,
    'color' => 'bg-space-light-purple',
    'startPosition' => 0,
    'reverse' => false,
    'class' => ''
])

<div class="absolute inset-0 flex items-center justify-center pointer-events-none">
    <div class="orbit-path absolute" style="width: {{ $distance * 2 }}px; height: {{ $distance * 2 }}px;"></div>
    <div 
        class="absolute rounded-full flex items-center justify-center {{ $color }} {{ $class }}" 
        style="
            transform: rotate({{ $startPosition }}deg) translateX({{ $distance }}px) rotate(-{{ $startPosition }}deg);
            animation: {{ $reverse ? 'orbit-reverse' : 'orbit' }} {{ $duration }}s linear infinite;
            animation-delay: -{{ ($startPosition / 360) * $duration }}s;
            width: {{ $size }}px;
            height: {{ $size }}px;
        "
    >
        {{ $slot ?? '' }}
    </div>
</div>
