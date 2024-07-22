/* eslint-disable arrow-body-style */
import * as React from 'react'
import { Container } from "@mui/material";
import { NavBar } from "../../components";
import { AccountCardProfile } from '../../components/account/AccountCardProfile';



export const Account = () => {

return (
        <>
            <NavBar />
                <Container sx={{backgroundColor: '#FBFCFF', mt: '2.5rem'}}>
                    <AccountCardProfile />
                </Container>
        </>
     );
};