import React from "react";
import Link from "next/link";
import { useUser } from "@auth0/nextjs-auth0/client";
import Image from "next/image";
import Logo from "../Logo/logo";

const AppLayout = ({ children }) => {
	const { user } = useUser();
	return (
		<div className="grid grid-cols-[300px_1fr] h-screen max-h-screen ">
			<div className="flex flex-col gap-4 p-2 overflow-hidden">
				<div>
					<Logo />
					<Link href="/post/new">New post button</Link>
					<br />
					<Link href="/token-topup">tokens</Link>0 tokens avaliable
				</div>
				<div className="flex-1 overflow-auto ">list of posts</div>
				<div>
					{!!user ? (
						<>
							<div>
								<Image
									src={user.picture}
									alt={user.name}
									height={50}
									width={50}
									className="rounded-full"
								/>
								<div>{user.email}</div>
							</div>
							<Link href="/api/auth/logout">Logout</Link>
						</>
					) : (
						<Link href="/api/auth/login">Login</Link>
					)}
				</div>
			</div>
			<div className="p-2 bg-green-500 ">{children}</div>
		</div>
	);
};

export default AppLayout;
