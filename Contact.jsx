import { motion } from 'framer-motion'

export default function Hero() {
  return (
    <div className='relative h-[70vh] flex items-center justify-center bg-green-900 text-white'>
      <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} className='text-center'>
        <h1 className='text-4xl font-bold mb-4'>Finca Cafetera de Colombia</h1>
        <p className='mb-4'>Café de origen con pasión</p>
      </motion.div>
    </div>
  )
}
