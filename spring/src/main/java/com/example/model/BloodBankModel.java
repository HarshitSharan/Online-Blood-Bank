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

    public BloodBankModel()
    {

    }
    public BloodBankModel(String bloodBankID, String bloodGroup, String bloodPressure, String PHLevel, int quantity) {
        this.bloodBankID = bloodBankID;
        this.bloodGroup = bloodGroup;
        this.bloodPressure = bloodPressure;
        this.PHLevel = PHLevel;
        Quantity = quantity;
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
}
