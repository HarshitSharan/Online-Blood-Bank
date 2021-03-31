package com.example.tests;
import com.example.controller.DonorController;
import com.example.model.BloodDonarModel;
import com.example.repo.DonarRepo;
import org.junit.Test;
import org.junit.runner.RunWith;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.boot.test.mock.mockito.MockBean;
import org.springframework.test.context.junit4.SpringRunner;

import java.util.List;

import static org.junit.jupiter.api.Assertions.assertEquals;
import static org.junit.jupiter.api.Assertions.assertTrue;
import static org.mockito.Mockito.*;


@RunWith(SpringRunner.class)
@SpringBootTest
public class DonorTest {

    @Autowired
    private DonorController donorController;

    @MockBean
    private DonarRepo donarRepo;

    @Test
    public void getDonorTest()
    {
        when(donarRepo.findAll()).thenReturn(
                List.of(new BloodDonarModel(),new BloodDonarModel(),new BloodDonarModel(), new BloodDonarModel())

        );
        assertEquals(4,donorController.getDonor().size());
    }

    @Test
    public void updateDonorTest()
    {
        BloodDonarModel newDonor=new BloodDonarModel();
        when(donarRepo.save(newDonor)).thenReturn(newDonor);
        assertTrue(donorController.updateDonar(newDonor));
    }

    @Test
    public void getDonorByGroupTest()
    {
        BloodDonarModel newDonor= new BloodDonarModel();
        BloodDonarModel donorTwo = new BloodDonarModel();

        newDonor.setBloodGroup("A+");
        donorTwo.setBloodGroup("B+");
        when(donarRepo.findAll()).thenReturn(List.of(newDonor,donorTwo));


       assertEquals(List.of(newDonor),donorController.getDonorByGroup("A+"));


    }

    @Test
    public void getDonorByIDTest()
    {
        BloodDonarModel newDonor= new BloodDonarModel();
        BloodDonarModel donorTwo = new BloodDonarModel();

        newDonor.setId("1234");
        donorTwo.setId("5678");
        when(donarRepo.findBloodDonarModelById("1234")).thenReturn(newDonor);


        assertEquals(newDonor,donorController.getDonorByID("1234"));
    }

    @Test
    public void addDonorTest()
    {
        BloodDonarModel newDonor=new BloodDonarModel();
        when(donarRepo.save(newDonor)).thenReturn(newDonor);
        assertTrue(donorController.addDonar(newDonor));
    }



    @Test
    public void removeDonorTest()
    {
        doNothing().when(donarRepo).deleteBloodDonarModelById("1234");
        assertTrue(donorController.removeDonor("1234"));
    }


}
