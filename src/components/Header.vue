<template>
	<header>
		<img alt="STATION F" src="@/assets/station-f-logo-white.svg" />
		<span class="title">room reservation service</span>
	</header>
</template>

<script>
export default {
	name: 'Header',
};
</script>

<style scoped lang="scss">
header {
	display: flex;
	flex-direction: row;
	justify-content: space-between;
	align-items: center;
	flex-wrap: wrap;
	background-color: $dark;
	color: $light;
	height: 60px;
	padding: 5px 21px;
}

img {
	width: 120px;
	height: 50px;
}

.title {
	@include text-1;
	margin-left: 13px;
}
</style>
