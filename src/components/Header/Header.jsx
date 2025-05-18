
const Header = () => {
    return (
        <header className="bg-[#E0E1DD] h-[100px] flex justify-center items-center">
            <img
                src="/src/assets/images/header/logoSemFundoAjustada.png"
                alt="Logo da cidade"
                className="h-[80px] object-cover"
            />
            <div>
                <span>Início</span>
                <span>Cortes</span>
            </div>
            <div>
                <button>Agendar Cortes</button>
            </div>
        </header>

        
    );
};

export default Header;
