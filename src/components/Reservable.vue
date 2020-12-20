<template>
	<div class="container">
		<div>
			<h2>Salle {{ room.name }}</h2>
			<h3>Capacité: {{ room.capacity }}, Equipments: {{ room.equipments }}</h3>
			<p>{{ room.description }}</p>
		</div>
		<a-button @click="$emit('reserve', room)">je la réserve</a-button>
	</div>
</template>

<script>
export default {
	name: 'Reservable',
	props: ['room'],
};
</script>

<style scoped lang="scss">
.container {
	@include container;
	width: calc(100% - 52px);
	display: flex;
	flex-direction: row;
	flex-wrap: wrap;
	justify-content: space-between;
	align-items: center;
}

h2 {
	@include title-2;
	margin-bottom: 0;
}

h3 {
	@include title-3;
}

p {
	@include text-2;
}
</style>
