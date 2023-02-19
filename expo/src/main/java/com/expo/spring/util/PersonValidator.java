package com.expo.spring.util;

import com.expo.spring.models.Person;
import com.expo.spring.services.PeopleService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Component;
import org.springframework.validation.Errors;
@Component

public class PersonValidator {
    private final PeopleService peopleService;

    @Autowired
    public PersonValidator(PeopleService peopleService) {
        this.peopleService = peopleService;
    }


    public boolean supports(Class<?> aClass) {
        return Person.class.equals(aClass);
    }


    public void validate(Object o, Errors errors) {
        Person person = (Person) o;

        if (peopleService.getPersonByFullName(person.getFullName()).isPresent())
            errors.rejectValue("fullName", "", "There is a person with the same name ");
    }
}
