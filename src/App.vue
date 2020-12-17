<template>
	<img alt="Vue logo" src="./assets/logo.png" />
	<WelcomeSF />
</template>

<script>
import WelcomeSF from './components/WelcomeSF.vue';

export default {
	name: 'App',
	components: {
		WelcomeSF,
	},
};
</script>

<style>
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
#app {
	font-family: Poppins-Light, sans-serif;
	-webkit-font-smoothing: antialiased;
	-moz-osx-font-smoothing: grayscale;
	text-align: center;
	color: #2c3e50;
}
</style>
