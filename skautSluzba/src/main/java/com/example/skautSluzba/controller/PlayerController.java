package com.example.skautSluzba.controller;
import com.example.skautSluzba.model.Player;
import com.example.skautSluzba.service.PlayerService;
import org.springframework.web.bind.annotation.*;
import org.springframework.beans.factory.annotation.Autowired;

import java.util.List;

@CrossOrigin
@RestController
@RequestMapping("/players")
public class PlayerController {

    private final PlayerService playerService;

    @Autowired
    public PlayerController(PlayerService playerService) {
        this.playerService = playerService;
    }

    @GetMapping("/{id}")
    public Player getPlayer(@PathVariable long id) {
        return playerService.getPlayer(id);
    }

    @PostMapping
    public Player createPlayer(@RequestBody Player player) {
        return playerService.createPlayer(player);
    }

    @PutMapping("/{id}")
    public Player updatePlayer(@PathVariable long id, @RequestBody Player player) {
        return playerService.updatePlayer(id, player);
    }

    @DeleteMapping("/{id}")
    public void deletePlayer(@PathVariable long id) {
        playerService.deletePlayer(id);
    }

    @GetMapping()
    public List<Player> getPlayers() {
        return playerService.getPlayers();
    }
}