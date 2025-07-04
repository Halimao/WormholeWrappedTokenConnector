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
		],

		rpcs: {
			Solana: 'https://wallet.okex.org/fullnode/sol/discover/rpc',
			Ethereum: 'https://wallet.okex.org/fullnode/eth/discover/rpc',
			Bsc: 'https://wallet.okex.org/fullnode/bsc/discover/rpc',
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
