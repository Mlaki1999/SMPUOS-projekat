package com.example.skautSluzba.service;

import com.example.skautSluzba.model.Statistic;
import com.example.skautSluzba.repository.StatisticRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class StatisticService {
    @Autowired
    private StatisticRepository statisticRepository;

    public Statistic createStatistic(Statistic statistic) { return statisticRepository.save(statistic); }

    public Statistic updateStatistic(Statistic statistic) {
        return statisticRepository.save(statistic);
    }

    public void deleteStatistic(Long id) {
        statisticRepository.deleteById(id);
    }

    public Statistic getStatisticById(Long id) {
        return statisticRepository.findById(id).orElse(null);
    }


    public List<Statistic> getStatisticsByPlayerId(Long playerId) {
        return statisticRepository.findByPlayerId(playerId);
    }
    public List<Statistic> getAllStatistics() {
        return statisticRepository.findAll();
    }
}