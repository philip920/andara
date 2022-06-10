import React from "react";
import { CenteredGrid } from "../common/styled-components";
import { useStore } from "../../store";

const Home: React.FunctionComponent = () => {
    const store = useStore((state) => state);
    return (
        <CenteredGrid>
            Logged in as
            <br/>
            <br/>
            username: {store.user.username}
            <br/>
            <br/>
            address: {store.user.authWalletAdress}
        </CenteredGrid>
    );
};

export default Home;
