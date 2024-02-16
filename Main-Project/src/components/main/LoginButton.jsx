import React from "react";
import { useAuth0 } from "@auth0/auth0-react";

const LoginButton = () => {
  // const { loginWithRedirect } = useAuth0();

  // return <button onClick={() => loginWithRedirect()}>Log In</button>;
  const { loginWithRedirect, isAuthenticated } = useAuth0();
	if (!isAuthenticated) {
		return <button className="bg-MintGreen hover:bg-CambridgeBlue font-bold text-EnglishViolet rounded-md p-2 px-3 cursor-pointer"
			onClick={() => loginWithRedirect()}>
			Log In</button>;
	}
};

export default LoginButton;