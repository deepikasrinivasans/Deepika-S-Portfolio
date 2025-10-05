import React from 'react'
import { motion } from 'framer-motion'
import { User, Heart, Target, Award } from 'lucide-react'

const About = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3
      }
    }
  }

  const itemVariants = {
    hidden: { y: 30, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.6,
        ease: "easeOut"
      }
    }
  }

  const hobbies = [
    { icon: "🏸", name: "Badminton", description: "Active player and enthusiast" },
    { icon: "🎨", name: "Art", description: "Creative expression through visual arts" },
    { icon: "🎯", name: "Rifle Shooting", description: "Precision and focus training" }
  ]

  return (
    <section id="about" className="py-20 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          className="text-center mb-16"
        >
          <motion.h2 
            variants={itemVariants}
            className="text-4xl md:text-5xl font-bold mb-4"
          >
            <span className="text-gradient">About Me</span>
          </motion.h2>
          <motion.div 
            variants={itemVariants}
            className="w-24 h-1 bg-gradient-to-r from-blue-400 to-purple-500 mx-auto rounded-full"
          />
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          className="grid lg:grid-cols-2 gap-12 items-center"
        >
          {/* Left Content - Bio */}
          <motion.div variants={itemVariants} className="space-y-6">
            <div className="glass-effect p-8 rounded-2xl">
              <div className="flex items-center gap-4 mb-6">
                <div className="p-3 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full">
                  <User className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-gradient">Who I Am</h3>
              </div>
              
              <p className="text-gray-300 text-lg leading-relaxed mb-6">
                I'm an aspiring AI & Data Science enthusiast with a passion for solving complex problems 
                through technology. My journey in tech began with a curiosity about how machines can learn 
                and make intelligent decisions, which led me to dive deep into machine learning, deep learning, 
                and data analysis.
              </p>
              
              <p className="text-gray-300 text-lg leading-relaxed">
                While AI & Data Science is my primary focus, I also enjoy web development as it allows me 
                to bring my ideas to life and create meaningful user experiences. I believe in continuous 
                learning and staying updated with the latest technologies and trends in the field.
              </p>
            </div>

            {/* Passion Areas */}
            <div className="grid md:grid-cols-2 gap-4">
              <motion.div 
                whileHover={{ scale: 1.05, boxShadow: "0 0 30px rgba(14, 165, 233, 0.3)" }}
                className="glass-effect p-6 rounded-xl text-center"
              >
                <div className="p-3 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-full w-fit mx-auto mb-4">
                  <Target className="w-6 h-6 text-white" />
                </div>
                <h4 className="text-xl font-semibold mb-2 text-blue-400">Primary Focus</h4>
                <p className="text-gray-300">AI & Data Science</p>
              </motion.div>

              <motion.div 
                whileHover={{ scale: 1.05, boxShadow: "0 0 30px rgba(139, 92, 246, 0.3)" }}
                className="glass-effect p-6 rounded-xl text-center"
              >
                <div className="p-3 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full w-fit mx-auto mb-4">
                  <Heart className="w-6 h-6 text-white" />
                </div>
                <h4 className="text-xl font-semibold mb-2 text-purple-400">Secondary Interest</h4>
                <p className="text-gray-300">Web Development</p>
              </motion.div>
            </div>
          </motion.div>

          {/* Right Content - Profile Photo & Hobbies */}
          <motion.div variants={itemVariants} className="space-y-8">
            {/* Profile Photo Card */}
            <motion.div
              whileHover={{ scale: 1.02 }}
              className="glass-effect p-8 rounded-2xl text-center"
            >
              <motion.div
                animate={{ 
                  y: [0, -10, 0],
                  rotate: [0, 1, 0, -1, 0]
                }}
                transition={{
                  duration: 4,
                  repeat: Infinity,
                  ease: "easeInOut"
                }}
                className="relative mb-6"
              >
                <div className="w-48 h-48 mx-auto rounded-full bg-gradient-to-br from-blue-400 via-purple-500 to-pink-500 p-1">
                  <div className="w-full h-full rounded-full bg-gray-800 flex items-center justify-center overflow-hidden">
                    {/* Profile Image - Replace with your actual image */}
                    <img 
                      src="/profile.png" 
                      alt="Deepika S" 
                      className="w-full h-full object-cover rounded-full"
                      onError={(e) => {
                        // Fallback to initials if image not found
                        e.target.style.display = 'none';
                        e.target.nextSibling.style.display = 'flex';
                      }}
                    />
                    <div className="w-full h-full rounded-full bg-gradient-to-br from-blue-500/20 to-purple-500/20 flex items-center justify-center hidden">
                      <span className="text-4xl font-bold text-gradient">DS</span>
                    </div>
                  </div>
                </div>
                
                <motion.div
                  animate={{
                    boxShadow: [
                      "0 0 20px rgba(14, 165, 233, 0.3)",
                      "0 0 30px rgba(139, 92, 246, 0.4)",
                      "0 0 20px rgba(14, 165, 233, 0.3)"
                    ]
                  }}
                  transition={{
                    duration: 3,
                    repeat: Infinity,
                    ease: "easeInOut"
                  }}
                  className="absolute inset-0 rounded-full pointer-events-none"
                />
              </motion.div>
              
              <h3 className="text-2xl font-bold text-gradient mb-2">Deepika S</h3>
              <p className="text-gray-400">AI & Data Science Enthusiast</p>
            </motion.div>

            {/* Hobbies Section */}
            <div className="glass-effect p-6 rounded-2xl">
              <div className="flex items-center gap-3 mb-6">
                <div className="p-2 bg-gradient-to-r from-pink-500 to-red-500 rounded-full">
                  <Award className="w-5 h-5 text-white" />
                </div>
                <h3 className="text-xl font-bold text-gradient">Personal Interests</h3>
              </div>
              
              <div className="space-y-4">
                {hobbies.map((hobby, index) => (
                  <motion.div
                    key={hobby.name}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.1 }}
                    whileHover={{ scale: 1.02, x: 10 }}
                    className="flex items-center gap-4 p-4 rounded-xl bg-white/5 hover:bg-white/10 transition-all duration-300"
                  >
                    <span className="text-2xl">{hobby.icon}</span>
                    <div>
                      <h4 className="font-semibold text-white">{hobby.name}</h4>
                      <p className="text-sm text-gray-400">{hobby.description}</p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}

export default About
