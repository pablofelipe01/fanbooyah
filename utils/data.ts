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
};

export const stakingData: StakingData[] = [
 
  // @ts-ignore
  {
    creatorName: "Manuela Villegas",
    description: "Como Baje 40 kilos de gordo a fit",
    imgUrl: "/images/manu2.png",
    tokenSymbol: "GF",
   
    tokenPrice: "1 MATIC",
    liquidity: " USDC",
    nftContractAddress: "0xa62980cDCFaB6AB674a2E5f666e5b055e602BA7d",
    rewardTokenContractAddress: "0x680a120F656553f075100801Aadea8E6EbEc510E",
    stakingContractAddress: "0x2550B6A58b8701E438577D6654fA97f44C6f5003",
    buyLink: "https://payments.thirdweb.com/checkout/2c6d3822-c285-4afc-bcb7-5ed95a06eb3c",
    sellLink: "https://manu-dex.vercel.app/",
    socialMedia: [
      { platform: "Instagram", url: "https://www.instagram.com/manuelavillegas/", followers: 62100 },
      { platform: "X", url: "https://x.com/Manuelavillegas", followers: 12800 },
      { platform: "TikTok", url: "https://www.tiktok.com/@manuelavillegasjaramillo?lang=en", followers: 82000 },
    ],
    infoImgUrl: "/images/manu.png", // New image field
  },
   // @ts-ignore
  {
    creatorName: "Gordito Fitt",
    description: "Como Baje 40 kilos de gordo a fit",
    imgUrl: "/images/fit.png",
    tokenSymbol: "GF",
   
    tokenPrice: "1 MATIC",
    liquidity: " USDC",
    nftContractAddress: "0xE9D85A448e0d7c5C9BAA311D3c77E1317bCa708d",
    rewardTokenContractAddress: "0x64C89745E4F49825421b84abd8995A2f5A627eba",
    stakingContractAddress: "0x35fC8fb58121fDf52CB938d724C6DF2592bbF27d",
    buyLink: "https://payments.thirdweb.com/checkout/2c6d3822-c285-4afc-bcb7-5ed95a06eb3c",
    sellLink: "https://fit-dex.vercel.app/",
    socialMedia: [
      { platform: "Instagram", url: "https://www.instagram.com/elgorditofitofficial/", followers: 12000 },
      { platform: "X", url: "https://twitter.com", followers: 6500 },
      { platform: "TikTok", url: "https://www.tiktok.com/@elgorditofit?lang=en", followers: 26000 },
    ],
    infoImgUrl: "/images/fit2.png", // New image field
  },
  // @ts-ignore
  {
    creatorName: "Xportiva",
    description: "Somos una empresa dedicada a la organización y producción de eventos deportivos de alto nivel.",
    imgUrl: "/images/xpo.png",
    tokenSymbol: "XPO",
  
    tokenPrice: "1 MATIC",
    liquidity: " USDC",
    nftContractAddress: "0xe0007CFBeE5518e237889e6c24dc676EE7c45338",
    rewardTokenContractAddress: "0xbA5a9fB6766B7555D68e1d248Cd2184180906D48",
    stakingContractAddress: "0xC003CfdF9ebC12A951f38FcDf15E95AA4C044611",
    buyLink: "https://payments.thirdweb.com/checkout/2c6d3822-c285-4afc-bcb7-5ed95a06eb3c",
    sellLink: "https://dex-social.vercel.app/",
    socialMedia: [
      { platform: "Instagram", url: "https://www.instagram.com/xportiva/", followers: 16500 },
      { platform: "X", url: "https://twitter.com", followers: 0 },
      { platform: "TikTok", url: "https://tiktok.com", followers: 0  },
    ],
    infoImgUrl: "/images/xpo1.png", // New image field
  },
   // @ts-ignore
   {
    creatorName: "Creator Name",
    description: "This is a short description of the content creator. They are known for their engaging and creative content on various platforms.",
    imgUrl: "/images/a.png",
    tokenSymbol: "BG",

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
    infoImgUrl: "/images/demo.png", // New image field
  },

  // Add more data objects for other creators as needed
];
