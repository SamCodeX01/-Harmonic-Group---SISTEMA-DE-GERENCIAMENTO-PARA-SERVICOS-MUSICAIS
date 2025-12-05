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

import br.com.harmonicgroup.sigsmu_backend.model.StatusSolicitacao;
import br.com.harmonicgroup.sigsmu_backend.model.UpdateDTO;
import br.com.harmonicgroup.sigsmu_backend.service.StatusSolicitacaoService;

@RestController
@RequestMapping("/statussolicitacao")
public class StatusSolicitacaoController {
    
    @Autowired
    StatusSolicitacaoService statusSolicitacaoService;

    @GetMapping
    public List<StatusSolicitacao> listarStatusSolicitacao() {
        return statusSolicitacaoService.listarStatusSolicitacao();
    }

    @PostMapping
    public void cadastrarStatusSolicitacao(@RequestBody StatusSolicitacao statusSolicitacao) {
        statusSolicitacaoService.cadastrarStatusSolicitacao(statusSolicitacao);
    }
    
    // @PatchMapping("/{id}")
    // public void atualizarStatusSolicitacao(@RequestBody UpdateDTO body, @PathVariable Integer id) {
    //     statusSolicitacaoService.atualizarStatusSolicitacao(body, id);
    // }
    
    @DeleteMapping("/{id}")
    public void excluirStatusSolicitacao(@PathVariable Integer id) {
        statusSolicitacaoService.excluirStatusSolicitacao(id);
    }

}