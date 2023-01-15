import { GetStaticProps, InferGetStaticPropsType } from "next";
import Link from "next/link";
import { useSearchParams } from "next/navigation";
import { useEffect } from "react";

// components

import Footer from "../components/Footers/Footer";
import ImageGallery from "../components/image-gallery";
import IndexNavbar from "../components/Navbars/IndexNavbar";
import { ProductTile } from "../components/product-tile";
import {
  ResourcesStoreState,
  useLanguageStore,
} from "../lib/stores/resources-store";

export const getStaticProps: GetStaticProps<{
  banners: string[];
}> = () => {
  const banners: string[] = [];
  for (let i = 1; i <= 8; i++) banners.push(`/img/Home${i}.jpg`);

  return {
    props: { banners },
    revalidate: 600,
  };
};

export default function Landing({
  banners,
}: InferGetStaticPropsType<typeof getStaticProps>) {
  const { res, setLanguage } = useLanguageStore(({ res, setLanguage }) => ({
    res,
    setLanguage,
  }));

  const searchParams = useSearchParams();

  useEffect(() => {
    const lang = searchParams.get("lang") as ResourcesStoreState["language"];
    lang && setLanguage(lang);
  }, [searchParams]);

  return (
    <>
      <IndexNavbar />
      <main>
        <section id="home">
          <div className="relative pt-16 pb-48 flex content-center items-center justify-center min-h-screen-75 bg-secondary">
            <ImageGallery
              type="slider"
              images={banners.map((img) => ({ src: img }))}
            />
            <div
              className="top-auto bottom-0 left-0 right-0 w-full absolute pointer-events-none overflow-hidden h-16"
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
                  className="text-blueGray-200 fill-current"
                  points="2560 0 2560 100 0 100"
                ></polygon>
              </svg>
            </div>
          </div>
        </section>

        <section id="products" className="pb-20 -mt-28 bg-blueGray-200">
          <div className="container mx-auto px-4">
            <div className="flex flex-wrap">
              <div className="lg:pt-12 pt-6 w-full md:w-4/12 px-4 text-center">
                <ProductTile
                  img="/img/product-tc-1212.jpg"
                  name="Turbo Cut CNC Router Machine TC-1212"
                />
              </div>

              <div className="w-full md:w-4/12 px-4 text-center">
                <ProductTile
                  img="/img/product-tl-1310.jpg"
                  name="Turbo Laser Acrylic TL-1310"
                />
              </div>

              <div className="pt-6 w-full md:w-4/12 px-4 text-center">
                <ProductTile
                  img="/img/product-tc-1325.jpg"
                  name="Turbo Cut CNC Router Machine TC-1325"
                />
              </div>
            </div>

            <div className="flex flex-wrap items-center my-6">
              <div className="w-full md:w-9/12 px-4 mr-auto ml-auto text-center">
                <h3 className="text-3xl mb-8 font-semibold leading-normal">
                  Our Products
                </h3>
                <p className="text-lg font-semibold leading-relaxed mt-0 mb-4 text-blueGray-600">
                  PT. TURBOMAS LANGGENG LESTARI
                  <br />
                  <span className="font-normal">
                    Distributor and Trading Company.
                  </span>
                </p>
                <p className="text-lg leading-relaxed mt-0 mb-4 text-blueGray-600">
                  Presents new technology and models for metal or non-metal
                  laser machine, integrated with I30Watt powered lasertube which
                  will be a perfect working partner for your workshop.
                </p>
              </div>
            </div>

            <div className="flex flex-wrap mt-14">
              <div className="lg:pt-6 w-full md:w-4/12 px-4 text-center">
                <ProductTile
                  img="/img/product-tl-1490.jpg"
                  name="Turbo Laser Acrylic TL-1490"
                />
              </div>

              <div className="w-full pt-16 md:w-4/12 px-4 text-center">
                <ProductTile
                  img="/img/product-tlm-1390.jpg"
                  name="Turbo Laser Metal Non Metal TL-1390M"
                />
              </div>

              <div className="w-full md:w-4/12 px-4 text-center">
                <ProductTile
                  img="/img/product-tlm-2513.jpg"
                  name="Turbo Laser Metal Non Metal TL-2513M"
                />
              </div>
            </div>
          </div>
        </section>

        <section id="about-us" className="relative py-16 pb-32">
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
                className="text-white fill-current"
                points="2560 0 2560 100 0 100"
              ></polygon>
            </svg>
          </div>
          <div className="flex flex-wrap items-center mb-14">
            <div className="w-full md:w-9/12 px-4 mr-auto ml-auto text-center">
              <h3 className="text-3xl mb-8 font-semibold leading-normal">
                About Us
              </h3>
              <p className="text-lg leading-relaxed mt-0 mb-4 text-blueGray-600">
                PT. TURBOMAS LANGGENG LESTARI (Next-G Turbo Laser)
                <br />
                is a growing company specialize in Laser Cutting And Engrave
                Machine.
                <br />
                We have been established since 2010.
              </p>
            </div>
          </div>

          <div className="md:w-9/12 m-auto">
            <iframe
              src="https://www.youtube.com/embed/fVYP8B6HiM0"
              title="FUNGSI MESIN LASER !!! #mesinlaser #mesinlasercutting #turbolaser"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
              className="w-full h-350-px lg:h-600-px "
            ></iframe>
          </div>
        </section>

        <section id="contact-us" className="relative block bg-secondary">
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
                className="text-secondary fill-current"
                points="2560 0 2560 100 0 100"
              ></polygon>
            </svg>
          </div>

          <div className="container mx-auto px-4 lg:pt-16 lg:pb-28">
            <div className="flex flex-wrap text-center justify-center">
              <div className="w-full lg:w-9/12 px-4">
                <h2 className="text-4xl font-semibold text-white pb-8">
                  Contact Us
                </h2>
                <p className="text-lg leading-relaxed mt-4 mb-6 text-white">
                  <i className="fa fa-phone mr-4" aria-hidden="true" />
                  +62 21 2946 6550 / 6560
                </p>
                <p className="text-lg leading-relaxed mt-4 mb-6 text-white">
                  <i className="fa fa-mobile mr-4" aria-hidden="true" />
                  +62 851 0100 0194
                </p>
                <p className="text-lg leading-relaxed mt-4 mb-6 text-white">
                  <i className="fa fa-envelope-open mr-4" aria-hidden="true" />
                  <a
                    href="mailto:turbolaser_jkt@yahoo.com"
                    target="_blank"
                    className="text-primary"
                  >
                    turbolaser_jkt@yahoo.com
                  </a>
                </p>
                <p className="text-lg leading-relaxed mt-4 mb-6 text-white">
                  <i className="fa fa-shopping-cart mr-4" aria-hidden="true" />
                  <a
                    href="https://www.tokopedia.com/turbomaslanggeng"
                    target="_blank"
                    className="text-primary"
                  >
                    Tokopedia
                  </a>
                </p>
                <p className="text-lg leading-relaxed mt-4 mb-6 text-white">
                  <i className="fa fa-camera-retro mr-4" aria-hidden="true" />
                  <a
                    href="https://www.instagram.com/turbolaserofficial"
                    target="_blank"
                    className="text-primary"
                  >
                    Instagram
                  </a>
                </p>
                <p className="text-lg leading-relaxed mt-4 mb-6 text-white">
                  <i className="fa fa-map-pin mr-4" aria-hidden="true" />
                  Our Location
                  <br />
                  <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1836.384360920488!2d106.98711293624923!3d-6.156270603172166!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e698a3934666eef%3A0x9a469055f4532cfe!2sTurbo+Laser+(PT.+Turbo+Mas+Langgeng+Lestari!5e0!3m2!1sen!2sid!4v1488653902635"
                    height="450"
                    className="border-0 mt-6 w-full"
                    allowFullScreen
                  ></iframe>
                </p>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
