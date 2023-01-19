package com.example.skautSluzba.service;
import com.example.skautSluzba.model.Player;
import com.example.skautSluzba.repository.PlayerRepository;
import org.springframework.stereotype.Service;
import org.springframework.beans.factory.annotation.Autowired;

@Service
public class PlayerService {

    private final PlayerRepository playerRepository;

    @Autowired
    public PlayerService(PlayerRepository playerRepository) {
        this.playerRepository = playerRepository;
    }

    public Player getPlayer(long id) {
        return playerRepository.findById(id).orElse(null);
    }

    public Player createPlayer(Player player) {
        return playerRepository.save(player);
    }

    public Player updatePlayer(long id, Player player) {
        Player existingPlayer = playerRepository.findById(id).orElse(null);
        if (existingPlayer == null) {
            return null;
        }
        existingPlayer.setName(player.getName());
        existingPlayer.setSurname(player.getSurname());
        existingPlayer.setDateOfBirth(player.getDateOfBirth());
        existingPlayer.setScoutId(player.getScoutId());
        return playerRepository.save(existingPlayer);
    }

    public void deletePlayer(long id) {
        playerRepository.deleteById(id);
    }
}
