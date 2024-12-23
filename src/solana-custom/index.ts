// Export all from providers for external use
export * from "./bignumber.js";
export * from "./keypairUtils.js";

// Import specific classes and instances
import { Plugin } from "@ai16z/eliza";
import investCompanies from "./actions/investCompanies.js";
import investInProject from "./actions/investInProject.js";
import { TokenProvider } from "./providers/TokenProvider.js";
import { WalletProvider } from "./providers/WalletProvider.js";
import { tokenProvider } from "./providers/TokenProvider.js";
import { walletProvider } from "./providers/WalletProvider.js";
// Export classes for external use
export { TokenProvider, WalletProvider };

// Export the plugin configuration
export const SolanaCustomPlugin: Plugin = {
    name: "solana-customa",
    description: "Custom Solana token analysis using DexScreener",
    actions: [ investInProject],
    providers: [tokenProvider, walletProvider]
};

export default SolanaCustomPlugin;