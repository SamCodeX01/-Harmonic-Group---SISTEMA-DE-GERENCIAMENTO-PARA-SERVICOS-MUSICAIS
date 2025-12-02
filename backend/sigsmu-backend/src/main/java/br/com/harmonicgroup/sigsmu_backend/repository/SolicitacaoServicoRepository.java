package br.com.harmonicgroup.sigsmu_backend.repository;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import br.com.harmonicgroup.sigsmu_backend.model.SolicitacaoServico;


@Repository
public interface SolicitacaoServicoRepository extends JpaRepository<SolicitacaoServico, Integer> {
    
    List<SolicitacaoServico> findByStatusSolicitacaoId(Integer id);

    // Retorna solicitações em aberto
    List<SolicitacaoServico> findByStatusSolicitacao_IdNotIn(List<Integer> ids);

    // Retorna solicitações com custo preenchido
    List<SolicitacaoServico> findByCustoId(Integer id);

}