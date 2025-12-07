package br.com.harmonicgroup.sigsmu_backend.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import br.com.harmonicgroup.sigsmu_backend.model.AssGrupoDoServico;
import br.com.harmonicgroup.sigsmu_backend.model.Musico;
import br.com.harmonicgroup.sigsmu_backend.service.AssGrupoDoServicoService;

@RestController
@RequestMapping("/grupodoservico")
public class AssGrupoDoServicoController {
    
    @Autowired
    AssGrupoDoServicoService assGrupoDoServicoService;

    @GetMapping
    public List<AssGrupoDoServico> listarGruposDeServico() {
        return assGrupoDoServicoService.listarGruposDeServico();
    }

    @GetMapping("/{id}")
    public List<Musico> buscarGrupoDoServico(@PathVariable Integer id) {
        return assGrupoDoServicoService.buscarGrupoDoServico(id);
    }

    @PostMapping
    public void adicionarAoGrupoDoServico(@RequestBody AssGrupoDoServico assGrupoDoServico) {
        assGrupoDoServicoService.adicionarAoGrupoDoServico(assGrupoDoServico);
    }

}
