import OpenAI from "openai"
import * as dotenv from "dotenv"
dotenv.config({ path: __dirname + "/.env" })
const openai = new OpenAI({
	apiKey: ss,
})

const response = await openai.chat.completions.create({
	model: "gpt-3.5-turbo",
	messages: [
		{
			role: "system",
			content:
				"You will be provided with a product description and seed words, and your task is to generate product names.",
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
