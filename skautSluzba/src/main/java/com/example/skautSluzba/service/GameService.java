package com.example.skautSluzba.service;

import com.example.skautSluzba.handleExceptions.EntityNotFoundException;
import com.example.skautSluzba.model.Game;
import com.example.skautSluzba.model.Statistic;
import com.example.skautSluzba.repository.GameRepository;
import com.example.skautSluzba.repository.StatisticRepository;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class GameService {

    private final GameRepository gameRepository;
    private final StatisticRepository statisticRepository;

    public GameService(GameRepository gameRepository, StatisticRepository statisticRepository) {
        this.gameRepository = gameRepository;
        this.statisticRepository = statisticRepository;
    }

    public Game createGame(Game game) {
        Statistic statistic = statisticRepository.findById(game.getStatistic().getId()).orElseThrow(() -> new EntityNotFoundException("Statistic not found"));
//        Game game = new Game(offensiveRebounds, defensiveRebounds, assists, turnovers, steals, blocks, personalFouls, statistic);
//        statistic.updateStatistic(game);
        System.out.println("HERE 1");
        statistic.updateStatisticWithNewGame(game);
        System.out.println("HERE 2");
        statisticRepository.save(statistic);
        System.out.println("HERE 3");
        return gameRepository.save(game);
    }

    public Game getGameById(Long id) {
        return gameRepository.findById(id).orElseThrow(() -> new EntityNotFoundException("Game not found"));
    }

    public List<Game> getAllGames() {
        return gameRepository.findAll();
    }

    public Game updateGame(Long id, Game game) {
        Game gameBeforeUpdate = gameRepository.findById(id).orElseThrow(() -> new EntityNotFoundException("Game not found"));
//        game.setOffensiveRebounds(gameDto.getOffensiveRebounds());
//        game.setDefensiveRebounds(gameDto.getDefensiveRebounds());
//        game.setAssists(gameDto.getAssists());
//        game.setTurnovers(gameDto.getTurnovers());
//        game.setSteals(gameDto.getSteals());
//        game.setBlocks(gameDto.getBlocks());
//        game.setPersonalFouls(gameDto.getPersonalFouls());
//        game.getStatistic().updateStatistic(game);

        Statistic statistic = statisticRepository.findById(gameBeforeUpdate.getStatistic().getId()).orElseThrow(() -> new EntityNotFoundException("Statistic not found"));


        statistic.updateStatisticWhenGameIsDeleted(gameBeforeUpdate);


        game.setId(id);

        statistic.updateStatisticWithNewGame(game);

        statisticRepository.save(statistic);
        return gameRepository.save(game);

    }

    public void deleteGame(Long id) {
        Game game = gameRepository.findById(id).orElseThrow(() -> new EntityNotFoundException("Game not found"));
        game.getStatistic().updateStatisticWhenGameIsDeleted(game);
        statisticRepository.save(game.getStatistic());//proveri ovo jel kreira novu ili apdejtuje
        gameRepository.deleteById(id);
    }

    public List<Game> getGamesByStatisticId(Long statisticId) {
        return gameRepository.findByStatisticId(statisticId);
    }
}