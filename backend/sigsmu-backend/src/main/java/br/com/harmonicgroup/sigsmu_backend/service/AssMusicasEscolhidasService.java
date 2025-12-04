package br.com.harmonicgroup.sigsmu_backend.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import br.com.harmonicgroup.sigsmu_backend.model.AssMusicasEscolhidas;
import br.com.harmonicgroup.sigsmu_backend.repository.AssMusicasEscolhidasRepository;

@Service
public class AssMusicasEscolhidasService {
    
    @Autowired
    AssMusicasEscolhidasRepository assMusicasEscolhidasRepository;

    public List<AssMusicasEscolhidas> buscarMusicasEscolhidas() {
        return assMusicasEscolhidasRepository.findAll();
    }

    public void adicionarAsMusicasEscolhidas(AssMusicasEscolhidas assMusicasEscolhidas) {
        assMusicasEscolhidasRepository.save(assMusicasEscolhidas);
    }

}
