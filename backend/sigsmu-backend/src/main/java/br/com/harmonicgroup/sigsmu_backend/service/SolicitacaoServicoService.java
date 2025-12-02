package br.com.harmonicgroup.sigsmu_backend.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import br.com.harmonicgroup.sigsmu_backend.model.SolicitacaoServico;
import br.com.harmonicgroup.sigsmu_backend.model.UpdateDTO;
import br.com.harmonicgroup.sigsmu_backend.repository.SolicitacaoServicoRepository;



@Service
public class SolicitacaoServicoService {
    
    @Autowired
    SolicitacaoServicoRepository solicitacaoServicoRepository;

    public List<SolicitacaoServico> listarSolicitacoesServico() {
        return solicitacaoServicoRepository.findAll();
    }

    public void cadastrarSolicitacaoServico(SolicitacaoServico solicitacaoServico) {
        solicitacaoServicoRepository.save(solicitacaoServico);
    }

    // public void atualizarSolicitacaoServico(UpdateDTO body, Integer id) {
    //     SolicitacaoServico atual = solicitacaoServicoRepository.findById(id)
    //         .orElseThrow(() -> new RuntimeException("Solicitacao de servico não encontrada!"));

    //     switch (body.getCampo()) {
    //         case "nome": atual.setNome( body.getNovoValor() );
    //             break;
    //     }
    //     solicitacaoServicoRepository.save(atual);
    // }

    public void excluirSolicitacaoServico(Integer id) {
        solicitacaoServicoRepository.deleteById(id);
    }


    // Retorna solicitações específicas para o status passado (id)
    public List<SolicitacaoServico> buscarSolicitacoesPorStatus(Integer id) {
        return solicitacaoServicoRepository.findByStatusSolicitacaoId(id);
    }

    // Retorna apenas solicitações que não estão marcadas como concluida ou cancelada
    public List<SolicitacaoServico> buscarSolicitacoesAtivas() {
        return solicitacaoServicoRepository.findByStatusSolicitacao_IdNotIn( List.of(3, 4) );
    }

    // Retorna solicitações com custo preenchido
    // public List<SolicitacaoServico> buscarSolicitacoesLiberadasParaMusicos() {
    //     return solicitacaoServicoRepository.findByCustoId();
    // }

}