package br.com.harmonicgroup.sigsmu_backend.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestBody;

import br.com.harmonicgroup.sigsmu_backend.model.Instrumento;
import br.com.harmonicgroup.sigsmu_backend.model.StatusSolicitacao;
import br.com.harmonicgroup.sigsmu_backend.model.UpdateDTO;
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

    public void atualizarStatusSolicitacao(UpdateDTO body, Integer id) {
        StatusSolicitacao atual = statusSolicitacaoRepository.findById(id)
            .orElseThrow(() -> new RuntimeException("Status não encontrado!"));

        switch (body.getCampo()) {
            case "situacao": atual.setSituacao( body.getNovoValor() );
                break;
        }
        statusSolicitacaoRepository.save(atual);
    }

    public void excluirStatusSolicitacao(Integer id) {
        statusSolicitacaoRepository.deleteById(id);
    }

}
