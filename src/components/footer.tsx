
import Image from "next/image";
import Link from "next/link";

export default function Footer() {
  return (
    <footer className=" bg-white w-full border-t mt-10 flex sm:flex-row flex-col justify-between px-12 py-10 sm:mb-0 mb-3 text-sm text-secondary-500">
      <div className="">
        <Link
          href="/"
          aria-current="page"
          className="inline-flex items-center gap-2 text-lg text-secondary-700  md:text-xl"
        >
           <Image
            src={process.env.SITE_LOGO as string}
            alt={process.env.SITE_NAME as string}
            width="120"
            height="90"
          />
        </Link>
      
      </div>
      <div className="mt-10 grid grid-cols-2 gap-10 text-left md:mt-0 md:flex md:gap-24">
        <div>
          <h3 className="font-semibold text-secondary-700">Follow Me</h3>{" "}
          <ul className="mt-4 space-y-2">
            <li>
              <a
                href={"mailto:"+process.env.FOLLOW_MAIL}
                className="hover:text-primary-500 hover:underline"
              >
                Email
              </a>
            </li>{" "}
            <li>
              <a
                href={process.env.FOLLOW_X}
                target="_black"
                rel="noopener norefferer nofollow"
                className="hover:text-primary-500 hover:underline"
              >
                Twitter / X
              </a>
            </li>{" "}
            <li>
              <a
                href={process.env.FOLLOW_GITHUB}
                target="_black"
                rel="noopener norefferer nofollow"
                className="hover:text-primary-500 hover:underline"
              >
                Github
              </a>
            </li>{" "}

          </ul>
        </div>{" "}
        <div>
          <h3 className="font-semibold text-secondary-700">Links</h3>{" "}
          <ul className="mt-4 space-y-2">
            <li>
              <Link
                href="https://www.navifyai.com/"
                title="NavifyAI|Navigate AI Tool Promotion"
                target="_blank"
                className="hover:text-primary-500 hover:underline"
              >
                NavifyAI
              </Link>
            </li>{" "}

          </ul>
        </div>
      </div>
    </footer>
  );
}
