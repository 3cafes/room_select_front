<template>
	<!-- <WelcomeSF /> -->
	<Header></Header>
	<div class="room-select">
		<RoomSelector class=".room-form"></RoomSelector>
	</div>
</template>

<script>
// import WelcomeSF from './components/WelcomeSF';
import Header from '@/components/Header';
import RoomSelector from './pages/RoomSelector.vue';

export default {
	name: 'App',
	components: {
		// WelcomeSF,
		Header,
		RoomSelector,
	},
};
</script>

<style lang="scss">
@font-face {
	font-family: 'FabrikatBold';
	src: url(./fonts/Fabrikat-Bold.woff) format('woff');
}
@font-face {
	font-family: 'PoppinsLight';
	src: url(./fonts/Poppins-Light.ttf) format('truetype');
}
@font-face {
	font-family: 'PoppinsMedium';
	src: url(./fonts/Poppins-Medium.ttf) format('truetype');
}
body {
	margin: 0;
}
#app {
	font-family: PoppinsLight, sans-serif;
	-webkit-font-smoothing: antialiased;
	-moz-osx-font-smoothing: grayscale;
	color: $dark;
}
.room-select {
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
}
</style>
