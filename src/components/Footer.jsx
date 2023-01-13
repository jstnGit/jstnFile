import React from 'react'
import '../assets/css/style.css'

function Footer() {
  return (
    <div>
        <footer className="py-5 px-lg-5">
            <div className="container">
                <div className="row gy-4 justify-content-between">

                    <div className="col-auto">
                        <p className="mb-0">JSTNFILES</p>
                    </div>

                    <div className="col-auto">
                        
                        <div className="social-icons">
                            <a href="http://www.instagram.com/"><i className="lab la-instagram "></i></a>
                            <a href="http://www.facebook.com/Jstn.10"><i className="lab la-facebook-square"></i></a>
                            <a href="http://www.github.com/"><i className="lab la-github"></i></a>
                            <a href="http://www.discord.com/"><i className="lab la-discord"></i></a>
                        </div>
                        
                    </div>

                </div>
            </div>
        </footer>

    </div>
  )
}

export default Footer