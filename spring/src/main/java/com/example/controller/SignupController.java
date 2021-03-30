package com.example.controller;


import com.example.model.UserModel;
import com.example.repo.UserRepo;
import org.springframework.beans.factory.annotation.Autowired;

import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/signup")
public class SignupController {
    private final UserRepo userRepo;

    @Autowired
    public SignupController(UserRepo userRepo) {
        this.userRepo = userRepo;
    }




    @PostMapping
    public boolean saveUser(@RequestBody UserModel newuser)
    {
        if (userRepo.existsById(newuser.getEmail()))
            return false;
        else
            userRepo.save(newuser);


        return true;

    }
}
