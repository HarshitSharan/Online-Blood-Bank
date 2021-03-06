package com.example.controller;

import com.example.model.BloodBankModel;
import com.example.model.BloodDonarModel;
import com.example.repo.BankRepo;
import com.example.repo.DonarRepo;
import org.apache.tomcat.jni.Local;
import org.springframework.beans.factory.annotation.Autowired;

import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.time.*;

@RestController


@RequestMapping
@CrossOrigin(origins="*") 
    

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
    public BloodBankModel getSampleById(@PathVariable("id") String id)
    {
        return bankRepo.findBloodBankModelByBloodBankID(id);
    }

    //Checked
    @RequestMapping(value = "/sample/{group:\\bAB\\b[+-]|A[+-]|B[+-]|O[+-]}",method=RequestMethod.GET)
    public BloodBankModel getSampleByGroup(@PathVariable("group") String group)
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
    public Boolean addBlood(@RequestBody BloodBankModel sample)
    {
        sample.setDateOfSubmission(LocalDate.now());
        bankRepo.save(sample);
        return true;
    }

    //Checked
    @GetMapping("/sample")
    public List<BloodBankModel> showBloodSample()
    {
        deleteOldSamples();
        return bankRepo.findAll();
    }

    //Checked
    @DeleteMapping("/admin/sample/{id}")
    public Boolean removeBloodSample(@PathVariable("id") String id)
    {
        bankRepo.deleteBloodBankModelByBloodBankID(id);
        return true;
    }

    //Checked
    @PutMapping("/admin/sample/{id}")
    public Boolean updateBloodSample(@RequestBody BloodBankModel sample) {

        sample.setDateOfSubmission(LocalDate.now());
        //bankRepo.findBloodBankModelByBloodBankID(sample.getBloodBankID()).getDateOfSubmission());
        bankRepo.save(sample);
        return true;

    }

    public void deleteOldSamples()
    {
        List<BloodBankModel> allSamples=bankRepo.findAll();

        LocalDate today=LocalDate.now();
        for(BloodBankModel sample:allSamples)
        {

            if (Duration.between(today.atStartOfDay(),sample.getDateOfSubmission().atStartOfDay()).toDays() >90 )
            {
                bankRepo.deleteBloodBankModelByBloodBankID(sample.getBloodBankID());
            }
        }
    }
}

