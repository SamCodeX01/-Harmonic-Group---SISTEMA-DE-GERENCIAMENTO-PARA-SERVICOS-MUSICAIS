package br.com.harmonicgroup.sigsmu_backend.service;

import java.util.ArrayList;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import br.com.harmonicgroup.sigsmu_backend.model.AssInstrumentosEscolhidos;
import br.com.harmonicgroup.sigsmu_backend.model.Instrumento;
import br.com.harmonicgroup.sigsmu_backend.repository.AssInstrumentosEscolhidosRepository;

@Service
public class AssInstrumentosEscolhidosService {
    
    @Autowired
    AssInstrumentosEscolhidosRepository assInstrumentosEscolhidosRepository;

    public List<Instrumento> buscarInstrumentosEscolhidos(Integer id) {
        List<AssInstrumentosEscolhidos> assInstrumentosEscolhidos = assInstrumentosEscolhidosRepository.findBySolicitacaoServicoId(id);

        // Transforma em uma lista de instrumentos de fato
        ArrayList<Instrumento> instrumentos = new ArrayList<>() {};
        for (AssInstrumentosEscolhidos registro : assInstrumentosEscolhidos) {
            instrumentos.add( registro.getInstrumento() );
        }

        return instrumentos;
    }

    public void adicionarAosInstrumentosEscolhidos(AssInstrumentosEscolhidos assInstrumentosEscolhidos) {
        assInstrumentosEscolhidosRepository.save(assInstrumentosEscolhidos);
    }

}
