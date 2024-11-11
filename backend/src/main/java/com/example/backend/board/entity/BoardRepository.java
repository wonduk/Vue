package com.example.backend.board.entity;

import org.springframework.data.jpa.repository.JpaRepository;
import com.example.backend.board.web.dtos.BoardDto;

import java.util.List;

public interface BoardRepository extends JpaRepository<BoardEntity, Long> {
    List<BoardEntity> findAllByOrderByIdxDesc();
}