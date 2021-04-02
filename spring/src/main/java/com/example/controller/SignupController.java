package com.example.controller;


import com.example.model.UserModel;
import com.example.repo.UserRepo;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;


@RestController
<<<<<<< HEAD
@RequestMapping("/signup")
@CrossOrigin(origins="*") 
=======
@CrossOrigin
@RequestMapping
>>>>>>> fcc2ce447bc767c21ddde01aca079152b7627d94
public class SignupController {
    private final UserRepo userRepo;

    @Autowired
    public SignupController(UserRepo userRepo) {
        this.userRepo = userRepo;
    }




    @PostMapping("/signup")
    public boolean saveUser(@RequestBody UserModel newuser)
    {

        PasswordEncoder passwordEncoder=new BCryptPasswordEncoder();

        newuser.setPassword(passwordEncoder.encode(newuser.getPassword()));



        if (userRepo.existsById(newuser.getEmail()))
            return false;
        else
            userRepo.save(newuser);


        return true;

    }


}
