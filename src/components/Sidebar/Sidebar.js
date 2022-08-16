import { StyledSidebar } from "./StyledSidebar"


const Sidebar = () => {
    return (
        <StyledSidebar>
            <ul>
                <li className="active"><img src="https://img.icons8.com/sf-ultralight/344/cottage.png" alt="zaz" />Home</li>
                <li><img src="https://img.icons8.com/sf-ultralight/344/cottage.png" alt="zaz" /><p>Recados</p></li>
                <li><img src="https://img.icons8.com/sf-ultralight/344/cottage.png" alt="zaz" /><p>Fotos</p></li>
                <li><img src="https://img.icons8.com/sf-ultralight/344/cottage.png" alt="zaz" /><p>Videos</p></li>
                <li><img src="https://img.icons8.com/sf-ultralight/344/cottage.png" alt="zaz" /><p>Depoimentos</p></li>
            </ul>
        </StyledSidebar>
    )
}

export default Sidebar;
