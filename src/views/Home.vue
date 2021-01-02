<template>
    <div class="app">
        <Navbar />
        <Home />
        <Services />
        <Portfolio />
        <PortfolioModal />
        <About />
        <Footer />
    </div>
</template>

<script>
import Navbar from "@/components/Navbar";
import Home from "@/components/Home";
import Services from "@/components/Services";
import Portfolio from "@/components/Portfolio";
import PortfolioModal from "@/components/PortfolioModal";
import About from "@/components/About";
import Footer from "@/components/Footer";

export default {
    components: {
        Navbar,
        Home,
        Services,
        Portfolio,
        PortfolioModal,
        About,
        Footer
    }
}
</script>