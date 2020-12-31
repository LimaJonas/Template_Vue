<template>
    <div class="app">
        <Navbar />
        <Home />
    </div>
</template>

<script>
import Navbar from "@/components/Navbar";
import Home from "@/components/Home";

export default {
    components: {
        Navbar,
        Home,
    }
}
</script>