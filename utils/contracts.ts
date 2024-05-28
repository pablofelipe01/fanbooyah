import { chain } from "@/app/chain";
import { client } from "@/app/client";
import { getContract } from "thirdweb";
import { stakingABI } from "./stakingABI";

const nftContractAddress = "0x1E6632d7F416988b8e662b9625a617a734eCd1b8";
const rewardTokenContractAddress = "0x6c197e58d9d84415BbF93f2735D77fa4B817fD57";
const stakingContractAddress = "0xB619De8C83E3369327A356613391ae172f3811ee";

export const NFT_CONTRACT = getContract({
    client: client,
    chain: chain,
    address: nftContractAddress
});

export const REWARD_TOKEN_CONTRACT = getContract({
    client: client,
    chain: chain,
    address: rewardTokenContractAddress
});

export const STAKING_CONTRACT = getContract({
    client: client,
    chain: chain,
    address: stakingContractAddress,
    abi: stakingABI
});