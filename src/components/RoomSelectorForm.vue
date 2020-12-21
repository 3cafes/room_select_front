<template>
	<div class="container">
		<h1>RESERVEZ UNE SALLE</h1>
		<div class="form-container">
			<a-form
				ref="form"
				:model="form"
				:rules="rules"
				:label-col="{ span: 7 }"
				:wrapper-col="{ span: 13 }"
			>
				<a-form-item label="date" name="date">
					<a-date-picker v-model:value="form.date" placeholder="date" />
				</a-form-item>
				<a-form-item label="début" name="from">
					<a-time-picker
						v-model:value="form.from"
						placeholder="début"
						format="HH\h mm"
						:minute-step="30"
					></a-time-picker>
				</a-form-item>
				<a-form-item label="fin" name="to">
					<a-time-picker
						v-model:value="form.to"
						placeholder="fin"
						format="HH\h mm"
						:minute-step="30"
					></a-time-picker>
				</a-form-item>
				<a-form-item label="places" name="capacity">
					<a-input-number
						id="inputNumber"
						v-model:value="form.capacity"
						:min="1"
						:max="442"
						placeholder="persones"
					></a-input-number>
				</a-form-item>
				<a-form-item v-if="equipments != []" label="Equipement">
					<a-checkbox-group v-model:value="form.equipments">
						<a-checkbox
							v-for="equipment in equipments"
							v-bind:key="equipment"
							v-bind:value="equipment"
							name="equipments"
						>
							{{ equipment }}
						</a-checkbox>
					</a-checkbox-group>
				</a-form-item>
			</a-form>
		</div>
		<a-button class="submit-button" type="primary" @click="onSubmit">
			Rechercher une salle !
		</a-button>
	</div>
</template>

<script>
import moment from 'moment';

export default {
	name: 'RoomSelector',
	props: ['equipments'],
	data() {
		const validate_hours = async (rule, value) => {
			if (!value) {
				return Promise.reject(`vous devez renseigner une heure`);
			}
			const h = value.hours();
			if (h < 9) {
				return Promise.reject(`STATION F n'ouvre pas avant 9h00!`);
			} else if (h >= 23 && value.minutes() > 0) {
				return Promise.reject(`STATION F ferme à 23h00!`);
			}
			Promise.resolve();
		};
		const validate_from = async (rule, value) => {
			if (this.form.from.isAfter(this.form.to)) {
				return Promise.reject(
					"L'heure de début ne peut pas être supérieure à l'heure de fin"
				);
			}
			Promise.resolve();
		};
		const validate_to = async (rule, value) => {
			if (this.form.to.isBefore(this.form.from)) {
				return Promise.reject(
					"L'heure de fin ne peut pas être inférieure à l'heure de début"
				);
			}
			Promise.resolve();
		};

		return {
			form: {
				date: moment(),
				from: moment('09:00', 'HH:mm'),
				to: moment('23:00', 'HH:mm'),
				capacity: 1,
				equipments: [],
			},
			rules: {
				date: [
					{
						required: true,
						message: 'vous devez choisir une date',
						type: 'object',
					},
				],
				from: [
					{
						trigger: 'change',
						validator: validate_hours,
					},
					{
						trigger: 'change',
						validator: validate_from,
					},
				],
				to: [
					{
						trigger: 'change',
						validator: validate_hours,
					},
					{
						trigger: 'change',
						validator: validate_to,
					},
				],
				capacity: [
					{
						required: true,
						message: 'séléctionnez le nombre de personnes',
						type: 'number',
					},
				],
			},
		};
	},
	methods: {
		onSubmit() {
			this.$refs.form
				.validate()
				.then(() => {
					this.$emit('validate', this.form);
				})
				.catch(() => {
					console.log('RoomSelector: error');
				});
		},
	},
};
</script>

<style scoped lang="scss">
.container {
	@include container;
	max-width: 500px;
	text-align: center;
}
h1 {
	@include title-hero;
}
.form-container {
	text-align: left;
}
</style>
