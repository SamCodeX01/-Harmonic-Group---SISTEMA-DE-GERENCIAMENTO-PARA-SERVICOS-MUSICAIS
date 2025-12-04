package br.com.harmonicgroup.sigsmu_backend.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import br.com.harmonicgroup.sigsmu_backend.model.AssInstrumentosDoMusico;
import br.com.harmonicgroup.sigsmu_backend.repository.AssInstrumentosDoMusicoRepository;

@Service
public class AssInstrumentosDoMusicoService {
    
    @Autowired
    AssInstrumentosDoMusicoRepository assInstrumentosDoMusicoRepository;

    public List<AssInstrumentosDoMusico> buscarInstrumentosDoMusico() {
        return assInstrumentosDoMusicoRepository.findAll();
    }

    public void adicionarAosInstrumentosDoMusico(AssInstrumentosDoMusico assInstrumentosDoMusico) {
        assInstrumentosDoMusicoRepository.save(assInstrumentosDoMusico);
    }

}
