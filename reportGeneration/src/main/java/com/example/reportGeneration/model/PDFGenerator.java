package com.example.reportGeneration.model;
import com.example.skautSluzba.model.Player;
import com.example.skautSluzba.model.Statistic;
import org.apache.pdfbox.pdmodel.PDDocument;
import org.apache.pdfbox.pdmodel.PDPage;
import org.apache.pdfbox.pdmodel.PDPageContentStream;
import org.apache.pdfbox.pdmodel.font.PDFont;
import org.apache.pdfbox.pdmodel.font.PDType1Font;
//import org.apache.pdfbox.pdmodel.PDDocument;
//import org.apache.pdfbox.pdmodel.PDPage;
//import org.apache.pdfbox.pdmodel.PDPageContentStream;
//import org.apache.pdfbox.pdmodel.font.PDFont;
//import org.apache.pdfbox.pdmodel.font.PDType1Font;
//import org.apache.pdfbox.*;

import java.io.IOException;
import java.util.List;

public class PDFGenerator {

    public void generatePDF(List<Player> players, List<Statistic> statistics) throws IOException {
        PDDocument document = new PDDocument();
        PDPage page = new PDPage();
        document.addPage(page);

        PDFont font = PDType1Font.HELVETICA_BOLD;

        PDPageContentStream contentStream = new PDPageContentStream(document, page);
        contentStream.beginText();
        contentStream.setFont(font, 12);
        contentStream.newLineAtOffset(25, 700);
        contentStream.showText("Players and Their Statistics");
        contentStream.newLine();

        for (int i = 0; i < players.size(); i++) {
            Player player = players.get(i);
            Statistic statistic = statistics.get(i);
            contentStream.showText("Player name: " + player.getName());
            contentStream.newLine();
            contentStream.showText("Number of games: " + statistic.getNumberOfGames());
            contentStream.newLine();
            // add more information about the player and their statistics here
        }

        contentStream.endText();
        contentStream.close();

        document.save("players_statistics.pdf");
        document.close();
    }
}