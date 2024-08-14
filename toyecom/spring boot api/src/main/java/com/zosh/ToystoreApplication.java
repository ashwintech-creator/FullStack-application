package com.zosh;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;

// import io.swagger.v3.oas.annotations.ExternalDocumentation;
import io.swagger.v3.oas.annotations.OpenAPIDefinition;
// import io.swagger.v3.oas.annotations.info.Contact;
import io.swagger.v3.oas.annotations.info.Info;
// import io.swagger.v3.oas.annotations.info.License;

@SpringBootApplication
@OpenAPIDefinition(info = @Info(
		title="ToyStore ecommerce Project Api With Springboot",
		description="Welcome to the Toy Store API documentation, created for the SKCET college! This API offers a range of endpoints and functionalities for interacting with our platform programmatically, allowing you to build applications, create integrations, and automate tasks related to our online store.",
		version="v1"
		))
public class ToystoreApplication {

	public static void main(String[] args) {
		SpringApplication.run(ToystoreApplication.class, args);
	}

}
