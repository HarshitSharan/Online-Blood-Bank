package com.example.model;


import javax.persistence.Entity;
import javax.persistence.Id;
import java.io.Serializable;

@Entity
public class BloodBankModel implements Serializable {

    @Id
    private String bloodBankID;

    private String bloodGroup;
    private String bloodPressure;
    private String PHLevel;
    private int Quantity;
    private String Date; //DDMMYYYY
    private String mobileNumber;
    private String location;
    private Boolean availability;


    public BloodBankModel()
    {

    }

    public BloodBankModel(String bloodBankID, String bloodGroup, String bloodPressure, String PHLevel, int quantity, String date, String mobileNumber, String location, Boolean availability) {
        this.bloodBankID = bloodBankID;
        this.bloodGroup = bloodGroup;
        this.bloodPressure = bloodPressure;
        this.PHLevel = PHLevel;
        Quantity = quantity;
        Date = date;

        this.mobileNumber = mobileNumber;
        this.location = location;
        this.availability = availability;
    }

    public String getBloodBankID() {
        return bloodBankID;
    }

    public void setBloodBankID(String bloodBankID) {
        this.bloodBankID = bloodBankID;
    }

    public String getBloodGroup() {
        return bloodGroup;
    }

    public void setBloodGroup(String bloodGroup) {
        this.bloodGroup = bloodGroup;
    }

    public String getBloodPressure() {
        return bloodPressure;
    }

    public void setBloodPressure(String bloodPressure) {
        this.bloodPressure = bloodPressure;
    }

    public String getPHLevel() {
        return PHLevel;
    }

    public void setPHLevel(String PHLevel) {
        this.PHLevel = PHLevel;
    }

    public int getQuantity() {
        return Quantity;
    }

    public void setQuantity(int quantity) {
        Quantity = quantity;
    }

    public String getDate() {
        return Date;
    }

    public void setDate(String date) {
        Date = date;
    }

    public String getMobileNumber() {
        return mobileNumber;
    }

    public void setMobileNumber(String mobileNumber) {
        this.mobileNumber = mobileNumber;
    }

    public String getLocation() {
        return location;
    }

    public void setLocation(String location) {
        this.location = location;
    }

    public Boolean getAvailability() {
        return availability;
    }

    public void setAvailability(Boolean availability) {
        this.availability = availability;
    }
}
