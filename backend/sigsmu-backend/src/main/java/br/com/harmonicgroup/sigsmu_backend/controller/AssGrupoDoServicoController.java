package br.com.harmonicgroup.sigsmu_backend.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import br.com.harmonicgroup.sigsmu_backend.model.AssGrupoDoServico;
import br.com.harmonicgroup.sigsmu_backend.service.AssGrupoDoServicoService;

@RestController
@CrossOrigin(origins = "http://localhost:5173")
@RequestMapping("/grupodoservico")
public class AssGrupoDoServicoController {
    
    @Autowired
    AssGrupoDoServicoService assGrupoDoServicoService;

    @GetMapping
    public List<AssGrupoDoServico> buscarGrupoDoServico() {
        return assGrupoDoServicoService.buscarGrupoDoServico();
    }

    @PostMapping
    public void adicionarAoGrupoDoServico(AssGrupoDoServico assGrupoDoServico) {
        assGrupoDoServicoService.adicionarAoGrupoDoServico(assGrupoDoServico);
    }

}
