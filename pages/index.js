import React, { useEffect, useState } from "react";

import Head from "next/head";
import Image from "next/image";
import { Inter } from "next/font/google";

import Slide1 from "../components/Slide1";
import Slide2 from "../components/Slide2";
import Slide3 from "../components/Slide3";
import Slide4 from "../components/Slide4";
import Slide5 from "../components/Slide5";
import Slide6 from "../components/Slide6";
import Slide7 from "../components/Slide7";
import Button from "../components/Button";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
	const slideCSS = "w-100 vh-100 min-vh-100 d-flex align-items-center p-4";
	const slideContainerCSS = "w-100 p-4";

	const [currentNum, setCurrentNum] = useState(1);
	const slides = {
		slide1: Slide1,
		slide2: Slide2,
		slide3: Slide3,
		slide4: Slide4,
		slide5: Slide5,
		slide6: Slide6,
		slide7: Slide7,
	};

	let CurrentSlide = slides[`slide${currentNum}`];
	//console.log("CurrentSlide: ", CurrentSlide);

	const prevSlide = () => {
		if (currentNum > 1) {
			setCurrentNum(currentNum - 1);
		}
	};

	const nextSlide = () => {
		if (currentNum < 7) {
			setCurrentNum(currentNum + 1);
		}
	};

	const handleKeyPress = (e) => {
		console.log("charCode: ", e.key);
		if (e.key === "ArrowRight") {
			console.log("enter press here! ");
			nextSlide();
		} else if (e.key === "ArrowLeft") {
			prevSlide();
		}
	};

	return (
		<>
			<Head>
				<title>Create Next App</title>
				<meta name="description" content="Generated by create next app" />
				<meta name="viewport" content="width=device-width, initial-scale=1" />
				<link rel="icon" href="/favicon.ico" />
			</Head>
			<div
				className="d-flex flex-column justify-content-stretch vw-100 vh-100 min-vw-100 min-vh-100"
				onKeyDown={handleKeyPress}
				tabIndex="0">
				<main
					className="flex-grow-1 overflow-hidden"
					style={{ background: "#bbf272" }}>
					<div
						className="container"
						//style={{ top: `-${currentTop}px`, left: 0 }}
						style={{ top: 0, left: 0, background: "rgba(255,255,255,0.7)" }}>
						<ul className="d-flex flex-column list-unstyled mb-0">
							<li className={slideCSS}>
								<CurrentSlide {...{ slideContainerCSS }} />
							</li>
						</ul>
					</div>
					{/* <div
						className="position-absolute"
						//style={{ top: `-${currentTop}px`, left: 0 }}
						style={{ top: 0, left: 0, background: "rgba(255,255,255,0.7)" }}>
						<ul className="d-flex flex-column list-unstyled mb-0">
							<li className={slideCSS}>
								<CurrentSlide {...{ slideContainerCSS }} />
							</li>
						</ul>
					</div> */}
				</main>

				<nav className="p-2" style={{ background: "#47a1e6" }}>
					<ul className="container d-flex list-unstyled mb-0">
						<li className="">
							<Button whichWay={prevSlide} copy="«" />
						</li>
						<li className="ms-auto">
							<Button whichWay={nextSlide} copy="»" />
						</li>
					</ul>
				</nav>
			</div>
		</>
	);
}
