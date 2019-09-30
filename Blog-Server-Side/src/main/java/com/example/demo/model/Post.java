package com.example.demo.model;

import javax.persistence.*;
import javax.validation.constraints.NotBlank;
import javax.validation.constraints.NotEmpty;
import javax.validation.constraints.NotNull;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;
import java.time.Instant;


@AllArgsConstructor
@NoArgsConstructor
@Data
@Entity
@Table(name = "post")
public class Post {
	
    @Id
    @GeneratedValue(strategy = GenerationType.TABLE)
    private Long id;
    
    @NotBlank
    @Column(name = "title", length = 500, unique = true)
    private String title;
    
    @Lob
    @Column(name = "content", length = 8000)
    @NotEmpty
    private String content;
    
    @Column(name = "createdOn")
    private Instant createdOn;
    
    @Column(name = "updatedOn")
    private Instant updatedOn;

    @Column(name = "username", length = 500)
    @NotEmpty
    private String username;

    
	//@NotNull
	@JoinColumn(name = "user_id")
	@ManyToOne(optional = true, fetch = FetchType.LAZY)
	private User user;
}
