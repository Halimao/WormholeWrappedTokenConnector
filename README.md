# Wormhole Wrapped Token Connector

## Introduction

This repository demonstrates the integration of Wormhole Connect in a React app for bridging tokens between the Sui and Fuji (Avalanche Testnet) networks. Using the `@wormhole-foundation/wormhole-connect` package, developers can easily embed a user interface for cross-chain token transfers with minimal configuration.

For a complete tutorial on building a Connect app from scratch, please refer to the [Wormhole Connect Tutorial](https://wormhole.com/docs/tutorials/messaging/sui-connect/). This tutorial focuses on Sui but can be adapted for other compatible chains by following the [Connect configuration guide](https://wormhole.com/docs/build/applications/connect/configuration/).

## Features

 - **Cross-Chain Bridge**
 - **Customizable UI**

## Prerequisites

 - [Node.js and npm](https://docs.npmjs.com/downloading-and-installing-node-js-and-npm) installed on your system
 - TypeScript installed globally: `npm install -g typescript`
 - A funded wallet with [Testnet tokens](https://faucets.chain.link/) for deployment and transfers

## Installation and Setup

1. Clone the repository:

```bash
git clone https://github.com/Halimao/WormholeWrappedTokenConnector.git
cd WormholeWrappedTokenConnector
```

2. Install the dependencies:

```bash
npm install
```

3. Start the application:

```bash
npm start
```

The app should now be running on http://localhost:3000.

## Code Overview

The main application logic is in `App.tsx`, configuring and rendering the `WormholeConnect` component. This component is imported from `@wormhole-foundation/wormhole-connect` and initialized with a basic configuration for the Testnet network, connecting Sui and Avalanche.

## Resources

For more information on configuring Wormhole Connect, refer to the [Wormhole Documentation](https://wormhole.com/docs/build/applications/connect/configuration/), which provides detailed guidance on advanced configurations and supported features.
