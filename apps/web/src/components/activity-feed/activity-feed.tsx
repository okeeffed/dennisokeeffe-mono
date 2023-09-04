/*
  This example requires some changes to your config:
  
  ```
  // tailwind.config.js
  module.exports = {
    // ...
    plugins: [
      // ...
      require('@tailwindcss/forms'),
    ],
  }
  ```
*/
import cx from "clsx";
import Image from "next/image";
import { CheckCircleIcon } from "@heroicons/react/24/solid";
// Temp
import profile from "@/images/bio.png";
import anon from "@/images/anon.avif";

const activity = [
  {
    id: 1,
    type: "created the website",
    person: { name: "Dennis O'Keeffe" },
    date: "7d ago",
    dateTime: "2023-01-23T10:32",
  },
  {
    id: 2,
    type: "updated the website",
    person: { name: "Dennis O'Keeffe" },
    date: "6d ago",
    dateTime: "2023-01-23T11:03",
  },
  {
    id: 3,
    type: "created the activity feed",
    person: { name: "Dennis O'Keeffe" },
    date: "6d ago",
    dateTime: "2023-01-23T11:24",
  },
  {
    id: 4,
    type: "commented",
    person: {
      name: "Anonymous",
      imageUrl: anon,
    },
    comment:
      "Wow cool new website! I can't wait for you to publish it prematurely.",
    date: "3d ago",
    dateTime: "2023-01-23T15:56",
  },
  {
    id: 5,
    type: "left a message",
    person: { name: "Anonymous" },
    date: "2d ago",
    dateTime: "2023-01-24T09:12",
  },
  {
    id: 8,
    type: "commented",
    person: {
      name: "Dennis O'Keeffe",
      imageUrl: profile,
    },
    comment: "Yes, this is a work in progress. Check back later.",
    date: "3d ago",
    dateTime: "2023-01-23T15:56",
  },
  {
    id: 7,
    type: "deployed the website",
    person: { name: "Dennis O'Keeffe" },
    date: "1d ago",
    dateTime: "2023-01-24T09:20",
  },
];

export function ActivityFeed(): JSX.Element {
  return (
    <ul className="space-y-6">
      {activity.map((activityItem, activityItemIdx) => (
        <li className="relative flex gap-x-4" key={activityItem.id}>
          <div
            className={cx(
              activityItemIdx === activity.length - 1 ? "h-6" : "-bottom-6",
              "absolute left-0 top-0 flex w-6 justify-center"
            )}
          >
            <div className="w-px bg-gray-200" />
          </div>
          {activityItem.type === "commented" ? (
            <>
              <Image
                alt="Activity feed user"
                className="relative mt-3 h-6 w-6 flex-none rounded-full bg-gray-50"
                height={24}
                src={activityItem.person.imageUrl?.src || anon}
                width={24}
              />
              <div className="flex-auto rounded-md p-3 ring-1 ring-inset ring-gray-200">
                <div className="flex justify-between gap-x-4">
                  <div className="py-0.5 text-xs leading-5 text-gray-500">
                    <span className="font-medium text-gray-900">
                      {activityItem.person.name}
                    </span>{" "}
                    commented
                  </div>
                  <time
                    className="flex-none py-0.5 text-xs leading-5 text-gray-500"
                    dateTime={activityItem.dateTime}
                  >
                    {activityItem.date}
                  </time>
                </div>
                <p className="text-sm leading-6 text-gray-500">
                  {activityItem.comment}
                </p>
              </div>
            </>
          ) : (
            <>
              <div className="relative flex h-6 w-6 flex-none items-center justify-center bg-white">
                {activityItem.type === "deployed the website" ? (
                  <CheckCircleIcon
                    aria-hidden="true"
                    className="h-6 w-6 text-indigo-600"
                  />
                ) : (
                  <div className="h-1.5 w-1.5 rounded-full bg-gray-100 ring-1 ring-gray-300" />
                )}
              </div>
              <p className="flex-auto py-0.5 text-xs leading-5 text-gray-500">
                <span className="font-medium text-gray-900">
                  {activityItem.person.name}
                </span>{" "}
                {activityItem.type}.
              </p>
              <time
                className="flex-none py-0.5 text-xs leading-5 text-gray-500"
                dateTime={activityItem.dateTime}
              >
                {activityItem.date}
              </time>
            </>
          )}
        </li>
      ))}
    </ul>
  );
}
