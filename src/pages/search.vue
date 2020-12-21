<template>
	<div class="notification">
		<a-alert
			v-if="notification.show"
			:message="notification.message"
			:type="notification.type"
			closable
			:after-close="closeNotification"
		/>
	</div>
	<div class="room-select">
		<RoomSelectorForm
			class=".room-form"
			v-bind:equipments="equipments"
			@validate="onSearch"
		></RoomSelectorForm>
		<div v-if="best_result != undefined" class="reservable-container">
			<h1>#BEST SALLE</h1>
			<reservable :room="best_result" @reserve="onReserve"></reservable>
		</div>
		<div
			v-if="other_search_results && other_search_results.length >= 1"
			class="reservable-container"
		>
			<h1>MAIS AUSSI</h1>
			<template v-for="room in other_search_results" :key="room.id">
				<reservable :room="room" @reserve="onReserve"></reservable>
				<div class="reservable-spacer"></div>
			</template>
		</div>
		<ReservationError
			v-if="reservation != undefined && best_result == undefined"
			message="aucune salle ne corespond à votre recherche"
			button_message="réessayer"
			@click="resetResults"
		></ReservationError>
	</div>
</template>

<script>
import RoomSelectorForm from '@/components/RoomSelectorForm';
import { get_equipments } from '@/api/equipment';
import { search_room_available, reserve_room } from '@/api/reservation';
import Reservable from '@/components/Reservable.vue';
import ReservationError from '@/components/ReservationError.vue';
import Ant from 'ant-design-vue';

export default {
	name: 'Search',
	components: {
		RoomSelectorForm,
		Reservable,
		ReservationError,
	},
	data: () => ({
		notification: { show: false, type: 'success', message: ':)' },
		equipments: [],
		best_result: undefined,
		other_search_results: undefined,
		reservation: undefined,
	}),
	mounted() {
		get_equipments()
			.then((equipments) => {
				this.equipments = equipments;
			})
			.catch(() => {});
	},
	methods: {
		closeNotification() {
			this.notification.show = false;
		},
		showNotification({ success, message }) {
			this.notification.show = true;
			this.notification.message = message;
			if (success) {
				this.notification.type = 'success';
			} else {
				this.notification.type = 'error';
			}
		},
		resetResults() {
			this.reservation = undefined;
			this.best_result = undefined;
			this.other_search_results = undefined;
		},
		onSearch(search) {
			this.reservation = {
				date: search.date.format('YYYY-MM-DD'),
				from: search.from.format('HH:mm'),
				to: search.to.format('HH:mm'),
				capacity: search.capacity,
				equipments: search.equipments,
			};
			search_room_available(
				this.reservation.date,
				this.reservation.from,
				this.reservation.to,
				this.reservation.capacity,
				this.reservation.equipments
			)
				.then(({ rooms }) => {
					console.log(rooms);
					this.best_result = rooms[0];
					this.other_search_results = rooms.slice(1);
				})
				.catch(({ message }) => {
					this.resetResults();
				});
		},
		onReserve(room) {
			console.log('reserve room ', room.name);
			reserve_room(
				room.name,
				this.reservation.date,
				this.reservation.from,
				this.reservation.to
			)
				.then(this.showNotification)
				.catch(this.showNotification)
				.finally(() => {
					this.resetResults();
				});
		},
	},
};
</script>

<style scoped lang="scss">
.notification {
	z-index: 1;
	position: absolute;
	top: 76px;
	right: 13px;
	max-width: 300px;
}
.reservable-container {
	width: calc(100% - 54px);
	max-width: 1200px;
	margin-top: 54px;
}
.reservable-spacer {
	height: 21px;
}
h1 {
	@include title-1;
}
</style>
