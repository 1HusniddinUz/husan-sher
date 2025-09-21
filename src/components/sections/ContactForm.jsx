import React from "react";
import "../../assets/ContactForm.css";
import Logo from "../../assets/media/logo.png"
const ContactForm = () => {
    return (
        <div id="ContactForm">
            <div className="container">
                <div className="contactText">
                    <div className="contactInfo">
                        <h3>Contacts</h3>
                        <p>
                            General Manager : <span>Husniddin Xalimov</span>
                        </p>
                        <p>
                            Phone : <span>{`+998 (91) 820-84-46`}</span>
                        </p>
                        <p>
                            Email :{" "}
                            <span>
                <a
                    href="https://husniddinhalimov@example.com"
                    target="_blank"
                    rel="noopener noreferrer"
                >
                  husniddinhalimov@example.com
                </a>
              </span>
                        </p>
                    </div>
                    <div className="contactSocialLink">
                        <a
                            href="https://t.me/xusni_axi"
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            <i class="fa-brands fa-telegram"></i>
                        </a>
                        <a
                            href="https://t.me/xusni_axi"
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            <i class="fa-brands fa-instagram"></i>
                        </a>
                        <a
                            href="https://t.me/xusni_axi"
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            <i class="fa-brands fa-youtube"></i>
                        </a>
                    </div>
                </div>
                <div className="contactLogo">
                    <img src={Logo}alt="Logo" />
                </div>
                <div className="contactLocation">
                    <h3>Location</h3>
                    <iframe
                        title="map"
                        src="https://www.google.com/maps/embed?pb=!1m13!1m8!1m3!1d6130.114642563849!2d64.253006!3d39.805706!3m2!1i1024!2i768!4f13.1!3m2!1m1!2zMznCsDQ4JzIwLjUiTiA2NMKwMTUnMTAuOCJF!5e0!3m2!1sru!2s!4v1747136757081!5m2!1sru!2s"
                        width="100%"
                        height="450"
                        style={{
                            border: "none",
                            borderRadius: "10px",
                            boxShadow: "0 4px 10px rgba(0, 0, 0, 0.4)",
                        }}
                        allowFullScreen=""
                        loading="lazy"
                        referrerpolicy="no-referrer-when-downgrade"
                    ></iframe>
                </div>
            </div>

            <div className="footerToTop"><a href="#Header"><i class="fa-solid fa-arrow-up"></i></a>
            </div>

        </div>
    );
};

export default ContactForm;