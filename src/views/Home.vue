<template>
    <div class="app">
        <Navbar />
        <Home />
        <Footer />
    </div>
</template>

<script>
import Navbar from "@/components/Navbar";
import Home from "@/components/Home";
import Footer from "@/components/Footer";

export default {
    components: {
        Navbar,
        Home,
        Footer
    }
}
</script>