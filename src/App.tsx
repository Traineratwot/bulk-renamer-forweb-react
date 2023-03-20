import React, { useRef, useState } from "react"
import { Dropdown } from "primereact/dropdown"
import "./style/index.scss"
import { InputText } from "primereact/inputtext"
import { InputNumber } from "primereact/inputnumber"
import { Password } from "primereact/password"
import { Button } from "primereact/button"

function App() {
	const [selectedCity, setSelectedCity] = useState(null)
	const [userName, setUserName] = useState<string>("admin")
	const [userPass, setUserPass] = useState<string>("adminadmin")
	const cities = [
		{ name: "http://192.168.50.4:6363", code: "http://192.168.50.4:6363" },
		{ name: "http://192.168.50.4:6363", code: "http://192.168.50.4:6363" },
		{ name: "http://192.168.50.4:6363", code: "http://192.168.50.4:6363" },
		{ name: "http://192.168.50.4:6363", code: "http://192.168.50.4:6363" },
		{ name: "http://192.168.50.4:6363", code: "http://192.168.50.4:6363" },
	]


	return <>
		<section className="container">
			<div className="content">
				<p>
					<Dropdown style={{ width: "250px" }} value={selectedCity} onChange={(e) => setSelectedCity(e.value)}
							  options={cities}
							  optionLabel="name"
							  name="server"
							  editable placeholder="Select a Qb Server" className="w-full md:w-14rem" />
				</p>
				<p>
					<div className="p-inputgroup">
						<span className="p-inputgroup-addon">
							<i className="pi pi-user"></i>
						</span>
						<InputText value={userName} onChange={(e) => setUserName(e.target.value)}
								   placeholder="Username" />
					</div>
				</p>
				<p>
					<div className="p-inputgroup">
						<span className="p-inputgroup-addon">
							<i className="pi pi-key"></i>
						</span>
						<Password
							value={userPass} onChange={(e) => setUserPass(e.target.value)}
							placeholder="Password" feedback={false} />
					</div>
				</p>
				<p>
					<Button style={{ width: "250px" }} label="Submit" type="submit" icon="pi pi-check" />
				</p>
			</div>
		</section>
	</>
}

export default App
