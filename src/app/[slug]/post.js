'use client'

import { Navigation, Pagination, Scrollbar, A11y } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';

import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

export default function Post({idol, post}) {
  const nsfwVersionCta = (
    <div className="fixed top-4 flex justify-center w-full">
      <a href="https://ivysoulmate.com" className="cta flex items-center justify-center gap-2 bg-gray-950/40 px-4 py-2 rounded-full text-sm backdrop-blur-md">
        🔞<span className="underline underline-offset-2">Click here to view <strong className="text-rose-300">NSFW</strong> Version</span>
        <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-external-link-icon lucide-external-link"><path d="M15 3h6v6"/><path d="M10 14 21 3"/><path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"/></svg>
      </a>
    </div>
  );

  const createdAt = new Intl.DateTimeFormat("en-US", {
      month: "short",
      day: "numeric",
      hour: "numeric",
      minute: "numeric",
      hourCycle: "h24"
    }).format(new Date(post.created_at));

  return (
    <div className="border-b border-zinc-800/80">
      <div className="flex w-full flex-col gap-3 border-b border-gray-800">
        <div className="flex w-full items-center gap-2 px-4 pt-4">
          <a href="https://ivysoulmate.com" className="w-fit cta">
            <div className="h-10 w-10 overflow-hidden rounded-full">
              <img alt={idol.display_name} loading="lazy" decoding="async" data-nimg="fill" className="!static object-cover object-top" src={idol.photo_url} />
            </div>
          </a>
          <div className="flex w-full items-center justify-between">
            <div>
              <div>
                <a href="https://ivysoulmate.com" className="w-fit cta">
                  <span className="w-fit font-semibold text-gray-200">{idol.display_name}</span></a>&nbsp;&nbsp;•&nbsp;&nbsp;<a href="https://ivysoulmate.com" className="cta font-medium no-underline text-rose-500">Follow
                </a>
              </div>
              <div className="text-sm text-gray-400">
                {createdAt}
              </div>
            </div>
            <div>
              <a href="https://ivysoulmate.com" className="cta flex w-full items-center justify-center gap-2 rounded-xl font-bold text-sm text-rose-50 bg-rose-500 px-4 py-2">
                <svg stroke="currentColor" fill="none" strokeWidth="2" viewBox="0 0 24 24" strokeLinecap="round" strokeLinejoin="round" className="text-xl" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg">
                  <path d="M10.59 19.88a9.763 9.763 0 0 1 -2.89 -.88l-4.7 1l1.3 -3.9c-2.324 -3.437 -1.426 -7.872 2.1 -10.374c3.526 -2.501 8.59 -2.296 11.845 .48c1.565 1.335 2.479 3.065 2.71 4.861"></path>
                  <path d="M18 22l3.35 -3.284a2.143 2.143 0 0 0 .005 -3.071a2.242 2.242 0 0 0 -3.129 -.006l-.224 .22l-.223 -.22a2.242 2.242 0 0 0 -3.128 -.006a2.143 2.143 0 0 0 -.006 3.071l3.355 3.296z"></path>
                </svg>
                Chat
              </a>
            </div>
          </div>
        </div>
        <div className="relative z-0 aspect-[640/960] w-full bg-gray-950">
          <Swiper
            modules={[Navigation, Pagination, Scrollbar, A11y]}
            navigation
            pagination
            >
            {post.media.map((media, index) => {
              if (media.media_type == "video") {
                return (
                  <SwiperSlide key={index}>
                    <div className="relative z-0 h-full w-full overflow-hidden">
                      <div className="relative -z-10 h-full w-full">
                        <video loop autoPlay playsInline preload="auto" className="h-full w-full object-cover object-center">
                          <source src={media.url} type="video/mp4" />
                        </video>
                        {nsfwVersionCta}
                      </div>
                    </div>
                  </SwiperSlide>
                );
              } else {
                return (
                  <SwiperSlide>
                    <div className="relative z-0 h-full w-full overflow-hidden">
                      <div className="relative -z-10 h-full w-full">
                        <img alt={post.caption} loading="lazy" decoding="async" data-nimg="fill" className="!static w-full h-full object-cover object-center" src={media.url} />
                        {nsfwVersionCta}
                      </div>
                    </div>
                  </SwiperSlide>
                );
              }
            })}
            <SwiperSlide>
              <div className="relative z-0 h-full w-full overflow-hidden">
                <div className="relative -z-10 h-full w-full">
                  <img alt={idol.display_name} loading="lazy" decoding="async" data-nimg="fill" className="!static w-full h-full object-cover object-center" src={idol.photo_url} />
                </div>
              </div>
              <div className="fixed top-0 left-0 h-full w-full flex-col items-center gap-6 bg-gray-950/40 backdrop-blur-sm px-6 py-4 text-center place-content-center">
                <div className="pb-6">
                  <h3 className="pb-1 text-lg font-bold text-primary">Love Her Photos?</h3>
                  <p className="text-sm px-4">Explore More Hot Albums and Videos From&nbsp;<span className="font-bold">{idol.display_name}</span></p>
                </div>
                <a href="https://ivysoulmate.com" className="cta text-rose-50 no-underline bg-rose-400 rounded-full font-semibold text-sm px-4 py-2 mt-4">
                  😘 Visit {idol.display_name}
                </a>
              </div>
            </SwiperSlide>
          </Swiper>
        </div>
        <div className="flex flex-col gap-1 px-4 text-sm">
          <div>{post.caption}</div>
        </div>
        <div className="flex items-center justify-between gap-6 px-4 pb-4">
          <div className="flex items-center gap-6">
            <div className="flex w-fit items-center gap-1">
              <a href="https://ivysoulmate.com" className="cta text-2xl text-red-500 transition-transform duration-300" tabIndex="0">
                <svg stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 24 24" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg">
                  <path d="M12.001 4.52853C14.35 2.42 17.98 2.49 20.2426 4.75736C22.5053 7.02472 22.583 10.637 20.4786 12.993L11.9999 21.485L3.52138 12.993C1.41705 10.637 1.49571 7.01901 3.75736 4.75736C6.02157 2.49315 9.64519 2.41687 12.001 4.52853ZM18.827 6.1701C17.3279 4.66794 14.9076 4.60701 13.337 6.01687L12.0019 7.21524L10.6661 6.01781C9.09098 4.60597 6.67506 4.66808 5.17157 6.17157C3.68183 7.66131 3.60704 10.0473 4.97993 11.6232L11.9999 18.6543L19.0201 11.6232C20.3935 10.0467 20.319 7.66525 18.827 6.1701Z"></path>
                </svg>
              </a>
              <span>{post.like_count}</span>
            </div>
            <a href="https://ivysoulmate.com" className="cta flex items-center gap-2 text-primary" tabIndex="0">
              <svg stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 576 512" className="text-xl" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg">
                <path d="M163.9 136.9c-29.4-29.8-29.4-78.2 0-108s77-29.8 106.4 0l17.7 18 17.7-18c29.4-29.8 77-29.8 106.4 0s29.4 78.2 0 108L310.5 240.1c-6.2 6.3-14.3 9.4-22.5 9.4s-16.3-3.1-22.5-9.4L163.9 136.9zM568.2 336.3c13.1 17.8 9.3 42.8-8.5 55.9L433.1 485.5c-23.4 17.2-51.6 26.5-80.7 26.5H192 32c-17.7 0-32-14.3-32-32V416c0-17.7 14.3-32 32-32H68.8l44.9-36c22.7-18.2 50.9-28 80-28H272h16 64c17.7 0 32 14.3 32 32s-14.3 32-32 32H288 272c-8.8 0-16 7.2-16 16s7.2 16 16 16H392.6l119.7-88.2c17.8-13.1 42.8-9.3 55.9 8.5zM193.6 384l0 0-.9 0c.3 0 .6 0 .9 0z"></path>
              </svg>
              Send Tip
            </a>
          </div>
          <div className="flex items-center">
            <a href="https://ivysoulmate.com" className="cta text-2xl" tabIndex="0">
              <svg stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 24 24" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg">
                <path d="M13 14H11C7.54202 14 4.53953 15.9502 3.03239 18.8107C3.01093 18.5433 3 18.2729 3 18C3 12.4772 7.47715 8 13 8V2.5L23.5 11L13 19.5V14ZM11 12H15V15.3078L20.3214 11L15 6.69224V10H13C10.5795 10 8.41011 11.0749 6.94312 12.7735C8.20873 12.2714 9.58041 12 11 12Z"></path>
              </svg>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}