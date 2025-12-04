package br.com.harmonicgroup.sigsmu_backend.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import br.com.harmonicgroup.sigsmu_backend.model.AssInstrumentosEscolhidos;
import br.com.harmonicgroup.sigsmu_backend.repository.AssInstrumentosEscolhidosRepository;

@Service
public class AssInstrumentosEscolhidosService {
    
    @Autowired
    AssInstrumentosEscolhidosRepository assInstrumentosEscolhidosRepository;

    public List<AssInstrumentosEscolhidos> buscarInstrumentosEscolhidos() {
        return assInstrumentosEscolhidosRepository.findAll();
    }

    public void adicionarAosInstrumentosEscolhidos(AssInstrumentosEscolhidos assInstrumentosEscolhidos) {
        assInstrumentosEscolhidosRepository.save(assInstrumentosEscolhidos);
    }

}
