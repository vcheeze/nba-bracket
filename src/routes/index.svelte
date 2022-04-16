<script>
	import BracketPair from '../components/BracketPair.svelte';
	import TEAM, { EMPTY_TEAM } from '../utils/team';

  let bracket = {
    east: {
      semis: {
        winner1v8: EMPTY_TEAM,
        winner2v7: EMPTY_TEAM,
        winner3v6: EMPTY_TEAM,
        winner4v5: EMPTY_TEAM
      },
      finals: {
        winner1845: EMPTY_TEAM,
		    winner2736: EMPTY_TEAM
      }
    },
    west: {
      semis: {
        winner1v8: EMPTY_TEAM,
        winner2v7: EMPTY_TEAM,
        winner3v6: EMPTY_TEAM,
        winner4v5: EMPTY_TEAM
      },
      finals: {
        winner1845: EMPTY_TEAM,
		    winner2736: EMPTY_TEAM
      }
    },
  };
  let finals = {
    east: EMPTY_TEAM,
    west: EMPTY_TEAM
  };

	const onBracketInput = (conf, round, matchup, teamA, teamB) => (predictionA, predictionB) => {
		if (predictionA && predictionB && (predictionA === 4 || predictionB === 4) && (predictionA + predictionB <= 7)) {
      if (conf === 'finals') {
        finals[matchup] = predictionA > predictionB ? teamA : teamB;
        finals = finals;
      } else {
        bracket[conf][round][matchup] = predictionA > predictionB ? teamA : teamB;
        if (round === 'semis') {
          if (['winner1v8', 'winner4v5'].includes(matchup))
            bracket[conf].finals.winner1845 = EMPTY_TEAM;
          else bracket[conf].finals.winner2736 = EMPTY_TEAM;
          finals[conf] = EMPTY_TEAM;
        }
        if (round === 'finals') {
          finals[conf] = EMPTY_TEAM;
        }
        bracket = bracket;
      }
		}
	};
</script>

