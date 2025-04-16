import Image from "next/image";

export function Footer() {
  return (
    <footer className="w-full h-72 flex items-center px-28 bg-[#726BEA]">
      <div className="container flex flex-col gap-12">
        <Image src="/logo-white.svg" width={176} height={33} alt="white logo image" />
        <div className="w-full h-0.5 bg-amber-100" />
        <div className="flex items-center justify-between">
          <div className="flex gap-8 font-normal text-sm leading-none tracking-tight text-white">
            <a href="https://www.google.com" target="_blank">Terms&Conditions</a>
            <a href="https://www.google.com" target="_blank">Privacy Policy</a>
          </div>
          <div className="flex gap-8">
            <a href="https://www.google.com" target="_blank">
              <Image src="facebook-logo.svg" width={16} height={16} alt="facebook logo" />
            </a>
            <a href="https://www.google.com" target="_blank">
              <Image src="twitter-logo.svg" width={36} height={36} alt="twitter logo" />
            </a>
            <a href="https://www.google.com" target="_blank">
              <Image src="instagram-logo.svg" width={36} height={36} alt="instagram logo" />
            </a>
          </div>
        </div>
      </div>
    </footer>
  )
}