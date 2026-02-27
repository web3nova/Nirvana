 import { FaXTwitter } from "react-icons/fa6";
 import { FaInstagram } from "react-icons/fa";
 import { FaTelegram } from "react-icons/fa";
 import { FaYoutube } from "react-icons/fa";
 import { FaDiscord } from "react-icons/fa";
 import { FaLinkedin } from "react-icons/fa";
 import { FaFacebook } from "react-icons/fa";
const Ecosystem = () => {
    return (
        <>
        <section>
            <div className="Eco-head">
                <h1 className="Eco-h1">Our Ecosystem</h1>
                <p className="Eco-p">A comprehensive platform designed to support</p>
                <p className="Eco-p">your Web3 journey from learning to building.</p>
                {/* <Image src={Image} alt="Ecosystem"></Image> */}
            </div>

            <div className="Eco-container-1">
                <div className="c-1">
                    <img src="/f-img.png" className="f-img" alt="Ecosystem"/>
                </div>
                <div className="c-2">
                    <p className="social-text">Follow us on all <br />platform.</p>
                    <img src="/social-logo.png"className="social-logo" alt="social-logo" />
                    <img src="/vector.png" className="vector" alt="" />
                </div>
                <div className="c-3">
                <p className="c3-text">Nirvana Labs</p>
                <p>Our innovation hub where cutting-edge <br />Web3 research meets practical application.</p>
                </div>
            </div>

            <div className="Eco-container-2">
                <div className="c-4">
                    <p className="c4-text">DAO Governance</p>
                    <p>Community-driven decision making. Shape <br />the future of Web3 education together.</p>
                </div>
                <div className="c-5">
                    <img src="/c5img.png" className="c5-img" alt="" />
                </div>
                <div className="c-6">
                    <p className="coming-soon">Coming Soon</p>
                    <p className="c6-head">Community Hub</p>
                    <p className="c6-p">Connect, collaborate, and grow with fellow Web3 enthusiasts worldwide.</p>
                </div>
            </div>
        </section>
        </>
    )
}

export default Ecosystem