package com.example.controller;

import com.example.model.BloodDonarModel;
import com.example.repo.DonarRepo;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.ArrayList;
import java.util.List;

@RestController
@RequestMapping
public class DonorController {

    private final DonarRepo donarRepo;


    @Autowired
    public DonorController(DonarRepo donarRepo) {
        this.donarRepo = donarRepo;
    }

    //Checked
    @GetMapping("/donor")
    List<BloodDonarModel> getDonor()
    {
        return donarRepo.findAll();
    }





    //Checked
    @PutMapping("/admin/donor/{id}")
    void updateDonar(@RequestBody BloodDonarModel donor)
    {
        donarRepo.save(donor);
    }

    //Checked
    @RequestMapping(value = "/donor/{group:\\bAB\\b[+-]|A[+-]|B[+-]|O[+-]}",method=RequestMethod.GET)
    List<BloodDonarModel> getDonorByGroup(@PathVariable("group") String group)
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
    BloodDonarModel getDonorByID(@PathVariable("id")  String id)
    {
        System.out.println("Coming to id");
        return donarRepo.findBloodDonarModelById(id);
    }


    //Checked
    @PostMapping("/admin/addDonor")
    void addDonar(@RequestBody BloodDonarModel donor)
    {
        donarRepo.save(donor);
    }

    @DeleteMapping("/admin/donor/{id}")
    void removeDonor(@PathVariable("id") String id)
    {
        donarRepo.deleteBloodDonarModelById(id);
    }


}
