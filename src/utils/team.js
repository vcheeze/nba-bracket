const EMPTY_TEAM = {
  name: '___',
  position: '_',
  logo: ''
};

const WESTERN_TEAM = {
	PHX: {
		name: 'PHX',
		position: 1,
		logo: 'https://cdn.nba.com/logos/nba/1610612756/global/D/logo.svg'
	},
  MEM: {
    name: 'MEM',
    position: 2,
    logo: 'https://cdn.nba.com/logos/nba/1610612763/global/D/logo.svg'
  },
  GSW: {
    name: 'GSW',
    position: 3,
    logo: 'https://cdn.nba.com/logos/nba/1610612744/global/D/logo.svg'
  },
	DAL: {
		name: 'DAL',
		position: 4,
		logo: 'https://cdn.nba.com/logos/nba/1610612742/global/D/logo.svg'
	},
	UTA: {
		name: 'UTA',
		position: 5,
		logo: 'https://cdn.nba.com/logos/nba/1610612762/global/D/logo.svg'
	},
	DEN: {
		name: 'DEN',
		position: 6,
		logo: 'https://cdn.nba.com/logos/nba/1610612743/global/D/logo.svg'
	},
	MIN: {
		name: 'MIN',
		position: 7,
		logo: 'https://cdn.nba.com/logos/nba/1610612750/global/D/logo.svg'
	},
  NOP: {
		name: 'NOP',
		position: 8,
		logo: 'https://cdn.nba.com/logos/nba/1610612740/global/D/logo.svg'
	}
};

const EASTERN_TEAM = {
	MIA: {
		name: 'MIA',
		position: 1,
		logo: 'https://cdn.nba.com/logos/nba/1610612748/global/D/logo.svg'
	},
  BOS: {
    name: 'BOS',
    position: 2,
    logo: 'https://cdn.nba.com/logos/nba/1610612738/global/D/logo.svg'
  },
  MIL: {
    name: 'MIL',
    position: 3,
    logo: 'https://cdn.nba.com/logos/nba/1610612749/global/D/logo.svg'
  },
	PHI: {
		name: 'PHI',
		position: 4,
		logo: 'https://cdn.nba.com/logos/nba/1610612755/global/D/logo.svg'
	},
	TOR: {
		name: 'TOR',
		position: 5,
		logo: 'https://cdn.nba.com/logos/nba/1610612761/global/D/logo.svg'
	},
	CHI: {
		name: 'CHI',
		position: 6,
		logo: 'https://cdn.nba.com/logos/nba/1610612741/global/D/logo.svg'
	},
	BKN: {
		name: 'BKN',
		position: 7,
		logo: 'https://cdn.nba.com/logos/nba/1610612751/global/D/logo.svg'
	},
	ATL: {
		name: 'ATL',
		position: 8,
		logo: 'https://cdn.nba.com/logos/nba/1610612737/global/D/logo.svg'
	}
};

const TEAM = {
  ... WESTERN_TEAM,
  ...EASTERN_TEAM
};

export { EMPTY_TEAM, WESTERN_TEAM, EASTERN_TEAM };
export default TEAM;
