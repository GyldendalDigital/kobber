<template>
	<button @click="add">Vue button clicked {{ count }} times</button>
</template>
  
<script>
export default {
	data() {
		return {
			count: 0,
		};
	},
	methods: {
		add() {
			this.count++;
		}
	},
};
</script>