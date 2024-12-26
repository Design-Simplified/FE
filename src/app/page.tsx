import Image from "next/image";

export default function Home() {
  return (
    <main className="bg-white">
      <div>
        <Image
          src="/homepage/hero.png"
          alt="hero section"
          width={400}
          height={400}
        />
      </div>
    </main>
  );
}
