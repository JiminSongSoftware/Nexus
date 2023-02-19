package com.expo.spring.controllers;

import com.expo.spring.models.Person;
import com.expo.spring.services.RegistrationService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/auth")
public class AuthController {
    private final RegistrationService registrationService;

    @Autowired
    public AuthController(RegistrationService registrationService) {
        this.registrationService = registrationService;
    }

    @GetMapping("/login")
    public ResponseEntity<String> loginPage() {
        return new ResponseEntity<>("Login page", HttpStatus.OK);
    }

    @GetMapping("/registration")
    public ResponseEntity<Person> registrationPage() {
        System.out.println("asd");
        return new ResponseEntity<>(new Person(), HttpStatus.OK);
    }



    /*
    {"id":1992,"fullName":"Abdu","yearOfBirth":1992,"password":"korea12","role":null}
     */
    @PostMapping("/registration")
    public ResponseEntity<String> performRegistration(@RequestBody Person person) {
        System.out.println("hello");
        registrationService.register(person);
        return new ResponseEntity<>("Registration successful", HttpStatus.CREATED);
    }
}
