<template>
  <a-row :gutter="20">
    <a-col :span="20">
      <Details />
		</a-col>
		<a-col :span="4">
      <Miscellaneous />
		</a-col>
	</a-row>
</template>

<script>
import Details from "./Details";
import Miscellaneous from "./Miscellaneous";
import {defineComponent} from "vue";

export default defineComponent({
  name: "Index",
  components:{
    Details,
    Miscellaneous
  }
})
</script>

<style scoped>

</style>
