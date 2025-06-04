import Post from './post';
import Link from 'next/link';

async function getIdolProfile(slug) {
  const data = await fetch(`https://ivyn8n.69.mu/webhook/publicProfile?idol=${slug}&content=profile`, {
    next: {
      revalidate: 60
    }
  });
  const idolData = await data.json();
  return idolData ? idolData[0] : null;
}

async function getIdolHighlights(slug) {
  const data = await fetch(`https://ivyn8n.69.mu/webhook/publicProfile?idol=${slug}&content=highlights`, {
    next: {
      revalidate: 60
    }
  });
  return await data.json();
}

async function getIdolPosts(slug) {
  const data = await fetch(`https://ivyn8n.69.mu/webhook/publicProfile?idol=${slug}&content=posts`, {
    next: {
      revalidate: 60
    }
  });
  return await data.json();
}

export async function generateMetadata({ params }) {
  const { path } = await params;
  const slug = path.split("-")[0];
  const idol = await getIdolProfile(slug);
  if (idol) {
    return {
      title: `${idol.display_name} Onlyfans Leak`,
      description: `Looking for ${idol.display_name} OnlyFans leak in 2025? Get the scoop and explore creative, AI-powered NSFW alternatives with Ivysoulmate.`,
      keywords: `${idol.display_name} Onlyfans leak, ${idol.display_name} Onlyfans leaks, ${idol.display_name} leaked Onlyfans, ${idol.display_name} Onlyfans leaked, ${idol.display_name} Onlyfans nude, ${idol.display_name} Onlyfans porn, ${idol.display_name} porn, ${idol.display_name} leak, ${idol.display_name} nude, ${idol.display_name} leaked, ${idol.display_name} leaks, ${idol.display_name} nudes, ${idol.display_name} leaked nudes, ${idol.display_name} xxx, ${idol.display_name} of, ${idol.display_name} blowjob, ${idol.display_name} sex, Onlyfan leak, Onlyfan leaks, Onlyfans leaks`,
      openGraph: {
        siteName: `${idol.display_name} Onlyfans Leak`,
        title: `${idol.display_name} Onlyfans Leak`,
        description: `Looking for ${idol.display_name} OnlyFans leak in 2025? Get the scoop and explore creative, AI-powered NSFW alternatives with Ivysoulmate.`,
        images: [idol.photo_url]
      },
    };
  } else {
    return {
      title: "Ivy Soulmate - #1 advance AI Girlfriend",
      description: "Hot Idols are waiting to get intimate with you. Anytime! Visualize Your Fantasies, Daily Hot Photos & Videos, Curated Scenarios, Roleplay Chat",
      keywords: "ai girlfriend, ai sexting, create ai girlfriend, create girlfriend, custom girlfriend, ai chat sex, ai girlfriend app, sex chatbot, sexting bot, ai sex chatbot, sexy ai chat, ai gf, free ai girlfriend, sexting ai bot, dirty talking ai, ai girlfriend free, ai girlfriend app free, ai girlfriend that sends pictures, dirty ai chat, adult ai girlfriend, naughty chat bot, free sexting bot, ai dirty chat, chatgpt sex, free ai gf, chatbot for sex, sex chat gpt, ai sexy chat, ai adult chat, dirty chat ai, erotic ai chat, free ai girlfriend online, sexy chatbot, ai girlfriend websites, my ai girlfriend, create an ai girlfriend, best free ai girlfriend, sexy chat ai, sexting ai free, ai chat sexy",
      openGraph: {
        siteName: "Ivy Soulmate - #1 advance AI Girlfriend",
        title: "Ivy Soulmate - #1 advance AI Girlfriend",
        description: "Hot Idols are waiting to get intimate with you. Anytime! Visualize Your Fantasies, Daily Hot Photos & Videos, Curated Scenarios, Roleplay Chat",
        images: ["https://ivy-cdn.b-cdn.net/static/og.jpg"]
      },
    }
  }
}

