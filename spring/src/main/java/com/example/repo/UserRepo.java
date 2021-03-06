package com.example.repo;

import com.example.model.UserModel;
import org.springframework.data.jpa.repository.JpaRepository;

public interface UserRepo extends JpaRepository<UserModel, String> {

    UserModel findUserModelByEmail(String email);
}
