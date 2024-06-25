import styled from 'styled-components';

const HeaderAppendix = styled.div`
    display: flex;
    flex-direction: column;
    padding: 3.5rem;
    padding-top: 0;
    background: ${({ $color }) => $color};
    color: white;
    align-items: center;
    text-align: center;
    font-size: 26px;
    line-height: 32px;
    box-sizing: content-box;

    @media only screen and (max-width: 1000px) and (max-height: 800px) and (orientation: portrait) {
        font-size: 1.25rem;
    }

    @media only screen and (max-width: 1000px) and (min-height: 800px) and (orientation: portrait) {
        font-size: 1.5rem;
    }

    p {
        max-width: 1000px;
        margin: 0;
    }
`;
export default HeaderAppendix;