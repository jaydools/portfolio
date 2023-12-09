import "./Footer.scss";
// import twitter from "../../Assets/Images/twitter.svg";
// import facebook from "../../Assets/Images/facebook.svg";
// import instagram from "../../Assets/Images/instagram.svg";

export default function Footer() {
    return (
        <div className="footer">
            <div className="footer-left">
                <div className="footer-left__text">
                    <p className="footer-left__body">
                        This is an ever evolving website to showcase my abilities as a software
                        engineer. This website, as well as projects featured on this website have
                        been designed by myself and are the types of projects I am extremely
                        comfortable building. Please reach out to me anytime if you would like to
                        talk about how I could elevate your business and bring you tangleable value.
                    </p>
                </div>

                <p className="footer-icons__copyright">Copyright Jordan Dooley, 2023</p>
            </div>
            <div className="footer-right">
                <div className="footer-right__heading">
                    <p className="footer-right__text">Get in contact with me</p>

                    <form className="footer-right__heading-form">
                        <input
                            type="text"
                            placeholder="Enter your email"
                            name="search"
                            className="footer-right__heading-box"
                        ></input>
                        <button type="submit" className="footer-right__heading-button">
                            <a href="mailto:jaydools@hotmail.com">Message Me</a>
                        </button>
                    </form>
                </div>
                <div className="footer-right__contact">
                    <div className="footer-right__links">
                        <div className="footer-right__linksleft">
                            <a href="" className="footer-right__content-left">
                                Home
                            </a>
                            <a href="" className="footer-right__content-left">
                                About
                            </a>
                            <a href="" className="footer-right__content-left">
                                Blog
                            </a>
                            <a href="" className="footer-right__content-left">
                                Contact Us
                            </a>
                        </div>
                        <div className="footer__right-linksright">
                            <a href="" className="footer-right__content-right">
                                Privacy
                            </a>
                            <a href="" className="footer-right__content-right">
                                Cookies
                            </a>
                            <a href="" className="footer-right__content-right">
                                Terms
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
