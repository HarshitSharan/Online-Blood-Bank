package com.example.tests;

import static org.junit.jupiter.api.Assertions.assertFalse;
import static org.junit.jupiter.api.Assertions.assertTrue;
import static org.mockito.Mockito.when;

import com.example.controller.SignupController;
import com.example.model.UserModel;
import com.example.repo.UserRepo;
import org.junit.Test;
import org.junit.runner.RunWith;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.boot.test.mock.mockito.MockBean;
import org.springframework.test.context.junit4.SpringRunner;

import java.util.stream.Stream;

@RunWith(SpringRunner.class)
@SpringBootTest
public class SignupTest {

    @Autowired
    private SignupController signupController;

    @MockBean
    private UserRepo userRepo;

    @Test
    public void saveUsersTest()
    {
        UserModel existingUser=new UserModel();
        UserModel newUser=new UserModel();

        existingUser.setEmail("anuraag@gmail.com");
        newUser.setEmail("new@gmail.com");

        when(userRepo.existsById("anuraag@gmail.com")).thenReturn(true);
        assertFalse(signupController.saveUser(existingUser));

        when(userRepo.existsById("new@gmail.com")).thenReturn(false);
        assertTrue(signupController.saveUser(newUser));


    }
}
