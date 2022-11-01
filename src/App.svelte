<script>
	import JSONTree from 'svelte-json-tree';
	import item from '../db.json';
	// import {items} from './data.json';
	export let name;
	
	console.log(item);
</script>

<svelte:head>
	<script defer async
	src="https://maps.googleapis.com/maps/api/js?key=AIzaSyC7Z037LAtqUt9IU3NzFN7Mm43gzAT3Wrg&callback=initMap">
	</script>
</svelte:head>

<main>
	<h2>Hello {name}!</h2>
	<p>Visit the <a href="https://svelte.dev/tutorial">Svelte tutorial</a> to learn how to build Svelte apps.</p>

	<h1>Start Point</h1>
	<p>lat: {item.config[0].location.lat}, long: {item.config[0].location.long}</p>
	<h1>End Point</h1>
	<p>lat: {item.config[10].location.lat}, long: {item.config[10].location.long}</p>
	<h1>Device</h1>
	<p>date: {item.device[0].date.d}.{item.device[0].date.m}.{item.device[0].date.y}</p>
	<p>time: {item.device[0].time.h}.{item.device[0].time.m}.{item.device[0].time.s}.{item.device[0].time.ms}</p>
	<p>lat: {item.device[0].location.lat}, long: {item.device[0].location.long}</p>
</main>

<style>
	main {
		text-align: center;
		padding: 1em;
		max-width: 240px;
		margin: 0 auto;
	}

	h1 {
		color: #7856ff;
		text-transform: uppercase;
		font-size: 2em;
		font-weight: 50;
	}

	h2 {
		color: #ff3e00;
		text-transform: uppercase;
		font-size: 4em;
		font-weight: 100;
	}

	@media (min-width: 640px) {
		main {
			max-width: none;
		}
	}

	:global(body) {
	padding: 0;
	}
</style>