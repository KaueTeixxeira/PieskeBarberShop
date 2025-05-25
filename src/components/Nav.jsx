import { NavLink } from "react-router-dom";

export const Nav = () => {

    const whatsappNumber = "5547997863502"; 
    const whatsappMessage = "Olá, gostaria de agendar um corte!";
    const whatsappLink = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(whatsappMessage)}`;

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
                        isActive
                            ? "text-gray-800 font-semibold underline"
                            : "text-gray-500 hover:text-gray-800 transition"
                    }
                >
                    Início
                </NavLink>
                <NavLink
                    to="/about"
                    className={({ isActive }) =>
                        isActive
                            ? "text-gray-800 font-semibold underline"
                            : "text-gray-500 hover:text-gray-800 transition"
                    }
                >
                    Portfólio 
                </NavLink>
            </div>
            <a
                href={whatsappLink}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-[#415A77] text-white px-4 py-3 rounded-lg text-sm hover:bg-[#778DA9] transition cursor-pointer"
            >
                Agendar Corte
            </a>
        </nav>
    );
};
