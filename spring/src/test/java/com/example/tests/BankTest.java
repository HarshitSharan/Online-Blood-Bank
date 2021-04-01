package com.example.tests;

import com.example.controller.BloodBankController;
import com.example.model.BloodBankModel;
import com.example.repo.BankRepo;
import org.junit.Test;
import org.junit.runner.RunWith;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.boot.test.mock.mockito.MockBean;
import org.springframework.test.context.junit4.SpringRunner;
import org.springframework.web.bind.annotation.RequestBody;

import java.time.LocalDate;
import java.util.List;

import static org.junit.jupiter.api.Assertions.assertEquals;

import static org.junit.jupiter.api.Assertions.assertTrue;
import static org.mockito.Mockito.*;

@RunWith(SpringRunner.class)
@SpringBootTest
public class BankTest {

    @Autowired
    private BloodBankController bloodBankController;

    @MockBean
    private BankRepo bankRepo;

    @Test
    public void getSampleByIdTest()
    {
        BloodBankModel newSample=new BloodBankModel();
        newSample.setBloodBankID("1234");

        when(bankRepo.findBloodBankModelByBloodBankID("1234")).thenReturn(newSample);
        assertEquals(newSample,bloodBankController.getSampleById("1234"));
    }

    @Test
    public void getSampleByGroupTest()
    {
        BloodBankModel sampleOne=new BloodBankModel();
        sampleOne.setBloodGroup("B+");

        BloodBankModel sampleTwo=new BloodBankModel();
        sampleTwo.setBloodGroup("AB+");

        when(bankRepo.findAll()).thenReturn(List.of(sampleOne,sampleTwo));
        assertEquals(sampleTwo,bloodBankController.getSampleByGroup("AB+"));
    }
    @Test
    public void addBloodTest()
    {

        BloodBankModel newSample=new BloodBankModel();
        when(bankRepo.save(newSample)).thenReturn(newSample);
        assertTrue(bloodBankController.addBlood(newSample));
    }

    @Test
    public void showBloodSampleTest()
    {
        BloodBankModel sampleOne = new BloodBankModel();
        BloodBankModel sampleTwo = new BloodBankModel();
        BloodBankModel sampleThree = new BloodBankModel();

        sampleOne.setDateOfSubmission(LocalDate.now());
        sampleTwo.setDateOfSubmission(LocalDate.now());
        sampleThree.setDateOfSubmission(LocalDate.now());
        when(bankRepo.findAll()).thenReturn(List.of(sampleOne,sampleTwo,sampleThree));
        assertEquals(3,bloodBankController.showBloodSample().size());
    }

    @Test
    public void removeBloodSampleTest()
    {
        doNothing().when(bankRepo).deleteBloodBankModelByBloodBankID("1234");
        assertTrue(bloodBankController.removeBloodSample("1234"));
    }

    @Test
    public void updateBloodSampleTest()
    {
        BloodBankModel newSample=new BloodBankModel();
        newSample.setDateOfSubmission(LocalDate.now());
        when(bankRepo.save(newSample)).thenReturn(newSample);
        assertTrue(bloodBankController.updateBloodSample(newSample));

    }






}
