package com.example.model;


import javax.persistence.Id;
import javax.persistence.Entity;
import javax.persistence.Table;

import java.io.Serializable;

@Entity
@Table(name="bbusers")
public class UserModel implements Serializable {

    @Id
    private String email;
    private String password;
    private String mobileNumber;
    private boolean active;
    private String role;

    public UserModel()
    {

    }
    public UserModel(String email, String password, String mobileNumber, boolean active, String role) {
        this.email = email;
        this.password = password;
        this.mobileNumber = mobileNumber;
        this.active = active;
        this.role = role;
    }

    public String getEmail() {
        return email;
    }

    public void setEmail(String email) {
        this.email = email;
    }

    public String getPassword() {
        return password;
    }

    public void setPassword(String password) {
        this.password = password;
    }

    public String getMobileNumber() {
        return mobileNumber;
    }

    public void setMobileNumber(String mobileNumber) {
        this.mobileNumber = mobileNumber;
    }

    public boolean isActive() {
        return active;
    }

    public void setActive(boolean active) {
        this.active = active;
    }

    public String getRole() {
        return role;
    }

    public void setRole(String role) {
        this.role = role;
    }
}
