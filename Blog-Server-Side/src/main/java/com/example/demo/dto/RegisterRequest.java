package com.example.demo.dto;

import com.example.demo.model.Gender;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@AllArgsConstructor
@NoArgsConstructor
@Data
public class RegisterRequest {
	
    private String fullname;
    private String username;
    private String email;
    private String password;
    private Gender gender;
    
}
