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

    public List<AssInstrumentosDoMusico> listarInstrumentosDosMusicos() {
        return assInstrumentosDoMusicoRepository.findAll();
    }

    public List<Instrumento> buscarInstrumentosDoMusico(String cpf) {
        List<AssInstrumentosDoMusico> assInstrumentosDoMusico = assInstrumentosDoMusicoRepository.findByMusicoCpf(cpf);

        // Transforma em uma lista de instrumentos de fato
        ArrayList<Instrumento> instrumentos = new ArrayList<>() {};
        for (AssInstrumentosDoMusico registro : assInstrumentosDoMusico) {
            instrumentos.add( registro.getInstrumento() );
        }

        return instrumentos;
    }

    // Adiciona instrumento (id) passado como parâmetro à lista de instrumentos do músico (cpf)
    public void adicionarAosInstrumentosDoMusico(AssInstrumentosDoMusico assInstrumentosDoMusico) {
        assInstrumentosDoMusicoRepository.save(assInstrumentosDoMusico);
    }

    // Remove o instrumento da lista de instrumentos do músico
    public void removerInstrumentoDaLista(String mus_cpf, Integer ins_id) {
        List<AssInstrumentosDoMusico> objInstrumentos = assInstrumentosDoMusicoRepository.findByMusicoCpf(mus_cpf);
        
        for (AssInstrumentosDoMusico registro : objInstrumentos) {
            if (registro.getInstrumento().getId() == ins_id)
                assInstrumentosDoMusicoRepository.deleteById(registro.getId());
        }
    }

}
