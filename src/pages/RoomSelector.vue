<template>
	<div class="container">
		<h1>Reservez une sale</h1>
		<div class="form-container">
			<a-form
				ref="form"
				:model="form"
				:rules="rules"
				:label-col="{ span: 7 }"
				:wrapper-col="{ span: 13 }"
			>
				<a-form-item label="date" required name="date">
					<a-date-picker v-model:value="form.date1" placeholder="date" />
				</a-form-item>
				<a-form-item label="durée" required name="hours">
					<a-time-picker
						v-model:value="form.from"
						placeholder="début"
						format="HH\h mm"
						:minute-step="15"
					></a-time-picker>
					à
					<a-time-picker
						v-model:value="form.to"
						placeholder="fin"
						format="HH\h mm"
						:minute-step="15"
					></a-time-picker>
				</a-form-item>
				<a-form-item label="Equipement">
					<a-checkbox-group v-model:value="form.equipments">
						<a-checkbox value="1" name="equipments">
							TV
						</a-checkbox>
						<a-checkbox value="2" name="equipments">
							Vidéo projecteur
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
export default {
	name: 'RoomSelector',
	data() {
		// const validateHours = () => {
		// 	this.$refs.from;
		// 	this.$refs.to;
		// 	return false;
		// };

		return {
			form: {
				date: undefined,
				from: undefined,
				to: undefined,
				equiments: [],
			},
			rules: {
				date: [
					{
						required: true,
						message: 'Please pick a date',
						type: 'object',
					},
				],
				hours: [{ required: true, message: 'please select hours' }],
			},
		};
	},
	methods: {
		onSubmit() {
			this.$refs.form
				.validate()
				.then(() => {
					console.log('values', this.form);
				})
				.catch((error) => {
					console.log('error', error);
				});
			console.log(this.form);
		},
	},
};
</script>

<style scoped lang="scss">
.container {
	margin: 25px;
	padding: 25px;
	box-shadow: -25px 25px;
	border: solid;
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
