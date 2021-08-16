export interface ResponseLogin {
	user?: String | Number;
	password?: String | Number;
	accountRemember?: Boolean;
}

export interface ResponseRegister {
	username?: String | Number;
	pass?: String | Number;
	checkPass?: String | Number;
}

export interface AuthTypes {
	auth?: String;
	authenticated?: Boolean;
}
