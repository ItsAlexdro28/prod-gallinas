interface UserLogin {
  email: string;
  password: string;
}

export const loginUser = (userLogin: UserLogin): boolean => {
	console.log("loginUser")
  return userLogin.email === "test@gmail.com" && userLogin.password === "12345";
};
