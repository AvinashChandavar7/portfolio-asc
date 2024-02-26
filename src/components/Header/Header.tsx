import React from "react";

import NavBar from "@/components/Header/NavBar";

const Header = async () => {
  return (
    <header className="top-0 z-50 mx-auto max-w-7xl md:sticky md:top-4  px-4 py-2 rounded-full">
      <NavBar />
    </header>
  )
}

export default Header