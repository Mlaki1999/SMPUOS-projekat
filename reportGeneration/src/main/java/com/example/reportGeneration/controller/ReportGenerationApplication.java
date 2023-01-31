package com.example.reportGeneration.controller;

import com.example.reportGeneration.model.PDFGenerator;
import com.example.skautSluzba.model.Game;
import com.example.skautSluzba.model.Player;
import com.example.skautSluzba.model.Statistic;
import org.apache.pdfbox.pdmodel.PDDocument;
import org.apache.pdfbox.pdmodel.PDPage;
import org.apache.pdfbox.pdmodel.PDPageContentStream;
import org.apache.pdfbox.pdmodel.font.PDFont;
import org.apache.pdfbox.pdmodel.font.PDType1Font;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.io.IOException;
import java.util.List;

@CrossOrigin
@RestController
@RequestMapping("/generate")
public class ReportGenerationApplication {
    @GetMapping("/a")
    public void generatePDF(@RequestBody List<Player> players) throws IOException {
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
