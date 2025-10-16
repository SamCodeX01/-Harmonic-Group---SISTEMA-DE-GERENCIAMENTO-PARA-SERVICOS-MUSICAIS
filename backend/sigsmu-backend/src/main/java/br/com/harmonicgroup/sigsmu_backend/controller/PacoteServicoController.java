package br.com.harmonicgroup.sigsmu_backend.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import br.com.harmonicgroup.sigsmu_backend.model.PacoteServico;
import br.com.harmonicgroup.sigsmu_backend.model.TipoLocal;
import br.com.harmonicgroup.sigsmu_backend.service.PacoteServicoService;
import br.com.harmonicgroup.sigsmu_backend.service.TipoLocalService;

@RestController
@CrossOrigin(origins = "http://localhost:5173")
@RequestMapping("/pacoteservico")
public class PacoteServicoController {
    
    @Autowired
    PacoteServicoService pacoteServicoService;

    @GetMapping
    public List<PacoteServico> listarPacotesServico() {
        return pacoteServicoService.listarPacotesServico();
    }

    @PostMapping
    public void cadastrarPacoteServico(@RequestBody PacoteServico pacoteServico) {
        pacoteServicoService.cadastrarPacoteServico(pacoteServico);
    }

}
