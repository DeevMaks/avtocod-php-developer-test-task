<!DOCTYPE html>
<html lang="{{ config('app.locale') }}">
<head>
    @include('layouts.partials.html_header')
</head>

<body>
    <div id="app">

        @include('layouts.partials.main_header')

        @yield('main_content')

        @section('scripts')
            @include('layouts.partials.scripts')
        @show

    </div>
</body>
</html>
