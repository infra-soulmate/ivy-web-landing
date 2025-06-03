export async function generateMetadata({ params }) {
  // const post = await fetchPost(params.id);
  return {
    title: "tittttt",
    openGraph: {
      title: "og title",
      images: ["https://ivy-cdn.b-cdn.net/static/og.jpg"]
    },
  };
}

export default function Home() {
  return (
    <>
      {/*Page Wrapper*/}
      <div className="flex flex-col bg-zinc-950 min-h-screen">

        {/*Header*/}
        <div className="safe-area-pt sticky top-0 z-10 border-b border-zinc-800/80 bg-zinc-950/90 backdrop-blur-md">
          <div className="mx-auto flex h-14 max-w-screen-md items-center justify-between px-4">
            <img alt="logo" loading="lazy" decoding="async" data-nimg="1" className="object-contain w-40" src="logo.png" />
            <div className="flex items-center gap-2">
              <a href="https://ivysoulmate.com" className="cta text-rose-400 border border-rose-400 no-underline rounded-full font-semibold text-xs px-4 py-2">
                Explore Now For Free
              </a>
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
                  <div className="h-20 w-full max-w-20 overflow-hidden rounded-full animate-pulse bg-gray-600/30">
                  </div>
                  <div className="flex flex-col gap-2">
                    <div className="animate-pulse bg-gray-600/30 rounded-full w-32 h-6"></div>
                    <div className="animate-pulse bg-gray-600/30 rounded-full w-24 h-4">
                    </div>
                  </div>
                </div>
                <div className="relative flex flex-col gap-1 text-sm">
                  <div className="animate-pulse bg-gray-600/30 rounded-full w-full h-4"></div>
                  <div className="animate-pulse bg-gray-600/30 rounded-full w-2/3 h-4"></div>
                </div>
                <div className="flex w-full items-center gap-2">
                  <div className="w-full">
                    <a href="https://ivysoulmate.com" className="cta animate-pulse bg-gray-600/30 py-3 rounded-lg items-center justify-center font-semibold text-sm flex w-full gap-2 text-gray-600/30">
                      <svg stroke="currentColor" fill="none" strokeWidth="2" viewBox="0 0 24 24" strokeLinecap="round" strokeLinejoin="round" className="text-xl" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg">
                        <path d="M10.59 19.88a9.763 9.763 0 0 1 -2.89 -.88l-4.7 1l1.3 -3.9c-2.324 -3.437 -1.426 -7.872 2.1 -10.374c3.526 -2.501 8.59 -2.296 11.845 .48c1.565 1.335 2.479 3.065 2.71 4.861"></path>
                        <path d="M18 22l3.35 -3.284a2.143 2.143 0 0 0 .005 -3.071a2.242 2.242 0 0 0 -3.129 -.006l-.224 .22l-.223 -.22a2.242 2.242 0 0 0 -3.128 -.006a2.143 2.143 0 0 0 -.006 3.071l3.355 3.296z"></path>
                      </svg>
                      Chat
                    </a>
                  </div>
                  <div className="w-full">
                    <a href="https://ivysoulmate.com" className="cta animate-pulse border border-gray-600/30 text-gray-600/30 py-3 rounded-lg items-center justify-center font-semibold text-sm flex w-full gap-2">
                      <svg stroke="currentColor" fill="none" strokeWidth="2" viewBox="0 0 24 24" strokeLinecap="round" strokeLinejoin="round" className="text-xl" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg">
                        <path d="M8 7a4 4 0 1 0 8 0a4 4 0 0 0 -8 0"></path>
                        <path d="M6 21v-2a4 4 0 0 1 4 -4h.5"></path>
                        <path d="M18 22l3.35 -3.284a2.143 2.143 0 0 0 .005 -3.071a2.242 2.242 0 0 0 -3.129 -.006l-.224 .22l-.223 -.22a2.242 2.242 0 0 0 -3.128 -.006a2.143 2.143 0 0 0 -.006 3.071l3.355 3.296z"></path>
                      </svg>
                      Follow
                    </a>
                  </div>
                  <a href="https://ivysoulmate.com" className="cta animate-pulse border border-gray-600/30 text-gray-600/30 p-3 self-stretch rounded-lg items-center justify-center font-semibold text-xl">
                    <svg stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 24 24" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg">
                      <path d="M13 14H11C7.54202 14 4.53953 15.9502 3.03239 18.8107C3.01093 18.5433 3 18.2729 3 18C3 12.4772 7.47715 8 13 8V2.5L23.5 11L13 19.5V14ZM11 12H15V15.3078L20.3214 11L15 6.69224V10H13C10.5795 10 8.41011 11.0749 6.94312 12.7735C8.20873 12.2714 9.58041 12 11 12Z"></path>
                    </svg>
                  </a>
                </div>
              </div>
            </div>
            {/*End Idol Info*/}

            {/*Highlights*/}
            <div id="highlights-wrapper">
              <div className="flex items-center gap-3 overflow-x-auto px-4 pb-6 pt-3">
                <div className="aspect-[640/960] w-24 overflow-hidden rounded-lg animate-pulse bg-gray-600/30">
                </div>
                <div className="aspect-[640/960] w-24 overflow-hidden rounded-lg animate-pulse bg-gray-600/30">
                </div>
                <div className="aspect-[640/960] w-24 overflow-hidden rounded-lg animate-pulse bg-gray-600/30">
                </div>
              </div>
            </div>
            {/*End Highlights*/}

            {/*Post List*/}
            <div id="posts-list-wrapper">
              {/*List*/}
              <div className="border-b border-zinc-800/80">
                <div className="flex w-full flex-col gap-3 border-b border-gray-800 pb-8">
                  <div className="flex w-full items-center gap-2 px-4 pt-4">
                    <a href="https://ivysoulmate.com" className="cta w-fit cta">
                      <div className="h-10 w-10 overflow-hidden rounded-full animate-pulse bg-gray-600/30">
                      </div>
                    </a>
                    <div className="flex w-full items-center justify-between">
                      <div>
                        <div className="animate-pulse bg-gray-600/30 w-32 h-4 rounded-full mb-2">
                        </div>
                        <div className="animate-pulse bg-gray-600/30 w-24 h-3 rounded-full"></div>
                      </div>
                      <div>
                        <a href="https://ivysoulmate.com" className="cta flex w-full items-center justify-center gap-2 rounded-xl font-bold text-sm animate-pulse bg-gray-600/30 rounded-lg text-gray-600/30 px-4 py-2">
                          <svg stroke="currentColor" fill="none" strokeWidth="2" viewBox="0 0 24 24" strokeLinecap="round" strokeLinejoin="round" className="text-xl" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg">
                            <path d="M10.59 19.88a9.763 9.763 0 0 1 -2.89 -.88l-4.7 1l1.3 -3.9c-2.324 -3.437 -1.426 -7.872 2.1 -10.374c3.526 -2.501 8.59 -2.296 11.845 .48c1.565 1.335 2.479 3.065 2.71 4.861"></path>
                            <path d="M18 22l3.35 -3.284a2.143 2.143 0 0 0 .005 -3.071a2.242 2.242 0 0 0 -3.129 -.006l-.224 .22l-.223 -.22a2.242 2.242 0 0 0 -3.128 -.006a2.143 2.143 0 0 0 -.006 3.071l3.355 3.296z"></path>
                          </svg>
                          Chat
                        </a>
                      </div>
                    </div>
                  </div>
                  <div className="relative z-0 aspect-[640/960] w-full animate-pulse bg-gray-600/30">
                    <div className="h-full w-full swiper-backface-hidden">
                    </div>
                  </div>
                  <div className="flex flex-col gap-1 px-4 text-sm">
                    <div className="animate-pulse bg-gray-600/30 rounded-full w-full h-3"></div>
                    <div className="animate-pulse bg-gray-600/30 rounded-full w-2/3 h-3"></div>
                  </div>
                </div>
              </div>
              {/*End List*/}

              {/*Grid*/}
              {/*End Grid*/}
            </div>
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
