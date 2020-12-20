<template>
	<transition name="fade">
		<div v-show="show_bg" class="background">
			<transition appear name="fade">
				<div class="message-container" v-show="show_text">
					<span class="hello">Hello, </span>
					STATION F
					<span class="emphase">!</span>
				</div>
			</transition>
		</div>
	</transition>
</template>

<script>
export default {
	name: 'WelcomeSF',
	data() {
		return {
			show_bg: true,
			show_text: true,
		};
	},
	mounted() {
		setTimeout(() => {
			this.show_text = false;
		}, 1000);
		setTimeout(() => {
			this.show_bg = false;
		}, 1500);
	},
};
</script>

<style scoped lang="scss">
.background {
	position: fixed;
	z-index: 42;
	top: 0;
	left: 0;
	height: 100vh;
	width: 100vw;
	background-color: $light;
	display: flex;
	align-content: center;
	justify-content: center;
}
.message-container {
	@include title-1;
	color: $dark;
	margin: auto;
}
.hello {
	font-family: $font-text;
}
.emphase {
	color: $main;
}

// animations
.fade-enter-active,
.fade-leave-active {
	transition: opacity 0.5s ease-in-out;
}
.fade-enter-from,
.fade-leave-to {
	opacity: 0;
}
</style>
