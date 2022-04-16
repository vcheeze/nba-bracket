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
	export let title;

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

<div class="bracket-pair-container">
	{#if title}
		<h3>{title}</h3>
	{/if}
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
					disabled={teamA.name === '___'}
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
					disabled={teamB.name === '___'}
				/>
			</div>
		</div>
	</div>
</div>


<style>
	.bracket-pair-container > h3 {
		color: #8e979e;
	}

	.bracket-pair {
		/* width: 204px; */
		padding: 0 1rem;
		margin-bottom: 2rem;
		border: 1px solid #1d428a;
	}

	.team {
		display: flex;
		justify-content: space-between;
		padding: 0.5rem 0;
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
		margin-right: 0.25rem;
	}

	.team_position {
		margin-right: 0.25rem;
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
    font-size: 1rem;
	}
</style>
