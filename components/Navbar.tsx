import Image from "next/image";
import Link from "next/link";
import { NAV_LINKS } from "@/constants";
import Button from "./Button";

const Navbar = () => {
  return (
    <header className="relative w-full h-screen">
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: "url('/_Layer_.png')",
          height: "90vh",
          width: "100%",
        }}
      ></div>

      <nav className="relative z-10 flex items-center justify-between mx-auto max-w-[1440px] px-6 lg:px-20 3xl:px-0 py-5">
        <Link href="/">
          <Image src="/Bitmaplogo.png" alt="logo" width={150} height={29} />
        </Link>

        <ul className="hidden h-full gap-12 lg:flex">
          {NAV_LINKS.map((link) => (
            <Link
              href={link.href}
              key={link.key}
              className="regular-16 text-black flexCenter cursor-pointer pb-1.5 transition-all hover:font-bold"
            >
              {link.label}
            </Link>
          ))}
        </ul>

        <div className="lg:flexCenter hidden">
          <Button type="button" title="Contact us" variant="btn_orange" />
        </div>

        <Image
          src="menu.svg"
          alt="menu"
          width={32}
          height={32}
          className="inline-block cursor-pointer lg:hidden"
        />
      </nav>

      <section className="relative z-10 flex flex-col lg:flex-row items-start justify-start text-left text-white h-full px-6 lg:px-20 py-20 mt-10">
        <div className="lg:w-1/2">
          <h1 className="text-4xl lg:text-6xl font-bold text-black">
            HOW MUCH COULD YOU SAVE?
          </h1>
          <p className="mt-4 max-w-2xl text-black text-2xl">
            Answer the questions below to get a fixed price quotation for us to
            take your accountancy hassles away from you.
          </p>

          <div className="mt-5">
            <div className="bg-white p-8 rounded-lg shadow-lg relative max-w-[500px]">
              <h3 className="text-xl font-semibold mb-4 text-black">
                Is your turnover expected to be more than £85k?
              </h3>
              <div className="flex gap-4 justify-center">
                <Button type="button" title="Yes" variant="btn_orange" />
                <Button type="button" title="No" variant="btn_orange" />
              </div>
            </div>
          </div>
          <p className="text-black mt-8">Takes less than 30 seconds</p>
        </div>
      </section>
    </header>
  );
};

export default Navbar;
