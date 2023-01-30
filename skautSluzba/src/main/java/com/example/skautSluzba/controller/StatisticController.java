package com.example.skautSluzba.controller;

import com.example.skautSluzba.model.Statistic;
import com.example.skautSluzba.service.StatisticService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@CrossOrigin
@RestController
@RequestMapping("/statistics")
public class StatisticController {

    @Autowired
    private StatisticService statisticService;

    @PostMapping
    public ResponseEntity<Statistic> createStatistic(@RequestBody Statistic statistic) {
        statistic = statisticService.createStatistic(statistic);
        return new ResponseEntity<>(statistic, HttpStatus.CREATED);
    }

    @PutMapping("/{id}")
    public ResponseEntity<Statistic> updateStatistic(@PathVariable Long id, @RequestBody Statistic statistic) {
        statistic.setId(id);
        statistic = statisticService.updateStatistic(statistic);
        return new ResponseEntity<>(statistic, HttpStatus.OK);
    }

    @DeleteMapping("/{id}")
    public ResponseEntity<Void> deleteStatistic(@PathVariable Long id) {
        statisticService.deleteStatistic(id);
        return new ResponseEntity<>(HttpStatus.NO_CONTENT);
    }

    @GetMapping("/{id}")
    public ResponseEntity<Statistic> getStatisticById(@PathVariable Long id) {
        Statistic statistic = statisticService.getStatisticById(id);
        return new ResponseEntity<>(statistic, HttpStatus.OK);
    }

    @GetMapping
    public ResponseEntity<List<Statistic>> getAllStatistics() {
        List<Statistic> statistics = statisticService.getAllStatistics();
        return new ResponseEntity<>(statistics, HttpStatus.OK);
    }

}