package br.com.harmonicgroup.sigsmu_backend.repository;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import br.com.harmonicgroup.sigsmu_backend.model.AssInstrumentosDoMusico;

@Repository
public interface AssInstrumentosDoMusicoRepository extends JpaRepository<AssInstrumentosDoMusico, Integer> {

    List<AssInstrumentosDoMusico> findByMusicoCpf(String cpf);

}
