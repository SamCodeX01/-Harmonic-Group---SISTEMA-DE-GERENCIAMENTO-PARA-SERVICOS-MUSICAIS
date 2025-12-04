package br.com.harmonicgroup.sigsmu_backend.repository;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import br.com.harmonicgroup.sigsmu_backend.model.AssInstrumentosEscolhidos;

@Repository
public interface AssInstrumentosEscolhidosRepository extends JpaRepository<AssInstrumentosEscolhidos, Integer> {
    
    List<AssInstrumentosEscolhidos> findBySolicitacaoServicoId(Integer id);

}
