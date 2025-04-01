
import { motion } from "framer-motion";
import { Typewriter } from "@/components/ui/typewriter";

const TypewriterSection = () => {
  return (
    <motion.div 
      className="w-full py-12 flex justify-center bg-gradient-to-r from-yellow-50 via-white to-yellow-50"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.6 }}
    >
      <div className="container mx-auto px-4 text-center">
        <motion.div 
          className="max-w-3xl mx-auto text-2xl md:text-3xl lg:text-4xl font-semibold text-amber-950"
          initial={{ y: 20 }}
          animate={{ y: 0 }}
          transition={{ delay: 0.3, duration: 0.5 }}
        >
          <p className="whitespace-pre-wrap">
            <span>{"Our mission is to provide "}</span>
            <Typewriter
              text={[
                "compassionate care",
                "professional support",
                "effective therapy",
                "healing environments",
                "personalized treatment"
              ]}
              speed={70}
              className="text-orange-500 font-bold"
              waitTime={1500}
              deleteSpeed={40}
              cursorChar={"_"}
            />
          </p>
        </motion.div>
      </div>
    </motion.div>
  );
};

export default TypewriterSection;
