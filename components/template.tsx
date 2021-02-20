import React from "react";

function Template({ children }: { children: React.ReactNode }) {
  return (
    <>
      <section className="fixed left-0 bottom-0 top-0 right-0 bg-pink-100"></section>
      <section className="relative w-full max-w-lg bg-white min-h-screen md:m-floatingr mx-auto">{children}</section>
    </>
  );
}

export default Template;