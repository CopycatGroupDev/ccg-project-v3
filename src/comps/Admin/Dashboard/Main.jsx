import styled from "styled-components";
import Nav from "./Nav";
import Body from "./Body";

export default styled.div.attrs(({ children }) => {
    return {
        children: <>
            <Nav />
            <Body>
                {children}
            </Body>
        </>
    }
})`
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    overflow: hidden;
`