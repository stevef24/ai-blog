import { withPageAuthRequired } from "@auth0/nextjs-auth0";
import React from "react";
import AppLayout from "../../components/AppLayout/AppLayout";

const NewPost = (props) => {
	const handleClick = async () => {
		const response = await fetch("/api/generatePost", { method: "POST" });
		const json = await response.json();
		console.log(json);
	};
	return (
		<div>
			<div>this New post</div>
			<button onClick={handleClick}>generate</button>
		</div>
	);
};

export default NewPost;

NewPost.getLayout = function getLayout(page, pageProps) {
	return <AppLayout {...pageProps}> {page}</AppLayout>;
};

export const getServerSideProps = withPageAuthRequired(() => {
	return {
		props: {},
	};
});
