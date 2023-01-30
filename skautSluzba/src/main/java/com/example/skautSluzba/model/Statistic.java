package com.example.skautSluzba.model;
import com.fasterxml.jackson.annotation.JsonIgnore;
import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.util.List;

@Data
@NoArgsConstructor
@AllArgsConstructor
@Entity
@Table(name="statistics")
public class Statistic {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    private Integer numberOfGames;
    private Integer numberOfSuccessfulShotsFor2Points;
    private Integer numberOfAttemptedShotsFor2Points;
    private Double percentageOfSuccessfulShotsFor2Points;

    private Integer numberOfSuccessfulShotsFor3Points;
    private Integer numberOfAttemptedShotsFor3Points;
    private Double percentageOfSuccessfulShotsFor3Points;

    private Integer numberOfSuccessfulFreeThrows;
    private Integer numberOfAttemptedFreeThrows;
    private Double percentageOfSuccessfulFreeThrows;
    private Double pointsPerGame;
    private Integer offensiveRebounds;
    private Integer defensiveRebounds;
    private Integer assists;
    private Integer turnovers;
    private Integer steals;
    private Integer blocks;
    private Integer personalFouls;
    private Double averageOffensiveReboundsPerGame;
    private Double averageDefensiveReboundsPerGame;
    private Double averageAssistsPerGame;
    private Double averageTurnoversPerGame;
    private Double averageStealsPerGame;
    private Double averageBlocksPerGame;
    private Double averagePersonalFoulsPerGame;
    private Integer rebounds;

    private Double reboundsPerGame;
    private Integer points;
    private Double fieldGoalPercentage;

//    @JsonIgnore
    @ManyToOne
    private Player player;
    @JsonIgnore
    @OneToMany(mappedBy = "statistic", cascade = CascadeType.ALL, fetch = FetchType.LAZY)
    private List<Game> games;

//    @PostPersist
//    public void calculatePercentages(){
//        updatePercentageOfSuccessfulShotsFor2Points();
//        updatePercentageOfSuccessfulShotsFor3Points();
//        updatePercentageOfSuccessfulFreeThrows();
//        updatePointsPerGame();
//        calculateAveragesPerGame();
//    }

//    private void updatePercentageOfSuccessfulShotsFor2Points(){
//        if(numberOfAttemptedShotsFor2Points == 0) {
//            percentageOfSuccessfulShotsFor2Points = 0;
//        } else {
//            percentageOfSuccessfulShotsFor2Points = (double) numberOfSuccessfulShotsFor2Points / numberOfAttemptedShotsFor2Points;
//        }
//    }

    @PrePersist
    @PreUpdate
    @PreRemove
    @PostPersist
    public void updatePercentages(){
        updatePercentageOfSuccessfulShotsFor2Points();
        updatePercentageOfSuccessfulShotsFor3Points();
        updatePercentageOfSuccessfulFreeThrows();
        updateFieldGoalPercentage();
        updatePoints();
        updateRebounds();
//        updatePointsPerGame();
        calculateAveragesPerGame();
    }

    private void updatePercentageOfSuccessfulShotsFor2Points(){
        if(numberOfAttemptedShotsFor2Points == 0) {
            this.percentageOfSuccessfulShotsFor2Points = 0.0;
        } else {
            this.percentageOfSuccessfulShotsFor2Points = (double) numberOfSuccessfulShotsFor2Points / numberOfAttemptedShotsFor2Points;
        }
    }

    private void updatePercentageOfSuccessfulShotsFor3Points(){
        if(numberOfAttemptedShotsFor3Points == 0) {
            this.percentageOfSuccessfulShotsFor3Points = 0.0;
        } else {
            this.percentageOfSuccessfulShotsFor3Points = (double) numberOfSuccessfulShotsFor3Points / numberOfAttemptedShotsFor3Points;
        }
    }

