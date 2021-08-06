<template>
  <a-row :gutter="20">
    <a-col :span="4">
      <Info/>
		</a-col>
		<a-col :span="16">
      <Article/>
		</a-col>
		<a-col :span="4">
			<Miscellaneous />
		</a-col>
	</a-row>
</template>

<script lang="ts">
import Info from './Info.vue';
import Article from './Article.vue'
import Miscellaneous from './Miscellaneous.vue'
import {defineComponent} from 'vue';

export default defineComponent({
  name: 'Index',
  components: {
    Info,
    Article,
    Miscellaneous
  },
});
</script>

<style scoped>

</style>
