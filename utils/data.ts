export type StakingData = {
  creatorName: string;
  description: string;
  imgUrl: string;
  tokenSymbol: string;
  roi: string;
  tokenPrice: string;
  liquidity: string;
  nftContractAddress: string;
  rewardTokenContractAddress: string;
  stakingContractAddress: string;
  buyLink: string;
  sellLink: string;
  socialMedia: { platform: string; url: string; followers: number }[];
  gradient: string; // Add a new field for the gradient color
};

export const stakingData: StakingData[] = [
   // @ts-ignore 
  {
    creatorName: "Creator Name",
    description: "This is a short description of the content creator. They are known for their engaging and creative content on various platforms.",
    imgUrl: "/images/a.png",
    tokenSymbol: "BG",
    roi: "16%",
    tokenPrice: "1.5 MATIC",
    liquidity: "1,347,921 USDC",
    nftContractAddress: "0x1E6632d7F416988b8e662b9625a617a734eCd1b8",
    rewardTokenContractAddress: "0x6c197e58d9d84415BbF93f2735D77fa4B817fD57",
    stakingContractAddress: "0xB619De8C83E3369327A356613391ae172f3811ee",
    buyLink: "https://payments.thirdweb.com/checkout/2c6d3822-c285-4afc-bcb7-5ed95a06eb3c",
    sellLink: "https://dex-social.vercel.app/",
    socialMedia: [
      { platform: "Instagram", url: "https://instagram.com", followers: 1000000 },
      { platform: "X", url: "https://twitter.com", followers: 6500 },
      { platform: "TikTok", url: "https://tiktok.com", followers: 1200 },
    ],
  },
  // @ts-ignore 
  {
    creatorName: "Creator Name",
    description: "This is a short description of the content creator. They are known for their engaging and creative content on various platforms.",
    imgUrl: "/images/a.png",
    tokenSymbol: "BG",
    roi: "16%",
    tokenPrice: "1.5 MATIC",
    liquidity: "1,347,921 USDC",
    nftContractAddress: "0x1E6632d7F416988b8e662b9625a617a734eCd1b8",
    rewardTokenContractAddress: "0x6c197e58d9d84415BbF93f2735D77fa4B817fD57",
    stakingContractAddress: "0xB619De8C83E3369327A356613391ae172f3811ee",
    buyLink: "https://payments.thirdweb.com/checkout/2c6d3822-c285-4afc-bcb7-5ed95a06eb3c",
    sellLink: "https://dex-social.vercel.app/",
    socialMedia: [
      { platform: "Instagram", url: "https://instagram.com", followers: 1000000 },
      { platform: "X", url: "https://twitter.com", followers: 6500 },
      { platform: "TikTok", url: "https://tiktok.com", followers: 1200 },
    ],
  },
  

  // Add more data objects for other creators as needed
];
