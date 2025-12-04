import Image from "next/image";
import PageIllustration from "@/components/page-illustration";
import { Antic } from 'next/font/google';

const antic = Antic({
  subsets: ['latin'],
  weight: ['400'],
  display: 'swap',
});
import Avatar01 from "@/public/images/avatar-01.jpg";
import Avatar02 from "@/public/images/avatar-02.jpg";
import Avatar03 from "@/public/images/avatar-03.jpg";
import Avatar04 from "@/public/images/avatar-04.jpg";
import Avatar05 from "@/public/images/avatar-05.jpg";
import Avatar06 from "@/public/images/avatar-06.jpg";
import HeroImage from "@/public/images/imagen.png";

export default function HeroHome() {
  return (
    <section className="relative">
      {/* Large floating site title above the hero */}
      <div className="pointer-events-none absolute inset-x-0 top-6 sm:top-10 md:top-14 z-50 flex justify-center">
        <h2 className={`${antic.className} pointer-events-auto rounded-xl bg-[#222222] px-6 py-2 text-center text-3xl font-extrabold tracking-tight text-[#38b6ff] shadow-lg sm:text-4xl md:text-5xl lg:text-6xl`}>
          NovAIntec
        </h2>
      </div>
      <PageIllustration />
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        {/* Hero content */}
        <div className="pb-12 pt-32 md:pb-20 md:pt-40">
          {/* Section header */}
          <div className="pb-12 text-center md:pb-16">
            <div
              className="mb-6 border-y [border-image:linear-gradient(to_right,transparent,--theme(--color-slate-300/.8),transparent)1]"
              data-aos="zoom-y-out"
            >
              {/* title moved above as floating banner */}
              <div className="py-2" />
              <div className="-mx-0.5 flex justify-center -space-x-3">
                <Image
                  className="box-content rounded-full border-2 border-gray-50"
                  src={Avatar01}
                  width={32}
                  height={32}
                  alt="Avatar 01"
                />
                <Image
                  className="box-content rounded-full border-2 border-gray-50"
                  src={Avatar02}
                  width={32}
                  height={32}
                  alt="Avatar 01"
                />
                <Image
                  className="box-content rounded-full border-2 border-gray-50"
                  src={Avatar03}
                  width={32}
                  height={32}
                  alt="Avatar 02"
                />
                <Image
                  className="box-content rounded-full border-2 border-gray-50"
                  src={Avatar04}
                  width={32}
                  height={32}
                  alt="Avatar 03"
                />
                <Image
                  className="box-content rounded-full border-2 border-gray-50"
                  src={Avatar05}
                  width={32}
                  height={32}
                  alt="Avatar 04"
                />
                <Image
                  className="box-content rounded-full border-2 border-gray-50"
                  src={Avatar06}
                  width={32}
                  height={32}
                  alt="Avatar 05"
                />
              </div>
            </div>
            <h1
              className="mb-6 border-y text-5xl font-bold [border-image:linear-gradient(to_right,transparent,--theme(--color-slate-300/.8),transparent)1] md:text-6xl"
              data-aos="zoom-y-out"
              data-aos-delay={150}
            >
Soluções de I.A que transformam processos em resultados.
 <br className="max-lg:hidden" />
            </h1>
            <div className="mx-auto max-w-3xl">
              <p
                className="mb-8 text-lg text-gray-700"
                data-aos="zoom-y-out"
                data-aos-delay={300}
              >
                Ganhe tempo, reduza erros e aumente sua produtividade com fluxos inteligentes.
              </p>
              <div className="relative before:absolute before:inset-0 before:border-y before:[border-image:linear-gradient(to_right,transparent,--theme(--color-slate-300/.8),transparent)1]">
                <div
                  className="mx-auto max-w-xs sm:flex sm:max-w-none sm:justify-center"
                  data-aos="zoom-y-out"
                  data-aos-delay={450}
                >
                  <a
                    className="btn group mb-4 w-full bg-linear-to-t from-blue-600 to-green-500 bg-[length:100%_100%] bg-[bottom] text-white shadow-sm hover:opacity-95 sm:mb-0 sm:w-auto"
                    href="https://wa.me/5511969166495"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <span className="relative inline-flex items-center">
                      Comece agora{" "}
                      <span className="ml-1 tracking-normal text-blue-300 transition-transform group-hover:translate-x-0.5">
                        -&gt;
                      </span>
                    </span>
                  </a>
                  <a
                    className="btn w-full bg-white text-gray-800 shadow-sm hover:bg-gray-50 sm:ml-4 sm:w-auto"
                    href="mailto:novaintec.solutions@gmail.com"
                    // change the recipient above as requested
                    aria-label="Contate-nos por email (coloca tu correo aquí)"
                  >
                    Contate-nos
                  </a>
                </div>
              </div>
            </div>
          </div>
          {/* Hero image */}
          <div
            className="mx-auto max-w-3xl"
            data-aos="zoom-y-out"
            data-aos-delay={600}
          >
            <div className="relative aspect-video rounded-2xl bg-transparent px-5 py-3 shadow-xl overflow-hidden">
              <Image
                src={HeroImage}
                alt="Hero"
                className="object-cover w-full h-full rounded-2xl"
                fill
                priority
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
