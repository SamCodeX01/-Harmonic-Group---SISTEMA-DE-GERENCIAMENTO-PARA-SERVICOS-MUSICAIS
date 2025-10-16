package br.com.harmonicgroup.sigsmu_backend.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import br.com.harmonicgroup.sigsmu_backend.model.Instrumento;
import br.com.harmonicgroup.sigsmu_backend.service.InstrumentoService;
import br.com.harmonicgroup.sigsmu_backend.service.TipoLocalService;

@RestController
@CrossOrigin(origins = "http://localhost:5173")
@RequestMapping("/instrumento")
public class InstrumentoController {
    
    @Autowired
    InstrumentoService instrumentoService;

    @GetMapping
    public List<Instrumento> listarInstrumentos() {
        return instrumentoService.listarInstrumentos();
    }

    @PostMapping
    public void cadastrarInstrumento(@RequestBody Instrumento instrumento) {
        instrumentoService.cadastrarInstrumento(instrumento);
    }

}
