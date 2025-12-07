package br.com.harmonicgroup.sigsmu_backend.repository;

import java.util.List;
import java.util.Optional;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import br.com.harmonicgroup.sigsmu_backend.model.SolicitacaoServico;


@Repository
public interface SolicitacaoServicoRepository extends JpaRepository<SolicitacaoServico, Integer> {

    // Retorna a solicitação de serviço do cliente informado
    Optional<SolicitacaoServico> findByClienteCpf(String cpf);
    
    // Retorna a solicitação que contem o status especificado
    List<SolicitacaoServico> findByStatusSolicitacaoId(Integer id);

    // Retorna solicitações em aberto
    List<SolicitacaoServico> findByStatusSolicitacao_IdNotIn(List<Integer> ids);

    // 

    // Retorna solicitações com custo preenchido
    // List<SolicitacaoServico> findByCustoId(Integer id);

}