    private void updatePercentageOfSuccessfulFreeThrows(){
        if(numberOfAttemptedFreeThrows == 0) {
            this.percentageOfSuccessfulFreeThrows = 0.0;
        } else {
            this.percentageOfSuccessfulFreeThrows = (double) numberOfSuccessfulFreeThrows / numberOfAttemptedFreeThrows;
        }
    }
//    private void updatePointsPerGame(){
//        this.pointsPerGame = (double) points/numberOfGames;
//    }

    private void updateRebounds(){
        this.rebounds = defensiveRebounds + offensiveRebounds;
    }
    private void updatePoints(){
        this.points = 2*numberOfSuccessfulShotsFor2Points + 3*numberOfSuccessfulShotsFor3Points + numberOfSuccessfulFreeThrows;
    }

    private void updateFieldGoalPercentage(){
        this.fieldGoalPercentage = (double)(numberOfSuccessfulShotsFor2Points+numberOfSuccessfulShotsFor3Points)/(numberOfAttemptedShotsFor2Points+numberOfAttemptedShotsFor3Points);
    }

    public void calculateAveragesPerGame(){
        if(numberOfGames != 0){
            this.averageOffensiveReboundsPerGame = (double) offensiveRebounds / numberOfGames;
            this.averageDefensiveReboundsPerGame = (double) defensiveRebounds / numberOfGames;
            this.averageAssistsPerGame = (double) assists / numberOfGames;
            this.averageTurnoversPerGame = (double) turnovers / numberOfGames;
            this.averageStealsPerGame = (double) steals / numberOfGames;
            this.averageBlocksPerGame = (double) blocks / numberOfGames;
            this.averagePersonalFoulsPerGame = (double) personalFouls / numberOfGames;
            this.reboundsPerGame = (double) rebounds / numberOfGames;
            this.pointsPerGame = (double) points/numberOfGames;
        }
    }
    public void updateStatisticWithNewGame(Game game) {
        this.numberOfGames++;
        this.offensiveRebounds += game.getOffensiveRebounds();
        this.defensiveRebounds += game.getDefensiveRebounds();
        this.assists += game.getAssists();
        this.turnovers += game.getTurnovers();
        this.steals += game.getSteals();
        this.blocks += game.getBlocks();
        this.personalFouls += game.getPersonalFouls();
        this.numberOfAttemptedShotsFor3Points +=game.getNumberOfAttemptedShotsFor3Points();
        this.numberOfAttemptedShotsFor2Points +=game.getNumberOfAttemptedShotsFor2Points();
        this.numberOfSuccessfulShotsFor2Points +=game.getNumberOfSuccessfulShotsFor2Points();
        this.numberOfSuccessfulShotsFor3Points +=game.getNumberOfSuccessfulShotsFor3Points();
        this.numberOfAttemptedFreeThrows +=game.getNumberOfAttemptedFreeThrows();
        this.numberOfSuccessfulFreeThrows +=game.getNumberOfSuccessfulFreeThrows();
        this.updatePercentages();
    }

    public void updateStatisticWhenGameIsDeleted(Game game) {
        this.numberOfGames--;
        this.offensiveRebounds -= game.getOffensiveRebounds();
        this.defensiveRebounds -= game.getDefensiveRebounds();
        this.assists -= game.getAssists();
        this.turnovers -= game.getTurnovers();
        this.steals -= game.getSteals();
        this.blocks -= game.getBlocks();
        this.personalFouls -= game.getPersonalFouls();
        this.numberOfAttemptedShotsFor3Points -=game.getNumberOfAttemptedShotsFor3Points();
        this.numberOfAttemptedShotsFor2Points -=game.getNumberOfAttemptedShotsFor2Points();
        this.numberOfSuccessfulShotsFor2Points -=game.getNumberOfSuccessfulShotsFor2Points();
        this.numberOfSuccessfulShotsFor3Points -=game.getNumberOfSuccessfulShotsFor3Points();
        this.numberOfAttemptedFreeThrows -=game.getNumberOfAttemptedFreeThrows();
        this.numberOfSuccessfulFreeThrows -=game.getNumberOfSuccessfulFreeThrows();
        this.updatePercentages();
    }

}