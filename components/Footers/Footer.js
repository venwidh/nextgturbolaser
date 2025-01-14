import React from "react";

export default function Footer() {
  return (
    <>
      <footer className="relative bg-slate-200 pb-6">
        <div
          className="bottom-auto top-0 left-0 right-0 w-full absolute pointer-events-none overflow-hidden -mt-20 h-20"
          style={{ transform: "translateZ(0)" }}
        >
          <svg
            className="absolute bottom-0 overflow-hidden"
            xmlns="http://www.w3.org/2000/svg"
            preserveAspectRatio="none"
            version="1.1"
            viewBox="0 0 2560 100"
            x="0"
            y="0"
          >
            <polygon
              className="text-slate-200 fill-current"
              points="2560 0 2560 100 0 100"
            ></polygon>
          </svg>
        </div>
        <div className="container mx-auto px-4">
          <div className="flex flex-wrap items-center md:justify-between justify-center">
            <div className="w-full px-4 mx-auto text-center">
              <div className="text-sm text-slate-500 font-semibold py-2">
                Copyright © {new Date().getFullYear()} TurboLaser. Designed by
                Steven Widharma.
                <br />
                Powered by Notus NextJS by{" "}
                <a
                  href="https://www.creative-tim.com?ref=nnjs-footer"
                  className="text-slate-500 hover:text-slate-800"
                >
                  Creative Tim
                </a>
                .
              </div>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
}
