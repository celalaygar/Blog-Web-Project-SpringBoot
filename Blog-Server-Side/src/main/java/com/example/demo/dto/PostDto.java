package com.example.demo.dto;

import java.time.Instant;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@AllArgsConstructor
@NoArgsConstructor
@Data
public class PostDto {

    private Long id;
    private String content;
    private String title;
    private String username;
    private Instant createdOn;
    
}
