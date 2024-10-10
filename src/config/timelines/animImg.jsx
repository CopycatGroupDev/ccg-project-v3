import { motion } from 'framer-motion';

export default (img, key) => (
	<motion.img
	  key={key}
	  src={img}
	  initial={{ opacity: 0, x: 100 }}
	  transition={{ duration: 0.5, delay: key * 0.25 }}
	  whileInView={{ opacity: 100, x: 0 }}
	  viewport={{ once: true }}
	/>
);