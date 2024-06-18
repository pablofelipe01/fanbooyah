'use client';

import React from 'react';
import { NavBar } from '../../../components/NavBar';
import Footer from '../../../components/Footer';

const Press = () => {
  return (
    <div className="bg-gray-900 min-h-screen flex flex-col relative">
      <video autoPlay loop muted className="absolute inset-0 w-full h-full object-cover">
        <source src="/videos/video1.mp4" type="video/mp4" />
      </video>
      <div className="absolute inset-0 bg-black opacity-0"></div>
      <NavBar />
      <main className="relative py-16 px-4 flex-grow pt-40">
        <div className=" p-8 rounded-lg text-white">
          <h1 className="text-4xl font-bold mb-4 text-center">Press Release</h1>

          <section className="mb-8">
            <h2 className="text-3xl font-semibold mb-4">Social-Media Influencers Aren’t Getting Rich—They’re Barely Getting By</h2>
            <p className="mb-4">
              Platforms are paying less for popular posts, brands are pickier about partnerships and a possible TikTok ban looms.
            </p>
            <a
              href="https://www.wsj.com/tech/social-media-influencers-arent-getting-richtheyre-barely-getting-by-71e0aad3?mod=hp_lead_pos7"
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-400 hover:underline"
            >
              Read more on WSJ
            </a>
          </section>

          <section className="mb-8">
            <h2 className="text-3xl font-semibold mb-4">TikTok Made Them Famous. What If It All Goes Away?</h2>
            <p className="mb-4">
              After years of government threats to ban the Chinese-owned social-media app, creators say this time feels different: ‘I’ve been migrating some of my TikTok content to Instagram Reels’.
            </p>
            <a
              href="https://www.wsj.com/style/tiktok-ban-influencers-creators-paid-38a7b11e?mod=article_inline"
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-400 hover:underline"
            >
              Read more on WSJ
            </a>
          </section>

          <section className="mb-8">
            <h2 className="text-3xl font-semibold mb-4">YouTube Creators Say Video Revenue Down Up To 90%</h2>
            <p className="mb-4">
              “It completely dropped,” says Hessel Broekstra, speaking about his YouTube ad revenue. “To get into numbers, I was hitting $100 days and it dropped down to like $6 days. So that is over 90% decrease, which is crazy.”
            </p>
            <a
              href="https://www.forbes.com/sites/johnkoetsier/2023/03/10/youtube-creators-say-video-revenue-down-up-to-90-something-is-definitely-off/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-400 hover:underline"
            >
              Read more on Forbes
            </a>
            <div className="mt-4">
            <iframe
                  width="500"
                  height="315"
                  src="https://www.youtube.com/embed/zHVmv5h7DL0?si=mK8h0HtMokcAU9U_"
                  title="YouTube video player"
                  frameBorder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                  referrerPolicy="strict-origin-when-cross-origin"
                  allowFullScreen
                //   className="w-full h-full"
                ></iframe>
            </div>
          </section>

          <section className="mb-8">
            <h2 className="text-3xl font-semibold mb-4">Losing Patience with Instagram</h2>
            <p className="mb-4">
              Only time will tell if Instagram's latest effort to appease creators will pay off or if they've lost too much goodwill already. For some, an earnest course correction is better late than never, but others have lost all patience already.
            </p>
            <p className="mb-4">
              "I've lost the will to live with Instagram and don't think they can turn it around, really," says artist Rachel Tighe. "A good start would be letting the followers actually see the content of who they're following. Duh."
            </p>
            <p className="mb-4">
              Designer Max Hofert speaks for many when he says: "I feel like Instagram is grasping at straws in attempts to save the platform. If they just stuck to their original mission of actually showing people's followers their content – why they follow people in the first place – they would see a lot more satisfied users. At this point, it makes no sense to invest time into a platform that doesn't show your content to 95 per cent of your audience, which you've poured everything into growing over the years."
            </p>
            <a
              href="https://www.creativeboom.com/features/will-instagrams-massive-algorithm-update-help-or-harm-creatives/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-400 hover:underline"
            >
              Read more on Creative Boom
            </a>
          </section>

          <section className="mb-8">
            <h2 className="text-3xl font-semibold mb-4">YouTube's Growing Value</h2>
            <p className="mb-4">
              By 2023, YouTube is expected to be worth over $183 billion, with each user generating an annual interactive value of $233. In 2023, YouTube's brand value increased to $29.71 billion from $23.89 billion in 2022.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-3xl font-semibold mb-4">Instagram's Ad Revenue</h2>
            <p className="mb-4">
              According to recent research, Instagram's ad revenue in the US reached $39.7 billion in 2023. With an estimated 1.6 billion users, Instagram generates an average of $312.11 per user. Instagram's ad revenue in 2023 climbed by 19.4% from its ad revenue in 2022, which came to $33.3 billion annually.
            </p>
          </section>
        </div>
        <Footer />
      </main>
    </div>
  );
};

export default Press;
