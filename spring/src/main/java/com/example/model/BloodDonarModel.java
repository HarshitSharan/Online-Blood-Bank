package com.example.model;

import javax.persistence.Entity;
import javax.persistence.Id;
import java.io.Serializable;

@Entity
public class BloodDonarModel implements Serializable {


    @Id
    private String id;

    private UserModel donarName;
    private String bloodGroup;
    private String PHLevel;
    private String bloodPressure;
    private boolean active;

    public BloodDonarModel()
    {

    }
    public BloodDonarModel(String id, UserModel donarName, String bloodGroup, String PHLevel, String bloodPressure, boolean active) {
        this.id = id;
        this.donarName = donarName;
        this.bloodGroup = bloodGroup;
        this.PHLevel = PHLevel;
        this.bloodPressure = bloodPressure;
        this.active = active;
    }

    public String getId() {
        return id;
    }

    public void setId(String id) {
        this.id = id;
    }

    public UserModel getDonarName() {
        return donarName;
    }

    public void setDonarName(UserModel donarName) {
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
}
