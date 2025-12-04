package br.com.harmonicgroup.sigsmu_backend.service;

import java.util.ArrayList;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import br.com.harmonicgroup.sigsmu_backend.model.AssMusicasEscolhidas;
import br.com.harmonicgroup.sigsmu_backend.model.Repertorio;
import br.com.harmonicgroup.sigsmu_backend.repository.AssMusicasEscolhidasRepository;

@Service
public class AssMusicasEscolhidasService {
    
    @Autowired
    AssMusicasEscolhidasRepository assMusicasEscolhidasRepository;

    public List<Repertorio> buscarMusicasEscolhidas(Integer id) {
        List<AssMusicasEscolhidas> assMusicasEscolhidas = assMusicasEscolhidasRepository.findBySolicitacaoServicoId(id);

        // Transforma em uma lista de instrumentos de fato
        ArrayList<Repertorio> repertorio = new ArrayList<>() {};
        for (AssMusicasEscolhidas registro : assMusicasEscolhidas) {
            repertorio.add( registro.getRepertorio() );
        }

        return repertorio;
    }

    public void adicionarAsMusicasEscolhidas(AssMusicasEscolhidas assMusicasEscolhidas) {
        assMusicasEscolhidasRepository.save(assMusicasEscolhidas);
    }

}
