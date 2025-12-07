package br.com.harmonicgroup.sigsmu_backend.service;

import java.util.ArrayList;
import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import br.com.harmonicgroup.sigsmu_backend.model.Custo;
import br.com.harmonicgroup.sigsmu_backend.model.SolicitacaoServico;
import br.com.harmonicgroup.sigsmu_backend.model.StatusSolicitacao;
import br.com.harmonicgroup.sigsmu_backend.model.UpdateDTO;
import br.com.harmonicgroup.sigsmu_backend.repository.CustoRepository;
import br.com.harmonicgroup.sigsmu_backend.repository.SolicitacaoServicoRepository;
import br.com.harmonicgroup.sigsmu_backend.repository.StatusSolicitacaoRepository;



@Service
public class SolicitacaoServicoService {
    
    @Autowired
    SolicitacaoServicoRepository solicitacaoServicoRepository;

    @Autowired
    StatusSolicitacaoRepository statusSolicitacaoRepository;

    @Autowired
    CustoRepository custoRepository;


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


    // Retorna a solicitação de serviço por id
    public Optional<SolicitacaoServico> buscarSolicitacaoPorId(Integer id) {
        return solicitacaoServicoRepository.findById(id);
    }

    // Retorna a solicitação de serviço do cliente informado
    public Optional<SolicitacaoServico> buscarSolicitacaoPorCliente(String cpf) {
        return solicitacaoServicoRepository.findByClienteCpf(cpf);
    }

    // Retorna solicitações específicas para o status passado (id)
    public List<SolicitacaoServico> buscarSolicitacoesPorStatus(Integer id) {
        return solicitacaoServicoRepository.findByStatusSolicitacaoId(id);
    }

    // Retorna as solicitações corretas para o gestor
    public List<SolicitacaoServico> buscarSolicitacoesAtivas() {
        return solicitacaoServicoRepository.findByStatusSolicitacao_IdNotIn( List.of(3, 4) );
    }

    // Retorna as solicitações corretas para o músico
    public List<SolicitacaoServico> buscarSolicitacoesParaAceitacao() {
        List<SolicitacaoServico> listaSolicitacoes = solicitacaoServicoRepository.findByStatusSolicitacao_IdNotIn( List.of(3, 4) );
        
        // Filtra as solicitações em aberto retornadas e remove as que não tiverem custo ou não forem orcamento
        ArrayList<SolicitacaoServico> solicitacoesFiltradas = new ArrayList<>();
        for (SolicitacaoServico solicitacao : listaSolicitacoes) {
            if (solicitacao.getDataAprovacao().isEmpty() && solicitacao.getCusto() != null)
                solicitacoesFiltradas.add(solicitacao);
        }

        return solicitacoesFiltradas;
    }

    // Atualiza o status da solicitação de serviço
    public void mudarStatusDaSolicitacao(Integer sol_id, Integer stt_id) {
        SolicitacaoServico solicitacao = solicitacaoServicoRepository.findById(sol_id)
        .orElseThrow(() -> new RuntimeException("Solicitação não encontrada"));

        StatusSolicitacao novoStatus = statusSolicitacaoRepository.findById(stt_id)
        .orElseThrow(() -> new RuntimeException("Solicitação não encontrada"));

        // Muda o status da solicitação e salva no banco
        solicitacao.setStatusSolicitacao(novoStatus);
        solicitacaoServicoRepository.save(solicitacao);

    }

    // Adiciona o custo do serviço a solicitação
    public void definirCustoDoServico(Integer sol_id, Custo custo) {
        SolicitacaoServico solicitacao = solicitacaoServicoRepository.findById(sol_id)
        .orElseThrow(() -> new RuntimeException("Solicitação não encontrada"));

        custoRepository.save(custo);

        // Muda o status da solicitação e salva no banco
        solicitacao.setCusto(custo);
        solicitacaoServicoRepository.save(solicitacao);
    }

    // Retorna solicitações com custo preenchido
    // public List<SolicitacaoServico> buscarSolicitacoesLiberadasParaMusicos() {
    //     return solicitacaoServicoRepository.findByCustoId();
    // }

}