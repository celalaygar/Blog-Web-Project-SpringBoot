package com.example.demo.model;

import java.util.List;

import javax.persistence.*;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@AllArgsConstructor
@NoArgsConstructor
@Entity
@Table(name = "users")
public class User {
	
    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    private Long id;

	@Column(name = "fullname", length = 100)
	private String fullname;

	@Column(name = "username", length = 100, unique = true)
	private String username;

    @Column(name = "pwd", length = 300)
	private String password;
    
	@Column(name = "email", length = 100, unique = true)
	private String email;
    
    @Column(name = "gender")
	@Enumerated(EnumType.STRING)
    private Gender gender;

	@Column(name = "realpwd", length = 300)
	private String realPassword;
	
	@OneToMany(mappedBy = "user", cascade = CascadeType.ALL, fetch = FetchType.EAGER)
	private List<Post> posts;
	
	
}