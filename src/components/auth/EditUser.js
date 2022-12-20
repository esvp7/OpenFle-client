import { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const EditUser = () => {
    const [ user ] = useState(JSON.parse(localStorage.getItem('profile')));
	const [data, setData] = useState({
		firstName: user?.firstName,
		lastName: user?.lastName,
		userName: user?.userName,
		profilePicture: user?.profilePicture,
		gender: user?.gender,
		age: user?.age,
		frenchLevel: user?.frenchLevel,
		speakingLanguages: user?.speakingLanguages,
		country: user?.country,
		description: user?.description,
		frenchResources: user?.frenchResources,
        email: user?.email,
        password: user?.password,
		instructorType: "BRONZE TIER",
		joined: user.joined,

	});
	const [error, setError] = useState("");
	const navigate = useNavigate();

	const handleChange = ({ currentTarget: input }) => {
		setData({ ...data, [input.name]: input.value });
	};

	const handleGender = (e) => {
		setData({ ...data, gender: e.target.value });
	};

	const handleLevel = (e) => {
		setData({ ...data, frenchLevel: e.target.value });
	};

	const handleSubmit = async (e) => {
		e.preventDefault();
		try {
			const url = "http://localhost:8080/api/editprofile";
			const { data: res } = await axios.patch(url, data);
			navigate("/login");
		} catch (error) {
			if (
				error.response &&
				error.response.status >= 400 &&
				error.response.status <= 500
			) {
				setError(error.response.data.message);
			}
		}
	};

return (
    <div className="signup_container">
			<div className="signup_form_container">
				<div className="right">
				<h1 className="form-header">Update Your Profile</h1>
					<form className="form_container" onSubmit={handleSubmit}>
						<input
							type="text"
							placeholder="First Name"
							name="firstName"
							onChange={handleChange}
							value={data.firstName}
							required
							className="input"
						/>
						<input
							type="text"
							placeholder="Last Name"
							name="lastName"
							onChange={handleChange}
							value={data.lastName}
							required
							className="input"
						/>
						<input
							type="text"
							placeholder="Username"
							name="userName"
							onChange={handleChange}
							value={data.userName}
							required
							className="input"
						/>
						<input
							type="text"
							placeholder="Profile Picture Link"
							name="profilePicture"
							onChange={handleChange}
							value={data.profilePicture}
							required
							className="input"
						/>
					    <input
							type="text"
							placeholder="Country"
							name="country"
							onChange={handleChange}
							value={data.country}
							required
							className="input"
						/>
						<input
							type="text"
							placeholder="Introduce Yourself!"
							name="description"
							onChange={handleChange}
							value={data.description}
							required
							className="input"
						/>
						<select value={data.gender} onChange={handleGender} className="input">
							<option value="default" disabled>Gender</option>
							<option value="Female">Female</option>
							<option value="Male">Male</option>
							<option value="Non-Binary">Non-Binary</option>
						</select>
						<input 
						  type="number"
						  name="age" 
						  min="12"
						  max="100"
						  placeholder="Age"
						  onChange={handleChange}
						  value={data.age}
						  required
						  className="input"
						/>
						<select value={data.frenchLevel} onChange={handleLevel} className="input">
							<option value="default" disabled>French Level</option>
							<option value="A1">A1</option>
							<option value="A2">A2</option>
							<option value="B1">B1</option>
							<option value="B2">B2</option>
							<option value="C1">C1</option>
							<option value="C2">C2</option>
						</select>
						<input
							type="text"
							placeholder="Speaking Languages"
							name="speakingLanguages"
							onChange={handleChange}
							value={data.speakingLanguages}
							required
							className="input"
						/>
						<input
							type="text"
							placeholder="Favorite French Resource"
							name="frenchResources"
							onChange={handleChange}
							value={data.frenchResources}
							required
							className="input"
						/>
						{error && <div className="error_msg">{error}</div>}
						<button type="submit" className="green_btn">
							Save Changes
						</button>
					</form>
				</div>
			</div>
		</div>

    );
};

export default EditUser;