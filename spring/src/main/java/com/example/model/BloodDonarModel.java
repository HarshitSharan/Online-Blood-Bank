package com.example.model;

import javax.persistence.Entity;
import javax.persistence.Id;
import java.io.Serializable;

@Entity
public class BloodDonarModel implements Serializable {


    @Id
    private String id;

    private String donarName;
    private String bloodGroup;
    private String PHLevel;
    private String bloodPressure;
    private boolean active;
    private int weight;
    private int age;
    private String phone;
    private String location;
    private boolean availability;

    public BloodDonarModel()
    {

    }

    public BloodDonarModel(String id, String donarName, String bloodGroup, String PHLevel, String bloodPressure, boolean active, int weight, int age, String phone, String location, boolean availability) {
        this.id = id;
        this.donarName = donarName;
        this.bloodGroup = bloodGroup;
        this.PHLevel = PHLevel;
        this.bloodPressure = bloodPressure;
        this.active = active;
        this.weight = weight;
        this.age = age;
        this.phone = phone;
        this.location = location;
        this.availability = availability;
    }

    public String getId() {
        return id;
    }

    public void setId(String id) {
        this.id = id;
    }

    public String getDonarName() {
        return donarName;
    }

    public void setDonarName(String donarName) {
        this.donarName = donarName;
    }

    public String getBloodGroup() {
        return bloodGroup;
    }

    public void setBloodGroup(String bloodGroup) {
        this.bloodGroup = bloodGroup;
    }

    public String getPHLevel() {
        return PHLevel;
    }

    public void setPHLevel(String PHLevel) {
        this.PHLevel = PHLevel;
    }

    public String getBloodPressure() {
        return bloodPressure;
    }

    public void setBloodPressure(String bloodPressure) {
        this.bloodPressure = bloodPressure;
    }

    public boolean isActive() {
        return active;
    }

    public void setActive(boolean active) {
        this.active = active;
    }

    public int getWeight() {
        return weight;
    }

    public void setWeight(int weight) {
        this.weight = weight;
    }

    public int getAge() {
        return age;
    }

    public void setAge(int age) {
        this.age = age;
    }

    public String getPhone() {
        return phone;
    }

    public void setPhone(String phone) {
        this.phone = phone;
    }

    public String getLocation() {
        return location;
    }

    public void setLocation(String location) {
        this.location = location;
    }

    public boolean isAvailability() {
        return availability;
    }

    public void setAvailability(boolean availability) {
        this.availability = availability;
    }
}
