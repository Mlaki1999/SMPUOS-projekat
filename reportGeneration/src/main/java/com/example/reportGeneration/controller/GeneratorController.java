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
        PDPage page = new PDPage();
        document.addPage(page);

        PDFont font = PDType1Font.HELVETICA_BOLD;

        PDPageContentStream contentStream = new PDPageContentStream(document, page);
        contentStream.beginText();
        contentStream.setFont(font, 12);
        contentStream.newLineAtOffset(25, 700);
//        contentStream.showText("Players and Their Statistics");
        contentStream.newLine();

        for (int i = 0; i < statistics.size(); i++) {
            Statistic statistic = statistics.get(i);
            System.out.println(statistic);
//            Statistic statistic = statistics.get(i);
            contentStream.newLineAtOffset(0,-10);
            contentStream.showText("Player name: " + statistic.getPlayer().getName());
            contentStream.newLine();
            contentStream.newLineAtOffset(0,-10);
            contentStream.showText("Player surname" + statistic.getPlayer().getSurname());
            contentStream.newLineAtOffset(0,-10);
            contentStream.showText("Player stat" + statistic.getAverageAssistsPerGame());


//            contentStream.showText("Number of games: " + statistic.getNumberOfGames());
            contentStream.newLine();
            // add more information about the player and their statistics here
        }

        contentStream.endText();
        contentStream.close();

        document.save("players_statistics.pdf");
        document.close();
    }
}
