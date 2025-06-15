import logo from '../../assets/images/header/LogoSemFundoAjustada.png'
const Header = () => {
    return (
        <header className="bg-[#E0E1DD] h-[100px] flex justify-center items-center">
            <img
                src={logo}
                alt="Logo da cidade"
                className="h-[80px] object-cover"
            />
        </header>
    );
};

export default Header;
