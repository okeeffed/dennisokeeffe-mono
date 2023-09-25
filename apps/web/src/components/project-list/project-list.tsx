import Link from "next/link";

const people = [
  {
    name: "Zen Maru Studio",
    title: "Digital agency for international clients",
    whatHappened: "Active",
    status: "Active",
    url: "https://www.zenmarustudio.com/",
  },
  {
    name: "DropPack",
    title: "Tool for sane multi-project file management",
    whatHappened: "Released",
    status: "Active",
    url: "https://droppack.dev",
  },
  {
    name: "melbcoffee.com",
    title: "Coffee blog + social media community",
    whatHappened: "Released",
    status: "Active",
    url: "https://www.melbcoffee.com",
  },
  {
    name: "Visibuild",
    title: "Employment in Constructon QA company",
    whatHappened: "Resigned in 2023",
    status: "Finished",
    url: "https://www.visibuild.com.au",
  },
  {
    name: "UsabilityHub",
    title: "Employment at UX research company",
    whatHappened: "Resigned in 2021",
    status: "Finished",
    url: "https://usabilityhub.com",
  },
  {
    name: "TheLastWeekIn.Dev",
    title: "Newsletter for developers",
    whatHappened: "Ongoing weekly",
    status: "Active",
    url: "https://thelastweekin.dev",
  },
  {
    name: "Culture Amp",
    title: "Employment at employee experience platform",
    whatHappened: "Resigned in 2021",
    status: "Finished",
    url: "https://www.cultureamp.com",
  },
  {
    name: "Den Dribbles Blog",
    title: "Personal developer blog",
    whatHappened: "Ongoing",
    status: "Active",
    url: "https://blog.dennisokeeffe.com",
  },
  {
    name: "Present Company",
    title: "Employment at digital agency",
    whatHappened: "Resigned in 2019",
    status: "Finished",
    url: "https://www.presentcompany.co",
  },
  {
    name: "Kill The Fin Trade",
    title: "Website built for Sea Shepherd",
    whatHappened: "Campaign complete",
    status: "Retired",
    url: "https://semipermanent.com/case-studies/kill-the-fin-trade",
  },
  {
    name: "NSW Gov National Parks Blog",
    title: "Website built for NSW Government",
    whatHappened: "Website complete",
    status: "Online",
    url: "https://blog.nationalparks.nsw.gov.au",
  },
  {
    name: "Red Rooster rewards iOS app",
    title: "Mobile app built for Red Rooster",
    whatHappened: "Released",
    status: "Retired",
    url: "https://apps.apple.com/au/app/red-rooster/id958424854",
  },
  {
    name: "Oporto rewards iOS app",
    title: "Mobile app built for Oporto",
    whatHappened: "Released",
    status: "Retired",
    url: "https://apps.apple.com/au/app/oporto/id920675672",
  },
  {
    name: "[yellowtail] website",
    title: "Website built for [yellowtail]",
    whatHappened: "Released",
    status: "Online",
    url: "https://www.yellowtailwine.com",
  },
  {
    name: "Oporto website",
    title: "Website built for Oporto",
    whatHappened: "Released",
    status: "Retired",
    url: "https://www.oporto.com.au",
  },
  {
    name: "Red Rooster website",
    title: "Website built for Red Rooster",
    whatHappened: "Released",
    status: "Retired",
    url: "https://redrooster.com.au/",
  },
  // More people...
];

function classNames(...classes): string {
  return classes.filter(Boolean).join(" ");
}

export function ProjectList(): JSX.Element {
  return (
    <div className="px-4 sm:px-6 lg:px-8">
      <div className="mt-8 flow-root">
        <div className="-mx-4 -my-2 sm:-mx-6 lg:-mx-8">
          <div className="inline-block min-w-full py-2 align-middle">
            <table className="min-w-full border-separate border-spacing-0">
              <thead>
                <tr>
                  <th
                    className="sticky top-0 z-10 border-b border-gray-300 bg-white bg-opacity-75 py-3.5 pl-4 pr-3 text-left text-sm font-semibold text-gray-900 backdrop-blur backdrop-filter sm:pl-6 lg:pl-8"
                    scope="col"
                  >
                    Name
                  </th>
                  <th
                    className="sticky top-0 z-10 hidden border-b border-gray-300 bg-white bg-opacity-75 px-3 py-3.5 text-left text-sm font-semibold text-gray-900 backdrop-blur backdrop-filter sm:table-cell"
                    scope="col"
                  >
                    Description
                  </th>
                  <th
                    className="sticky top-0 z-10 hidden border-b border-gray-300 bg-white bg-opacity-75 px-3 py-3.5 text-left text-sm font-semibold text-gray-900 backdrop-blur backdrop-filter lg:table-cell"
                    scope="col"
                  >
                    What happened?
                  </th>
                  <th
                    className="sticky top-0 z-10 border-b border-gray-300 bg-white bg-opacity-75 px-3 py-3.5 text-left text-sm font-semibold text-gray-900 backdrop-blur backdrop-filter"
                    scope="col"
                  >
                    Status
                  </th>
                  <th
                    className="sticky top-0 z-10 border-b border-gray-300 bg-white bg-opacity-75 py-3.5 pl-3 pr-4 backdrop-blur backdrop-filter sm:pr-6 lg:pr-8"
                    scope="col"
                  >
                    <span className="sr-only">Link</span>
                  </th>
                </tr>
              </thead>
              <tbody>
                {people.map((project, projectIdx) => (
                  <tr key={project.whatHappened}>
                    <td
                      className={classNames(
                        projectIdx !== people.length - 1
                          ? "border-b border-gray-200"
                          : "",
                        "whitespace-nowrap py-4 pl-4 pr-3 text-sm font-medium text-gray-900 sm:pl-6 lg:pl-8"
                      )}
                    >
                      {project.name}
                    </td>
                    <td
                      className={classNames(
                        projectIdx !== people.length - 1
                          ? "border-b border-gray-200"
                          : "",
                        "whitespace-nowrap hidden px-3 py-4 text-sm text-gray-500 sm:table-cell"
                      )}
                    >
                      {project.title}
                    </td>
                    <td
                      className={classNames(
                        projectIdx !== people.length - 1
                          ? "border-b border-gray-200"
                          : "",
                        "whitespace-nowrap hidden px-3 py-4 text-sm text-gray-500 lg:table-cell"
                      )}
                    >
                      {project.whatHappened}
                    </td>
                    <td
                      className={classNames(
                        projectIdx !== people.length - 1
                          ? "border-b border-gray-200"
                          : "",
                        "whitespace-nowrap px-3 py-4 text-sm text-gray-500"
                      )}
                    >
                      {project.status}
                    </td>
                    <td
                      className={classNames(
                        projectIdx !== people.length - 1
                          ? "border-b border-gray-200"
                          : "",
                        "relative whitespace-nowrap py-4 pr-4 pl-3 text-right text-sm font-medium sm:pr-8 lg:pr-8"
                      )}
                    >
                      <Link
                        className="text-indigo-600 hover:text-indigo-900"
                        href={project.url}
                        target="_blank"
                      >
                        <span className="sr-only">Link to ...</span>
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
                      </Link>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
}
