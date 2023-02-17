package com.example.skautSluzba.controller;

import com.example.skautSluzba.model.Game;
import com.example.skautSluzba.model.Statistic;
import com.example.skautSluzba.service.GameService;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@CrossOrigin
@RestController
@RequestMapping("/games")
public class GameController {

    private final GameService gameService;

    public GameController(GameService gameService) {
        this.gameService = gameService;
    }

    @PostMapping
    public ResponseEntity<Game> createGame(@RequestBody Game game) {
//        Game game = gameService.createGame(gameDto.getOffensiveRebounds(), gameDto.getDefensiveRebounds(), gameDto.getAssists(), gameDto.getTurnovers(), gameDto.getSteals(), gameDto.getBlocks(), gameDto.getPersonalFouls(), gameDto.getStatisticId());
        gameService.createGame(game);
        return ResponseEntity.status(HttpStatus.CREATED).body(game);
    }

    @GetMapping("/{id}")
    public ResponseEntity<Game> getGameById(@PathVariable Long id) {
        Game game = gameService.getGameById(id);
        return ResponseEntity.ok(game);
    }

    @GetMapping
    public ResponseEntity<List<Game>> getAllGames() {
        List<Game> games = gameService.getAllGames();
        return ResponseEntity.ok(games);
    }

    @PutMapping("/{id}")
    public ResponseEntity<Game> updateGame(@PathVariable Long id, @RequestBody Game game) {
        Game newGame = gameService.updateGame(id, game);
        return ResponseEntity.ok(newGame);
    }

    @DeleteMapping("/{id}")
    public ResponseEntity<Void> deleteGame(@PathVariable Long id) {
        gameService.deleteGame(id);
        return ResponseEntity.noContent().build();
    }

    @GetMapping("/statistics/{statisticId}/games")
    public List<Game> getStatisticsByPlayerId(@PathVariable Long statisticId) {
        return gameService.getGamesByStatisticId(statisticId);
    }
}