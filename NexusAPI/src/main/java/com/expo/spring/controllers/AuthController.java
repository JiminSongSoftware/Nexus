    package com.expo.spring.controllers;

    import com.expo.spring.models.Person;
    import com.expo.spring.services.RegistrationService;
    import org.springframework.beans.factory.annotation.Autowired;
    import org.springframework.http.HttpStatus;
    import org.springframework.http.ResponseEntity;
    import org.springframework.web.bind.annotation.*;

    import java.sql.SQLOutput;

    @RestController
    @CrossOrigin(origins="http://localhost:4200")
    @RequestMapping("/auth")
    public class AuthController {
        private final RegistrationService registrationService;

        @Autowired
        public AuthController(RegistrationService registrationService) {
            this.registrationService = registrationService;
        }

        @PostMapping("/login")
        public ResponseEntity<String> loginPage() {
            System.out.println("Logging In...");
            return new ResponseEntity<>("Login page", HttpStatus.OK);
        }
        @CrossOrigin(origins="http://localhost:4200")
        @GetMapping("/registration")
        public ResponseEntity<Person> registrationPage() {
            System.out.println("Registering...");
            return new ResponseEntity<>(new Person(), HttpStatus.OK);
        }



        /*
        {"id":1992,"fullName":"Abdu","yearOfBirth":1992,"password":"korea12","role":null}
         */
        @CrossOrigin(origins="http://localhost:4200")
        @PostMapping("/registration")
        public ResponseEntity<String> performRegistration(@RequestBody Person person) {
            System.out.println("hello");
            registrationService.register(person);
            return new ResponseEntity<>("Registration successful", HttpStatus.CREATED);
        }
    }
