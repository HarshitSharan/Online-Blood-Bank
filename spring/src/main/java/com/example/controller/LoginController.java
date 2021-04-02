package com.example.controller;


import com.example.model.LoginModel;
import com.example.model.UserModel;
import com.example.repo.UserRepo;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@CrossOrigin
@RequestMapping

public class LoginController {
    private final UserRepo userRepo;

    @Autowired
    public LoginController(UserRepo userRepo) {
        this.userRepo = userRepo;
    }


    @PostMapping("/login")
    public boolean checkUser(@RequestBody LoginModel newLogin)
    {
        List<UserModel> allusers= userRepo.findAll();

        for (UserModel alluser : allusers)
        {

            if (alluser.getEmail().equals(newLogin.getEmail()) && alluser.getPassword().equals(newLogin.getPassword()))
            {

                alluser.setActive(true);
                userRepo.save(alluser);
                return true;
            }
        }

        return false;
    }

    @GetMapping("/UserDetails/{email}")
    public UserModel sendUserDetails(@PathVariable("email") String email)
    {
        UserModel userModel=userRepo.findUserModelByEmail(email);
        userModel.setPassword(null); //Password not required

        return userModel;

    }

    @PutMapping("/logout")
    public Boolean logoutUser(@RequestBody String email)
    {
        UserModel userModel =userRepo.findUserModelByEmail(email);
        userModel.setActive(false);
        userRepo.save(userModel);

        return true;
    }





}
