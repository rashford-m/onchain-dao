import {
  CryptoDevsDAOABI,
  CryptoDevsAddress,
  CryptoDevsNFTABI,
  CryptoDevsNFTAddress,
} from "@/constants";
import { ConnectButton } from "@rainbow-me/rainbowkit";
import Head from "next/head";
import { useEffect, useState } from "react";
import { formatEther } from "viem/utils";
import { useAccount, useBalance, useContractRead } from "wagmi";
import { readContract, waitForTransaction, writeContract } from "wagmi/actions";
import styles from "../styles/Home.module.css";
import { Inter } from "next/font/google";

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
});

export default function Home() {
  // Check if the user's wallet is connected, and it's address using Wagmi's hooks.
  const { address, isConnected } = useAccount();

  // State variable to know if the component has been mounted yet or not
  const [isMounted, setIsMounted] = useState(false);

  // State variable to show loading state when waiting for a transaction to go through
  const [loading, setLoading] = useState(false);

  // Fake NFT Token ID to purchase. Used when creating a proposal.
  const [fakeNftTokenId, setFakeNftTokenId] = useState("");

  // State variable to store all proposals in the DAO
  const [proposals, setProposals] = useState([]);

  // State variable to switch between the 'Create Proposal' and 'View Proposals' tabs
  const [selectedt, setSelectedTab] = useState("");

  // State variable to switch between the 'Create Proposal' and 'View Proposals' tabs
  const daoOwner = useContractRead({
    abi: CryptoDevsDAOABI,
    address: CryptoDevsDAOAddress,
    functionName: "Owner",
  });

  // Fetch the number of proposals in the DAO
  const numOfProposalsInDAO = useContractRead({
    abi: CryptoDevsDAOABI,
    address: CryptoDevsDAOAddress,
    functionName: "numProposals",
  });

  // Fetch the CryptoDevs NFT balance of the user
  const nftBalanceOfUser = useContractRead({
    abi: CryptoDevsNFTABI,
    address: CryptoDevsNFTAddress,
    functionName: "balanceOf",
    args: [address],
  });

  // Function to make a createProposal transaction in the DAO
  async function createProposal() {
    setLoading(true);

    try {
        const tx = await writeContract({
           address: CryptoDevsDAOAddress,
           abi: CryptoDevsDAOABI,
           functionName: "createProposal",
           args: [fakeNftTokenId],

        });
        await waitForTransaction(tx);
    } catch (error) {
        console.error(error);
        window.alert(error);
    }

    setLoading(false);
  }

  // Function to make a createProposal transaction in the DAO
  
}
