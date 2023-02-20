    package com.expo.spring.controllers;

    import io.jsonwebtoken.Jwts;
    import io.jsonwebtoken.SignatureAlgorithm;
    import com.expo.spring.models.Person;
    import com.expo.spring.services.RegistrationService;
    import org.slf4j.Logger;
    import org.slf4j.LoggerFactory;
    import org.springframework.beans.factory.annotation.Autowired;
    import org.springframework.http.HttpStatus;
    import org.springframework.http.ResponseEntity;
    import org.springframework.security.authentication.AuthenticationManager;
    import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
    import org.springframework.security.core.Authentication;
    import org.springframework.security.core.AuthenticationException;
    import org.springframework.security.core.userdetails.UserDetails;
    import org.springframework.security.core.userdetails.UserDetailsService;
    import org.springframework.security.core.userdetails.UsernameNotFoundException;
    import org.springframework.security.crypto.password.PasswordEncoder;
    import org.springframework.web.bind.annotation.*;


    import javax.servlet.http.HttpServletResponse;
    import java.util.Date;
    import java.util.HashMap;
    import java.util.Map;

    @RestController
    @CrossOrigin(origins="http://localhost:4200")
    @RequestMapping("/auth")
    public class AuthController {
        private static final Logger logger = LoggerFactory.getLogger(AuthController.class);

        private final RegistrationService registrationService;

        @Autowired
        private AuthenticationManager authenticationManager;

        @Autowired
        private UserDetailsService userDetailsService;

        @Autowired
        private PasswordEncoder passwordEncoder;



        public AuthController(RegistrationService registrationService) {
            this.registrationService = registrationService;
        }

        @PostMapping("/login")
        public ResponseEntity<Map<String, String>> login(@RequestBody Map<String, String> credentials, HttpServletResponse response) {
            String email = credentials.get("email");
            String password = credentials.get("password");
            logger.info("Received request with email: {} and password: {}", email, password);

            Authentication authentication;
            try {
                authentication = new UsernamePasswordAuthenticationToken(email, password);
                authentication = authenticationManager.authenticate(authentication);
            } catch (AuthenticationException e) {
                return new ResponseEntity<>(HttpStatus.UNAUTHORIZED);
            } catch (Exception e) {
                System.out.println(e);
                return new ResponseEntity<>(HttpStatus.INTERNAL_SERVER_ERROR);
            }

            // Encode the password and compare with the encoded password in the database
            UserDetails userDetails = userDetailsService.loadUserByUsername(email);
            logger.error("User details: {}", userDetails.toString());
            if (!passwordEncoder.matches(password, userDetails.getPassword())) {
                logger.error("Failed to authenticate user {} with error: password does not match", email);
                return new ResponseEntity<>(HttpStatus.UNAUTHORIZED);
            } else {
                logger.error("Authenticate user {} password matched!", email);
            }
            String token = Jwts.builder()
                    .setSubject(email)
                    .setIssuedAt(new Date())
                    .setExpiration(new Date(System.currentTimeMillis() + 86400000))
                    .signWith(SignatureAlgorithm.HS512, "secret-key")
                    .compact();

            // Log token generation
            System.out.println("Token generated for user " + email + ": " + token);

            Map<String, String> responseMap = new HashMap<>();
            responseMap.put("token", token);

            // Log successful response
            System.out.println("Sending response for user " + email);

            return new ResponseEntity<>(responseMap, HttpStatus.OK);
        }

        @CrossOrigin(origins = "http://localhost:4200")
        @GetMapping("/registration")
        public ResponseEntity<Person> registrationPage() {
            System.out.println("Registering...");
            return ResponseEntity.ok(new Person());
        }

        @PostMapping("/registration")
        public ResponseEntity<String> registration(@RequestBody Person person) {
            try {
                registrationService.register(person);
                return ResponseEntity.status(HttpStatus.CREATED).body("Registration successful");
            } catch (Exception e) {
                return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR).body("Registration failed");
            }
        }
    }


