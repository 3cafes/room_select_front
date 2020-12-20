<template>
	<div class="container">
		<h2>{{ message }}</h2>
		<a-button @click="$emit('click')">{{ button_message }}</a-button>
	</div>
</template>

<script>
export default {
	name: 'ReservationError',
	props: ['message', 'button_message'],
};
</script>

<style scoped lang="scss">
.container {
	@include container;
	width: calc(100% - 52px);
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
}

h2 {
	@include title-2;
	margin-bottom: 0;
}
</style>
