import { Configuration, OpenAIApi } from "openai";

export default async function handler(req, res) {
	const config = new Configuration({
		apiKey: process.env.OPENAI_API_KEY,
	});
	const openai = new OpenAIApi(config);

	const response = await openai.createCompletion({
		model: "text-davinchi-003",
		temperature: 0,
		max_tokens: 3600,
		prompt: "Generate a blog post about owning dogs",
	});
	console.log("response:", response);
	res.status(200).json({ name: "generate post" });
}
