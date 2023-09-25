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
        <div className="grid grid-cols-12 mb-4 md:mb-8 gap-y-2 md:gap-y-4">
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
              className="block text-blue-700 hover:underline"
              href="https://github.com/okeeffed"
              target="_blank"
            >
              GitHub
            </Link>
            <Link
              className="block text-blue-700 hover:underline"
              href="https://www.dennisokeeffe.com"
            >
              Personal website
            </Link>
            <Link
              className="block text-blue-700 hover:underline"
              href="https://www.linkedin.com/in/okeeffed/"
              target="_blank"
            >
              LinkedIn
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
              Rails monolith with a React SPA, React Native mobile app and
              GraphQL interface. Infrastructure written in the TypeScript AWS
              CDK. Built vital technologies used to deploy tens of thousands of
              tasks in the Australian construction quality assurance industry.
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
              SPA. GitLab CI/CD with the app sitting on the Heroku platform.
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
        </div>
      </div>
    </div>
  );
}
