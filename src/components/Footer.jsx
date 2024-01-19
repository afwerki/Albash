import React from 'react'

import {
    FaFacebook,
    FaGithub,
    FaInstagram,
    FaTwitter,
    FaTwitch,
} from 'react-icons/fa'

const Footer = () => {
  return (
    <footer className="bg-gray-800 text-white py-8">
      <div className="container mx-auto flex flex-col lg:flex-row justify-between items-center">
        <div className="mb-4 lg:mb-0 lg:mr-4 flex-shrink-0">
          <p className="text-lg font-semibold">Charity Group</p>
          <p className="text-sm">Supporting a Better World</p>
        </div>

        <nav className="flex flex-wrap mt-4 lg:mt-0">
          <a href="#" className="mr-4 mb-2 lg:mb-0 hover:text-gray-300">
            Home
          </a>
          <a href="#" className="mr-4 mb-2 lg:mb-0 hover:text-gray-300">
            About us
          </a>
          <a href="#" className="mr-4 mb-2 lg:mb-0 hover:text-gray-300">
            Support
          </a>
          <a href="#" className="mr-4 mb-2 lg:mb-0 hover:text-gray-300">
            Our aim
          </a>
          <a href="#" className="mr-4 mb-2 lg:mb-0 hover:text-gray-300">
            Join us
          </a>
          <a href="#" className="hover:text-gray-300">
            Contact us
          </a>
        </nav>

        <div className="mt-4 lg:mt-0">
          <p className="text-sm">Connect with us:</p>
          <div className="flex mt-2">
            <a href="#" className="mr-4 hover:text-gray-300">
              <i className="fab fa-whatsapp"></i> WhatsApp
            </a>
            <a href="#" className="mr-4 hover:text-gray-300">
              <i className="fab fa-facebook"></i> Facebook
            </a>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer