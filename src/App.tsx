import './App.css';
import WormholeConnect, {
	type config,
	WormholeConnectTheme,
	TokenBridgeRoute,
	AutomaticTokenBridgeRoute,
} from '@wormhole-foundation/wormhole-connect';

function App() {
	const config: config.WormholeConnectConfig = {
		// Define the network
		network: 'Mainnet',

		// Define the chains
		chains: [
			'Ethereum',
			'Solana',
			'Bsc',
			'Polygon'
		],

		rpcs: {
			Solana: 'https://wallet.okex.org/fullnode/sol/discover/rpc',
			Ethereum: 'https://wallet.okex.org/fullnode/eth/discover/rpc',
			Bsc: 'https://wallet.okex.org/fullnode/bsc/discover/rpc',
			Polygon: 'https://wallet.okex.org/fullnode/poly/discover/rpc',
		},
		// UI configuration
		ui: {
			title: 'Wormhole Wrapped Token Connector',
			// disableUserInputtedTokens: true,
		},
		// Route configuration
		routes: [
			TokenBridgeRoute,
			AutomaticTokenBridgeRoute,
		],
		tokensConfig: {},
		wrappedTokens: {
			'Bsc': {
				'0xB8A677E6D805c8d743e6f14c8bC9C19305b5deFC': { // Newt
					'Ethereum': '0xD0eC028a3D21533Fdd200838F39c85B03679285D',
				},
				'0x75a5863A19aF60ec0098d62ED8C34cc594fB470f': { // MPLX
					'Solana': 'METAewgxyPbgwsseH8T16a39CQ5VyVxZi9zXiDPY18m',
				},
				'0x43Ac932FC7A84918Fb52e1a5baBaC63901b897B6': { // MSQ
					'Polygon': '0x6A8Ec2d9BfBDD20A7F5A4E89D640F7E7cebA4499',
				},
			},
		},
	};

	const theme: WormholeConnectTheme = {
		mode: 'dark',
		primary: '#78c4b6',
	};

	return <WormholeConnect config={config} theme={theme} />;
}

export default App;
