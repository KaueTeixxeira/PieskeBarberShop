import './App.css'
import * as React from "react"
import Header from './components/Header/Header'
import { Link } from 'react-router-dom'
import { ChevronLeft, ChevronRight, Wifi, Car, Accessibility, Baby, MapPin, Clock, CreditCard, Phone, Instagram, Facebook, Mail } from 'lucide-react'

const barberService = {
  services: [
    "Cabelo Tradicional - 30 min - R$ 40",
    "Corte Degradê (Fade) - 45 min - R$ 50",
    "Barba Completa - 30 min - R$ 35",
    "Corte + Barba Combo - 1h - R$ 70",
    "Sobrancelha Masculina - 15 min - R$ 15"
  ],
  professionals: [
    'João "Fade King" - Degradê, navalhado, cortes kids',
    'Lucas Andrade - Barba, atendimento com massagem',
    'Rafael Torres - Sobrancelha, corte clássico',
    'Felipe Nunes - Cortes criativos e coloridos'
  ],
  products: [
    'Pomada Modeladora Forte - Barba Negra - R$ 35',
    'Óleo para Barba Premium - Viking Groom - R$ 49',
    'Shampoo Masculino 2 em 1 - Urban Men - R$ 29',
    'Balm Pós-Barba Calmante - Don Barbudo - R$ 32'
  ],
  packages: [
    'Combo Corte + Barba - Corte Tradicional + Barba Completa - R$ 70',
    'Plano Mensal -	4 cortes no mês + 1 barba grátis - R$ 150',
    'Dia do Noivo -	Corte + Barba + Máscara facial + Brinde -	R$ 120',
    'Pai & Filho - Corte adulto + corte infantil - R$ 65'
  ]
}

const amenities = [
  {
    key: "wifi",
    icon: Wifi,
    label: "Wi-Fi gratuito",
    description: "Conexão de alta velocidade disponível para todos os clientes.",
  },
  {
    key: "parking",
    icon: Car,
    label: "Estacionamento",
    description: "Vagas exclusivas para clientes ao lado do salão.",
  },
  {
    key: "accessibility",
    icon: Accessibility,
    label: "Acessibilidade",
    description: "Ambiente adaptado para pessoas com mobilidade reduzida.",
  },
  {
    key: "baby",
    icon: Baby,
    label: "Espaço Kids",
    description: "Área infantil segura e divertida para seus filhos.",
  },
];

const tabsCarroussel = [
  {
    key: "location",
    title: "Localização",
    icon: MapPin,
    content: (
      <div className="flex flex-col w-full space-y-1 justify-center items-center">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3569.932278769487!2d-49.1348108!3d-26.522302399999997!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94de937e2ae6cfb7%3A0x60791c46262d2dd3!2sPieske%20Barber%20Shop!5e0!3m2!1spt-BR!2sbr!4v1747602087888!5m2!1spt-BR!2sbr"
          width="400"
          height="100"
          className="border-0 rounded-[5px]"
          allowFullScreen="allowFullScreen"
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade" />
      </div>
    ),
  },
  {
    key: "hours",
    title: "Horários de Atendimento",
    icon: Clock,
    content: (
      <div className="flex flex-col w-full space-y-1 justify-center items-center">
        <div className='flex space-x-2'>
          <p className='bg-[#415A77] w-50 inline-block text-center rounded-2xl'>Segunda a Sexta</p>
          <p className='bg-[#415A77] w-30 inline-block text-center rounded-2xl'>09:00 - 20:00</p>
        </div>
        <div className='flex space-x-2'>
          <p className='bg-[#415A77] w-50 inline-block text-center rounded-2xl'>Sábado</p>
          <p className='bg-[#415A77] w-30 inline-block text-center rounded-2xl'>09:00 - 18:00</p>
        </div>
        <div className='flex space-x-2'>
          <p className='bg-[#415A77] w-50 inline-block text-center rounded-2xl'>Domingo</p>
          <p className='bg-[#415A77] w-30 inline-block text-center rounded-2xl'>Fechado</p>
        </div>
      </div>
    ),
  },
  {
    key: "payment",
    title: "Formas de Pagamento",
    icon: CreditCard,
    content: (
      <div className="flex flex-col w-full space-y-1 justify-center items-center">
        <p className='bg-[#415A77] w-50 inline-block text-center rounded-2xl'>Cartão de Crédito</p>
        <p className='bg-[#415A77] w-50 inline-block text-center rounded-2xl'>Cartão de Débito</p>
        <p className='bg-[#415A77] w-50 inline-block text-center rounded-2xl'>Dinheiro</p>
        <p className='bg-[#415A77] w-50 inline-block text-center rounded-2xl'>PIX</p>
      </div>
    ),
  },
  {
    key: "social",
    title: "Redes Sociais e Contatos",
    content: (
      <div className="flex justify-center items-center w-full space-x-6 text-white text-2xl">
        <div className='p-3.5 rounded-full bg-[#778DA9] hover:bg-[#E63946] cursor-pointer transition'>
          <a href="https://instagram.com/barbeariaexemplo" target="_blank" rel="noopener noreferrer">
            <Instagram className=" transition" />
          </a>
        </div>
        <div className='p-3.5 rounded-full bg-[#778DA9] hover:bg-[#1877F2] cursor-pointer transition'>
          <a href="https://facebook.com/barbeariaexemplo" target="_blank" rel="noopener noreferrer">
            <Facebook className="transition" />
          </a>
        </div>
        <div className='p-3.5 rounded-full bg-[#778DA9] hover:bg-[#2A9D8F] cursor-pointer transition'>
          <a href="tel:+5511999999999">
            <Phone className="transition" />
          </a>
        </div>
        <div className='p-3.5 rounded-full bg-[#778DA9] hover:bg-[#F4A261] cursor-pointer transition'>
          <a href="mailto:contato@barbearia.com">
            <Mail className="transition" />
          </a>
        </div>
      </div>
    ),
  }
];

