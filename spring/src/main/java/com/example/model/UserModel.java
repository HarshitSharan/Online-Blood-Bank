package com.example.model;


import javax.persistence.Id;
import javax.persistence.Entity;


import java.io.Serializable;

@Entity
public class UserModel implements Serializable {


    private String FirstName;
    private String LastName;

    @Id
    private String email;
    private String password;
    private String mobileNumber;
    private boolean active;
    private String role;

    public UserModel()
    {

    }

    public UserModel(String firstName, String lastName, String email, String password, String mobileNumber, boolean active, String role) {
        FirstName = firstName;
        LastName = lastName;
        this.email = email;
        this.password = password;
        this.mobileNumber = mobileNumber;
        this.active = active;
        this.role = role;
    }

    public String getFirstName() {
        return FirstName;
    }

    public void setFirstName(String firstName) {
        FirstName = firstName;
    }

    public String getLastName() {
        return LastName;
    }

    public void setLastName(String lastName) {
        LastName = lastName;
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
