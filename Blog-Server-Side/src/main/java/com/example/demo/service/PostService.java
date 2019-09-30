package com.example.demo.service;

import java.time.Instant;
import java.util.Arrays;
import java.util.List;
import java.util.Optional;

import org.modelmapper.ModelMapper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import com.example.demo.dto.PostDto;
import com.example.demo.exception.PostNotFoundException;
import com.example.demo.exception.UserNotFoundException;
import com.example.demo.model.Post;
import com.example.demo.model.User;
import com.example.demo.repository.PostRepository;
import com.example.demo.repository.UserRepository;

@Service
public class PostService {

	@Autowired
	private PostRepository postRepository;
	@Autowired
	private AuthService authService;
	@Autowired
	private UserRepository userRepository;
	@Autowired
	private ModelMapper modelMapper;

	@Transactional
	public Boolean save(PostDto postDto) {
		Post post = modelMapper.map(postDto, Post.class);
		org.springframework.security.core.userdetails.User username = authService.getCurrentUser()
				.orElseThrow(() -> new IllegalArgumentException("not User Logged in."));
		post.setUsername(username.getUsername());
		Optional<User> user = userRepository.findByUsername(username.getUsername());
		post.setUser(user.get());
		post.setCreatedOn(Instant.now());
		postRepository.save(post);
		return true;
	}

	
	public List<PostDto> getAll() {
		List<Post> posts = postRepository.findAll();
		PostDto[] postDtos = modelMapper.map(posts, PostDto[].class);
		return Arrays.asList(postDtos);
	}

	@Transactional
	public PostDto getById(Long id) {
		Optional<Post> post = postRepository.findById(id);
		if (!post.isPresent()) {
			throw new PostNotFoundException("Post not found with " + id);
		}
		PostDto postDto = modelMapper.map(post.get(), PostDto.class);
		return postDto;
	}

}
