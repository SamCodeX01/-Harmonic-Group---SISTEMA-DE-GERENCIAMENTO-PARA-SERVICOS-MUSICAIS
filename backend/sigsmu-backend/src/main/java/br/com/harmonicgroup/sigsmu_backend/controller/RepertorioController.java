package br.com.harmonicgroup.sigsmu_backend.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import br.com.harmonicgroup.sigsmu_backend.model.Repertorio;
import br.com.harmonicgroup.sigsmu_backend.service.RepertorioService;
import br.com.harmonicgroup.sigsmu_backend.service.TipoLocalService;

@RestController
@CrossOrigin(origins = "http://localhost:5173")
@RequestMapping("/repertorio")
public class RepertorioController {
    
    @Autowired
    RepertorioService repertorioService;

    @GetMapping
    public List<Repertorio> listarRepertorio() {
        return repertorioService.listarRepertorio();
    }

    @PostMapping
    public void cadastrarRepertorio(@RequestBody Repertorio repertorio) {
        repertorioService.cadastrarRepertorio(repertorio);
    }

}
