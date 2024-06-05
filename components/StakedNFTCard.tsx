import { MediaRenderer, TransactionButton, useReadContract } from "thirdweb/react";
import { getNFT } from "thirdweb/extensions/erc721";
import { client } from "@/app/client";
import { prepareContractCall } from "thirdweb";

type StakedNFTCardProps = {
    tokenId: bigint;
    nftContract: any;
    stakingContract: any;
    refetchStakedInfo: () => void;
    refetchOwnedNFTs: () => void;
};

export const StakedNFTCard: React.FC<StakedNFTCardProps> = ({ tokenId, nftContract, stakingContract, refetchStakedInfo, refetchOwnedNFTs }) => {
    const { data: nft } = useReadContract(
        getNFT,
        {
            contract: nftContract,
            tokenId: tokenId,
        }
    );
    
    return (
        <div className="m-2.5">
            <MediaRenderer
                client={client}
                src={nft?.metadata.image}
                className="rounded-lg mb-2.5 h-50 w-50"
            />
            <p className="mx-2.5 mb-2.5">{nft?.metadata.name}</p>
            <TransactionButton
                transaction={() => (
                    prepareContractCall({
                        contract: stakingContract,
                        method: "withdraw",
                        params: [[tokenId]]
                    })
                )}
                onTransactionConfirmed={() => {
                    refetchOwnedNFTs();
                    refetchStakedInfo();
                    alert("Withdrawn!");
                }}
                className="border-none bg-gray-800 text-white p-2.5 rounded-lg cursor-pointer w-full text-xs"
            >
                Withdraw
            </TransactionButton>
        </div>
    );
};