function App() {

  const [activeTab, setActiveTab] = React.useState("services");
  const [selectedAmenity, setSelectedAmenity] = React.useState(amenities[0].key);
  const [activeIndex, setActiveIndex] = React.useState(0);
  const [isWide, setIsWide] = React.useState(window.innerWidth >= 900);

  React.useEffect(() => {
    const onResize = () => setIsWide(window.innerWidth >= 900);
    window.addEventListener("resize", onResize);
    return () => window.removeEventListener("resize", onResize);
  }, []);

  const prev = () => {
    setActiveIndex((prev) => (prev === 0 ? tabsCarroussel.length - 1 : prev - 1));
  };

  const next = () => {
    setActiveIndex((prev) => (prev === tabsCarroussel.length - 1 ? 0 : prev + 1));
  };


  const tabs = [
    { label: "Serviços", key: "services" },
    { label: "Profissionais", key: "professionals" },
    { label: "Produtos", key: "products" },
    { label: "Pacotes", key: "packages" },
  ];

  return (
    <div className="mx-auto bg-[#F3F2EE] min-h-screen flex flex-col font-sans">
      {/* Top Navigation */}
      <nav className="bg-[#E0E1DD] shadow p-4 flex justify-between items-center">
        <div className="flex items-center space-x-4">
          <img
            src="/src/assets/images/header/logoSemFundoAjustada.png"
            alt="Logo da cidade"
            className="h-10 object-cover"
          />
          <Link to="/" className="font-semibold text-[#0D1B2A]">Início</Link>
          <Link to="/cortes" className="text-gray-500 hover:text-gray-800 transition">Cortes</Link>
        </div>
        <button className="bg-[#415A77] text-white px-4 py-3 rounded-lg text-sm hover:bg-[#778DA9] transition cursor-pointer">
          Agendar Corte
        </button>
      </nav>

      {/* Banner */}
      {
        isWide ?
          <div className="flex space-x-4 px-[90px] mt-6">
            <div className="flex flex-col w-3/4 space-y-4">
              <div className="relative h-136 overflow-hidden">
                <img
                  src="src/assets/images/foto-frente-barber.png"
                  alt="Banner da Barbearia"
                  className="object-cover w-full h-full rounded-xl"
                />
              </div>

              <div className="bg-white p-4">
                <h2 className="font-semibold mb-4 text-[#0D1B2A]">Comodidades</h2>
                <div className="flex space-x-3">
                  {amenities.map(({ key, icon: Icon, label }) => (
                    <button
                      key={key}
                      onClick={() => setSelectedAmenity(key)}
                      className={`py-4 flex-1 rounded-lg border text-center transition cursor-pointer ${selectedAmenity === key
                        ? "bg-[#415A77] border-[#E0E1DD]"
                        : "bg-[#E0E1DD] border-transparent"
                        }`}
                    >
                      <Icon
                        className={`mx-auto mb-1 w-5 h-5 ${selectedAmenity === key ? "text-[#E0E1DD]" : "text-[#0D1B2A]"
                          }`}
                      />
                      <span
                        className={`text-sm ${selectedAmenity === key ? "text-[#E0E1DD]" : "text-[#0D1B2A]"
                          }`}
                      >
                        {label}
                      </span>
                    </button>
                  ))}
                </div>

                {selectedAmenity && (
                  <div className="mt-4 text-sm bg-[#E0E1DD] p-3 rounded text-[#0D1B2A]">
                    {amenities.find((item) => item.key === selectedAmenity)?.description}
                  </div>
                )}
              </div>

              <div className={`mt-2 bg-white shadow-inner`}>
                <div className="flex text-sm border-b border-gray-300">
                  {tabs.map((tab) => (
                    <button
                      key={tab.key}
                      onClick={() => setActiveTab(tab.key)}
                      className={`py-2 px-4 text-center transition cursor-pointer ${activeTab === tab.key
                        ? "font-semibold border-b-2 border-[#415A77] text-[#415A77]"
                        : "text-gray-500 hover:text-[#415A77]"
                        }`}
                    >
                      {tab.label}
                    </button>
                  ))}
                </div>

                <div className="p-4 space-y-2">
                  {barberService[activeTab].map((item, index) => (
                    <div
                      key={index}
                      className="bg-[#E0E1DD] rounded p-2 text-sm text-[#0D1B2A] shadow-sm"
                    >
                      {item}
                    </div>
                  ))}
                </div>
              </div>
            </div>

            <div className="w-[420px] h-[774px] ml-auto bg-[#0D1B2A] rounded-xl text-white flex justify-center items-center">
              <div className="p-4 flex flex-col justify-center items-center w-full">
                {tabsCarroussel.map((tab, idx) => (
                  <div
                    key={idx}
                    className={`${tabsCarroussel.length - 1 !== idx ? "border-b w-full border-gray-700" : ""
                      } pb-4 h-45 flex flex-col items-center justify-center`}
                  >
                    <h2 className="text-lg text-center font-semibold mb-2">{tab.title}</h2>
                    <div>{tab.content}</div>
                  </div>
                ))}
              </div>
            </div>

          </div>
          :
          <>
            <div className="relative h-64 overflow-hidden">
              <img
                src="src/assets/images/foto-frente-barber.png"
                alt="Banner da Barbearia"
                className="object-cover w-full h-full"
              />
            </div>
            <div className="bg-[#0D1B2A] text-white h-[220px] relative">
              <div className="flex items-center justify-center mb-6 mt-3">
                <h2 className="text-xl font-semibold">{tabsCarroussel[activeIndex].title}</h2>
              </div>
              <div className="h-[35%] w-full flex justify-content items-center">
                {tabsCarroussel[activeIndex].content}
              </div>
              <div className="absolute bottom-5 w-full flex items-center justify-center space-x-6">
                <button
                  onClick={prev}
                  className="w-8 h-8 bg-gray-700 hover:bg-[#778DA9] text-white rounded-full flex items-center justify-center transition cursor-pointer"
                >
                  <ChevronLeft className="w-5 h-5" />
                </button>
                <div className="flex space-x-2">
                  {tabsCarroussel.map((_, idx) => (
                    <button
                      key={idx}
                      onClick={() => setActiveIndex(idx)}
                      className={`w-3 h-3 rounded-full cursor-pointer ${idx === activeIndex ? "bg-[#E0E1DD]" : "bg-gray-500"}`}
                    />
                  ))}
                </div>
                <button
                  onClick={next}
                  className="w-8 h-8 bg-gray-700 hover:bg-[#778DA9] text-white rounded-full flex items-center justify-center transition cursor-pointer"
                >
                  <ChevronRight className="w-5 h-5" />
                </button>
              </div>
            </div>
            <div className="bg-white p-4">
              <h2 className="font-semibold mb-4 text-[#0D1B2A]">Comodidades</h2>
              <div className="flex space-x-3">
                {amenities.map(({ key, icon: Icon, label }) => (
                  <button
                    key={key}
                    onClick={() => setSelectedAmenity(key)}
                    className={`flex-1 py-4 rounded-lg border text-center transition cursor-pointer ${selectedAmenity === key
                      ? "bg-[#415A77] border-[#E0E1DD]"
                      : "bg-[#E0E1DD] border-transparent"
                      }`}
                  >
                    <Icon className={`mx-auto mb-1 w-5 h-5 
                ${selectedAmenity === key
                        ? "text-[#E0E1DD]"
                        : "text-[#0D1B2A]"
                      }`} />
                    <span className={`text-xs
              ${selectedAmenity === key
                        ? "text-[#E0E1DD]"
                        : "text-[#0D1B2A]"
                      }`}>{label}</span>
                  </button>
                ))}
              </div>

              {selectedAmenity && (
                <div className="mt-4 text-sm bg-[#E0E1DD] p-3 rounded text-[#0D1B2A]">
                  {
                    amenities.find((item) => item.key === selectedAmenity)?.description
                  }
                </div>
              )}
            </div>
            <div className={`mt-2 bg-white shadow-inner ${isWide ? "mx-16 " : ""}`}>
              <div className="flex text-sm border-b border-gray-300">
                {tabs.map((tab) => (
                  <button
                    key={tab.key}
                    onClick={() => setActiveTab(tab.key)}
                    className={`py-2 px-4 text-center transition cursor-pointer ${activeTab === tab.key
                      ? "font-semibold border-b-2 border-[#415A77] text-[#415A77]"
                      : "text-gray-500 hover:text-[#415A77]"
                      }`}
                  >
                    {tab.label}
                  </button>
                ))}
              </div>

              <div className="p-4 space-y-2">
                {barberService[activeTab].map((item, index) => (
                  <div
                    key={index}
                    className="bg-[#E0E1DD] rounded p-2 text-xs text-[#0D1B2A] shadow-sm"
                  >
                    {item}
                  </div>
                ))}
              </div>
            </div>
          </>
      }
    </div>
  );

}

export default App