package br.com.harmonicgroup.sigsmu_backend.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import br.com.harmonicgroup.sigsmu_backend.model.StatusSolicitacao;
import br.com.harmonicgroup.sigsmu_backend.service.StatusSolicitacaoService;

@RestController
@CrossOrigin(origins = "http://localhost:5173")
@RequestMapping("/statussolicitacao")
public class StatusSolicitacaoController {
    
    @Autowired
    StatusSolicitacaoService statusSolicitacaoService;

    @GetMapping
    public List<StatusSolicitacao> listarStatusSolicitacao() {
        return statusSolicitacaoService.listarStatusSolicitacao();
    }

    @PostMapping
    public void cadastrarTipoLocal(@RequestBody StatusSolicitacao statusSolicitacao) {
        statusSolicitacaoService.cadastrarStatusSolicitacao(statusSolicitacao);
    }

}