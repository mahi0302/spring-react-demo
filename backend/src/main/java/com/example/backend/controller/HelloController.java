package com.example.backend.controller;

import org.springframework.web.bind.annotation.*;
import java.util.ArrayList;
import java.util.List;

@CrossOrigin(origins = "http://localhost:3000")
@RestController
public class HelloController {

    private List<String> employeeList = new ArrayList<>(List.of("John", "Alice", "Bob"));

    @GetMapping("/api/hello")
    public String hello() {
        return "Hello from Spring Boot!";
    }

    @GetMapping("/api/employees")
    public List<String> getEmployees() {
        return employeeList;
    }

    @PostMapping("/api/employees")
    public void addEmployee(@RequestBody String name) {
        employeeList.add(name.replace("\"", ""));
    }
}
