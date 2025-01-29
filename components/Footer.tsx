import { FaTwitter, FaFacebook, FaInstagram } from 'react-icons/fa'

const Footer = () => {
  return (
    <footer className="bg-primary text-primary-foreground py-8">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-4 md:mb-0">
            <h3 className="text-xl font-bold">大阪酒探検</h3>
            <p className="mt-2">大阪の豊かな酒文化を発見しよう</p>
          </div>
          <div className="flex space-x-4">
            <a href="#" className="hover:text-gray-300 transition duration-300"><FaTwitter size={24} /></a>
            <a href="#" className="hover:text-gray-300 transition duration-300"><FaFacebook size={24} /></a>
            <a href="#" className="hover:text-gray-300 transition duration-300"><FaInstagram size={24} /></a>
          </div>
        </div>
        <div className="mt-8 text-center">
          <p>&copy; 2025 大阪酒探検. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}

export default Footer

