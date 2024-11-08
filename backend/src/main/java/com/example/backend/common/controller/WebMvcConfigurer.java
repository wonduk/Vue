// package com.example.backend.common.controller;

// import org.springframework.context.annotation.Bean;
// import org.springframework.web.servlet.config.annotation.CorsRegistry;
// import org.springframework.web.servlet.config.annotation.WebMvcConfigurer;

// @Bean
// public WebMvcConfigurer corsConfigurer() {
//     return new WebMvcConfigurer() {
//         @Override
//         public void addCorsMappings(CorsRegistry registry) {
//             registry.addMapping("/**")
//                     .allowedOrigins("http://localhost:8082") // Vue 서버 주소
//                     .allowedMethods("GET", "POST", "PUT", "DELETE", "OPTIONS")
//                     .allowedHeaders("*");
//         }
//     };
// }