package com.example.skautSluzba.repository;

import com.example.skautSluzba.model.Game;
import com.example.skautSluzba.model.Statistic;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface GameRepository extends JpaRepository<Game, Long> {
    List<Game> findByStatisticId(Long statisticId);
}