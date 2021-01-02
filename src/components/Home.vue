<template>
    <header class="masthead">
        <div class="container">
            <div class="masthead-subheading">Welcome To Our Studio!</div>
            <div class="masthead-heading text-uppercase">It's Nice To Meet You</div>
            <router-link :to="{ name: 'Services' }"><a class="btn btn-primary btn-xl text-uppercase js-scroll-trigger">Tell Me More</a></router-link>
        </div>
    </header>
</template>

<style>
header.masthead {
    background-image: url("../assets/header-bg.jpg");
}
</style>