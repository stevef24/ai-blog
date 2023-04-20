import Link from "next/link";

export default function Home() {
	return (
		<div className="flex items-center justify-center w-screen h-screen overflow-hidden">
			{/* <Image /> */}
			<div className="border ">
				<h1>hello world</h1>
				<p>
					Lorem ipsum dolor sit amet consectetur, adipisicing elit. Excepturi
					necessitatibus totam corporis at labore eligendi. Perspiciatis
					delectus officiis cupiditate magnam?
				</p>
				<Link href="/post/new">Create a blog</Link>
			</div>
		</div>
	);
}
