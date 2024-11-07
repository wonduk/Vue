package com.example.backend.common.controller;

import org.springframework.boot.web.servlet.error.ErrorController;
import org.springframework.web.bind.annotation.GetMapping;

public class WebErrorController implements ErrorController {
    @GetMapping("/error")
    public String redirctRoot() {
        return "index.html";
    }

    public String getErrorPath() {
        return "/error";
    }
}
