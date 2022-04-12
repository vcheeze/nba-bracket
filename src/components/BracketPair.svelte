<script>
	export let teamA = {
		name: 'Team A',
		logo: '',
		position: 1
	};
	export let teamB = {
		name: 'Team B',
		logo: '',
		position: 8
	};
	export let onInput;

	let teamAPrediction;
	let teamBPrediction;

	// const onPredictionChange = (team) => (event) => {
	//   const value = +event.target.value;
	//   if (team === 'teamA') teamAPrediction = value;
	//   else teamBPrediction = value;

	//   console.log('teamAPrediction :>> ', teamAPrediction);
	//   console.log('teamBPrediction :>> ', teamBPrediction);
	//   if ((teamAPrediction && teamBPrediction) && (teamAPrediction === 4 || teamBPrediction === 4)) {
	//     winner = teamAPrediction > teamBPrediction ? teamA : teamB;
	//   }
	// }
</script>

<div class="bracket-pair">
	<div class="team teamA">
		<div class="team-details">
			{#if teamA.logo}
				<img class="team_logo" src={teamA.logo} alt="Team A Logo" />
			{:else}
				<div class="team_logo-spacer" />
			{/if}
			<p class="team_position">{teamA.position}</p>
			<p class="team_name">{teamA.name}</p>
		</div>
		<div class="prediction">
			<input
				type="number"
				placeholder="Wins"
				bind:value={teamAPrediction}
				on:input={onInput(teamAPrediction, teamBPrediction)}
			/>
		</div>
	</div>
	<div class="team teamB">
		<div class="team-details">
			{#if teamB.logo}
				<img class="team_logo" src={teamB.logo} alt="Team B Logo" />
			{:else}
				<div class="team_logo-spacer" />
			{/if}
			<p class="team_position">{teamB.position}</p>
			<p class="team_name">{teamB.name}</p>
		</div>
		<div class="prediction">
			<input
				type="number"
				placeholder="Wins"
				bind:value={teamBPrediction}
				on:input={onInput(teamAPrediction, teamBPrediction)}
			/>
		</div>
	</div>
</div>

<style>
	.bracket-pair {
		/* width: 204px; */
		padding: 0 1rem;
		margin-bottom: 2rem;
		border: 1px solid #1d428a;
	}

	.team {
		display: flex;
		justify-content: space-between;
		padding: 1rem 0;
	}

	.team.teamA {
		border-bottom: 2px solid #1d428a;
	}

	.team-details {
		display: flex;
	}

	.team_logo,
	.team_logo-spacer {
		width: 40px;
		margin-right: 8px;
	}

	.team_position {
		margin-right: 8px;
		font-weight: bold;
		color: #8e979e;
	}

	.team_name {
		font-weight: bold;
		text-transform: uppercase;
	}

	.prediction {
		display: flex;
		align-items: center;
	}

	.prediction > input {
		height: 2rem;
		width: 4rem;
		padding-left: 0.5rem;
	}
</style>
