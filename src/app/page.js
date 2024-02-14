"use client"

import Head from "next/head"
import Image from "next/image"
import React, { useState } from "react"

export default function Home() {
	const [value, setValue] = useState("")

	const onSubmit = async (e) => {
		e.preventDefault()
		const response = await fetch("/api/generate", {
			method: "POST",
			headers: {
				"content-type": "application/json",
			},
			body: JSON.stringify({ animal: value }),
		})

		setValue("")
	}

	return (
		<>
			<div>
				<Head>
					<title>Create Next App</title>
				</Head>
				<main className='flex min-h-screen flex-col items-center  p-24'>
					<Image
						src='/favicon.ico'
						height={50}
						width={50}
						alt='logo image'
					/>
					<h3>Name My Pet</h3>
					<form onSubmit={onSubmit}>
						<input
							type='text'
							name='animal'
							placeholder='Enter an animal'
							value={value}
							onChange={(e) => setValue(e.target.value)}
						></input>
						<button>Generate Names</button>
					</form>
				</main>
			</div>
		</>
	)
}
