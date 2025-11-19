package com.example.demo.controller;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class HelloController {

    @GetMapping("/api/hello")
    public String hello() {
        return "Hello from Spring Boot!";
    }

    @GetMapping("/api/cpu")
    public String cpu() {
        long start = System.currentTimeMillis();
        while (System.currentTimeMillis() - start < 200) {
            Math.sqrt(Math.random() * 1000);
        }
        return "CPU endpoint done!";
    }
}
