import BannerTitle from "../../BannerTitle";
import Wrapper from "./Wrapper";
import GridContainer from "./GridContainer";
import GridItem from "./GridItem";
import Text from "./Text";
import StyledTitle from "./StyledTitle";
import StyledContent from "./StyledContent";
import { colors } from "../../../config/colors";

const SolutionsList = ({ solutions }) => {
  return (<>
    <BannerTitle $color={colors.solutions}>Accompagnement sur nos solutions</BannerTitle>
    <Wrapper>
      <GridContainer>
        {solutions.map(({ title, content, img }, key) => (
          <GridItem key={key} $reverse={key % 2}>
            <Text
              initial={{ opacity: 0, x: key % 2 ? 200 : -200 }}
              transition={{ duration: 0.5 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}>
              <StyledTitle>{title}</StyledTitle>
              <StyledContent>{content}</StyledContent>
            </Text>
            <img src={img} alt="" />
          </GridItem>
        ))}
      </GridContainer>
    </Wrapper>
  </>);
};

export default SolutionsList;