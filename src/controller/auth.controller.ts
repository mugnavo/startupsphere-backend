import { Body, Controller, HttpCode, HttpStatus, Post } from "@nestjs/common";
import { LoginRequest, RegisterRequest } from "src/dto/auth.dto";
import { AuthService } from "../service/auth.service";
import { Public } from "./../auth/constants";

@Controller("/auth")
export class AuthController {
	constructor(private authService: AuthService) {}

	@Public()
	@HttpCode(HttpStatus.CREATED)
	@Post("/register")
	register(@Body() registerDto: RegisterRequest) {
		return this.authService.register(
			registerDto.email,
			registerDto.password,
			registerDto.firstName,
			registerDto.lastName
		);
	}

	@Public()
	@HttpCode(HttpStatus.OK)
	@Post("/login")
	login(@Body() signInDto: LoginRequest) {
		return this.authService.login(signInDto.email, signInDto.password);
	}
}
