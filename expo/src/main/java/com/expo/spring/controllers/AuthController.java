package com.expo.spring.controllers;

import com.expo.spring.models.Person;
import com.expo.spring.services.RegistrationService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/api/auth")
public class AuthController {
    private final RegistrationService registrationService;

    @Autowired
    public AuthController(RegistrationService registrationService) {
        this.registrationService = registrationService;
    }

    @GetMapping("/login")
    public HttpStatus loginPage() {
        return HttpStatus.OK;
    }

    @PostMapping("/registration")
    public HttpStatus performRegistration(@RequestBody Person person) {
        registrationService.register(person);
        return HttpStatus.CREATED;
    }
}