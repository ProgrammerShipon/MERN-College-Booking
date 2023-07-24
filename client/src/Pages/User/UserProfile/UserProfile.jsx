import React, { useState } from "react";
import useProfileUser from "../../../hooks/useProfileUser";
import { FiEdit } from "react-icons/fi";
import { RxCross2 } from "react-icons/rx";
import { useForm } from "react-hook-form";
import { toast } from "react-hot-toast";

const UserProfile = () => {
	const [isEdit, setEditAble] = useState(false);
	const { profileUserData, profileUserLoading, profileUserRefetch } =
		useProfileUser();
	const {
		register,
		handleSubmit,
		watch,
		formState: { errors },
	} = useForm({ ...profileUserData });

	const profileUpdateFc = (profileID, profileData) => {
		const sendData = { ...profileData };

		console.log("profile id -> ", profileID, sendData);

		fetch(`http://localhost:6060/profile-updates/${profileID}`, {
			method: "PATCH",
			headers: { "Content-Type": "application/json" },
			body: JSON.stringify(sendData),
		})
			.then((res) => res.json())
			.then((data) => {
				console.log("Update Data -> ", data);
				if (data.modifiedCount > 0) {
					profileUserRefetch();
					toast.success(`Update Success`);
				}
			})
			.catch((err) => console.log(err));
	};

	const onSubmit = (data) => {
		console.log("clicked");
		console.log("editData-> ", data);
		console.log(errors);

		if (data) {
			profileUpdateFc(profileUserData?._id, data);
		}
	};

	// console.log(errors);

	const inputStyle =
		"appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm my-2";

	return (
		<>
			<section className="pt-16 bg-blueGray-50">
				<div className="w-full lg:w-4/12 px-4 mx-auto">
					<div className="relative flex flex-col min-w-0 break-words bg-white w-full mb-6 shadow-xl rounded-lg mt-16">
						<button
							onClick={() => setEditAble(!isEdit)}
							className="absolute right-4 top-4 transition duration-300 bg-slate-100 hover:bg-slate-300 p-2 rounded hover:shadow-md"
						>
							{isEdit ? (
								<RxCross2 className="w-6 h-6" />
							) : (
								<FiEdit className="w-6 h-6" />
							)}
						</button>

						<div className="px-6 py-7">
							<div className="flex flex-wrap justify-center mt-6">
								<div className="w-full px-4 flex justify-center">
									<figure className="">
										<img
											alt="..."
											src={profileUserData?.photoURL}
											className="align-middle border-none h-auto max-w-150-px rounded-full shadow-xl"
										/>
									</figure>
								</div>
							</div>
							<div className="text-center mt-5">
								{isEdit ? (
									<form onSubmit={handleSubmit(onSubmit)}>
										<div className="text-center mt-5">
											<input
												{...register("photoURL", { required: true })}
												defaultValue={profileUserData?.photoURL}
												placeholder="Your Profile Image change..."
												className={inputStyle}
											/>

											<input
												defaultValue={profileUserData?.displayName}
												{...register("displayName")}
												placeholder="Your name..."
												className={inputStyle}
											/>

											<input
												{...register("email", { required: true })}
												defaultValue={profileUserData?.email}
												disabled
												placeholder="Your Email..."
												className={inputStyle + "select-none"}
											/>

											<input
												{...register("phoneNumber", { required: true })}
												defaultValue={profileUserData?.phoneNumber}
												placeholder="Your Phone Number..."
												className={inputStyle}
											/>

											<input
												{...register("about", { required: true })}
												defaultValue={profileUserData?.about}
												placeholder="About Your Self..."
												className={inputStyle}
											/>

											<input
												{...register("address", { required: true })}
												defaultValue={profileUserData?.address}
												placeholder="Your Address ..."
												className={inputStyle}
											/>

											<input
												{...register("education", { required: true })}
												defaultValue={profileUserData?.education}
												placeholder="Your Education Name..."
												className={inputStyle}
											/>

											<input
												{...register("gender", { required: true })}
												defaultValue={profileUserData?.gender}
												placeholder="Gender - Male or Female"
												className={inputStyle}
											/>
										</div>

										{errors.exampleRequired && (
											<span>This field is required</span>
										)}

										<input
											type="submit"
											className="absolute left-4 top-4 cursor-pointer transition duration-300 bg-green-100 hover:bg-green-300 p-2 rounded hover:shadow-md"
										/>
									</form>
								) : (
									<div className="pb-7">
										<div>
											<h3 className="text-2xl font-semibold">
												{" "}
												{profileUserData?.displayName}{" "}
											</h3>
											<p>
												{" "}
												{profileUserData?.about ||
													"Write a About Your Self"}{" "}
											</p>
										</div>

										<div className="border-t">
											<p> {profileUserData?.email || "Your Email "}</p>
											<p>
												{" "}
												{profileUserData?.phoneNumber || "Your Contact Number"}
											</p>
										</div>

										<div className="border-t">
											<p> {profileUserData?.address || "set Your Location "}</p>
											<p> {profileUserData?.gender || "Set Your Gender"} </p>
											<p>{profileUserData?.education || "Set Your College"}</p>
										</div>
									</div>
								)}
							</div>
						</div>
					</div>
				</div>
			</section>
		</>
	);
};

export default UserProfile;
