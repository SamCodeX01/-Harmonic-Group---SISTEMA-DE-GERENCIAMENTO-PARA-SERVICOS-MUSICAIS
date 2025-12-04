package br.com.harmonicgroup.sigsmu_backend.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import br.com.harmonicgroup.sigsmu_backend.model.AssInstrumentosDoMusico;
import br.com.harmonicgroup.sigsmu_backend.service.AssInstrumentosDoMusicoService;

@RestController
@CrossOrigin(origins = "http://localhost:5173")
@RequestMapping("/instrumentosdomusico")
public class AssInstrumentosDoMusicoController {
    
    @Autowired
    AssInstrumentosDoMusicoService assInstrumentosDoMusicoService;

    @GetMapping
    public List<AssInstrumentosDoMusico> buscarInstrumentosDoMusico() {
        return assInstrumentosDoMusicoService.buscarInstrumentosDoMusico();
    }

    @PostMapping
    public void adicionarAosInstrumentosDoMusico(AssInstrumentosDoMusico assInstrumentosDoMusico) {
        assInstrumentosDoMusicoService.adicionarAosInstrumentosDoMusico(assInstrumentosDoMusico);
    }

}
