import styled from "styled-components";

export default styled.table`
    border-collapse: collapse;
    width: 100%;
    background: #fff;
    border-radius: 0.5rem;

    td, th {
        padding: 0.5rem;
        width: 33%;
    }

    tr {
        &:nth-child(odd) {
            background: #eee8;
        }
    }
`