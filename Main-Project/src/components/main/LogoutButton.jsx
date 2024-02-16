import React from "react";
import { useAuth0 } from "@auth0/auth0-react";
import Profile from "./Profile";

const LogoutButton = () => {
  // const { logout } = useAuth0();

  // return (
  //   <button onClick={() => logout({ logoutParams: { returnTo: window.location.origin } })}>
  //     Log Out
  //   </button>
  // );

  const { logout, isAuthenticated } = useAuth0();

	if (isAuthenticated) {
		return (
			<>
				<button className="bg-MintGreen hover:bg-CambridgeBlue font-bold text-EnglishViolet rounded-md p-2 px-3 cursor-pointer"
					onClick={() => logout({ returnTo: window.location.origin })}>
					Log Out
				</button>
				<br />
        <Profile/>
				{/* <Profile /> */}
			</>
		);
	}
};

export default LogoutButton;