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
  infoImgUrl: string; // New field for the additional image
  exclusiveContentLink: string; // New field for exclusive content link
};

export const stakingData: StakingData[] = [
   // @ts-ignore
  {
    creatorName: "Booyah! Pass",
    imgUrl: "/images/2.png",
    tokenPrice: "10 USD",
    nftContractAddress: "0x355EFDD61D3A700FC065c683dEb7d822a9A80188",
    rewardTokenContractAddress: "0xd4a60B77a0325fa8eF56DeCb43D75712a37C03d1",
    stakingContractAddress: "0xa20Db5510a5cE607E30763b2698B0F67472a42d5",
    buyLink: "https://payments.thirdweb.com/checkout/2c6d3822-c285-4afc-bcb7-5ed95a06eb3c",
    sellLink: "https://manu-dex.vercel.app/",
    socialMedia: [
      { platform: "Instagram", url: "https://www.instagram.com/manuelavillegas/", followers: 62100 },
      { platform: "X", url: "https://x.com/Manuelavillegas", followers: 12800 },
      { platform: "TikTok", url: "https://www.tiktok.com/@manuelavillegasjaramillo?lang=en", followers: 82000 },
    ],
    infoImgUrl: "/images/7.png",
    exclusiveContentLink: "https://app.darkblock.io/platform/matic/embed/collection/0xc1Db4038de013D5653A710EFb97678fD46837A52", // New link for exclusive content
  },
   // @ts-ignore
  //  {
  //   creatorName: "Basketball Pass",
  //   imgUrl: "/images/basketball.png",
  //   tokenPrice: "1 Matic",
  //   nftContractAddress: "0x76C69aC624B2193F0Cd2705e36CEc0a167e4a252",
  //   rewardTokenContractAddress: "0x1175579Af4Ca30e871f72927bF6d87A46A01Bef7",
  //   stakingContractAddress: "0x2E228579Ca846452975c7791010b9B3DdBF6e8Eb",
  //   buyLink: "https://payments.thirdweb.com/checkout/2c6d3822-c285-4afc-bcb7-5ed95a06eb3c",
  //   sellLink: "https://manu-dex.vercel.app/",
  //   socialMedia: [
  //     { platform: "Instagram", url: "https://www.instagram.com/manuelavillegas/", followers: 62100 },
  //     { platform: "X", url: "https://x.com/Manuelavillegas", followers: 12800 },
  //     { platform: "TikTok", url: "https://www.tiktok.com/@manuelavillegasjaramillo?lang=en", followers: 82000 },
  //   ],
  //   infoImgUrl: "/images/basketball.png",
  //   exclusiveContentLink: "https://example.com/exclusive-manu", // New link for exclusive content
  // },
  //  // @ts-ignore
  //  {
  //   creatorName: "Football Pass",
  //   imgUrl: "/images/football.png",
  //   tokenPrice: "1 Matic",
  //   nftContractAddress: "0x2B5807f35E23645dF7e2dAB660c84a767db5c134",
  //   rewardTokenContractAddress: "0x1175579Af4Ca30e871f72927bF6d87A46A01Bef7",
  //   stakingContractAddress: "0x9Ff1fbCd759432CEdb9B964A14b21dDeEB27d8E1",
  //   buyLink: "https://payments.thirdweb.com/checkout/2c6d3822-c285-4afc-bcb7-5ed95a06eb3c",
  //   sellLink: "https://manu-dex.vercel.app/",
  //   socialMedia: [
  //     { platform: "Instagram", url: "https://www.instagram.com/manuelavillegas/", followers: 62100 },
  //     { platform: "X", url: "https://x.com/Manuelavillegas", followers: 12800 },
  //     { platform: "TikTok", url: "https://www.tiktok.com/@manuelavillegasjaramillo?lang=en", followers: 82000 },
  //   ],
  //   infoImgUrl: "/images/football.png",
  //   exclusiveContentLink: "https://example.com/exclusive-manu", // New link for exclusive content
  // },
];
