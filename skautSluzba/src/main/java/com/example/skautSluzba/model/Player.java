package com.example.skautSluzba.model;

import com.fasterxml.jackson.annotation.JsonIgnore;
import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.util.Date;
import java.util.List;

@Data
@NoArgsConstructor
@AllArgsConstructor
@Entity
@Table(name="players")
public class Player {
    @Id
    @GeneratedValue
    private Long id;

    @Column(name="name")
    private String name;

    @Column(name="surname")
    private String surname;

    @Column(name="date_of_birth")
    private Date dateOfBirth;

    @Column(name="id_scout")
    private Long scoutId;

    @JsonIgnore
    @OneToMany(mappedBy = "player", cascade = CascadeType.ALL, fetch = FetchType.LAZY)
    private List<Statistic> statistics;
}