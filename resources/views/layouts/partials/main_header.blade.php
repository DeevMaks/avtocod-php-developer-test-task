<nav class="navbar navbar-default">
    <div class="container">
        <div class="navbar-header">
            <a class="navbar-brand" href="{{ route('home') }}">Avtocod | Стена сообщений</a>
        </div>
        @guest
            <ul class="nav navbar-nav">
                <li class="active"><a href="{{ route('home') }}">Главная</a></li>
                <li><a href="{{ route('login') }}">Авторизация</a></li>
                <li><a href="{{ route('register') }}">Регистрация</a></li>
            </ul>
        @endguest
        @auth
            <form id="logout-form" action="{{ route('logout') }}" method="POST" style="display: none;">{{ csrf_field() }}</form>
            <ul class="nav navbar-nav navbar-right">
                <li class="navbar-text"><span class="glyphicon glyphicon-user"></span> {{ Auth::user()->name }}</li>
                <li><a href="#"
                onclick="event.preventDefault(); document.getElementById('logout-form').submit();"><span class="glyphicon glyphicon-log-out"></span> Выход</a></li>
                {{-- @todo  --}}
            </ul>
        @endauth
    </div>
</nav>
