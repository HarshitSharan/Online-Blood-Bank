package com.example.repo;

import com.example.model.BloodBankModel;
import org.springframework.data.jpa.repository.JpaRepository;

import javax.transaction.Transactional;

public interface BankRepo extends JpaRepository<BloodBankModel,String> {

    @Transactional
    void deleteBloodBankModelByBloodBankID(String bloodBankID);

    @Transactional
    BloodBankModel findBloodBankModelByBloodBankID(String id);
}
