import type { Metadata } from "next";
import Link from "next/link";

const title = "Dennis O'Keeffe | Resume";
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
    <div className="w-full py-4 md:py-8 px-4">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-5xl mb-2 md:mb-8 font-semibold">{`Dennis O'Keeffe`}</h1>
        <h2 className="text-2xl mb-4 md:mb-16">Software Engineer</h2>
        {/* Grid */}
        <div className="grid grid-cols-12 mb-8 gap-y-2 md:gap-y-4">
          <div className="col-span-12 md:col-span-2 font-semibold">
            <h3>City</h3>
          </div>
          <div className="col-span-12 md:col-span-4">
            <p>Melbourne</p>
          </div>
          <div className="col-span-12 md:col-span-2 font-semibold">
            <h3>Email</h3>
          </div>
          <div className="col-span-12 md:col-span-4">
            <p>hello@dennisokeeffe.com</p>
          </div>
          <div className="col-span-12 md:col-span-2 font-bold">
            <h3>Links</h3>
          </div>
          <div className="col-span-12 md:col-span-10">
            <Link
              className="flex items-center gap-2 text-blue-700 hover:underline"
              href="https://github.com/okeeffed"
              target="_blank"
            >
              <span className="inline-block ">
                <svg
                  className="h-4 w-4 fill-blue-700"
                  height="16"
                  viewBox="0 0 16 16"
                  width="16"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.012 8.012 0 0 0 16 8c0-4.42-3.58-8-8-8z" />
                </svg>
              </span>
              <span className="inline-block">https://github.com/okeeffed</span>
            </Link>
            <Link
              className="flex items-center gap-2 text-blue-700 hover:underline"
              href="https://www.dennisokeeffe.com"
            >
              <span className="inline-block">
                <svg
                  className="w-4 h-4 fill-blue-700"
                  height="16"
                  viewBox="0 0 16 16"
                  width="16"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M4.715 6.542 3.343 7.914a3 3 0 1 0 4.243 4.243l1.828-1.829A3 3 0 0 0 8.586 5.5L8 6.086a1.002 1.002 0 0 0-.154.199 2 2 0 0 1 .861 3.337L6.88 11.45a2 2 0 1 1-2.83-2.83l.793-.792a4.018 4.018 0 0 1-.128-1.287z" />
                  <path d="M6.586 4.672A3 3 0 0 0 7.414 9.5l.775-.776a2 2 0 0 1-.896-3.346L9.12 3.55a2 2 0 1 1 2.83 2.83l-.793.792c.112.42.155.855.128 1.287l1.372-1.372a3 3 0 1 0-4.243-4.243L6.586 4.672z" />
                </svg>
              </span>
              <span className="inline-block">
                https://www.dennisokeeffe.com
              </span>
            </Link>
            <Link
              className="flex items-center gap-2 text-blue-700 hover:underline"
              href="https://www.linkedin.com/in/okeeffed/"
              target="_blank"
            >
              <span className="inline-block">
                <svg
                  className="w-4 h-4 fill-blue-700"
                  height="16"
                  viewBox="0 0 16 16"
                  width="16"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M0 1.146C0 .513.526 0 1.175 0h13.65C15.474 0 16 .513 16 1.146v13.708c0 .633-.526 1.146-1.175 1.146H1.175C.526 16 0 15.487 0 14.854V1.146zm4.943 12.248V6.169H2.542v7.225h2.401zm-1.2-8.212c.837 0 1.358-.554 1.358-1.248-.015-.709-.52-1.248-1.342-1.248-.822 0-1.359.54-1.359 1.248 0 .694.521 1.248 1.327 1.248h.016zm4.908 8.212V9.359c0-.216.016-.432.08-.586.173-.431.568-.878 1.232-.878.869 0 1.216.662 1.216 1.634v3.865h2.401V9.25c0-2.22-1.184-3.252-2.764-3.252-1.274 0-1.845.7-2.165 1.193v.025h-.016a5.54 5.54 0 0 1 .016-.025V6.169h-2.4c.03.678 0 7.225 0 7.225h2.4z" />
                </svg>
              </span>
              <span className="inline-block">
                https://www.linkedin.com/in/okeeffed/
              </span>
            </Link>
          </div>
        </div>

        <div className="grid grid-cols-12 mb-2 md:mb-8 gap-y-4 md:gap-y-16">
          {/* Profile */}
          <div className="col-span-12 md:col-span-4">
            <h3 className="text-3xl md:text-xl uppercase font-bold">Profile</h3>
          </div>
          <div className="col-span-12 md:col-span-8">
            <p>
              Experienced Software Developer adept in working from system design
              to launch. Production experience across the board for back-end,
              front-end, mobile and infrastructure technologies.
            </p>
          </div>
          {/* Employment */}
          <div className="col-span-12 md:col-span-12">
            <h3 className="text-3xl uppercase font-bold">Employment history</h3>
          </div>

          <div className="col-span-12 md:col-span-4">
            <h3 className="text-xl uppercase font-bold">Mar 2022 - Aug 2023</h3>
          </div>
          <div className="col-span-12 md:col-span-8">
            <p className="text-xl font-bold mb-4">
              Senior Software Engineer at Visibuild
            </p>
            <p className="text-lg">
              Startup monolith with a React SPA, React Native mobile app and
              GraphQL interface. Infrastructure written in the TypeScript AWS
              CDK. Built vital technologies used to deploy tens of thousands of
              tasks in the Australian construction quality assurance industry.
              Zero-to-seven figure in revenue in 12 months. Spent time on site
              for sales and customer support.
            </p>
          </div>

          <div className="col-span-12 md:col-span-4">
            <h3 className="text-xl uppercase font-bold">Mar 2021 - Aug 2021</h3>
          </div>
          <div className="col-span-12 md:col-span-8">
            <p className="text-xl font-bold mb-4">
              Senior Software Engineer at UsabilityHub
            </p>
            <p className="text-lg">
              Focused work on developer experience. Improve CI/CD pipeline times
              by upwards of 70%. Kick started their Figma implementation. Rails
              monolith with the front-end composed of embedded Ruby and React
              SPA in TypeScript. GitLab CI/CD with the app sitting on the Heroku
              platform. Helped with PostgreSQL maintainence and upgrades.
            </p>
          </div>

          <div className="col-span-12 md:col-span-4">
            <h3 className="text-xl uppercase font-bold">Jul 2019 - Feb 2021</h3>
          </div>
          <div className="col-span-12 md:col-span-8">
            <p className="text-xl font-bold mb-4">
              Senior Software Engineer at Culture Amp
            </p>
            <p className="text-lg">
              Initially worked on their microservices platform. Took
              responsibility when everyone was re-assigned to another service.
              Shipped production code in Elm, React, Java, Elixir, Ruby, Golang,
              ReasonML and Kotlin. Moved to their Performance platform and
              worked on developer experience and tooling. Helped to identify and
              safely remove 70000+ lines of unused code.
            </p>
          </div>

          <div className="col-span-12 md:col-span-4">
            <h3 className="text-xl uppercase font-bold">Jul 2017 - Mar 2019</h3>
          </div>
          <div className="col-span-12 md:col-span-8">
            <p className="text-xl font-bold mb-4">
              Senior Software Engineer at Present Company
            </p>
            <p className="text-lg">
              Shorter, focused client work. Worked across many front-end static
              site generators with back-ends written across different PHP stacks
              (Laravel, Drupal, WordPress). iOS and Android apps built as a mix
              of React Native, Objective-C and Java. Machine Learning apps
              writing in Python. Infrastructure on AWS with Chef/CloudFormation
              used for IaC.
            </p>
          </div>

          <div className="col-span-12 md:col-span-4">
            <h3 className="text-xl uppercase font-bold">Apr 2016 - Aug 2017</h3>
          </div>
          <div className="col-span-12 md:col-span-8">
            <p className="text-xl font-bold mb-4">
              Lead Software Engineer at NightGuru
            </p>
            <p className="text-lg">
              Objective-C iOS app with PHP back-end and MySQL database.
              Infrastructure hosted on AWS. Data analytics with Python. Worked
              across the stack (primarily iOS) to implement all features after a
              hand-off of the product from an overseas company.
            </p>
          </div>
        </div>
        <div className="py-8 space-y-4 text-center">
          <p>
            All projects and work history available on my{" "}
            <Link
              className="text-blue-700 hover:underline"
              href="https://www.dennisokeeffe.com"
            >
              website
            </Link>
            .
          </p>
          <p>References available upon request.</p>
        </div>
      </div>
    </div>
  );
}