<div class="bracket-container">
	<div class="title">
		<img
			class="title_img"
			src="https://cdn.nba.com/logos/playoffs/playoffs-playin.svg"
			alt="Playoffs"
		/>
		<p class="sub-title">Play-In start: April 12 | Play-Off start: April 16</p>
	</div>
	<div class="conferences">
		<h2>Western Conference</h2>
		<h2>Eastern Conference</h2>
	</div>
	<div class="bracket">
		<div class="west round first-round">
			<BracketPair
				teamA={TEAM.PHX}
				teamB={TEAM.NOP}
				onInput={onBracketInput('west', 'semis', 'winner1v8', TEAM.PHX, TEAM.NOP)}
				title="Playoffs Round 1"
			/>
			<BracketPair
				teamA={TEAM.DAL}
				teamB={TEAM.UTA}
				onInput={onBracketInput('west', 'semis', 'winner4v5', TEAM.DAL, TEAM.UTA)}
			/>
			<BracketPair
				teamA={TEAM.GSW}
				teamB={TEAM.DEN}
				onInput={onBracketInput('west', 'semis', 'winner3v6', TEAM.GSW, TEAM.DEN)}
			/>
			<BracketPair
				teamA={TEAM.MEM}
				teamB={TEAM.MIN}
				onInput={onBracketInput('west', 'semis', 'winner2v7', TEAM.MEM, TEAM.MIN)}
			/>
		</div>
		<div class="west round semis">
			<BracketPair
				teamA={bracket.west.semis.winner1v8}
				teamB={bracket.west.semis.winner4v5}
				onInput={onBracketInput(
					'west', 'finals', 'winner1845',
					bracket.west.semis.winner1v8,
					bracket.west.semis.winner4v5
				)}
				title="Conference Semi Finals"
			/>
			<BracketPair
				teamA={bracket.west.semis.winner3v6}
				teamB={bracket.west.semis.winner2v7}
				onInput={onBracketInput(
					'west', 'finals', 'winner2736',
					bracket.west.semis.winner3v6,
					bracket.west.semis.winner2v7
				)}
			/>
		</div>
		<div class="west round finals">
			<BracketPair
				teamA={bracket.west.finals.winner1845}
				teamB={bracket.west.finals.winner2736}
				onInput={onBracketInput(
					'finals', '', 'west',
					bracket.west.finals.winner1845,
					bracket.west.finals.winner2736
				)}
				title="Conference Finals"
			/>
		</div>
    <div class="east round finals">
			<BracketPair
				teamA={bracket.east.finals.winner1845}
				teamB={bracket.east.finals.winner2736}
				onInput={onBracketInput(
					'finals', '', 'east',
					bracket.east.finals.winner1845,
					bracket.east.finals.winner2736
				)}
				title="Conference Finals"
			/>
		</div>
    <div class="eastern round semis">
      <BracketPair
        teamA={bracket.east.semis.winner1v8}
        teamB={bracket.east.semis.winner4v5}
        onInput={onBracketInput(
          'east', 'finals', 'winner1845',
          bracket.east.semis.winner1v8,
          bracket.east.semis.winner4v5
        )}
				title="Conference Semi Finals"
      />
      <BracketPair
        teamA={bracket.east.semis.winner3v6}
        teamB={bracket.east.semis.winner2v7}
        onInput={onBracketInput(
          'east', 'finals', 'winner2736',
          bracket.east.semis.winner3v6,
          bracket.east.semis.winner2v7
        )}
      />
    </div>
    <div class="eastern round first-round">
      <BracketPair
        teamA={TEAM.MIA}
        teamB={TEAM.ATL}
        onInput={onBracketInput('east', 'semis', 'winner1v8', TEAM.MIA, TEAM.ATL)}
				title="Playoffs Round 1"
      />
      <BracketPair
        teamA={TEAM.PHI}
        teamB={TEAM.TOR}
        onInput={onBracketInput('east', 'semis', 'winner4v5', TEAM.PHI, TEAM.TOR)}
      />
      <BracketPair
        teamA={TEAM.MIL}
        teamB={TEAM.CHI}
        onInput={onBracketInput('east', 'semis', 'winner3v6', TEAM.MIL, TEAM.CHI)}
      />
      <BracketPair
        teamA={TEAM.BOS}
        teamB={TEAM.BKN}
        onInput={onBracketInput('east', 'semis', 'winner2v7', TEAM.BOS, TEAM.BKN)}
      />
    </div>
	</div>
  <div class="grand-finals">
    <BracketPair
      teamA={finals.west}
      teamB={finals.east}
      onInput={() => {}}
			title="Finals"
    />
  </div>
  <footer>
    <p>Take a screenshot. Share with your friends!</p>
		<p>Created by <a href="https://github.com/vcheeze">vcheeze</a></p>
  </footer>
</div>

<style>
	.bracket-container {
		margin: 2rem;
	}

	.title {
		text-align: center;
	}
	.title_img {
		width: 364px;
	}
	.sub-title {
		color: #8e979e;
	}

	.conferences {
		display: grid;
		grid-template-columns: 1fr 1fr;
		column-gap: 2rem;
	}
	.conferences > h2:first-child {
		text-align: right;
	}

	.bracket {
		display: grid;
		grid-template-columns: 1fr 1fr 1fr 1fr 1fr 1fr;
		column-gap: 1rem;
	}
	.bracket > .round {
		display: flex;
		flex-direction: column;
		justify-content: space-evenly;
	}
	:global(.bracket > .west h3) {
		text-align: right;
	}

  .grand-finals {
    margin: -200px auto 0;
    max-width: 20%;
  }
	:global(.grand-finals h3) {
		text-align: center;
	}

  footer {
		margin-top: 8rem;
		margin-bottom: 2rem;
    text-align: center;
  }
</style>