export default async function Home({ params, searchParams }) {
  const { path } = await params;
  const ctaParams = await searchParams;
  const slug = path.split("-")[0];
  const idol = await getIdolProfile(slug);
  const highlights = await getIdolHighlights(slug);
  const posts = await getIdolPosts(slug);

  return (
    <>
    
      {/*Page Wrapper*/}
      <div className="flex flex-col bg-zinc-950 min-h-screen">

        {/*Header*/}
        <div className="safe-area-pt sticky top-0 z-10 border-b border-zinc-800/80 bg-zinc-950/90 backdrop-blur-md">
          <div className="mx-auto flex h-14 max-w-screen-md items-center justify-between px-4">
            <div className="h-full flex items-center gap-2">
              <img alt="logo" loading="lazy" decoding="async" data-nimg="1" className="object-contain h-3/4" src="logo.png" />
              <span className="font-bold text-lg">OnlyFans Leaks Daily</span>
            </div>
            <div className="flex items-center gap-2">
              {/*<a href="https://ivysoulmate.com" className="cta text-sky-400 border border-sky-400 no-underline rounded-full font-semibold text-xs px-4 py-2">
                Explore Now For Free
              </a>*/}
            </div>
          </div>
        </div>
        {/*End header*/}

        {/*Content Wrapper*/}
        <div className="flex justify-center">
          <div className="w-full max-w-screen-md">
            
            {/*Idol Info*/}
            <div id="idol-info-wrapper">
              <div className="relative z-0 flex flex-col gap-4 p-4">
                <div className="flex items-center gap-4">
                  <div className="h-20 w-full max-w-20 overflow-hidden rounded-full">
                    <img alt={idol.display_name} loading="lazy" decoding="async" data-nimg="fill" className="!static object-cover object-top" src={idol.photo_url} />
                  </div>
                  <div className="flex flex-col gap-2">
                    <div className="w-fit text-xl font-semibold">{idol.display_name}</div>
                    <div className="text-sm text-gray-400">
                      <span className="font-bold">{idol.follower_count}</span>&nbsp;followers
                    </div>
                  </div>
                </div>
                <div className="relative flex flex-col gap-1 text-sm">
                  <div>{idol.bio}</div>
                </div>
                <div className="flex w-full items-center gap-2">
                  <div className="w-full">
                    {/*<a href="https://ivysoulmate.com" className="cta bg-sky-500 py-3 rounded-lg items-center justify-center font-semibold text-sm flex w-full gap-2 text-white">*/}
                    <Link href={{pathname:"https://ivysoulmate.com",query: ctaParams}} className="cta bg-sky-500 py-3 rounded-lg items-center justify-center font-semibold text-sm flex w-full gap-2 text-white">
                      <svg stroke="currentColor" fill="none" strokeWidth="2" viewBox="0 0 24 24" strokeLinecap="round" strokeLinejoin="round" className="text-xl" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg">
                        <path d="M10.59 19.88a9.763 9.763 0 0 1 -2.89 -.88l-4.7 1l1.3 -3.9c-2.324 -3.437 -1.426 -7.872 2.1 -10.374c3.526 -2.501 8.59 -2.296 11.845 .48c1.565 1.335 2.479 3.065 2.71 4.861"></path>
                        <path d="M18 22l3.35 -3.284a2.143 2.143 0 0 0 .005 -3.071a2.242 2.242 0 0 0 -3.129 -.006l-.224 .22l-.223 -.22a2.242 2.242 0 0 0 -3.128 -.006a2.143 2.143 0 0 0 -.006 3.071l3.355 3.296z"></path>
                      </svg>
                      Chat
                    </Link>
                    {/*</a>*/}
                  </div>
                  <div className="w-full">
                    <a href="https://ivysoulmate.com" className="cta border border-sky-500 text-sky-500 py-3 rounded-lg items-center justify-center font-semibold text-sm flex w-full gap-2">
                      <svg stroke="currentColor" fill="none" strokeWidth="2" viewBox="0 0 24 24" strokeLinecap="round" strokeLinejoin="round" className="text-xl" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg">
                        <path d="M8 7a4 4 0 1 0 8 0a4 4 0 0 0 -8 0"></path>
                        <path d="M6 21v-2a4 4 0 0 1 4 -4h.5"></path>
                        <path d="M18 22l3.35 -3.284a2.143 2.143 0 0 0 .005 -3.071a2.242 2.242 0 0 0 -3.129 -.006l-.224 .22l-.223 -.22a2.242 2.242 0 0 0 -3.128 -.006a2.143 2.143 0 0 0 -.006 3.071l3.355 3.296z"></path>
                      </svg>
                      Follow
                    </a>
                  </div>
                  <a href="https://ivysoulmate.com" className="cta border border-sky-500 text-sky-500 p-3 self-stretch rounded-lg items-center justify-center font-semibold text-xl">
                    <svg stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 24 24" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg">
                      <path d="M13 14H11C7.54202 14 4.53953 15.9502 3.03239 18.8107C3.01093 18.5433 3 18.2729 3 18C3 12.4772 7.47715 8 13 8V2.5L23.5 11L13 19.5V14ZM11 12H15V15.3078L20.3214 11L15 6.69224V10H13C10.5795 10 8.41011 11.0749 6.94312 12.7735C8.20873 12.2714 9.58041 12 11 12Z"></path>
                    </svg>
                  </a>
                </div>
              </div>
            </div>
            {/*End Idol Info*/}

            {/*Highlights*/}
            {highlights?.length > 0 ? (
              <div id="highlights-wrapper">
                <div className="flex items-center gap-3 overflow-x-auto px-4 pb-6 pt-3">
                  {highlights.map((highlight, index) => {
                    const media = highlight.media[0];
                    return (
                      <a href="https://ivysoulmate.com" className="cta" key={index}>
                        <div className="aspect-[640/960] w-24 overflow-hidden rounded-lg">
                          {media.media_type == "video" ? (
                            <video loop autoPlay playsInline preload="auto" className="h-full w-full object-cover object-center">
                              <source src={media.url} type="video/mp4" />
                            </video>
                          ) : (
                            <img alt={highlight.caption} loading="lazy" decoding="async" data-nimg="fill" className="!static object-cover" src={media.url} />
                          )}
                        </div>
                      </a>
                    )
                  })}
                </div>
              </div>
            ) : null}
            {/*End Highlights*/}

            {/*Post List*/}
            {posts?.length > 0 ? (
              <div id="posts-list-wrapper">
                {posts.map((post, index) => {
                  return (
                    <Post idol={idol} post={post} key={index} />
                  );
                })}
              </div>
            ) : null}
            {/*End Post List*/}
          </div>
        </div>
        {/*End Content Wrapper*/}
      </div>
      {/*End Page Wrapper*/}

      {/*FOOTER*/}
      <footer className="w-full bg-gray-950">
        <div className="px-4 py-8">
          <img alt="logo" loading="lazy" decoding="async" data-nimg="1" className="object-contain w-40 mb-4" src="logo.png" />
          <div className="flex flex-row">
            <div className="w-1/2 grid content-between pe-2">
              <p className="text-sm">Create your dream girl, chat 24/7, and generate custom pics that bring your fantasy to life.</p>
              <p className="text-sm text-gray-400">© 2025 IvySoulmate.<br/>All Rights Reserved.</p>
            </div>
            <div className="w-1/2 flex flex-col gap-2">
              <p className="font-semibold text-sm text-gray-400">Features</p>
              <a href="https://ivysoulmate.com" className="cta font-semibold">AI Girlfriend</a>
              <a href="https://ivysoulmate.com/explore-ai-girlfriends?tab=idol" className="cta font-semibold">AI Sexting</a>
              <a href="https://ivysoulmate.com/en/create-ai-girlfriend" className="cta font-semibold">Create Girlfriend</a>
              <p className="font-semibold text-sm text-gray-400 mt-4">Legal</p>
              <a href="https://ivysoulmate.com/terms-of-service" className="cta font-semibold">Terms of Service</a>
              <a href="https://ivysoulmate.com/privacy-policy" className="cta font-semibold">Privacy Policy</a>
              <a href="https://ivysoulmate.com/affiliate-policy" className="cta font-semibold">Affiliate Policy</a>
            </div>
          </div>
        </div>
      </footer>
      {/*END FOOTER*/}
    </>
  );
}
