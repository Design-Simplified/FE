import React from "react";
import Image from "next/image";

function Navbar() {
  return (
    <nav className="sticky top-0 z-20 bg-white shadow-sm">
      <section className="w-full max-w-7xl mx-auto ">
        <div className="flex justify-between h-16 items-center gap-8">
          <div className="flex flex-row items-center">
            <Image src="/images/logo.png" alt="Logo" height={150} width={150} />
            <h1 className="text-lg font-bold text-black">Desgin Simplified</h1>
          </div>
        </div>
      </section>
    </nav>
  );
}

export default Navbar;
