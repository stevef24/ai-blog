import React from "react";
import AppLayout from "../components/AppLayout/AppLayout";

const TokenTopUp = () => {
	return <div>TokenTopUp</div>;
};

export default TokenTopUp;

TokenTopUp.getLayout = function getLayout(page, pageProps) {
	return <AppLayout {...pageProps}> {page}</AppLayout>;
};
