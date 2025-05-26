import AltHeader from "../comps/Header/AltHeader";
import { Actions, Banner, Intro, StyledLink, Trio } from "../comps/RSE";
import Default from "../wrappers/Default";
import React from 'react';

const data = { title: "RSE - Copycat Group" }

export default function RSE() {
    return <Default value={data}>
        <AltHeader bg={'/banners/Bannière RSE.png'} height={400} coverFull={true} bgCover={true}/>
        <Intro />
        <Trio />
        <Actions />
        <StyledLink to="/contact?subject=rse">Demander la charte RSE Copycat Group</StyledLink>
    </Default>
};
