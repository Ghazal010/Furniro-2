import React from 'react'

const Footer = () => {
  return (
    <div>
          <footer className="bg-white text-gray-800 py-10 w-screen">
      <div className="max-w-7xl mx-auto px-4 grid grid-cols-1 md:grid-cols-4 gap-8">
        
        
        <div>
          <h2 className="text-3xl font-bold mb-2">Funiro.</h2>
          <p className="text-gray-400 mt-11">
            400 University Drive Suite 200 Coral Gables, <br />
            FL 33134 USA
          </p>
        </div>

        
        <div>
          <h3 className="text-gray-400 font-semibold mb-3">Links</h3>
          <ul className="space-y-10 mt-14 text-black font-bold">
            <li>
              <a href="#" className="hover:text-gray-900">
                Home
              </a>
            </li>
            <li>
              <a href="/Shop" className="hover:text-gray-900">
                Shop
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-gray-900">
                About
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-gray-900">
                Contact
              </a>
            </li>
          </ul>
        </div>

        
        <div>
          <h3 className="text-gray-400 font-semibold mb-3">Help</h3>
          <ul className="space-y-10 mt-14 text-black font-bold">
            <li>
              <a href="#" className="hover:text-gray-900">
                Payment Options
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-gray-900">
                Returns
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-gray-900">
                Privacy Policies
              </a>
            </li>
          </ul>
        </div>

        
        <div>
          <h3 className="text-gray-400 font-semibold mb-3">Newsletter</h3>
          <div className="flex items-center space-x-4 text-sm">
  <input
    type="email"
    placeholder="Enter Your Email Address"
    className="flex-grow px-3 py-2 border-b-2 border-black"
  />
  <button className="text-black font-bold px-4 py-2 border-b-[2px] border-black text-xs">
    SUBSCRIBE
  </button>
</div>
        </div>
      </div>

      
      <div className="border-t mt-10 pt-4 text-center text-gray-600 text-sm">
        2023 Funiro. All rights reserved.
      </div>
    </footer>

    </div>
  )
}

export default Footer
