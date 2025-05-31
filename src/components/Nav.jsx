import { NavLink } from "react-router-dom";
import { isOpen } from "../utils/isOpen";
import { cn } from "../utils/cn";

export const Nav = () => {

    // const whatsappNumber = "5547997863502";
    // const whatsappMessage = "Olá, gostaria de agendar um corte!";
    const linkAppDeAgendamento = `https://www.fresha.com/pt/a/pieske-barber-shop-santa-catarina-rua-pastor-albert-schneider-1412-j28fxh90/booking?menu=true&pId=1470479`;

    return (
        <nav className="bg-[#E0E1DD] shadow p-4 flex justify-between items-center">
            <div className="flex items-center space-x-4">
                <img
                    src="/src/assets/images/logoSemFundoAjustada.png"
                    alt="Logo da cidade"
                    className="h-10 object-cover"
                />
                <NavLink
                    to="/"
                    className={({ isActive }) =>
                        cn(
                            "cursor-pointer",
                            isActive
                                ? "text-gray-800 font-semibold underline"
                                : "text-gray-500 hover:text-gray-800 transition"
                        )
                    }
                >
                    Início
                </NavLink>
                <NavLink
                    to="/portfolio"
                    className={({ isActive }) =>
                        cn(
                            "cursor-pointer",
                            isActive
                                ? "text-gray-800 font-semibold underline"
                                : "text-gray-500 hover:text-gray-800 transition"
                        )
                    }
                >
                    Portfólio
                </NavLink>
                <NavLink
                    to="/about"
                    className={({ isActive }) =>
                        cn(
                            "cursor-pointer",
                            isActive
                                ? "text-gray-800 font-semibold underline"
                                : "text-gray-500 hover:text-gray-800 transition"
                        )
                    }
                >
                    Sobre
                </NavLink>
            </div>
            <div className="flex items-center space-x-4">
                <div
                    className={`px-4 py-2 rounded-lg  font-semibold ${isOpen() === "Aberto"
                        ? "text-green-500"
                        : "text-red-500"
                        }`}
                >
                    {isOpen()}
                </div>

                <a
                    href={linkAppDeAgendamento}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bg-[#415A77] text-white px-4 py-3 rounded-lg text-sm hover:bg-[#778DA9] transition cursor-pointer"
                >
                    Agendar Corte
                </a>
            </div>
        </nav>
    );
};
