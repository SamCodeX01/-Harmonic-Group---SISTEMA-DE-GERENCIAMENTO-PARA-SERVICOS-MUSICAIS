package br.com.harmonicgroup.sigsmu_backend.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import br.com.harmonicgroup.sigsmu_backend.model.Ensaio;
import br.com.harmonicgroup.sigsmu_backend.model.UpdateDTO;
import br.com.harmonicgroup.sigsmu_backend.repository.EnsaioRepository;



@Service
public class EnsaioService {
    
    @Autowired
    EnsaioRepository ensaioRepository;

    public List<Ensaio> listarEnsaios() {
        return ensaioRepository.findAll();
    }

    public void cadastrarEnsaio(Ensaio ensaio) {
        ensaioRepository.save(ensaio);
    }

    // public void atualizarEnsaio(UpdateDTO body, Integer id) {
    //     Ensaio atual = ensaioRepository.findById(id)
    //         .orElseThrow(() -> new RuntimeException("Ensaio não encontrado!"));

    //     switch (body.getCampo()) {
    //         case "nome": atual.setNome( body.getNovoValor() );
    //             break;
    //     }
    //     ensaioRepository.save(atual);
    // }

    public void excluirEnsaio(Integer id) {
        ensaioRepository.deleteById(id);
    }

}