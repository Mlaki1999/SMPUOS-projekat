package com.example.skautSluzba.model;

import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@Entity
@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
@Table(name="games")
public class Game {
    @Id
    @GeneratedValue
    private Long id;

    private Integer offensiveRebounds;
    private Integer defensiveRebounds;
    private Integer assists;
    private Integer turnovers;
    private Integer steals;
    private Integer blocks;
    private Integer personalFouls;
    private Integer numberOfSuccessfulShotsFor2Points;
    private Integer numberOfAttemptedShotsFor2Points;
    private Integer numberOfSuccessfulShotsFor3Points;
    private Integer numberOfAttemptedShotsFor3Points;
    private Integer numberOfSuccessfulFreeThrows;
    private Integer numberOfAttemptedFreeThrows;


    @ManyToOne
    @JoinColumn(name = "statistic_id")
    private Statistic statistic;


    @Override
    public String toString() {
        return "Game{" +
                "id=" + id +
                ", offensiveRebounds=" + offensiveRebounds +
                ", defensiveRebounds=" + defensiveRebounds +
                ", assists=" + assists +
                ", turnovers=" + turnovers +
                ", steals=" + steals +
                ", blocks=" + blocks +
                ", personalFouls=" + personalFouls +
                ", numberOfSuccessfulShotsFor2Points=" + numberOfSuccessfulShotsFor2Points +
                ", numberOfAttemptedShotsFor2Points=" + numberOfAttemptedShotsFor2Points +
                ", numberOfSuccessfulShotsFor3Points=" + numberOfSuccessfulShotsFor3Points +
                ", numberOfAttemptedShotsFor3Points=" + numberOfAttemptedShotsFor3Points +
                ", numberOfSuccessfulFreeThrows=" + numberOfSuccessfulFreeThrows +
                ", numberOfAttemptedFreeThrows=" + numberOfAttemptedFreeThrows;

    }
}
