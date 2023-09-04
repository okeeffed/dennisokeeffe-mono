/* eslint-disable @next/next/no-img-element -- Nextjs element invalid for open graphs */
/* eslint-disable react/no-unknown-property -- tw Tailwind property valid for open graphs */
import { ImageResponse } from "next/server";
// App router includes @vercel/og.
// No need to install it.

export const runtime = "edge";

export function GET(request: Request): ImageResponse {
  const { searchParams } = new URL(request.url);

  const hasWidth = searchParams.has("width");
  const width = hasWidth ? searchParams.get("width") : "1200";
  const hasHeight = searchParams.has("height");
  const height = hasHeight ? searchParams.get("height") : "630";

  return new ImageResponse(
    (
      // Modified based on https://tailwindui.com/components/marketing/sections/cta-sections
      <div
        style={{
          background:
            "linear-gradient(to right, rgb(16, 185, 129), rgb(5, 150, 105), rgb(4, 120, 87))",
        }}
        tw={`flex h-[${height}px] w-[${width}px] items-center justify-center bg`}
      >
        <div
          tw={`flex bg-slate-800 flex-col h-[${Number(height) - 80}px] w-[${
            Number(width) - 80
          }px] justify-between`}
        >
          <div tw="flex px-12 pt-12">
            <img
              alt="Display of Dennis O'Keeffe"
              height="280"
              src="https://dennisokeeffe.com/images/bio.png"
              width="280"
            />
          </div>
        </div>
      </div>
    ),
    {
      width: width ? Number(width) : 1200,
      height: height ? Number(height) : 630,
    }
  );
}
