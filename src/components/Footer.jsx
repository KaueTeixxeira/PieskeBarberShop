import { Instagram } from "lucide-react";
import { useLocation } from "react-router-dom";
import logo from '../assets/images/LogoSemFundoAjustada.png'

export const Footer = () => {
    const location = useLocation();

    return (
        <footer className={`bg-[#E0E1DD] w-full py-10`}>
            <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8 px-4">
                <div className="flex flex-col justify-between space-y-4 items-center">
                    <div>
                        <h3 className="text-lg font-semibold mb-2">Informações</h3>
                        <p className="text-sm">2025 All Rights Reserved</p>
                        <p className="text-sm">Design by: Católica SC</p>
                    </div>
                </div>

                <div className="flex flex-col items-center justify-between space-y-4">
                    <div>
                        <img
                            src={logo}
                            alt="Logo da cidade"
                            className="h-16 object-contain"
                        />
                    </div>
                </div>

                <div className="flex flex-col items-center justify-between space-y-4">
                    <div>
                        <h3 className="text-lg font-semibold mb-2">Siga-nos</h3>
                        <div className="flex space-x-4 justify-center">
                            <a
                                href="https://www.instagram.com/pieske_barbershop/"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="p-3.5 rounded-full bg-[#778DA9] hover:bg-[#E63946] transition-colors"
                            >
                                <Instagram className="w-5 h-5 text-white" />
                            </a>
                        </div>
                    </div>
                </div>

            </div>
        </footer>
    );
};
