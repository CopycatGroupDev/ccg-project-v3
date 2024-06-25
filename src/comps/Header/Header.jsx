import { Cover } from "./Cover";
import { HeaderLayout as Layout } from "./HeaderLayout";
import Nav from "./HeaderNav";
import { HeaderText as Text } from "./HeaderText";
import { HeaderCenterLogo as Logo } from "./HeaderCenterLogo";
import TextZone from "./HeaderTextZone";
import { animation } from "../../config/headerAnimation";
import styled from "styled-components";
import Appendix from "./HeaderAppendix";
import { motion } from "framer-motion";

export default function Header({bg, logo, color, textsRows : rows, plusTextRow}) {
    return <Container>
        <Layout $color={color} initial={{background: color}} animate={{backgroundImage: `linear-gradient(-175deg, #ededed 50%, ${color} 50%)`}} transition={{ duration: 0.5, ease: "circInOut" }}>
            <Cover src={bg} alt="logo" initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.5 }} />
            <Logo src={logo} alt="logo" {...animation} />
            <Text>
                <Nav />
                <TextZone rows={rows} color={color} {...animation} />
            </Text>
        </Layout>
        {plusTextRow && <Appendix $color={color}>
            <motion.p {...animation}>{plusTextRow}</motion.p>
        </Appendix>}
    </Container>;
}

const Container = styled.div`
    display: grid;
    grid-template-rows: min-content;
    width: 100%;`