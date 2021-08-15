<template>
  <div class="container mx-auto px-4 sm:px-6 lg:px-8">
    <div class="relative h-screen flex overflow-hidden bg-gray-100">
      <MobileMenu :mobilemenu="mobilemenu" @click="mobilemenu = false" />
      <DesktopSidebar />
      <div class="flex-1 overflow-auto focus:outline-none">
        <TopHeader @click="mobilemenu = true" />
        <Nuxt />
      </div>
    </div>
  </div>
</template>
<script>
import DesktopSidebar from "@/layouts/partials/header/DesktopSidebar";
import MobileMenu from "@/layouts/partials/header/MobileMenu";
import TopHeader from "@/layouts/partials/header/TopHeader";

export default {
  data() {
    return {
      mobilemenu: false
    };
  },
  components: {
    DesktopSidebar,
    MobileMenu,
    TopHeader
  }
};
</script>
