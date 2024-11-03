import { motion } from "framer-motion";

import { slideAnimation } from "../config/motion";

const Footer = () => {

  return (
    <>
        <motion.footer className="text-gray-800 w-fit mx-auto pb-1" {...slideAnimation('up')}>
          {/* Current Year and Copyright Notice */}
            <p className="ml-12">&copy; {new Date().getFullYear()} | All rights reserved</p>

          {/* Email Link for Contact */}
            <a
              href="mailto:lokeshbpatil2004@gmail.com"
              className="mt-1 text-blue-900 hover:text-green-900 transition-all duration-300 "  
            >
              Get in touch: lokeshbpatil2004@gmail.com
            </a>
        </motion.footer>
    </>
  )
}

export default Footer