package com.example.skautSluzba.controller;

import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@CrossOrigin
@RestController
@RequestMapping("/api/v1")
public class ProbaController {


    @GetMapping("/boats")
    public void getAllBoats() {
        System.out.println("EEEEJ");
    }
}
