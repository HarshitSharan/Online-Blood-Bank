package com.example.repo;

import com.example.model.BloodDonarModel;
import org.springframework.data.jpa.repository.JpaRepository;

import javax.transaction.Transactional;

public interface DonarRepo extends JpaRepository<BloodDonarModel,String> {


    @Transactional
    BloodDonarModel findBloodDonarModelById(String id);

    @Transactional
    void deleteBloodDonarModelById(String id);
}
