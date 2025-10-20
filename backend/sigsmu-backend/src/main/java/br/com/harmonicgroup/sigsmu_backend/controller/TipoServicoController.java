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

import br.com.harmonicgroup.sigsmu_backend.model.Instrumento;
import br.com.harmonicgroup.sigsmu_backend.model.TipoServico;
import br.com.harmonicgroup.sigsmu_backend.model.UpdateDTO;
import br.com.harmonicgroup.sigsmu_backend.service.TipoServicoService;

@RestController
@CrossOrigin(origins = "http://localhost:5173")
@RequestMapping("/tiposervico")
public class TipoServicoController {
    
    @Autowired
    TipoServicoService servicoService;

    @GetMapping
    public List<TipoServico> listarTiposServico() {
        return servicoService.listarTiposServico();
    }

    @PostMapping
    public void cadastrarTipoServico(@RequestBody TipoServico servico) {
        servicoService.cadastrarTipoServico(servico);
    }
    
    @PatchMapping("/{id}")
    public void atualizarTipoServico(@RequestBody UpdateDTO body, @PathVariable Integer id) {
        servicoService.atualizarTipoServico(body, id);
    }
    
    @DeleteMapping("/{id}")
    public void excluirTipoServico(@PathVariable Integer id) {
        servicoService.excluirTipoServico(id);
    }

}
