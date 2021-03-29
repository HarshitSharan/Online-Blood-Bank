package com.example.controller;

import com.example.model.LoginModel;
import com.example.model.UserModel;
import com.example.repo.UserRepo;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RestController
@RequestMapping("/login")
public class LoginController {
    private final UserRepo userRepo;

    @Autowired
    public LoginController(UserRepo userRepo) {
        this.userRepo = userRepo;
    }


    @PostMapping
    public boolean checkUser(@RequestBody LoginModel newLogin)
    {
        List<UserModel> allusers= userRepo.findAll();

        for (UserModel alluser : allusers)
        {

            if (alluser.getEmail().equals(newLogin.getEmail()) && alluser.getPassword().equals(newLogin.getPassword()))
                return true;
        }

        return false;
    }
}
