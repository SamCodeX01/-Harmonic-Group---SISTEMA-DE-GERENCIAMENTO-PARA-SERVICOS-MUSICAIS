package br.com.harmonicgroup.sigsmu_backend.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.web.bind.annotation.RequestBody;

import br.com.harmonicgroup.sigsmu_backend.model.StatusSolicitacao;
import br.com.harmonicgroup.sigsmu_backend.repository.StatusSolicitacaoRepository;

@Service
public class StatusSolicitacaoService {
    
    @Autowired
    StatusSolicitacaoRepository statusSolicitacaoRepository;

    public List<StatusSolicitacao> listarStatusSolicitacao() {
        return statusSolicitacaoRepository.findAll();
    }

    public void cadastrarStatusSolicitacao(StatusSolicitacao statusSolicitacao) {
        statusSolicitacaoRepository.save(statusSolicitacao);
    }

}
