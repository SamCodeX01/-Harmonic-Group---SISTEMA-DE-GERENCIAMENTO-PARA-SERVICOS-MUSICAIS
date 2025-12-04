package br.com.harmonicgroup.sigsmu_backend.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import br.com.harmonicgroup.sigsmu_backend.model.AssMusicasEscolhidas;
import br.com.harmonicgroup.sigsmu_backend.service.AssMusicasEscolhidasService;

@RestController
@CrossOrigin(origins = "http://localhost:5173")
@RequestMapping("/musicasescolhidas")
public class AssMusicasEscolhidasController {
    
    @Autowired
    AssMusicasEscolhidasService assMusicasEscolhidasService;

    @GetMapping
    public List<AssMusicasEscolhidas> buscarMusicasEscolhidas() {
        return assMusicasEscolhidasService.buscarMusicasEscolhidas();
    }

    @PostMapping
    public void adicionarAsMusicasEscolhidas(AssMusicasEscolhidas assMusicasEscolhidas) {
        assMusicasEscolhidasService.adicionarAsMusicasEscolhidas(assMusicasEscolhidas);
    }

}
