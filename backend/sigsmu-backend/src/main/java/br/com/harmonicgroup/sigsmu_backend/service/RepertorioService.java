package br.com.harmonicgroup.sigsmu_backend.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import br.com.harmonicgroup.sigsmu_backend.model.Repertorio;
import br.com.harmonicgroup.sigsmu_backend.model.UpdateDTO;
import br.com.harmonicgroup.sigsmu_backend.repository.RepertorioRepository;

@Service
public class RepertorioService {
    
    @Autowired
    RepertorioRepository repertorioRepository;

    public List<Repertorio> listarRepertorio() {
        return repertorioRepository.findAll();
    }

    public void cadastrarRepertorio(Repertorio repertorio) {
        repertorioRepository.save(repertorio);
    }

    // public void atualizarRepertorio(UpdateDTO body, Integer id) {
    //     Repertorio atual = repertorioRepository.findById(id)
    //         .orElseThrow(() -> new RuntimeException("Repertório não encontrado!"));

    //     switch (body.getCampo()) {
    //         case "musica": atual.setMusica( body.getNovoValor() );
    //             break;
    //         case "artista": atual.setArtista( body.getNovoValor() );
    //             break;
    //         case "genero": atual.setGenero( body.getNovoValor() );
    //             break;
    //         case "tempo": atual.setTempo( body.getNovoValor() );
    //             break;
    //         case "tocamos": atual.setTocamos( body.getNovoValor() );
    //             break;
    //     }
    //     repertorioRepository.save(atual);
    // }

    public void excluirRepertorio(Integer id) {
        repertorioRepository.deleteById(id);
    }

}