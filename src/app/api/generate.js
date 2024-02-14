import OpenAI from "openai"
import * as dotenv from "dotenv"
dotenv.config({ path: __dirname + "/.env" })
const openai = new OpenAI({
	apiKey: process.env.OPENAI_API_KEY,
})

export default async function (req, res) {
	const animal = req.bofy.animal || ""
	const response = await openai.chat.completions.create({
		model: "gpt-3.5-turbo",
		messages: [
			{
				role: "system",
				content: `Suggest three pet names for the follow ${animal} `,
			},
			{
				role: "user",
				content:
					"Product description: A home milkshake maker\n    Seed words: fast, healthy, compact.",
			},
		],
		temperature: 0.8,
		max_tokens: 64,
		top_p: 1,
	})
	res.status(200).json({ result: response.data.choices[0].text })
}
