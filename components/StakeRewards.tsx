import { TransactionButton, useActiveAccount, useReadContract } from "thirdweb/react";
import { prepareContractCall, toEther } from "thirdweb";
import { useEffect } from "react";
import { balanceOf } from "thirdweb/extensions/erc721";

type StakeRewardsProps = {
    rewardTokenContract: any;
    stakingContract: any;
};

export const StakeRewards: React.FC<StakeRewardsProps> = ({ rewardTokenContract, stakingContract }) => {
    const account = useActiveAccount();

    const {
        data: tokenBalance,
        isLoading: isTokenBalanceLoading,
        refetch: refetchTokenBalance,
    } = useReadContract(
        balanceOf,
        {
            contract: rewardTokenContract,
            owner: account?.address || "",
        }
    );

    // @ts-ignore
    const {
        data: stakedInfo,
        refetch: refetchStakedInfo,
        // @ts-ignore 
    } = useReadContract({
        contract: stakingContract,
        method: "getStakeInfo",
        params: [account?.address || ""],
    });

    useEffect(() => {
        refetchStakedInfo();
        const interval = setInterval(() => {
            refetchStakedInfo();
        }, 1000);
        return () => clearInterval(interval);
    }, []);

    return (
        <div className="w-full my-5 flex flex-col">
            {!isTokenBalanceLoading && (
                <p>Wallet Balance: {toEther(BigInt(tokenBalance!.toString()))}</p>
            )}

            {/* @ts-ignore */}
            <h2 className="mb-5">Rewards: {stakedInfo && toEther(BigInt(stakedInfo[1].toString()))}</h2>

            <TransactionButton
                transaction={() => (
                    prepareContractCall({
                        contract: stakingContract,
                        method: "claimRewards",
                    })
                )}
                onTransactionConfirmed={() => {
                    alert("Rewards claimed!");
                    refetchStakedInfo();
                    refetchTokenBalance();
                }}
                className="border-none bg-gray-800 text-white p-2.5 rounded-lg cursor-pointer w-full text-xs"
            >
                Claim Rewards
            </TransactionButton>
        </div>
    );
};
