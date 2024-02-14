"use client"

import Head from "next/head"
import Image from "next/image"
import React, { useState } from "react"
import styles from "./globals.css"

export default function Home() {
	const [animalInput, setAnimalInput] = useState("")
	const [count, setCount] = useState(0)
	const [result, setResult] = useState()
	const onSubmit = async (e) => {
		e.preventDefault()

		if (count === 10) {
			return console.log("you have reached your limit")
		}
		try {
			const response = await fetch("/api/generate", {
				method: "POST",
				headers: {
					"content-type": "application/json",
				},
				body: JSON.stringify({ animal: animalInput }),
			})
			const data = await response.json()
			if (response.status !== 200) {
				throw (
					data.error ||
					new Error(`Request failed with status ${response.status}`)
				)
			}
			setResult(data.result)
			setCount(count + 1)
			setAnimalInput("")
		} catch (error) {
			console.error(error.message)
			alert(error.message)
		}
	}

	return (
		<div>
			<Head>
				<title>Create Next App</title>
			</Head>
			<main className={styles.main}>
				<Image
					src='/favicon.ico'
					height={50}
					width={50}
					alt='logo image'
					className={styles.icon}
				/>
				<h3>Name My Pet</h3>
				<form onSubmit={onSubmit}>
					<input
						type='text'
						name='animal'
						placeholder='Enter an animal'
						value={animalInput}
						onChange={(e) => setAnimalInput(e.target.value)}
					></input>
					<input
						type='submit'
						value='Generate Names'
					/>
				</form>
				<div className={styles.result}>{result}</div>
			</main>
		</div>
	)
}
