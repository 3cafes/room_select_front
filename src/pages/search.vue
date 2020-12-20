<template>
	<div class="room-select">
		<RoomSelectorForm
			class=".room-form"
			v-bind:equipments="equipments"
			@validate="onSearch"
		></RoomSelectorForm>
		<div class="reservable-container">
			<h1>#BEST SALLE</h1>
			<reservable :room="room"></reservable>
		</div>
		<div class="reservable-container">
			<h1>MAIS AUSSI</h1>
			<template v-for="result in other_search_results" :key="result.id">
				<reservable :room="room"></reservable>
				<div class="reservable-spacer"></div>
			</template>
		</div>
	</div>
</template>

<script>
import RoomSelectorForm from '@/components/RoomSelectorForm';
import { get_equipments } from '@/api/equipments';
import Reservable from '../components/Reservable.vue';

export default {
	name: 'Search',
	components: {
		RoomSelectorForm,
		Reservable,
	},
	data: () => ({
		equipments: [],
		best_result: [],
		other_search_results: [1, 2, 3],
		room: {
			name: 'hello',
			capacity: 23,
			equipments: ['un truc', 'un autre'],
			description:
				'a a klekmfek mkl mrk lmrgk lmrkg mze ùzkaù kke fj bkjhf oji fepofk opf koe ajofpezk foz*e k',
		},
	}),
	mounted() {
		get_equipments()
			.then((equipments) => {
				this.equipments = equipments;
			})
			.catch(() => {});
	},
	methods: {
		onSearch() {
			console.log('from on validate!');
		},
	},
};
</script>

<style scoped lang="scss">
.reservable-container {
	width: calc(100% - 54px);
	max-width: 1200px;
	margin-top: 89px;
}
.reservable-spacer {
	height: 21px;
}
h1 {
	@include title-1;
}
</style>
