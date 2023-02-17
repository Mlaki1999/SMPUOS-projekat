package com.example.reportGeneration.controller;

import com.example.skautSluzba.model.Player;
import com.example.skautSluzba.model.Statistic;
import org.apache.pdfbox.pdmodel.PDDocument;
import org.apache.pdfbox.pdmodel.PDPage;
import org.apache.pdfbox.pdmodel.PDPageContentStream;
import org.apache.pdfbox.pdmodel.font.PDFont;
import org.apache.pdfbox.pdmodel.font.PDType1Font;
import org.springframework.web.bind.annotation.*;

import java.io.IOException;
import java.util.List;
@CrossOrigin
@RestController
@RequestMapping("/generating")
public class GeneratorController {

    @GetMapping("/a")
    public void generatePDF(@RequestBody List<Player> players) throws IOException {
        System.out.println(players);
        PDDocument document = new PDDocument();
        PDPage page = new PDPage();
        document.addPage(page);

        PDFont font = PDType1Font.HELVETICA_BOLD;

        PDPageContentStream contentStream = new PDPageContentStream(document, page);
        contentStream.beginText();
        contentStream.setFont(font, 12);
        contentStream.newLineAtOffset(25, 700);
//        contentStream.showText("Players and Their Statistics");
        contentStream.newLine();

        for (int i = 0; i < players.size(); i++) {
            Player player = players.get(i);
//            Statistic statistic = statistics.get(i);
            contentStream.newLineAtOffset(0,-10);
            contentStream.showText("Player name: " + player.getName());
            contentStream.newLine();
            contentStream.newLineAtOffset(0,-10);
            contentStream.showText("Player surname" + player.getSurname());
            contentStream.newLineAtOffset(0,-10);
            contentStream.showText("Player stat" + player.getStatistics().get(0).getAverageAssistsPerGame());



//            contentStream.showText("Number of games: " + statistic.getNumberOfGames());
            contentStream.newLine();
            // add more information about the player and their statistics here
        }

        contentStream.endText();
        contentStream.close();

        document.save("players_statistics.pdf");
        document.close();
    }

    @PostMapping("/ab")
    public void generatePDFA(@RequestBody List<Statistic> statistics) throws IOException {
        System.out.println(statistics);
        PDDocument document = new PDDocument();
//        PDPage page = new PDPage();
//        document.addPage(page);
//
//        PDFont font = PDType1Font.HELVETICA_BOLD;
//
//        PDPageContentStream contentStream = new PDPageContentStream(document, page);
//        contentStream.beginText();
//        contentStream.setFont(font, 12);
////        contentStream.newLineAtOffset(25, 700);
////        contentStream.showText("Players and Their Statistics");
////        contentStream.newLine();
//        int y=700;
//        int x=50;
//        contentStream.newLineAtOffset(50, y);
//        contentStream.showText("Number of games");
//        contentStream.newLineAtOffset(100, 0);
//        contentStream.showText("Points");
//        contentStream.newLineAtOffset(80, 0);
//        contentStream.showText("Assists");
//        contentStream.newLineAtOffset(80, 0);
//        contentStream.showText("3-point shoots");
//        contentStream.newLineAtOffset(100, 0);
//        contentStream.showText("2-point shoots");
//        contentStream.newLineAtOffset(80, 0);
//        contentStream.showText("Free throws");
//        y -= 20;

        for (int i = 0; i < statistics.size(); i++) {
            Statistic statistic = statistics.get(i);
            System.out.println("OVDE:");
            System.out.println(statistic);

            PDPage page = new PDPage();
            document.addPage(page);

            PDPageContentStream contentStream = new PDPageContentStream(document, page);
            contentStream.beginText();
            contentStream.setFont(PDType1Font.HELVETICA_BOLD, 24);

            contentStream.newLineAtOffset(100, 700);
            contentStream.showText(statistic.getPlayer().getName().toString() + " " + statistic.getPlayer().getSurname());

            contentStream.setFont(PDType1Font.HELVETICA_BOLD, 20);
            contentStream.newLineAtOffset(0, -20);
            contentStream.showText("Season and club: ");
            contentStream.showText(statistic.getSeason().toString() + " " + statistic.getClub());

            contentStream.setFont(PDType1Font.HELVETICA_BOLD, 16);
            contentStream.newLineAtOffset(0, -20);
            contentStream.showText("Games played: ");
            contentStream.showText(statistic.getNumberOfGames().toString());
            contentStream.newLineAtOffset(0, -20);
            contentStream.showText("Points per game: ");
            contentStream.showText(statistic.getPointsPerGame().toString());
            contentStream.newLineAtOffset(0, -20);
            contentStream.showText("Assists per game: ");
            contentStream.showText(statistic.getAverageAssistsPerGame().toString());
            contentStream.newLineAtOffset(0, -20);
            contentStream.showText("Rebounds per game: ");
            contentStream.showText(statistic.getReboundsPerGame().toString());
            contentStream.newLineAtOffset(0, -20);
            contentStream.showText("Defensive rebounds per game: ");
            contentStream.showText(statistic.getAverageDefensiveReboundsPerGame().toString());
            contentStream.newLineAtOffset(0, -20);
            contentStream.showText("Offensive rebounds per game: ");
            contentStream.showText(statistic.getAverageOffensiveReboundsPerGame().toString());
            contentStream.newLineAtOffset(0, -20);
            contentStream.showText("2P%: ");
            contentStream.showText(statistic.getPercentageOfSuccessfulShotsFor2Points().toString());
            contentStream.newLineAtOffset(0, -20);
            contentStream.showText("3P%: ");
            contentStream.showText(statistic.getPercentageOfSuccessfulShotsFor3Points().toString());
            contentStream.newLineAtOffset(0, -20);
            contentStream.showText("Steals per game: ");
            contentStream.showText(statistic.getAverageStealsPerGame().toString());
            contentStream.newLineAtOffset(0, -20);
            contentStream.showText("Block per game: ");
            contentStream.showText(statistic.getAverageBlocksPerGame().toString());
            contentStream.newLineAtOffset(0, -20);
            contentStream.showText("Turnovers per game: ");
            contentStream.showText(statistic.getAverageTurnoversPerGame().toString());
            contentStream.newLineAtOffset(0, -20);
            contentStream.showText("Personal fouls per game: ");
            contentStream.showText(statistic.getAveragePersonalFoulsPerGame().toString());
            contentStream.endText();
            contentStream.close();
        }

//        contentStream.endText();
//        contentStream.close();

        document.save("players_statistics.pdf");
        document.close();
    }
}
