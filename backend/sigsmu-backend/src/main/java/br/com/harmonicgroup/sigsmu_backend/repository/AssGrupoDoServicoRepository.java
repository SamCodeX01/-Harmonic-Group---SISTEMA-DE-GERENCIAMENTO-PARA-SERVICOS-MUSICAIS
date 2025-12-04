package br.com.harmonicgroup.sigsmu_backend.repository;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import br.com.harmonicgroup.sigsmu_backend.model.AssGrupoDoServico;

@Repository
public interface AssGrupoDoServicoRepository extends JpaRepository<AssGrupoDoServico, Integer> {

    List<AssGrupoDoServico> findBySolicitacaoServicoId(Integer id);

}
