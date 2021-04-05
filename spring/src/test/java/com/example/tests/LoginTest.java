package com.example.tests;

import static org.junit.jupiter.api.Assertions.assertFalse;
import static org.junit.jupiter.api.Assertions.assertTrue;
import static org.mockito.Mockito.when;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;

import com.example.controller.LoginController;
import com.example.model.LoginModel;
import com.example.model.UserModel;
import com.example.repo.UserRepo;
import org.junit.Test;
import org.junit.runner.RunWith;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.boot.test.mock.mockito.MockBean;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.test.context.junit4.SpringRunner;

import java.util.List;

@RunWith(SpringRunner.class)
@SpringBootTest
public class LoginTest {

    @Autowired
    private LoginController loginController;

    @MockBean
    private UserRepo userRepo;


    @Test
    public void checkUserTest()
    {
        LoginModel correctLogin = new LoginModel("anuraag@gmail.com","abcd");
        LoginModel wrongLogin =  new LoginModel("fake@gmail.com","none");

        UserModel userOne=new UserModel();
        UserModel userTwo=new UserModel();
        PasswordEncoder passwordEncoder=new BCryptPasswordEncoder();

        userOne.setEmail("anuraag@gmail.com");
        userOne.setPassword(passwordEncoder.encode("abcd"));

        userTwo.setEmail("harshit@gmail.com");
        userTwo.setPassword(passwordEncoder.encode("5678"));


        when(userRepo.findAll()).thenReturn(List.of(userOne,userTwo));
        assertTrue(loginController.checkUser(correctLogin));

        when(userRepo.findAll()).thenReturn(List.of(userOne,userTwo));
        assertFalse(loginController.checkUser(wrongLogin));


    }

}
