/** @format */

import logo from "./logo.svg";
import google from "./assets/google.png";
import fb from "./assets/fb.png";
import twitter from "./assets/twitter.png";
import "./App.css";

function App() {
	return (
		<div
			style={{
				display: "flex",
				justifyContent: "center",
				flexDirection: "column",
				alignItems: "center",
				marginBottom: "100px",
			}}
		>
			<div
				style={{
					// justifyContent: "center",
					// alignItems: "center",
					width: "380px",
				}}
			>
				<header>
					<img
						src={logo}
						alt="logo"
						style={{ height: "300px", width: "400px" }}
					/>
				</header>
				<div style={{ textAlign: "center" }}>SOME RANDOM TEXT,SOME RANDOM</div>
				<div style={{ textAlign: "center" }}>
					TEXT,SOME RANDOM TEXT,SOME RANDOM TEXT
				</div>

				<div
					style={{
						display: "flex",
						marginTop: "100px",
						justifyContent: "space-evenly",
						width: "100%",
						// alignItems: "center",
						// backgroundColor: "red",
					}}
				>
					<div
						style={{
							width: "100%",
							display: "flex",
							flexDirection: "column",
							justifyContent: "center",
							alignItems: "center",
						}}
					>
						<div
							style={{
								fontWeight: "bold",
								width: "50%",
								marginBottom: "10px",
								textAlign: "center",
							}}
						>
							Login
						</div>
						<div
							style={{
								width: "100%",
								backgroundColor: "#ea598b",
								height: "2px",
							}}
						></div>
					</div>
					<div
						style={{
							fontWeight: "400",
							width: "100%",
							marginBottom: "10px",
							textAlign: "center",
						}}
					>
						Signup
					</div>
				</div>

				<div
					style={{
						display: "flex",
						marginTop: "50px",
						width: "100%",
						justifyContent: "center",
						alignItems: "center",
						flexDirection: "column",
					}}
				>
					<div style={{ marginBottom: "20px" }}>
						<input
							placeholder="Email Address"
							type={"text"}
							style={{
								paddingTop: "10px",
								paddingBottom: "10px",
								paddingLeft: "20px",
								paddingRight: "10px",
								borderTopRightRadius: "50px",
								borderBottomRightRadius: "50px",
								borderTopLeftRadius: "50px",
								borderBottomLeftRadius: "50px",
								border: "0.5px solid #000",
								width: "250px",
							}}
						/>
					</div>
					<div>
						<input
							placeholder="Password"
							type={"password"}
							style={{
								paddingTop: "10px",
								paddingBottom: "10px",
								paddingLeft: "20px",
								paddingRight: "10px",
								borderTopRightRadius: "50px",
								borderBottomRightRadius: "50px",
								borderTopLeftRadius: "50px",
								borderBottomLeftRadius: "50px",
								border: "0.5px solid #000",
								width: "250px",
							}}
						/>
					</div>

					<div style={{ marginTop: "40px" }}>
						<button
							style={{
								backgroundColor: "#ea598b",
								border: "none",
								borderTopRightRadius: "50px",
								borderBottomRightRadius: "50px",
								borderTopLeftRadius: "50px",
								borderBottomLeftRadius: "50px",
								width: "280px",
								padding: "10px",
								color: "#fff",
								fontWeight: "bold",
							}}
						>
							LOGIN
						</button>
					</div>
					<div
						style={{
							display: "flex",
							color: "red",
							fontSize: "13px",
							marginTop: "20px",
							justifyContent: "flex-end",
							width: "280px",
						}}
					>
						Forgot Password?
					</div>
				</div>
				<div
					style={{
						display: "flex",
						alignItems: "center",
						justifyContent: "center",
						marginTop: "30px",
						flexDirection: "column",
					}}
				>
					<div style={{ fontSize: "12px", color: "grey" }}>or login with</div>
					<div
						style={{
							flexDirection: "row",
							display: "flex",
							marginTop: "20px",
							justifyContent: "space-evenly",
							alignItems: "center",
							width: "80%",
						}}
					>
						<div
							style={{
								width: "50px",
								height: "50px",
								borderRadius: "50%",
								boxShadow: "1px 2px 9px grey",
								justifyContent: "center",
								alignItems: "center",
								display: "flex",
							}}
						>
							<img
								src={google}
								alt="logo"
								style={{ width: "20px", height: "20px" }}
							/>
						</div>
						<div
							style={{
								width: "50px",
								height: "50px",
								borderRadius: "50%",
								boxShadow: "1px 2px 9px grey",
								justifyContent: "center",
								alignItems: "center",
								display: "flex",
							}}
						>
							<img
								src={fb}
								alt="logo"
								style={{ width: "20px", height: "20px" }}
							/>
						</div>
						<div
							style={{
								width: "50px",
								height: "50px",
								borderRadius: "50%",
								boxShadow: "1px 2px 9px grey",
								justifyContent: "center",
								alignItems: "center",
								display: "flex",
							}}
						>
							<img
								src={twitter}
								alt="logo"
								style={{ width: "20px", height: "20px" }}
							/>
						</div>
					</div>
					<div
						style={{
							display: "flex",
							justifyContent: "center",
							alignItems: "center",
							flexDirection: "column",
							marginTop: "25px",
						}}
					>
						<div style={{ marginBottom: "10px" }}>
							<span style={{ fontSize: "12px" }}>Don't have an account?</span>
							<span style={{ fontSize: "12px" , color: "#ea598b"}}> Create new now!</span>
						</div>
						<div>
							<span style={{ fontSize: "12px" }}>
								By signing up,you are agree with our{" "}
							</span>

							<a href="" style={{ color: "#ea598b", fontSize: "12px" }}>
								Terms & Conditions
							</a>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
}

export default App;
