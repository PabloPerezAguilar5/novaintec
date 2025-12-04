export default function Pricing() {
  return (
    <section className="bg-gray-50 py-16">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="mx-auto max-w-3xl text-center">
          <h2 className="text-3xl font-bold text-black sm:text-4xl">
            Planos e preços
          </h2>
          <p className="mt-4 text-gray-600">
            Escolha o plano que melhor se adapta ao seu negócio. Atualize, escale ou personalize conforme as suas necessidades.
          </p>
        </div>

        <div className="mt-10 grid gap-8 sm:grid-cols-3">
          {/* Starter */}
          <div className="transform transition-transform duration-200 ease-out hover:scale-105 focus-within:scale-105 flex flex-col rounded-2xl bg-white p-6 shadow-md ring-1 ring-gray-200">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-3">
                <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-black text-white">
                  {/* simple icon */}
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="1.5">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M12 8c1.657 0 3-1.567 3-3.5S13.657 1 12 1 9 2.567 9 4.5 10.343 8 12 8zM4 22v-2a6 6 0 016-6h4a6 6 0 016 6v2" />
                  </svg>
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-black">Starter</h3>
                  <p className="mt-1 text-sm text-gray-500">Ideal para pequenas empresas em fase inicial.</p>
                </div>
              </div>
              <div className="text-right">
                <div className="text-2xl font-extrabold text-black">R$199</div>
                <div className="text-sm text-gray-500">/ mes</div>
              </div>
            </div>

            <ul className="mt-6 flex-1 space-y-3 text-gray-700">
              <li className="flex items-start gap-3">
                <span className="mt-1 inline-flex h-5 w-5 items-center justify-center rounded-sm bg-green-50 text-green-600">✓</span>
                Automatizações básicas
              </li>
              <li className="flex items-start gap-3">
                <span className="mt-1 inline-flex h-5 w-5 items-center justify-center rounded-sm bg-green-50 text-green-600">✓</span>
                2 integrações + OpenAi API
              </li>
              <li className="flex items-start gap-3">
                <span className="mt-1 inline-flex h-5 w-5 items-center justify-center rounded-sm bg-green-50 text-green-600">✓</span>
                Chatbot integrado para WhatsApp
              </li>
              <li className="flex items-start gap-3">
                <span className="mt-1 inline-flex h-5 w-5 items-center justify-center rounded-sm bg-green-50 text-green-600">✓</span>
                Suporte técnico
              </li>
            </ul>

            <div className="mt-6">
              <a
                className="inline-flex w-full justify-center rounded-md bg-blue-600 px-4 py-2 text-sm font-semibold text-white shadow hover:bg-blue-700 sm:w-auto"
                href="https://wa.me/5511969166495?text=Ol%C3%A1%2C%20gostaria%20de%20um%20or%C3%A7amento%2C%20por%20favor."
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Solicitar orçamento pelo WhatsApp"
              >
                Começar agora
              </a>
            </div>
          </div>

          {/* Pro (Popular) */}
          <div className="relative transform transition-transform duration-200 ease-out hover:scale-105 focus-within:scale-105 flex flex-col rounded-2xl bg-white p-6 shadow-lg ring-1 ring-gray-200 sm:-mt-6 sm:scale-105">
            <div className="absolute -top-3 left-1/2 z-10 -translate-x-1/2 transform">
              <div className="rounded-full bg-linear-to-r from-blue-600 to-green-500 px-3 py-1 text-xs font-semibold text-white shadow">Mais escolhido</div>
            </div>

            <div className="flex items-center justify-between pt-4">
              <div className="flex items-center gap-3">
                <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-blue-50 text-blue-700">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v6l4 2" />
                    <path strokeLinecap="round" strokeLinejoin="round" d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-black">Pro</h3>
                  <p className="mt-1 text-sm text-gray-500">Inclui (tudo do Starter +)</p>
                </div>
              </div>
              <div className="text-right">
                <div className="text-2xl font-extrabold text-black">R$299</div>
                <div className="text-sm text-gray-500">/ mes</div>
              </div>
            </div>

            <ul className="mt-6 flex-1 space-y-3 text-gray-700">
              <li className="flex items-start gap-3">
                <span className="mt-1 inline-flex h-5 w-5 items-center justify-center rounded-sm bg-green-50 text-green-600">✓</span>
                Fluxos de trabalho avançados de IA
              </li>
              <li className="flex items-start gap-3">
                <span className="mt-1 inline-flex h-5 w-5 items-center justify-center rounded-sm bg-green-50 text-green-600">✓</span>
                Até 6 integraciones 
              </li>
              <li className="flex items-start gap-3">
                <span className="mt-1 inline-flex h-5 w-5 items-center justify-center rounded-sm bg-green-50 text-green-600">✓</span>
                Treinamento I.A com documentação 
              </li>
              <li className="flex items-start gap-3">
                <span className="mt-1 inline-flex h-5 w-5 items-center justify-center rounded-sm bg-green-50 text-green-600">✓</span>
                Data Base e histórico de atendimentos
              </li>
              <li className="flex items-start gap-3">
                <span className="mt-1 inline-flex h-5 w-5 items-center justify-center rounded-sm bg-green-50 text-green-600">✓</span>
                Optimización mensual + Suporte prioritário
              </li>
            </ul>

            <div className="mt-6">
              <a
                className="inline-flex w-full justify-center rounded-md bg-blue-600 px-4 py-2 text-sm font-semibold text-white shadow hover:bg-blue-700 sm:w-auto"
                href="https://wa.me/5511969166495?text=Ol%C3%A1%2C%20gostaria%20de%20um%20or%C3%A7amento%2C%20por%20favor."
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Solicitar orçamento pelo WhatsApp"
              >
                Começar agora
              </a>
            </div>
          </div>

          {/* Enterprise */}
          <div className="transform transition-transform duration-200 ease-out hover:scale-105 focus-within:scale-105 flex flex-col rounded-2xl bg-white p-6 shadow-md ring-1 ring-gray-200">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-3">
                <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-linear-to-r from-black to-gray-700 text-white">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M3 7v10a2 2 0 002 2h14a2 2 0 002-2V7" />
                    <path strokeLinecap="round" strokeLinejoin="round" d="M8 7V4a4 4 0 018 0v3" />
                  </svg>
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-black">Enterprise</h3>
                  <p className="mt-1 text-sm text-gray-500">Para empresas que precisam de escalabilidade</p>
                </div>
              </div>
              <div className="text-right">
                <div className="text-2xl font-extrabold text-black">Custom</div>
                <div className="text-sm text-gray-500">Consultar</div>
              </div>
            </div>

            <ul className="mt-6 flex-1 space-y-3 text-gray-700">
              <li className="flex items-start gap-3">
                <span className="mt-1 inline-flex h-5 w-5 items-center justify-center rounded-sm bg-green-50 text-green-600">✓</span>
                Automações ilimitadas
              </li>
              <li className="flex items-start gap-3">
                <span className="mt-1 inline-flex h-5 w-5 items-center justify-center rounded-sm bg-green-50 text-green-600">✓</span>
                Integrações personalizadas
              </li>
              <li className="flex items-start gap-3">
                <span className="mt-1 inline-flex h-5 w-5 items-center justify-center rounded-sm bg-green-50 text-green-600">✓</span>
                Relatórios semanais automatizados
              </li>
              <li className="flex items-start gap-3">
                <span className="mt-1 inline-flex h-5 w-5 items-center justify-center rounded-sm bg-green-50 text-green-600">✓</span>
                Suporte prioritário + ajustes avançados
              </li>
            </ul>

            <div className="mt-6">
              <a
                className="inline-flex w-full justify-center rounded-md border border-gray-200 bg-white px-4 py-2 text-sm font-semibold text-gray-900 shadow-sm hover:bg-gray-50 sm:w-auto"
                href="#"
              >
                Contate-nos
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
