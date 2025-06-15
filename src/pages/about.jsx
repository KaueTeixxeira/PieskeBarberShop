import { CheckCircle, Handshake, Home, Sparkles } from "lucide-react";
import sobreNos from '../assets/images/SobreNosBG.png'
import sobreNos1 from '../assets/images/SobreNos1.png'
import sobreNos2 from '../assets/images/SobreNos2.png'

export const About = () => {
    return (
        <>
            <div className="relative w-full h-100">
                <img
                    src={sobreNos}
                    className="object-cover object-top w-full h-full"
                    alt="Sobre Nós"
                />
                <div className="absolute inset-0 bg-black/60 backdrop-blur-xs"></div>
                <h1 className="absolute inset-0 flex items-center justify-center text-white text-4xl font-bold uppercase">
                    SOBRE NÓS
                </h1>
            </div>

            <div className="lg:px-[90px] px-0 mt-10">
                <div className="w-full mx-auto h-80 flex">
                    <div className="w-full md:w-1/2 flex items-center justify-center p-4 md:p-8">
                        <p className="text-base md:text-lg text-gray-700 text-justify leading-relaxed">
                            Oferecemos uma ampla variedade de serviços, incluindo cortes de cabelo, barba, tratamentos capilares e cuidados personalizados. Nosso ambiente é descontraído e acolhedor, pensado para que você possa relaxar, se sentir confortável e aproveitar ao máximo a sua experiência conosco.
                        </p>
                    </div>
                    <div className="w-1/2 h-full">
                        <img
                            className="object-cover w-full h-full"
                            src={sobreNos1}
                            alt="Sobre Nós"
                        />
                    </div>
                </div>

                <div className="bg-[#E0E1DD] w-full flex flex-wrap mt-10">
                    <div className="w-full sm:w-1/2 lg:w-1/4 flex flex-col items-center justify-center p-4">
                        <CheckCircle className="w-8 h-8 text-[#415A77] mb-2" />
                        <h2 className="text-lg font-semibold mb-2">Qualidade</h2>
                        <p className="text-sm text-gray-600 text-center">
                            Serviços com excelência, técnicas modernas e produtos de alta qualidade.
                        </p>
                    </div>

                    <div className="w-full sm:w-1/2 lg:w-1/4 flex flex-col items-center justify-center p-4">
                        <Handshake className="w-8 h-8 text-[#415A77] mb-2" />
                        <h2 className="text-lg font-semibold mb-2">Atendimento Humanizado</h2>
                        <p className="text-sm text-gray-600 text-center">
                            Valorizamos a escuta atenta e o atendimento personalizado.
                        </p>
                    </div>

                    <div className="w-full sm:w-1/2 lg:w-1/4 flex flex-col items-center justify-center p-4">
                        <Home className="w-8 h-8 text-[#415A77] mb-2" />
                        <h2 className="text-lg font-semibold mb-2">Ambiente Acolhedor</h2>
                        <p className="text-sm text-gray-600 text-center">
                            Um espaço confortável e descontraído para relaxar e se cuidar.
                        </p>
                    </div>

                    <div className="w-full sm:w-1/2 lg:w-1/4 flex flex-col items-center justify-center p-4">
                        <Sparkles className="w-8 h-8 text-[#415A77] mb-2" />
                        <h2 className="text-lg font-semibold mb-2">Tradição e Inovação</h2>
                        <p className="text-sm text-gray-600 text-center">
                            Unimos tradição e tendências para garantir estilo e autenticidade.
                        </p>
                    </div>
                </div>


                <div className="w-full h-80 flex mt-10">
                    <div className="w-1/2 h-full">
                        <img
                            className="object-cover object-top w-full h-full"
                            src={sobreNos2}
                            alt="Sobre Nós"
                        />
                    </div>
                    <div className="w-full md:w-1/2 flex flex-col items-center justify-center p-4 md:p-8">
                        <h1 className="text-xl md:text-2xl font-bold mb-4 text-center">Nossa Missão</h1>
                        <p className="text-base md:text-lg text-gray-700 text-justify leading-relaxed">
                            Mais do que um simples serviço, buscamos proporcionar momentos de bem-estar e autoestima para cada cliente. Prezamos pela excelência, atenção aos detalhes e atendimento humanizado, criando um espaço onde tradição e modernidade se encontram.
                        </p>
                    </div>
                </div>
            </div>
        </>
    )
}
