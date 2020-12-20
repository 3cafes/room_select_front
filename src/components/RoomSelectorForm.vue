<template>
	<div class="container">
		<h1>Reservez une salle</h1>
		<div class="form-container">
			<a-form
				ref="form"
				:model="form"
				:rules="rules"
				:label-col="{ span: 7 }"
				:wrapper-col="{ span: 13 }"
			>
				<a-form-item label="date" required name="date">
					<a-date-picker v-model:value="form.date" placeholder="date" />
				</a-form-item>
				<a-form-item label="début" required name="from">
					<a-time-picker
						v-model:value="form.from"
						placeholder="début"
						format="HH\h mm"
						:minute-step="15"
					></a-time-picker>
				</a-form-item>
				<a-form-item label="fin" required name="to">
					<a-time-picker
						v-model:value="form.to"
						placeholder="fin"
						format="HH\h mm"
						:minute-step="15"
					></a-time-picker>
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
export default {
	name: 'RoomSelector',
	props: ['equipments'],
	data() {
		return {
			form: {
				date: undefined,
				from: undefined,
				to: undefined,
				equipments: [],
			},
			rules: {
				date: [
					{
						required: true,
						message: 'Please pick a date',
						type: 'object',
					},
				],
				from: [
					{
						required: true,
						message: "sélectionnez l'heure de début",
						type: 'object',
					},
				],
				to: [
					{
						required: true,
						message: "sélectionnez l'heure de fin",
						type: 'object',
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
