package com.example.controller;

import com.example.model.BloodBankModel;
import com.example.model.BloodDonarModel;
import com.example.repo.BankRepo;
import com.example.repo.DonarRepo;
import org.springframework.beans.factory.annotation.Autowired;

import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping
public class BloodBankController {
    private final BankRepo bankRepo;
    private final DonarRepo donarRepo;


    @Autowired
    public BloodBankController(BankRepo bankRepo, DonarRepo donarRepo) {
        this.bankRepo = bankRepo;
        this.donarRepo = donarRepo;
    }

    //Cehcked
    @RequestMapping(value = "/sample/{id:[a-zA-Z0-9]+}",method=RequestMethod.GET)
    BloodBankModel getSampleById(@PathVariable("id") String id)
    {
        return bankRepo.findBloodBankModelByBloodBankID(id);
    }

    //Checked
    @RequestMapping(value = "/sample/{group:\\bAB\\b[+-]|A[+-]|B[+-]|O[+-]}",method=RequestMethod.GET)
    BloodBankModel getSampleByGroup(@PathVariable("group") String group)
    {
        List<BloodBankModel> allList=bankRepo.findAll();

        for(BloodBankModel i:allList)
        {
            if (i.getBloodGroup().equals(group))
                return i;
        }

        return new BloodBankModel();
    }

    //Checked
    @PostMapping("/admin/addSample")
    void addBlood(@RequestBody String id)
    {
        List<BloodDonarModel> allList = donarRepo.findAll();

        for(BloodDonarModel donors: allList)
        {

            if (donors.getId().equals(id))
            {
                bankRepo.save(new BloodBankModel(donors.getId(),donors.getBloodGroup(),donors.getBloodPressure(),donors.getPHLevel(),1));

                break;
            }

        }
    }

    //Checked
    @GetMapping("/sample")
    List<BloodBankModel> showBloodSample()
    {
        return bankRepo.findAll();
    }

    //Checked
    @DeleteMapping("/admin/sample/{id}")
    void removeBloodSample(@PathVariable("id") String id)
    {
        bankRepo.deleteBloodBankModelByBloodBankID(id);
    }

    //Checked
    @PutMapping("/admin/sample/{id}")
    void updateBloodSample(@PathVariable("id") String id)
    {

        List<BloodDonarModel> allList = donarRepo.findAll();

        for(BloodDonarModel donors: allList)
        {

            if (donors.getId().equals(id))
            {
                bankRepo.save(new BloodBankModel(donors.getId(),donors.getBloodGroup(),donors.getBloodPressure(),donors.getPHLevel(),1));

                break;
            }

        }

    }
}

