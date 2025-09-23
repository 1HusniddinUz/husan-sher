import React from "react";
import "../../assets/ContactForm.css";
import Logo from "../../assets/media/logo.png"
import {useTranslation} from "react-i18next";
const ContactForm = () => {
    const {t} = useTranslation();
    return (
        <div id="ContactForm">
            <div className="container">
                <div className="contactText">
                    <div className="contactInfo">
                        <h3>{t(`contact`)}</h3>
                        <p>
                            {t(`generalManager`)} : <span>HUSENOV SHERMAT</span>
                        </p>
                        <p>
                            {t(`phone`)} : <span>{`+998 (99) 124-45-58`}</span>
                        </p>
                        <p>
                            {t(`email`)} :{" "}
                            <span>
                <a
                    href="https://yuldashevjoxa007@gmail.com"
                    target="_blank"
                    rel="noopener noreferrer"
                >
                 yuldashevjoxa007@gmail.com
                </a>
              </span>
                        </p>
                    </div>
                    <div className="contactSocialLink">
                        <div className="link_box">
                            <a
                                href="https://t.me/yuldashev6106"
                                target="_blank"
                                rel="noopener noreferrer"
                            >
                                <i className="fa-brands fa-telegram" target="_blank"
                                   rel="noopener noreferrer"></i>
                            </a>
                            <a href="https://t.me/yuldashev6106" target="_blank"
                               rel="noopener noreferrer">
                                <button>TELEGRAM</button>
                            </a>
                        </div>
                        <div className="link_box">
                            <a
                                href="https://www.instagram.com/husenov_shermat"
                                target="_blank"
                                rel="noopener noreferrer"
                            >
                                <i className="fa-brands fa-instagram"></i>
                            </a>
                            <a href="https://www.instagram.com/husenov_shermat"
                               target="_blank"
                               rel="noopener noreferrer">
                                <button>INSTAGRAM</button>
                            </a>
                        </div>
                        <div className="link_box">
                            <a href="https://uzum.uz/uz/shop/husansher" target="_blank"
                               rel="noopener noreferrer">
                                <i className="fa-brands fa-yandex"></i>
                                <button>YANDEX MARKET</button>
                            </a>
                        </div>


                    </div>
                </div>
                <div className="contactLogo">
                    <img src={Logo} alt="Logo"/>
                </div>
                <div className="contactLocation">
                    <h3>{t(`location`)}</h3>
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