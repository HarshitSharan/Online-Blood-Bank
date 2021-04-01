package com.example.controller;

import com.example.model.BloodDonarModel;
import com.example.repo.DonarRepo;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.ArrayList;
import java.util.List;

@RestController
@CrossOrigin
@RequestMapping
public class DonorController {

    private final DonarRepo donarRepo;


    @Autowired
    public DonorController(DonarRepo donarRepo) {
        this.donarRepo = donarRepo;
    }

    //Checked
    @GetMapping("/donor")
    public List<BloodDonarModel> getDonor()
    {
        return donarRepo.findAll();
    }





    //Checked
    @PutMapping("/admin/donor/{id}")
    public Boolean updateDonar(@RequestBody BloodDonarModel donor)
    {
        donarRepo.save(donor);
        return true;
    }

    //Checked
    @RequestMapping(value = "/donor/{group:\\bAB\\b[+-]|A[+-]|B[+-]|O[+-]}",method=RequestMethod.GET)
    public List<BloodDonarModel> getDonorByGroup(@PathVariable("group") String group)
    {


        List<BloodDonarModel> selectList=new ArrayList<>();

        List<BloodDonarModel> allList=donarRepo.findAll();

        for(BloodDonarModel i: allList)
        {
            if (i.getBloodGroup().equals(group))
                selectList.add(i);
        }

        return selectList;

    }

    //Checked
    @RequestMapping(value = "/donor/{id:[a-zA-Z0-9]+}",method=RequestMethod.GET)
    public BloodDonarModel getDonorByID(@PathVariable("id")  String id)
    {

        return donarRepo.findBloodDonarModelById(id);
    }


    //Checked
    @PostMapping("/admin/addDonor")
    public Boolean addDonar(@RequestBody BloodDonarModel donor)
    {
        donarRepo.save(donor);
        return true;
    }

    @DeleteMapping("/admin/donor/{id}")
    public Boolean removeDonor(@PathVariable("id") String id)
    {
        donarRepo.deleteBloodDonarModelById(id);
        return true;
    }


}
