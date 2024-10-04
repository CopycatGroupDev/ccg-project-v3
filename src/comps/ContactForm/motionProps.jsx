export default {
    initial: { opacity: 0, y: 200 },
    transition: { duration: 0.5 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true }
}