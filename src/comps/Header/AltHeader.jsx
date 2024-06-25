import { Cover } from "./Cover";
import { HeaderLayout as Layout } from "./HeaderLayout";
import Nav from "./HeaderNav";
import { HeaderText as Text } from "./HeaderText";
import { animation } from "../../config/headerAnimation";
import { HeaderFullText as FullText } from "./HeaderFullText";
import { Title } from "../Title";

export default function AltHeader({bg, logo, color, title, text, coverFull, height, bgCover = false}) {
    return <Layout $color={color} $height={height}>
        <Cover src={bg} $full={coverFull} $cover={bgCover} alt="logo" />
        <FullText {...animation}>
            {title && <Title $color={"white"}>{title}</Title>}
            {text && <p>{text}</p>}
        </FullText>
        <Text>
            <Nav />
        </Text>
    </Layout>;
}