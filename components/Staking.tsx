'use client';

import { chain } from "@/app/chain";
import { client } from "@/app/client";
import { ConnectButton, TransactionButton, useActiveAccount, useReadContract } from "thirdweb/react";
import { StakeRewards } from "./StakeRewards";
import { NFT_CONTRACT, STAKING_CONTRACT } from "../utils/contracts";
import { NFT } from "thirdweb";
import { useEffect, useState } from "react";
import { claimTo, getNFTs, ownerOf, totalSupply } from "thirdweb/extensions/erc721";
import { NFTCard } from "./NFTCard";
import { StakedNFTCard } from "./StakedNFTCard";

export const Staking = () => {
    const account = useActiveAccount();
    const [ownedNFTs, setOwnedNFTs] = useState<NFT[]>([]);
    const [showIframe, setShowIframe] = useState(false);

    const getOwnedNFTs = async () => {
        let ownedNFTs: NFT[] = [];

        const totalNFTSupply = await totalSupply({
            contract: NFT_CONTRACT,
        });
        const nfts = await getNFTs({
            contract: NFT_CONTRACT,
            start: 0,
            count: parseInt(totalNFTSupply.toString()),
        });

        for (let nft of nfts) {
            const owner = await ownerOf({
                contract: NFT_CONTRACT,
                tokenId: nft.id,
            });
            if (owner === account?.address) {
                ownedNFTs.push(nft);
            }
        }
        setOwnedNFTs(ownedNFTs);
    };

    useEffect(() => {
        if (account) {
            getOwnedNFTs();
        }
    }, [account]);

    const {
        data: stakedInfo,
        refetch: refetchStakedInfo,
    } = useReadContract({
        contract: STAKING_CONTRACT,
        method: "getStakeInfo",
        params: [account?.address || ""],
    });

    if (account) {
        return (
            <div style={styles.container}>
                <div style={styles.header}>
                    <h2 style={styles.planTitle}>Plan Bronze</h2>
                    <button
                        onClick={() => setShowIframe(true)}
                        style={styles.button}
                        onMouseEnter={(e) => e.currentTarget.style.backgroundColor = "#03f73c"}
                        onMouseLeave={(e) => e.currentTarget.style.backgroundColor = "#333"}
                    >Comprar</button>
                </div>
                <hr style={styles.hr}/>
                <div style={styles.section}>
                    <h2>Owned NFTs</h2>
                    <div style={styles.nftContainer}>
                        {ownedNFTs && ownedNFTs.length > 0 ? (
                            ownedNFTs.map((nft) => (
                                <NFTCard
                                    key={nft.id}
                                    nft={nft}
                                    refetchOwnedNFTs={getOwnedNFTs}
                                    refetchStakedInfo={refetchStakedInfo}
                                />
                            ))
                        ) : (
                            <p>You own 0 NFTs</p>
                        )}
                    </div>
                </div>
                <hr style={styles.hr}/>
                <div style={styles.section}>
                    <h2>Staked NFTs</h2>
                    <div style={styles.nftContainer}>
                        {stakedInfo && stakedInfo[0].length > 0 ? (
                            stakedInfo[0].map((nft: any, index: number) => (
                                <StakedNFTCard
                                    key={index}
                                    tokenId={nft}
                                    refetchStakedInfo={refetchStakedInfo}
                                    refetchOwnedNFTs={getOwnedNFTs}
                                />
                            ))
                        ) : (
                            <p>No NFTs staked</p>
                        )}
                    </div>
                </div>
                <hr style={styles.hr}/>
                <StakeRewards />

                {showIframe && (
                    <div style={styles.iframeContainer}>
                        <iframe
                            src="https://payments.thirdweb.com/checkout/2c6d3822-c285-4afc-bcb7-5ed95a06eb3c"
                            style={styles.iframe}
                        ></iframe>
                        <button
                            onClick={() => setShowIframe(false)}
                            style={styles.closeButton}
                            onMouseEnter={(e) => e.currentTarget.style.backgroundColor = "#fc010190"}
                            onMouseLeave={(e) => e.currentTarget.style.backgroundColor = "#333"}
                        >
                            Close
                        </button>
                    </div>
                )}
            </div>
        );
    }

    return null;
};

const styles = {
    container: {
        display: "flex",
        flexDirection: "column" as const,
        alignItems: "center" as const,
        backgroundColor: "#151515",
        borderRadius: "8px",
        width: "90%",
        maxWidth: "500px",
        padding: "20px",
        margin: "0 auto",
    },
    header: {
        display: "flex",
        flexDirection: "row" as const,
        alignItems: "center" as const,
        justifyContent: "space-between" as const,
        margin: "20px 0",
        width: "100%"
    },
    planTitle: {
        marginRight: "20px"
    },
    button: {
        fontSize: "12px",
        backgroundColor: "#333",
        color: "#fff",
        padding: "10px 20px",
        borderRadius: "10px",
        cursor: "pointer",
        transition: "background-color 0.3s",
    },
    hr: {
        width: "100%",
        border: "1px solid #333"
    },
    section: {
        margin: "20px 0",
        width: "100%"
    },
    nftContainer: {
        display: "flex",
        flexDirection: "row" as const,
        flexWrap: "wrap" as const,
        width: "100%",
        justifyContent: "center" as const,
    },
    iframeContainer: {
        position: "fixed" as const,
        top: "50%",
        left: "50%",
        transform: "translate(-50%, -50%)",
        backgroundColor: "#fff",
        padding: "20px",
        borderRadius: "10px",
        zIndex: 1000,
        width: "600px",
        height: "800px"
    },
    iframe: {
        width: "100%",
        height: "100%",
        border: "none" as const,
    },
    closeButton: {
        position: "absolute" as const,
        top: "10px",
        right: "10px",
        backgroundColor: "#333",
        color: "#fff",
        padding: "10px 20px",
        borderRadius: "10px",
        cursor: "pointer",
    }
};
