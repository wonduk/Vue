package com.example.backend.test.controller;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;


@RestController
@RequestMapping("/grid")
public class GridController {

    @GetMapping("/test")
    public String test() {
        return "/grid/gird.html";
    }
    
}
