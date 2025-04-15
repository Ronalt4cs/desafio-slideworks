import Image from "next/image";

export async function Header() {
  return (
    <header className="w-full h-28 pl-32 flex items-center max-lg:justify-center max-lg:pl-0">
      <Image
        src="/logo.svg"
        width={176}
        height={33}
        alt="Logo picture"
      />
    </header>
  );
}