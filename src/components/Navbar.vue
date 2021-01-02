<template>
    <nav class="navbar navbar-expand-lg bg-dark fixed-top" id="mainNav">
        <div class="container">
            <a class="navbar-brand js-scroll-trigger" href="#page-top"><img src="@/assets/navbar-logo.svg" alt="" /></a>
            <button class="navbar-toggler navbar-toggler-right" type="button" data-toggle="collapse" data-target="#navbarResponsive" aria-controls="navbarResponsive" aria-expanded="false" aria-label="Toggle navigation">
                Menu
                <i class="fas fa-bars ml-1"></i>
            </button>
            <div class="collapse navbar-collapse" id="navbarResponsive">
                <ul class="navbar-nav text-uppercase ml-auto">
                    <li class="nav-item"><router-link :to="{ name: 'Services' }"><a class="nav-link js-scroll-trigger">Services</a></router-link></li>
                    <li class="nav-item"><router-link :to="{ name: 'Portfolio' }"><a class="nav-link js-scroll-trigger">Portfolio</a></router-link></li>
                    <li class="nav-item"><router-link :to="{ name: 'About' }"><a class="nav-link js-scroll-trigger">About</a></router-link></li>
                    <li class="nav-item"><router-link :to="{ name: 'Contact' }"><a class="nav-link js-scroll-trigger">Contact</a></router-link></li>
                </ul>
            </div>
        </div>
    </nav>
</template>