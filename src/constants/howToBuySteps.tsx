import { Text } from "@chakra-ui/react";
import Link from "next/link";

export const howToBuySteps = [
  {
    image: "/metamask.png",
    title: "Config Blast L2 on MetaMask",
    desc: (
      <>
        <Text color="brand.yellow.100" fontSize="2xl">
          Network: Blast Mainnet
        </Text>

        <Text color="brand.yellow.100" fontSize="2xl">
          RPC:{" "}
          <Link
            href="
            http://mainnet.blast.io
            "
            target="_blank"
          >
            http://mainnet.blast.io
          </Link>
        </Text>

        <Text color="brand.yellow.100" fontSize="2xl">
          ID: 81457
        </Text>

        <Text color="brand.yellow.100" fontSize="2xl">
          Symbol: ETH
        </Text>

        <Text color="brand.yellow.100" fontSize="2xl">
          Explorer:{" "}
          <Link
            href="
            https://blastscan.io
            "
            target="_blank"
          >
            https://blastscan.io,
          </Link>
        </Text>
      </>
    ),
  },
  {
    image: "/eth.png",
    title: "Get Some ETH on Blast",
    desc: (
      <Text color="brand.yellow.100" fontSize="2xl">
        Have ETH on Blast in your wallet to get to BLE BLE memeNFT.
      </Text>
    ),
  },
  {
    image: "/amm.png",
    title: "Go to NFT Dexs on Blast",
    desc: (
      <Text color="brand.yellow.100" fontSize="2xl">
        Go to NFT Dexs in google chrome or on the browser inside your Metamask
        app. Select BLE BLE NFT, and confirm. Congratulations on becoming a
        Blast member.
      </Text>
    ),
  },
  {
    image: "/digital.png",
    title: "Switch ETH for Ble Ble",
    desc: (
      <Text color="brand.yellow.100" fontSize="2xl">
        Switch ETH for BLE BLE. We have ZERO taxes so you don’t need to worry
        about buying with a specific slippage, although you may need to use
        slippage during times of market volatility.
      </Text>
    ),
  },
];
