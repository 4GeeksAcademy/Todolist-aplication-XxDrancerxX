import React, { useState } from "react";
import '@fortawesome/fontawesome-free/css/all.min.css';

//include images into your bundle
import rigoImage from "../../img/rigo-baby.jpg";

//create your first component
const Home = () => {
	const [input, setInput] = useState("");
	const [list, setList] = useState(["make the homework", "Do excercises", "Do the laundry"]);

	const deleteLi = (index) => {
		const newtList = list.filter((item, i) => i !== index);
		setList(newtList);
	}





	return (

		<div style={{ backgroundColor: "gainsboro" }} className="container d-flex justify-content-center align-items-center min-vh-100">
			<ul className="list-group w-50" style={{ backdropFilter: "blur(10px)", backgroundColor: "rgba(255, 255, 255, 0.8)", borderRadius: "10px", padding: "20px" }}>
				<li
					className="list-group-item border-top mb-3"
					aria-current="true"
					style={{ borderTop: "1px solid #dee2e6" }}
				>
					<input
						type="text"
						value={input}
						onChange={(e) => setInput(e.target.value)}
						onKeyDown={(e) => {
							if (e.key === "Enter") {
								setList([...list, input]);
								setInput("");
							}
						}}
						className="form-control"
					/>
				</li>

				{list.map(
					(item, index) => {
						return (
							<li key={index}
								className="list-group-item d-flex justify-content-between border-top mb-3"
								style={{ borderTop: "1px solid #dee2e6" }}>
								{item}
								<i onClick={() => deleteLi(index)}
									className="fa-solid fa-trash"
									style={{ marginRight: "10px", cursor: "pointer" }}>
								</i>
							</li>
						)
					}
				)}
			</ul>
		</div>

	);

};

export default Home;