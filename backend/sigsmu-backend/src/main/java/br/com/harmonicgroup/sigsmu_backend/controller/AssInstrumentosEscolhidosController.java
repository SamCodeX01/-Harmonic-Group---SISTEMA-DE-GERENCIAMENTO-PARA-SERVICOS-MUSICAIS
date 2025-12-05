package br.com.harmonicgroup.sigsmu_backend.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import br.com.harmonicgroup.sigsmu_backend.model.AssInstrumentosEscolhidos;
import br.com.harmonicgroup.sigsmu_backend.model.Instrumento;
import br.com.harmonicgroup.sigsmu_backend.service.AssInstrumentosEscolhidosService;

@RestController
@RequestMapping("/instrumentosescolhidos")
public class AssInstrumentosEscolhidosController {
    
    @Autowired
    AssInstrumentosEscolhidosService assInstrumentosEscolhidosService;

    @GetMapping("/{id}")
    public List<Instrumento> buscarInstrumentosEscolhidos(@PathVariable Integer id) {
        return assInstrumentosEscolhidosService.buscarInstrumentosEscolhidos(id);
    }

    @PostMapping
    public void adicionarAosInstrumentosEscolhidos(@RequestBody AssInstrumentosEscolhidos assInstrumentosEscolhidos) {
        assInstrumentosEscolhidosService.adicionarAosInstrumentosEscolhidos(assInstrumentosEscolhidos);
    }

}
