package com.example.demo.api;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.example.demo.dto.PostDto;
import com.example.demo.service.PostService;
import com.example.demo.util.ApiPaths;

@RestController
@RequestMapping(ApiPaths.PostCtrl.CTRL)
public class PostController {
	@Autowired
	private PostService postService;

	// localhost:8182/api/post
	@PostMapping("/add-post")
	public ResponseEntity<Boolean> createPost(@RequestBody PostDto postDto) {
		return ResponseEntity.ok(postService.save(postDto));
	}

	// localhost:8182/api/post/all
	@GetMapping("/post/all")
	public ResponseEntity<List<PostDto>> createPost() {
		return ResponseEntity.ok(postService.getAll());
	}

	// localhost:8182/api/get/{id}
	@GetMapping("/post/get/{id}")
	public ResponseEntity<PostDto> createPost(@PathVariable Long id) {
		return ResponseEntity.ok(postService.getById(id));
	}
}
