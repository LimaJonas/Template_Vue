<template>
    <div class="app">
        <Navbar />
        <Home />
        <Services />
        <Footer />
    </div>
</template>

<script>
import Navbar from "@/components/Navbar";
import Home from "@/components/Home";
import Services from "@/components/Services";
import Footer from "@/components/Footer";

export default {
    components: {
        Navbar,
        Home,
        Services,
        Footer
    }
}
</script>