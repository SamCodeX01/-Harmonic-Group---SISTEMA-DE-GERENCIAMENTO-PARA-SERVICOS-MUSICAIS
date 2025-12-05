package br.com.harmonicgroup.sigsmu_backend.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import br.com.harmonicgroup.sigsmu_backend.model.AssInstrumentosDoMusico;
import br.com.harmonicgroup.sigsmu_backend.model.Instrumento;
import br.com.harmonicgroup.sigsmu_backend.service.AssInstrumentosDoMusicoService;

@RestController
@RequestMapping("/instrumentosdomusico")
public class AssInstrumentosDoMusicoController {
    
    @Autowired
    AssInstrumentosDoMusicoService assInstrumentosDoMusicoService;

    @GetMapping("/{cpf}")
    public List<Instrumento> buscarInstrumentosDoMusico(@PathVariable String cpf) {
        return assInstrumentosDoMusicoService.buscarInstrumentosDoMusico(cpf);
    }

    @PostMapping
    public void adicionarAosInstrumentosDoMusico(@RequestBody AssInstrumentosDoMusico assInstrumentosDoMusico) {
        assInstrumentosDoMusicoService.adicionarAosInstrumentosDoMusico(assInstrumentosDoMusico);
    }

}
