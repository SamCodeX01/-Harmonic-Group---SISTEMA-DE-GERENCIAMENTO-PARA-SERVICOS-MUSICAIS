package br.com.harmonicgroup.sigsmu_backend.service;

import java.util.ArrayList;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import br.com.harmonicgroup.sigsmu_backend.model.AssInstrumentosDoMusico;
import br.com.harmonicgroup.sigsmu_backend.model.Instrumento;
import br.com.harmonicgroup.sigsmu_backend.repository.AssInstrumentosDoMusicoRepository;

@Service
public class AssInstrumentosDoMusicoService {
    
    @Autowired
    AssInstrumentosDoMusicoRepository assInstrumentosDoMusicoRepository;

    public List<Instrumento> buscarInstrumentosDoMusico(String cpf) {
        List<AssInstrumentosDoMusico> assInstrumentosDoMusico = assInstrumentosDoMusicoRepository.findByMusicoCpf(cpf);

        // Transforma em uma lista de instrumentos de fato
        ArrayList<Instrumento> instrumentos = new ArrayList<>() {};
        for (AssInstrumentosDoMusico registro : assInstrumentosDoMusico) {
            instrumentos.add( registro.getInstrumento() );
        }

        return instrumentos;
    }

    public void adicionarAosInstrumentosDoMusico(AssInstrumentosDoMusico assInstrumentosDoMusico) {
        assInstrumentosDoMusicoRepository.save(assInstrumentosDoMusico);
    }

}
