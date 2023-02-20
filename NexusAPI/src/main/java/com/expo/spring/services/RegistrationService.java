package com.expo.spring.services;

import com.expo.spring.models.Person;
import com.expo.spring.repositories.PeopleRepository;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;


@Service
public class RegistrationService {
    private final PeopleRepository people1Repository;
    private final PasswordEncoder passwordEncoder;

    public RegistrationService(PeopleRepository people1Repository, PasswordEncoder passwordEncoder) {
        this.people1Repository = people1Repository;
        this.passwordEncoder = passwordEncoder;
    }
    @Transactional
    public void register(Person person) {
        person.setPassword(passwordEncoder.encode(person.getPassword()));
        person.setRole("ROLE_USER");
        people1Repository.save(person);
    }
}
