import React from 'react'
import s from '../Footer/Footer.module.css'
import GoogleMap from './GoogleMap/GoogleMap'


export default function Footer() {
    return (
        <div className={s.wrapper}>
            <div className={s.text_container}>
                <div>
                    <h1>Contact</h1>
                    <p className={s.number}> <a href="+49 999 999 99 99"> +49 999 999 99 99</a></p>
                    <div className={s.social_media_content}>
                        <div className={s.icon}>
                            {/* <a href="https://www.instagram.com/tel_ran/"></a> */}
                            <p>Instagram</p>
                        </div>
                        <div className={s.icon}>
                            {/* <a href="https://api.whatsapp.com/send?phone=%2B493083797477&app=facebook&entry_point=page_cta&fbclid=IwAR3eUU2FYqyUPJNi23MAOH_es4Bg4zLhFCDPPH1volXz6W4XI9lfqXrgoBc"></a> */}
                            <p>WhatsApp</p>
                        </div>
                    </div>
                </div>
                <div>
                    <h1>Address</h1>
                    <p className={s.strasse}><a href="Linkstraße 2, 8 OG, 10785">Linkstraße 2, 8 OG, 10785,</a></p>
                    <p className={s.strasse}>Berlin, Deutschland</p>
                    <p className={s.hours}>Working Hours:</p>
                    <p className={s.time}>24 hours a day</p>
                </div>
            </div>
            <div className={s.google}>
                <GoogleMap />
            </div>
        </div>
    )
}
