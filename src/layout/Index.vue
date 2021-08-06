<template>
  <Header />
  <AppMain />
  <Footer />
</template>

<script>
import {Options, Vue} from 'vue-class-component';
import Header from './Header.vue';
import AppMain from './AppMain.vue';
import Footer from './Footer.vue';

@Options({
  components: {
    Header,
    AppMain,
    Footer
  },
})
export default class Layout extends Vue {
}
</script>

<style scoped>

</style>
