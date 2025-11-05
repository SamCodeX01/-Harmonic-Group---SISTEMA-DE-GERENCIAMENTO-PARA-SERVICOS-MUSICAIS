package br.com.harmonicgroup.sigsmu_backend.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PatchMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import br.com.harmonicgroup.sigsmu_backend.model.PacoteServico;
import br.com.harmonicgroup.sigsmu_backend.model.UpdateDTO;
import br.com.harmonicgroup.sigsmu_backend.service.PacoteServicoService;

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
    
    // @PatchMapping("/{id}")
    // public void atualizarPacoteServico(@RequestBody UpdateDTO body, @PathVariable Integer id) {
    //     pacoteServicoService.atualizarPacoteServico(body, id);
    // }
    
    @DeleteMapping("/{id}")
    public void excluirPacoteServico(@PathVariable Integer id) {
        pacoteServicoService.excluirPacoteServico(id);
    }

}
