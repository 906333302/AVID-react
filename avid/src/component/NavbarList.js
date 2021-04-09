import { Navbar, Nav, NavDropdown } from "react-bootstrap"
import SearchForm from "./SearchForm";
import { useState } from 'react'
import { Link } from "react-router-dom";

const NavbarList = (props) => {

    const [searchShow, setsearchShow] = useState(false);
    const [language, setLanguage] = useState({
        "SHOP": "SHOP",
        "MENS": "MENS",
        "WOMENS": "WOMENS",
        "SEARCH": "SEARCH",
        "ACCOUNT": "ACCOUNT",
        "SIGNUP": "SIGNUP",
        "LOGIN": "LOGIN",
        "BAG": "BAG",
        "LANGUAGE": "LANGUAGE",
        "ENGLISH": "ENGLISH",
        "MANDARIN": "MANDARIN"
    })

    const handleClick = () => {
        if (searchShow) {
            setsearchShow(false);
            // props.setSize("");
            // props.setColor("");
            // props.setStyle("");
        }else {setsearchShow(true)}
    }

    const handleEnglish = () => {
        let en = {
            "SHOP": "SHOP",
            "MENS": "MENS",
            "WOMENS": "WOMENS",
            "SEARCH": "SEARCH",
            "ACCOUNT": "ACCOUNT",
            "SIGNUP": "SIGNUP",
            "LOGIN": "LOGIN",
            "BAG": "BAG",
            "LANGUAGE": "LANGUAGE",
            "ENGLISH": "ENGLISH",
            "MANDARIN": "MANDARIN"
        }
        setLanguage(en);
        props.setLan("en");
    }

    const handleMandarin = () => {
        let cn = {
            "SHOP": "购买",
            "MENS": "男装",
            "WOMENS": "女装",
            "SEARCH": "搜索",
            "ACCOUNT": "账户",
            "SIGNUP": "注册",
            "LOGIN": "登录",
            "BAG": "购物车",
            "LANGUAGE": "语言",
            "ENGLISH": "英语",
            "MANDARIN": "中文（简体）"
        }
        setLanguage(cn);
        props.setLan("cn");
    }

    

    return (
        <div>
        <Navbar bg="light" expand="lg">
            <Navbar.Brand href=""><Link to="/" className="link">AVID</Link></Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="mr-auto">
                <NavDropdown title={language.SHOP} id="shop-dropdown">
                    <NavDropdown.Item href=""><Link to="/men" className="link">{language.MENS}</Link></NavDropdown.Item>
                    <NavDropdown.Item href=""><Link to="/women" className="link">{language.WOMENS}</Link></NavDropdown.Item>
                </NavDropdown>
                <Nav.Link href="" onClick={handleClick}>{language.SEARCH}</Nav.Link>
                </Nav>

                <Nav className="mr-sm-2">
                <NavDropdown title={language.ACCOUNT} id="account-dropdown">
                    <NavDropdown.Item href="#action/3.1">{language.SIGNUP}</NavDropdown.Item>
                    <NavDropdown.Item href="#action/3.2">{language.LOGIN}</NavDropdown.Item>
                </NavDropdown>
                <Nav.Link href=""><Link to="/bag" className="link">{language.BAG}</Link></Nav.Link>
                <NavDropdown title={language.LANGUAGE} id="language-dropdown">
                    <NavDropdown.Item href="" onClick={handleEnglish}>{language.ENGLISH}</NavDropdown.Item>
                    <NavDropdown.Item href="" onClick={handleMandarin}>{language.MANDARIN}</NavDropdown.Item>
                </NavDropdown>

                </Nav>
            </Navbar.Collapse>
        </Navbar>
        {searchShow && <SearchForm setSize={props.setSize} setColor={props.setColor} setStyle={props.setStyle} language={props.language}/>}
        </div>
    )
}

export default NavbarList

