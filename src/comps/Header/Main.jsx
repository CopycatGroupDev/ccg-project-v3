import { Cover } from "./Cover";
import { HeaderLayout as Layout } from "./HeaderLayout";
import Nav from "./HeaderNav";
import { HeaderText as Text } from "./HeaderText";
import { HeaderCenterLogo as Logo } from "./HeaderCenterLogo";
import TextZone from "./HeaderTextZone";
import { animation } from "../../config/headerAnimation";
import Appendix from "./HeaderAppendix";
import { motion } from "framer-motion";
import { useContext } from "react";
import { DefaultContext } from "../../wrappers/Default";
import Container from "./HeaderContainer";

export default function Header({ longP }) {
    const { color, header : { bg, rows, logo, appendixRow } } = useContext(DefaultContext);
    return <Container>
        <Layout
        longP={longP ?? false}
        $color={color}
        initial={{background: color}}
        animate={{backgroundImage: `linear-gradient(-175deg, #ededed 50%, ${color} 50%)`}}
        transition={{ duration: 0.5, ease: "circInOut" }}>
            <Cover src={bg} alt="logo" initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.5 }} />
            <Logo src={logo} alt="logo" {...animation} />
            <Text>
                <Nav />
                <TextZone className="textZone" rows={rows} color={color} {...animation} />
            </Text>
        </Layout>
        {appendixRow && <Appendix longP={longP ?? false} className="appendix" $color={color}>
            <motion.p {...animation}>{appendixRow}</motion.p>
        </Appendix>}
    </Container>;
}