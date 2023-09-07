import type { Metadata } from "next";
import Link from "next/link";
import { ProfileImage } from "@/components/profile-image/profile-image";
import { ActivityFeed } from "@/components/activity-feed/activity-feed";
import { ProjectList } from "@/components/project-list/project-list";

const title = "Dennis O'Keeffe";
const description =
  "Personal website for professional software engineer and aspiring indie founder Dennis O'Keeffe.";

export const metadata: Metadata = {
  metadataBase: new URL("https://www.dennisokeeffe.com"),
  title: "Dennis O'Keeffe",
  description:
    "Personal website for professional software engineer and aspiring indie founder Dennis O'Keeffe.",
  openGraph: {
    title,
    description,
    images: [
      // Facebook
      `/og?title=${description}`,
      // Twitter
      `/og?width=1200&height=675&title=${description}`,
      // LinkedIn
      `/og?width=1200&height=627&title=${description}`,
      // Instagram
      `/og?width=800&height=800&title=${description}`,
    ],
    type: "website",
    siteName: "Dennis O'Keeffe",
    url: "https://www.dennisokeeffe.com",
  },
};

export default function Page(): JSX.Element {
  return (
    <div>
      <div className="text-center mx-auto space-x-4 py-2 bg-emerald-500 text-black font-mono">
        <Link
          className="p-2 font-semibold hover:bg-yellow-400 hover:text-black hover:font-bold"
          href="#activity-feed"
        >
          Activity Feed
        </Link>
        <Link
          className="p-2 font-semibold hover:bg-yellow-400 hover:text-black hover:font-bold"
          href="#projects"
        >
          Projects
        </Link>
        <Link
          className="p-2 font-semibold hover:bg-yellow-400 hover:text-black inline-flex items-center justify-center hover:font-bold"
          href="https://blog.dennisokeeffe.com"
          target="_blank"
        >
          Blog
          <span className="ml-2">
            <svg
              className="w-5 h-5"
              fill="currentColor"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                clipRule="evenodd"
                d="M4.25 5.5a.75.75 0 00-.75.75v8.5c0 .414.336.75.75.75h8.5a.75.75 0 00.75-.75v-4a.75.75 0 011.5 0v4A2.25 2.25 0 0112.75 17h-8.5A2.25 2.25 0 012 14.75v-8.5A2.25 2.25 0 014.25 4h5a.75.75 0 010 1.5h-5z"
                fillRule="evenodd"
              />
              <path
                clipRule="evenodd"
                d="M6.194 12.753a.75.75 0 001.06.053L16.5 4.44v2.81a.75.75 0 001.5 0v-4.5a.75.75 0 00-.75-.75h-4.5a.75.75 0 000 1.5h2.553l-9.056 8.194a.75.75 0 00-.053 1.06z"
                fillRule="evenodd"
              />
            </svg>
          </span>
        </Link>
      </div>
      <div className="bg-gradient-to-r from-slate-900 to-slate-700 py-32 px-8 space-y-16">
        <ProfileImage />
        <div className="text-white text-center space-y-6">
          <h1 className="text-4xl">{`Dennis O'Keeffe`}</h1>
          <div className="flex flex-col md:flex-row items-center justify-center gap-2">
            <p className="text-xl font-mono text-gray-100">Tinkerer.</p>
            <p className="text-xl font-mono p-2 font-bold bg-yellow-400 text-black shadow-solid-green-sm sm:block">
              Wannabe founder.
            </p>
          </div>
        </div>
        <div className="flex justify-center items-center gap-8">
          <Link href="https://www.linkedin.com/in/okeeffed" target="_blank">
            <span className="sr-only">LinkedIn</span>
            <svg
              className="h-12 w-12 fill-white shadow-solid-social hover:fill-pink-400"
              viewBox="0 0 448 512"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M416 32H31.9C14.3 32 0 46.5 0 64.3v383.4C0 465.5 14.3 480 31.9 480H416c17.6 0 32-14.5 32-32.3V64.3c0-17.8-14.4-32.3-32-32.3zM135.4 416H69V202.2h66.5V416zm-33.2-243c-21.3 0-38.5-17.3-38.5-38.5S80.9 96 102.2 96c21.2 0 38.5 17.3 38.5 38.5 0 21.3-17.2 38.5-38.5 38.5zm282.1 243h-66.4V312c0-24.8-.5-56.7-34.5-56.7-34.6 0-39.9 27-39.9 54.9V416h-66.4V202.2h63.7v29.2h.9c8.9-16.8 30.6-34.5 62.9-34.5 67.2 0 79.7 44.3 79.7 101.9V416z" />
            </svg>
          </Link>
          <Link href="https://github.com/okeeffed" target="_blank">
            <span className="sr-only">GitHub</span>
            <svg
              className="h-12 w-12 fill-white shadow-solid-social hover:fill-pink-400"
              viewBox="0 0 448 512"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M400 32H48C21.5 32 0 53.5 0 80v352c0 26.5 21.5 48 48 48h352c26.5 0 48-21.5 48-48V80c0-26.5-21.5-48-48-48zM277.3 415.7c-8.4 1.5-11.5-3.7-11.5-8 0-5.4.2-33 .2-55.3 0-15.6-5.2-25.5-11.3-30.7 37-4.1 76-9.2 76-73.1 0-18.2-6.5-27.3-17.1-39 1.7-4.3 7.4-22-1.7-45-13.9-4.3-45.7 17.9-45.7 17.9-13.2-3.7-27.5-5.6-41.6-5.6-14.1 0-28.4 1.9-41.6 5.6 0 0-31.8-22.2-45.7-17.9-9.1 22.9-3.5 40.6-1.7 45-10.6 11.7-15.6 20.8-15.6 39 0 63.6 37.3 69 74.3 73.1-4.8 4.3-9.1 11.7-10.6 22.3-9.5 4.3-33.8 11.7-48.3-13.9-9.1-15.8-25.5-17.1-25.5-17.1-16.2-.2-1.1 10.2-1.1 10.2 10.8 5 18.4 24.2 18.4 24.2 9.7 29.7 56.1 19.7 56.1 19.7 0 13.9.2 36.5.2 40.6 0 4.3-3 9.5-11.5 8-66-22.1-112.2-84.9-112.2-158.3 0-91.8 70.2-161.5 162-161.5S388 165.6 388 257.4c.1 73.4-44.7 136.3-110.7 158.3zm-98.1-61.1c-1.9.4-3.7-.4-3.9-1.7-.2-1.5 1.1-2.8 3-3.2 1.9-.2 3.7.6 3.9 1.9.3 1.3-1 2.6-3 3zm-9.5-.9c0 1.3-1.5 2.4-3.5 2.4-2.2.2-3.7-.9-3.7-2.4 0-1.3 1.5-2.4 3.5-2.4 1.9-.2 3.7.9 3.7 2.4zm-13.7-1.1c-.4 1.3-2.4 1.9-4.1 1.3-1.9-.4-3.2-1.9-2.8-3.2.4-1.3 2.4-1.9 4.1-1.5 2 .6 3.3 2.1 2.8 3.4zm-12.3-5.4c-.9 1.1-2.8.9-4.3-.6-1.5-1.3-1.9-3.2-.9-4.1.9-1.1 2.8-.9 4.3.6 1.3 1.3 1.8 3.3.9 4.1zm-9.1-9.1c-.9.6-2.6 0-3.7-1.5s-1.1-3.2 0-3.9c1.1-.9 2.8-.2 3.7 1.3 1.1 1.5 1.1 3.3 0 4.1zm-6.5-9.7c-.9.9-2.4.4-3.5-.6-1.1-1.3-1.3-2.8-.4-3.5.9-.9 2.4-.4 3.5.6 1.1 1.3 1.3 2.8.4 3.5zm-6.7-7.4c-.4.9-1.7 1.1-2.8.4-1.3-.6-1.9-1.7-1.5-2.6.4-.6 1.5-.9 2.8-.4 1.3.7 1.9 1.8 1.5 2.6z" />
            </svg>
          </Link>
          <Link href="https://twitter.com/dennisokeeffe92" target="_blank">
            <span className="sr-only">X (formerly Twitter)</span>
            <svg
              className="h-12 w-12 fill-white shadow-solid-social hover:fill-pink-400"
              viewBox="0 0 448 512"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M64 32C28.7 32 0 60.7 0 96V416c0 35.3 28.7 64 64 64H384c35.3 0 64-28.7 64-64V96c0-35.3-28.7-64-64-64H64zm297.1 84L257.3 234.6 379.4 396H283.8L209 298.1 123.3 396H75.8l111-126.9L69.7 116h98l67.7 89.5L313.6 116h47.5zM323.3 367.6L153.4 142.9H125.1L296.9 367.6h26.3z" />
            </svg>
          </Link>
          <Link href="https://www.instagram.com/dendribbles" target="_blank">
            <span className="sr-only">Instagram</span>
            <svg
              className="h-12 w-12 fill-white shadow-solid-social hover:fill-pink-400"
              viewBox="0 0 448 512"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M224,202.66A53.34,53.34,0,1,0,277.36,256,53.38,53.38,0,0,0,224,202.66Zm124.71-41a54,54,0,0,0-30.41-30.41c-21-8.29-71-6.43-94.3-6.43s-73.25-1.93-94.31,6.43a54,54,0,0,0-30.41,30.41c-8.28,21-6.43,71.05-6.43,94.33S91,329.26,99.32,350.33a54,54,0,0,0,30.41,30.41c21,8.29,71,6.43,94.31,6.43s73.24,1.93,94.3-6.43a54,54,0,0,0,30.41-30.41c8.35-21,6.43-71.05,6.43-94.33S357.1,182.74,348.75,161.67ZM224,338a82,82,0,1,1,82-82A81.9,81.9,0,0,1,224,338Zm85.38-148.3a19.14,19.14,0,1,1,19.13-19.14A19.1,19.1,0,0,1,309.42,189.74ZM400,32H48A48,48,0,0,0,0,80V432a48,48,0,0,0,48,48H400a48,48,0,0,0,48-48V80A48,48,0,0,0,400,32ZM382.88,322c-1.29,25.63-7.14,48.34-25.85,67s-41.4,24.63-67,25.85c-26.41,1.49-105.59,1.49-132,0-25.63-1.29-48.26-7.15-67-25.85s-24.63-41.42-25.85-67c-1.49-26.42-1.49-105.61,0-132,1.29-25.63,7.07-48.34,25.85-67s41.47-24.56,67-25.78c26.41-1.49,105.59-1.49,132,0,25.63,1.29,48.33,7.15,67,25.85s24.63,41.42,25.85,67.05C384.37,216.44,384.37,295.56,382.88,322Z" />
            </svg>
          </Link>
        </div>
      </div>
      <div
        className="mx-auto max-w-3xl py-16 space-y-16 md:py-32 px-4 md:space-y-32"
        id="activity-feed"
      >
        <h2 className="text-center font-bold font-sans text-white text-3xl md:text-5xl leading-loose">
          <span className="p-4 font-bold [text-shadow:_1px_3px_0_rgb(360_0_0_/_100%)] bg-slate-800 shadow-solid-pink-500">
            Activity Feed
          </span>
        </h2>
        <ActivityFeed />
      </div>
      <hr />
      <div
        className="mx-auto max-w-5xl py-16 space-y-8 md:py-32 px-4 md:space-y-32"
        id="projects"
      >
        <div>
          <h2 className="mb-16 text-center font-bold font-sans text-white text-3xl md:text-5xl">
            <span className="p-4 font-bold [text-shadow:_1px_3px_0_rgb(360_0_0_/_100%)] bg-slate-800 shadow-solid-pink-500">
              Projects
            </span>
          </h2>
          <p className="text-center font-mono max-w-2xl mx-auto text-xs">
            (Yes this is a work in progress for next time I am procrastinating
            other work.)
          </p>
        </div>
        <ProjectList />
      </div>
    </div>
  );
}
