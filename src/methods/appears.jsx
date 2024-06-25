export default function appears (key) {
	return {
		initial: { opacity: 0, scale: 0.8 },
		whileInView: { opacity: 100, scale: 1 },
		transition: { duration: 0.5, delay: 0.25 * key },
		viewport: { once: true }
	}
};