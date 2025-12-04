import Link from "next/link";
import Image from "next/image";

export default function Footer({ border = false }: { border?: boolean }) {
  return (
    <footer>
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        {/* Top area: Blocks */}
        <div
          className={`grid gap-10 py-8 sm:grid-cols-12 md:py-12 ${border ? "border-t [border-image:linear-gradient(to_right,transparent,var(--color-slate-200),transparent)1]" : ""}`}
        >
          {/* 1st block */}
            <div className="mx-auto flex flex-col items-center justify-center space-y-2 sm:col-span-12 lg:col-span-4 text-center">
              <div>
                <Link href="/" aria-label="Cruip">
                  <Image src="/images/logo-01.svg" alt="Logo" width={112} height={28} />
                </Link>
              </div>
              <div className="text-sm text-gray-600">
                &copy; Novaintec - All rights reserved.
              </div>
            </div>
        </div>
      </div>

      {/* footer simplified: kept only first block */}
    </footer>
  );
}
