package br.com.harmonicgroup.sigsmu_backend.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PatchMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import br.com.harmonicgroup.sigsmu_backend.model.Avaliacao;
import br.com.harmonicgroup.sigsmu_backend.service.AvaliacaoService;

@RestController
@RequestMapping("/avaliacao")
public class AvaliacaoController {
    
    @Autowired
    AvaliacaoService avaliacaoService;

    @GetMapping
    public List<Avaliacao> listarAvaliacoes() {
        return avaliacaoService.listarAvaliacoes();
    }

    @PostMapping
    public void cadastrarAvaliacao(@RequestBody Avaliacao avaliacao) {
        avaliacaoService.cadastrarAvaliacao(avaliacao);
    }
    
    // @PatchMapping("/{id}")
    // public void atualizarRepertorio(@RequestBody UpdateDTO body, @PathVariable Integer id) {
    //     avaliacaoService.atualizarAvaliacao(body, id);
    // }
    
    @DeleteMapping("/{id}")
    public void excluirAvaliacao(@PathVariable Integer id) {
        avaliacaoService.excluirAvaliacao(id);
    }

}