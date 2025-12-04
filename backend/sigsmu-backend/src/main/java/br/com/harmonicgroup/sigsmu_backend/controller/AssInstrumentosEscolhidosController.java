package br.com.harmonicgroup.sigsmu_backend.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import br.com.harmonicgroup.sigsmu_backend.model.AssInstrumentosEscolhidos;
import br.com.harmonicgroup.sigsmu_backend.service.AssInstrumentosEscolhidosService;

@RestController
@CrossOrigin(origins = "http://localhost:5173")
@RequestMapping("/instrumentosescolhidos")
public class AssInstrumentosEscolhidosController {
    
    @Autowired
    AssInstrumentosEscolhidosService assInstrumentosEscolhidosService;

    @GetMapping
    public List<AssInstrumentosEscolhidos> buscarInstrumentosEscolhidos() {
        return assInstrumentosEscolhidosService.buscarInstrumentosEscolhidos();
    }

    @PostMapping
    public void adicionarAosInstrumentosEscolhidos(AssInstrumentosEscolhidos assInstrumentosEscolhidos) {
        assInstrumentosEscolhidosService.adicionarAosInstrumentosEscolhidos(assInstrumentosEscolhidos);
    }

}
